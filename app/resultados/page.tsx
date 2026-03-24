'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import AttemptItem from './AttemptItem'
import ThemeToggle from '@/components/ThemeToggle'

interface Attempt {
    id: string
    score: number
    total: number
    userName: string
    createdAt: string
}

export default function ResultadosPage() {
    const [attempts, setAttempts] = useState<Attempt[]>([])
    const [totalQuestions, setTotalQuestions] = useState(0)
    const [totalAttempts, setTotalAttempts] = useState(0)
    const [averageScore, setAverageScore] = useState('0')
    const [isLoading, setIsLoading] = useState(true)
    const [isClearingAll, setIsClearingAll] = useState(false)
    const [showClearConfirm, setShowClearConfirm] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('/api/attempts')
            const data = await response.json()

            setAttempts(data.attempts || [])
            setTotalQuestions(data.totalQuestions || 0)
            setTotalAttempts(data.totalAttempts || 0)
            setAverageScore(data.averageScore || '0')
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteAttempt = (id: string) => {
        setAttempts(prev => prev.filter(attempt => attempt.id !== id))
        setTotalAttempts(prev => Math.max(0, prev - 1))

        // Recalculate average score
        if (attempts.length > 1) {
            const newTotal = attempts.reduce((sum, attempt) =>
                attempt.id !== id ? sum + attempt.score : sum, 0
            )
            const newCount = attempts.length - 1
            setAverageScore((newTotal / newCount).toFixed(1))
        } else {
            setAverageScore('0')
        }
    }

    const handleClearAll = async () => {
        if (!showClearConfirm) {
            setShowClearConfirm(true)
            return
        }

        setIsClearingAll(true)
        try {
            const response = await fetch('/api/attempts', {
                method: 'DELETE',
            })

            if (response.ok) {
                setAttempts([])
                setTotalAttempts(0)
                setAverageScore('0')
                setShowClearConfirm(false)
            } else {
                console.error('Failed to clear attempts')
            }
        } catch (error) {
            console.error('Error clearing attempts:', error)
        } finally {
            setIsClearingAll(false)
        }
    }

    if (isLoading) {
        return (
            <div style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '18px'
            }}>
                Carregando...
            </div>
        )
    }

    return (
        <div style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px'
        }}>
            {/* Header */}
            <header className="sticky-header" style={{
                width: '100%',
                maxWidth: '900px',
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '12px'
            }}>
                <h1 style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                }}>
                    Histórico de Resultados
                </h1>
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                }}>
                    <ThemeToggle />
                    {attempts.length > 0 && (
                        <button
                            onClick={handleClearAll}
                            disabled={isClearingAll}
                            className="btn btn-outline"
                            style={{
                                borderColor: showClearConfirm ? 'var(--error)' : 'var(--border)',
                                color: showClearConfirm ? 'var(--error)' : 'var(--text-secondary)',
                                opacity: isClearingAll ? 0.5 : 1,
                                cursor: isClearingAll ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isClearingAll ? '...' : showClearConfirm ? 'Confirmar Limpar Tudo?' : 'Limpar Tudo'}
                        </button>
                    )}
                    <Link href="/" style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color var(--transition-normal)'
                    }}>
                        ← Voltar
                    </Link>
                </div>
            </header>

            <div style={{
                width: '100%',
                maxWidth: '900px'
            }}>
                {/* Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '30px'
                }}>
                    {/* Total Questions */}
                    <div className="card animate-scaleIn" style={{
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                            fontWeight: 600
                        }}>
                            Total de Questões
                        </div>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: 'var(--primary)'
                        }}>
                            {totalQuestions}
                        </div>
                    </div>

                    {/* Total Attempts */}
                    <div className="card animate-scaleIn" style={{
                        textAlign: 'center',
                        animationDelay: '100ms'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                            fontWeight: 600
                        }}>
                            Tentativas
                        </div>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#9C27B0'
                        }}>
                            {totalAttempts}
                        </div>
                    </div>

                    {/* Average Score */}
                    <div className="card animate-scaleIn" style={{
                        textAlign: 'center',
                        animationDelay: '200ms'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                            fontWeight: 600
                        }}>
                            MÉDIA DE ACERTOS POR TENTATIVA
                        </div>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: 'var(--success)'
                        }}>
                            {averageScore} / 60
                            <span style={{ fontSize: '14px', marginLeft: '8px', opacity: 0.8 }}>
                                ({Math.round((parseFloat(averageScore) / 60) * 100)}%)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Attempts List */}
                <div className="card" style={{
                    overflow: 'hidden'
                }}>
                    <div style={{
                        padding: '20px',
                        borderBottom: '1px solid var(--border-primary)'
                    }}>
                        <h2 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 600,
                            margin: 0,
                            color: 'var(--text-primary)'
                        }}>
                            Simulados Realizados
                        </h2>
                    </div>

                    {attempts.length === 0 ? (
                        <div style={{
                            padding: '60px 20px',
                            textAlign: 'center',
                            color: 'var(--text-secondary)'
                        }}>
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '15px'
                            }}>📝</div>
                            <p style={{
                                fontSize: '16px',
                                marginBottom: '8px',
                                color: 'var(--text-primary)'
                            }}>
                                Nenhum simulado realizado ainda
                            </p>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--text-secondary)'
                            }}>
                                Comece seu primeiro simulado agora!
                            </p>
                            <Link
                                href="/quiz"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    marginTop: '20px',
                                    textDecoration: 'none'
                                }}
                            >
                                Iniciar Simulado
                            </Link>
                        </div>
                    ) : (
                        <div>
                            {attempts.map((attempt: any, index: number) => (
                                <AttemptItem
                                    key={attempt.id}
                                    attempt={attempt}
                                    index={index}
                                    totalAttempts={attempts.length}
                                    onDelete={handleDeleteAttempt}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div style={{
                    marginTop: '30px',
                    textAlign: 'center'
                }}>
                    <Link
                        href="/quiz"
                        className="btn btn-success"
                        style={{
                            textDecoration: 'none',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        Novo Simulado
                    </Link>
                </div>
            </div>
        </div>
    )
}
