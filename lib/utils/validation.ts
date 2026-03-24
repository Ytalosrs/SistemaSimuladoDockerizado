import { Question } from '@/lib/types'

// Validação de resposta correta
export function validateAnswer(
  selectedOptions: string[],
  correctAnswer: string,
  options: string[]
): boolean {
  // Extrair letras corretas (ex: "A" ou "A, C")
  const correctLetters = correctAnswer
    .split(',')
    .map(l => l.trim().toUpperCase().replace(/[^A-Z]/g, ''))
    .filter(l => l)

  // Encontrar textos completos das opções corretas
  const correctOptionTexts = correctLetters.map(letter => {
    const prefix = `${letter}.`
    return options.find(opt => opt.trim().toUpperCase().startsWith(prefix)) || ''
  }).filter(Boolean)

  // Normalizar textos para comparação
  const normalize = (text: string) => {
    return text
      .replace(/^[A-Z]\.\s*/i, '') // Remove "A. " prefix
      .trim()
      .toUpperCase()
  }

  const correctSet = new Set(correctOptionTexts.map(normalize))
  const selectedSet = new Set(selectedOptions.map(normalize))

  // Verificar igualdade estrita de conjuntos
  return correctSet.size > 0 &&
    correctSet.size === selectedSet.size &&
    [...correctSet].every(txt => selectedSet.has(txt))
}

// Verifica se é múltipla escolha
export function isMultiSelect(correctAnswer: string): boolean {
  return correctAnswer.includes(',')
}

// Normalização de resposta para comparação
export function normalizeAnswer(answer: string): string {
  return answer.trim()
    .replace(/[.]+/g, '')
    .replace(/\s+/g, '')
    .toUpperCase()
}

// Validação de dados do simulado
export function validateSimuladoData(questions: Question[]): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!questions || questions.length === 0) {
    errors.push('Nenhuma questão encontrada')
    return { isValid: false, errors }
  }

  questions.forEach((question, index) => {
    if (!question.content?.trim()) {
      errors.push(`Questão ${index + 1}: Conteúdo vazio`)
    }

    if (!question.options || question.options.length < 2) {
      errors.push(`Questão ${index + 1}: Pelo menos 2 opções são necessárias`)
    }

    if (!question.correctAnswer?.trim()) {
      errors.push(`Questão ${index + 1}: Resposta correta não definida`)
    }
  })

  return {
    isValid: errors.length === 0,
    errors
  }
}
