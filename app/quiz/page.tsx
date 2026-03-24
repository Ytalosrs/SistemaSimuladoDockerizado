import { prisma } from '@/lib/prisma'
import QuizRunner from './QuizRunner'

export const dynamic = 'force-dynamic'

export default async function QuizPage({
    searchParams
}: {
    searchParams: { type?: string }
}) {
    const { type } = await searchParams
    const normalizedType = type?.toLowerCase()
    const simuladoType = normalizedType === 'v4' ? 'v4' : (normalizedType === 'v3' ? 'v3' : (normalizedType === 'v1' ? 'v1' : 'v2'))

    const questions = await prisma.question.findMany({
        where: {
            simuladoType
        }
        // Fetch all or random?
        // take: 60
    })

    // Randomize questions using Fisher-Yates shuffle algorithm
    const shuffledQuestions = [...questions]
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]]
    }

    // Randomize options for each question
    const questionsWithRandomizedOptions = shuffledQuestions.map(question => {
        const options = question.options
        const correctAnswer = question.correctAnswer

        // Create array of option indices and shuffle them
        const indices = Array.from({ length: options.length }, (_, i) => i)
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]]
        }

        // Reorder options based on shuffled indices
        const shuffledOptions = indices.map(index => options[index])

        // Map the correct answer to new position
        // Original correctAnswer is like "A.", "B.", "C.", "D." for v1 or "A", "B", "C", "D" for v2 or "A, C"
        const originalLetters = correctAnswer.split(',').map((letter: string) => letter.trim().replace('.', ''))
        const newLetters = originalLetters.map((originalLetter: string) => {
            const originalIndex = originalLetter.charCodeAt(0) - 65 // A=0, B=1, etc.
            const newIndex = indices.indexOf(originalIndex)
            return String.fromCharCode(65 + newIndex) // Convert back to letter
        })

        const newCorrectAnswer = newLetters.join(', ')

        return {
            id: question.id,
            content: question.content,
            options: shuffledOptions,
            correctAnswer: newCorrectAnswer,
            explanation: question.explanation || undefined
        }
    })

    return (
        <div style={{
            margin: 0,
            padding: 0,
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <QuizRunner questions={questionsWithRandomizedOptions} simuladoType={simuladoType} />
        </div>
    )
}
