'use client'

interface QuizNavigationProps {
  currentIndex: number
  total: number
  answeredCount: number
  isTransitioning: boolean
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
  canGoNext: boolean
  canGoPrevious: boolean
}

export default function QuizNavigation({
  currentIndex,
  total,
  answeredCount,
  isTransitioning,
  onPrevious,
  onNext,
  onSubmit,
  canGoNext,
  canGoPrevious
}: QuizNavigationProps) {
  const progressPercentage = Math.round((answeredCount / total) * 100)

  return (
    <div style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid var(--border)',
      position: 'sticky',
      bottom: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Progress Bar - Mais Evidente e Viva */}
      <div style={{
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '16px',
            color: 'var(--text-primary)',
            fontWeight: 600,
            textAlign: 'left'
          }}>
            Pergunta {currentIndex + 1} de {total} — {progressPercentage}% completo
          </span>
        </div>
        
        <div style={{
          width: '100%',
          height: '12px',
          backgroundColor: 'var(--border)',
          borderRadius: '6px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${progressPercentage}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
            borderRadius: '6px',
            transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: progressPercentage > 0 ? '0 2px 8px rgba(16, 185, 129, 0.4)' : 'none'
          }} />
        </div>
      </div>

      {/* Navigation Buttons - Padronizados e Consistentes */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious || isTransitioning}
          style={{
            padding: '14px 24px',
            borderRadius: '12px',
            border: '2px solid var(--primary)',
            backgroundColor: canGoPrevious ? 'var(--primary)' : 'transparent',
            color: canGoPrevious ? 'white' : 'var(--primary)',
            fontSize: '15px',
            fontWeight: 600,
            cursor: canGoPrevious ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            opacity: canGoPrevious ? 1 : 0.5,
            transform: canGoPrevious ? 'scale(1)' : 'scale(0.95)',
            boxShadow: canGoPrevious ? '0 4px 15px rgba(59, 130, 246, 0.3)' : 'none',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            if (canGoPrevious) {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)'
            }
          }}
          onMouseLeave={(e) => {
            if (canGoPrevious) {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)'
            }
          }}
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
          onClick={onNext}
          disabled={!canGoNext || isTransitioning}
          style={{
            padding: '14px 24px',
            borderRadius: '12px',
            border: 'none',
            background: canGoNext 
              ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              : 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)',
            color: 'white',
            fontSize: '15px',
            fontWeight: 600,
            cursor: canGoNext ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            opacity: canGoNext ? 1 : 0.6,
            transform: canGoNext ? 'scale(1)' : 'scale(0.95)',
            boxShadow: canGoNext ? '0 4px 15px rgba(79, 172, 254, 0.3)' : 'none',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            if (canGoNext) {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 172, 254, 0.4)'
            }
          }}
          onMouseLeave={(e) => {
            if (canGoNext) {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)'
            }
          }}
        >
          Próxima →
        </button>
      </div>

      {/* Botão Finalizar Simulado Visível */}
      <div style={{
        marginTop: '16px',
        textAlign: 'center'
      }}>
        <button
          onClick={onSubmit}
          disabled={isTransitioning}
          style={{
            padding: '16px 32px',
            borderRadius: '12px',
            border: 'none',
            background: isTransitioning
              ? 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)'
              : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
            cursor: isTransitioning ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            opacity: isTransitioning ? 0.7 : 1,
            transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
            boxShadow: !isTransitioning ? '0 4px 15px rgba(255, 107, 107, 0.4)' : 'none',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.5)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)'
            }
          }}
        >
          {isTransitioning ? '⏳ Enviando...' : '🏁 Finalizar Simulado'}
        </button>
      </div>
    </div>
  )
}
