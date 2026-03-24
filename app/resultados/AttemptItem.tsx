'use client'

import Link from 'next/link'
import { useState, useEffect, CSSProperties } from 'react'
import { Attempt } from '@/lib/types'
import { formatDate, calculatePercentage, isPassed, generateSimuladoId } from '@/lib/utils/formatting'

interface AttemptItemProps {
    attempt: Attempt
    index: number
    totalAttempts: number
    onDelete: (id: string) => void
}

export default function AttemptItem({ attempt, index, totalAttempts, onDelete }: AttemptItemProps) {
    const [isDeleting, setIsDeleting] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const percentage = calculatePercentage(attempt.score, attempt.total)
    const passed = isPassed(attempt.score, attempt.total)
    const formattedDate = formatDate(attempt.createdAt)
    const simuladoId = generateSimuladoId(attempt, index, totalAttempts)

    const handleDelete = async () => {
        if (!showConfirm) {
            setShowConfirm(true)
            return
        }

        setIsDeleting(true)
        try {
            const response = await fetch(`/api/attempts/${attempt.id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                onDelete(attempt.id)
            } else {
                console.error('Failed to delete attempt')
            }
        } catch (error) {
            console.error('Error deleting attempt:', error)
        } finally {
            setIsDeleting(false)
            setShowConfirm(false)
        }
    }

    const containerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid var(--border)',
        borderLeft: `5px solid ${passed ? 'var(--success)' : 'var(--error)'}`,
        borderRadius: '8px',
        backgroundColor: showConfirm ? 'var(--error-bg)' : 'transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        marginBottom: '10px'
    }

    const linkStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        flex: 1,
        pointerEvents: showConfirm ? 'none' : 'auto'
    }

    const deleteButtonStyle: CSSProperties = {
        padding: '8px 12px',
        border: showConfirm ? '1px solid var(--error)' : '1px solid var(--border)',
        borderRadius: '6px',
        backgroundColor: showConfirm ? 'var(--error)' : 'transparent',
        color: showConfirm ? 'white' : 'var(--text-secondary)',
        fontSize: '12px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s',
        marginLeft: '15px',
        minWidth: showConfirm ? '80px' : '60px',
        textAlign: 'center'
    }

    return (
        <div style={containerStyle}>
            <Link
                href={`/results/${attempt.id}`}
                style={linkStyle}
                onMouseEnter={(e) => {
                    if (!showConfirm) {
                        e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
                    }
                }}
                onMouseLeave={(e) => {
                    if (!showConfirm) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                    }
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: passed ? 'var(--success)' : 'var(--error)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'white'
                    }}>
                        {percentage}%
                    </div>
                    <div>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            marginBottom: '4px'
                        }}>
                            {attempt.userName}
                        </div>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            marginBottom: '4px'
                        }}>
                            {simuladoId}
                        </div>
                        <div style={{
                            fontSize: '13px',
                            color: 'var(--text-secondary)'
                        }}>
                            {formattedDate}
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{
                        textAlign: 'right'
                    }}>
                        <div style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: passed ? 'var(--success)' : 'var(--error)'
                        }}>
                            {attempt.score}/{attempt.total}
                        </div>
                        <div style={{
                            fontSize: '11px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}>
                            {passed ? 'Aprovado' : 'Reprovado'}
                        </div>
                    </div>
                    <div style={{
                        fontSize: '20px',
                        color: 'var(--text-secondary)'
                    }}>
                        →
                    </div>
                </div>
            </Link>

            <button
                onClick={handleDelete}
                disabled={isDeleting}
                style={deleteButtonStyle}
                onMouseEnter={(e) => {
                    if (!showConfirm) {
                        e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                    }
                }}
                onMouseLeave={(e) => {
                    if (!showConfirm) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                    }
                }}
            >
                {isDeleting ? '...' : showConfirm ? 'Confirmar?' : 'Apagar'}
            </button>
        </div>
    )
}
