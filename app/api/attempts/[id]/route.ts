import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Check if attempt exists first
    const attempt = await prisma.attempt.findUnique({
      where: { id }
    })
    
    if (!attempt) {
      return NextResponse.json(
        { error: 'Attempt not found' },
        { status: 404 }
      )
    }

    // Delete the attempt and its related answers
    await prisma.answer.deleteMany({
      where: { attemptId: id }
    })

    await prisma.attempt.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting attempt:', error)
    return NextResponse.json(
      { error: 'Failed to delete attempt' },
      { status: 500 }
    )
  }
}
