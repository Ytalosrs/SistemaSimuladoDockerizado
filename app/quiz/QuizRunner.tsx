'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { submitQuiz } from '@/lib/actions'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import QuizTimer from '@/components/QuizTimer'
import QuestionCard from '@/components/quiz/QuestionCard'
import QuizNavigation from '@/components/quiz/QuizNavigation'
import ConfirmModal from '@/components/quiz/ConfirmModal'
import UserNameForm from '@/components/quiz/UserNameForm'
import { Question } from '@/lib/types'
import { validateAnswer, isMultiSelect } from '@/lib/utils/validation'

interface QuizRunnerProps {
    questions: Question[]
    simuladoType: string
}

export default function QuizRunner({ questions, simuladoType }: QuizRunnerProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string[]>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({})
    const [userName, setUserName] = useState('')
    const [nameSubmitted, setNameSubmitted] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length
    const progressPercentage = Math.round((answeredCount / total) * 100)

    if (!currentQuestion) {
        return (
            <div style={{ 
                color: 'var(--text-primary)', 
                textAlign: 'center', 
                padding: '40px',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                Nenhuma questão encontrada.
            </div>
        )
    }

    const selectedLetters = answers[currentQuestion.id] || []
    const isAnswerCorrect = validateAnswer(
        selectedLetters,
        currentQuestion.correctAnswer,
        currentQuestion.options
    )

    const handleSelect = (optionIndex: number) => {
        const letter = String.fromCharCode(65 + optionIndex)

        setAnswers(prev => {
            const current = prev[currentQuestion.id] || []
            let newSelection: string[]

            if (isMultiSelect(currentQuestion.correctAnswer)) {
                if (current.includes(letter)) {
                    newSelection = current.filter(l => l !== letter)
                } else {
                    newSelection = [...current, letter]
                }
            } else {
                newSelection = [letter]
            }

            return {
                ...prev,
                [currentQuestion.id]: newSelection
            }
        })

        // Trigger pulse animation
        const buttons = document.querySelectorAll('.alternative-button')
        buttons.forEach((button, idx) => {
            if (idx === optionIndex) {
                button.classList.add('animate-pulse')
                setTimeout(() => button.classList.remove('animate-pulse'), 200)
            }
        })
    }

    const toggleFeedback = () => {
        setShowFeedback(prev => ({
            ...prev,
            [currentQuestion.id]: true
        }))

        // Trigger confetti if correct
        if (isAnswerCorrect) {
            createConfetti()
        }
    }

    const createConfetti = () => {
        const container = document.createElement('div')
        container.className = 'confetti-container'
        document.body.appendChild(container)

        const colors = ['#00bcd4', '#22c55e', '#f59e0b', '#ef4444', '#9c27b0']
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const piece = document.createElement('div')
                piece.className = 'confetti-piece'
                piece.style.left = Math.random() * 100 + '%'
                piece.style.top = Math.random() * 50 + '%'
                piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
                piece.style.transform = `rotate(${Math.random() * 360}deg)`
                container.appendChild(piece)
                
                setTimeout(() => piece.remove(), 800)
            }, i * 50)
        }
        
        setTimeout(() => container.remove(), 1000)
    }

    const handleNext = () => {
        if (currentIndex < total - 1 && !isTransitioning) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1)
                setIsTransitioning(false)
            }, 120)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0 && !isTransitioning) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(prev => prev - 1)
                setIsTransitioning(false)
            }, 120)
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        setShowConfirmModal(false)
        try {
            const textPayload: Record<string, string[]> = {}

            Object.keys(answers).forEach(qId => {
                const letters = answers[qId]
                const question = questions.find(q => q.id === qId)
                if (question) {
                    const selectedTexts = letters.map((letter: string) => {
                        const index = letter.charCodeAt(0) - 65
                        return question.options[index] || ''
                    }).filter((s: string) => s)
                    textPayload[qId] = selectedTexts
                }
            })

            const attemptId = await submitQuiz(textPayload, userName || 'Anônimo')
            router.push(`/results/${attemptId}`)
        } catch (e) {
            console.error(e)
            alert('Erro ao enviar simulado')
            setIsSubmitting(false)
        }
    }

    const handleNameSubmit = (name: string) => {
        setUserName(name)
        setNameSubmitted(true)
    }

    const canGoNext = currentIndex < total - 1
    const canGoPrevious = currentIndex > 0

    if (!nameSubmitted) {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
                {/* Header */}
                <header style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <img
                            src="/zello-logo-removebg-preview.png"
                            alt="Zello"
                            style={{ height: '40px', width: 'auto' }}
                        />
                        <ThemeToggle />
                    </div>
                    <img
                        src="/fabrica-removebg-preview.png"
                        alt="Fábrica"
                        style={{ height: '120px', width: 'auto' }}
                    />
                </header>

                <UserNameForm onSubmit={handleNameSubmit} />
            </div>
        )
    }

    return (
        <div style={{ 
            width: '100%', 
            maxWidth: '900px', 
            margin: '0 auto', 
            paddingBottom: '140px',
            backgroundColor: 'var(--bg-primary)',
            minHeight: '100vh'
        }}>
            {/* Header - Sem Parallax */}
            <header style={{
                padding: '24px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                backgroundColor: 'var(--bg-primary)'
            }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '32px' 
                }}>
                    <Link href="/" style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontWeight: 500,
                        transition: 'color var(--transition-normal)',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        ← Voltar
                    </Link>
                    <ThemeToggle />
                </div>
                
                <div style={{ 
                    textAlign: 'center',
                    flex: 1
                }}>
                    <div style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        letterSpacing: '0.5px'
                    }}>
                        Simulado {simuladoType.toUpperCase()}
                    </div>
                </div>
                
                <img
                    src="/fabrica-removebg-preview.png"
                    alt="Fábrica"
                    style={{ 
                        height: '80px', 
                        width: 'auto'
                    }}
                />
            </header>

            {/* Timer Container */}
            <div style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <QuizTimer isRunning={true} onTimeUp={handleSubmit} />
            </div>

            {/* Question Card Container */}
            <div style={{
                marginBottom: '20px'
            }}>
                <div className={`card animate-fadeIn`} style={{
                    animationDuration: '0.4s',
                    animationTimingFunction: 'ease-out'
                }}>
                    <QuestionCard
                        question={currentQuestion}
                        selectedLetters={selectedLetters}
                        onOptionSelect={handleSelect}
                        showFeedback={showFeedback[currentQuestion.id] || false}
                        isAnswerCorrect={isAnswerCorrect}
                    />
                </div>
            </div>

            {/* Navigation Container - Único Wrapper Fixo Abaixo do Card */}
            <div style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid var(--border)',
                marginBottom: '20px'
            }}>
                {/* Barra de Progresso */}
                <div style={{
                    marginBottom: '20px'
                }}>
                    <div style={{
                        width: '100%',
                        height: '12px',
                        backgroundColor: 'var(--border)',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: `${Math.round((answeredCount / total) * 100)}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                            borderRadius: '6px',
                            transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: answeredCount > 0 ? '0 2px 8px rgba(16, 185, 129, 0.4)' : 'none'
                        }} />
                    </div>
                </div>

                {/* Botões em Única Linha */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrevious || isTransitioning}
                        className="btn btn-outline"
                    >
                        ← Anterior
                    </button>

                    <div style={{
                        fontSize: '18px',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        textAlign: 'center'
                    }}>
                        {currentIndex + 1} / {total}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={!canGoNext || isTransitioning}
                        className="btn btn-primary"
                    >
                        Próxima →
                    </button>
                </div>

            </div>

            {/* Botão Finalizar Simulado - Centralizado Fora do Container */}
            <div style={{
                textAlign: 'center',
                marginTop: '16px'
            }}>
                <button
                    onClick={handleSubmit}
                    disabled={isTransitioning}
                    style={{
                        padding: '14px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: isTransitioning ? 'var(--bg-secondary)' : '#dc2626',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: isTransitioning ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease',
                        opacity: isTransitioning ? 0.7 : 1,
                        textAlign: 'center'
                    }}
                >
                    {isTransitioning ? 'Enviando...' : 'Finalizar Simulado'}
                </button>
            </div>

            {/* Confirmation Modal */}
            <ConfirmModal
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleSubmit}
                title="Finalizar Simulado?"
                message="Tem certeza que deseja finalizar? Ainda há questões não respondidas."
                confirmText="Finalizar"
                cancelText="Continuar"
                isLoading={isSubmitting}
            />

            {/* Loading Overlay */}
            {isSubmitting && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: '16px',
                        padding: '32px',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'var(--text-primary)'
                        }}>
                            Enviando simulado...
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
