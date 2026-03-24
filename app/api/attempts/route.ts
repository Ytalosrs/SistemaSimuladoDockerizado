import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const totalQuestions = await prisma.question.count()
    const attempts = await prisma.attempt.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    const totalAttempts = await prisma.attempt.count()
    const averageScoreRaw = totalAttempts > 0
      ? (await prisma.attempt.aggregate({ _avg: { score: true } }))._avg.score
      : 0

    const averageScore = Number(averageScoreRaw).toFixed(1)

    return NextResponse.json({
      totalQuestions,
      attempts,
      totalAttempts,
      averageScore
    })
  } catch (error) {
    console.error('Error fetching attempts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch attempts' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Delete all answers first (due to foreign key constraint)
    await prisma.answer.deleteMany({})

    // Delete all attempts
    await prisma.attempt.deleteMany({})

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error clearing all attempts:', error)
    return NextResponse.json(
      { error: 'Failed to clear attempts' },
      { status: 500 }
    )
  }
}
