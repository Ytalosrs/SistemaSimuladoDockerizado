'use server'

import { prisma } from './prisma'
import { revalidatePath } from 'next/cache'

export async function submitQuiz(answers: Record<string, string[]>, userName: string = 'Anônimo') {
    // answers: { [questionId]: [selectedOptionText1, selectedOptionText2, ...] }

    // 1. Fetch all questions involved
    const questionIds = Object.keys(answers)
    const questions = await prisma.question.findMany({
        where: { id: { in: questionIds } }
    })

    // 2. Calculate Score
    let score = 0
    const total = questions.length

    const answersData = questions.map((q: any) => {
        const selectedOptions = answers[q.id] || []

        // --- Scoring Logic ---

        // 1. Identify Correct Option Texts from the Database
        // q.correctAnswer is like "A" or "A, C"
        const correctLetters = q.correctAnswer
            .split(',')
            .map((l: string) => l.trim().toUpperCase().replace(/[^A-Z]/g, ''))
            .filter((l: string) => l) // ["A", "B"]

        // Find the full option text in q.options that starts with "Let."
        // We assume options are stored as ["A. Text...", "B. Text..."]
        const correctOptionTexts = correctLetters.map((letter: string) => {
            const prefix = `${letter}.`
            return q.options.find(opt => opt.trim().toUpperCase().startsWith(prefix)) || ''
        }).filter(Boolean)

        // 2. Normalize Function (Strip "A. ", Trim, Uppercase)
        // We want to compare the *content* of the option.
        const normalize = (text: string) => {
            return text
                .replace(/^[A-Z]\.\s*/i, '') // Remove "A. " prefix
                .trim()
                .toUpperCase()
        }

        const correctSet = new Set(correctOptionTexts.map(normalize))
        const selectedSet = new Set(selectedOptions.map(normalize))

        // 3. Strict Set Equality Check
        // All correct options must be selected, and NO incorrect options
        const isCorrect = correctSet.size > 0 &&
            correctSet.size === selectedSet.size &&
            [...correctSet].every((txt: string) => selectedSet.has(txt))

        if (isCorrect) score++

        return {
            questionId: q.id,
            selected: selectedOptions.join('\n'), // Store as newline separated string
            isCorrect
        }
    })

    const createdAttempt = await prisma.attempt.create({
        data: {
            score: 0,
            total,
            userName,
            answers: {
                create: answersData.map((a: any) => ({
                    questionId: a.questionId,
                    selected: a.selected,
                    isCorrect: a.isCorrect
                }))
            }
        }
    })

    // Update score
    await prisma.attempt.update({
        where: { id: createdAttempt.id },
        data: { score }
    })

    revalidatePath('/')
    return createdAttempt.id
}
