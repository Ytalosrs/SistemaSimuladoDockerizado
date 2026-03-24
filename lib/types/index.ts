// Tipos centralizados do sistema de simulados

export interface Question {
  id: string
  content: string
  options: string[]
  correctAnswer: string
  explanation?: string | null
  simuladoType?: string
  createdAt?: Date
}

export interface Answer {
  id: string
  attemptId: string
  questionId: string
  selected: string
  isCorrect: boolean
  question?: Question
}

export interface Attempt {
  id: string
  score: number
  total: number
  userName: string
  createdAt: Date
  answers?: Answer[]
}

export interface QuizState {
  currentIndex: number
  answers: Record<string, string[]>
  isSubmitting: boolean
  showFeedback: Record<string, boolean>
  userName: string
  nameSubmitted: boolean
  showConfirmModal: boolean
  isTransitioning: boolean
  transitionDirection: 'next' | 'prev'
}

export interface SimuladoProgress {
  [key: string]: {
    answered: number
    total: number
    completed: boolean
  }
}

export interface SimuladoInfo {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export type QuizStatus = 'Não iniciado' | 'Em progresso' | 'Concluído'
export type Theme = 'light' | 'dark'
