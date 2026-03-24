'use client'

import { useState } from 'react'
import { Question } from '@/lib/types'
import { isMultiSelect, validateAnswer } from '@/lib/utils/validation'

interface QuestionCardProps {
  question: Question
  selectedLetters: string[]
  onOptionSelect: (optionIndex: number) => void
  showFeedback: boolean
  isAnswerCorrect: boolean
}

export default function QuestionCard({ 
  question, 
  selectedLetters, 
  onOptionSelect, 
  showFeedback, 
  isAnswerCorrect 
}: QuestionCardProps) {
  const multiSelect = isMultiSelect(question.correctAnswer)

  const getOptionStyle = (index: number) => {
    const letter = String.fromCharCode(65 + index)
    const isSelected = selectedLetters.includes(letter)
    
    let cardBg = 'var(--bg-card)'
    let cardBorder = 'var(--border)'
    let letterBg = 'transparent'
    let letterColor = 'var(--text-secondary)'

    if (showFeedback) {
      const isCorrect = validateAnswer(
        [letter],
        question.correctAnswer,
        question.options
      )
      
      if (isCorrect) {
        cardBg = 'var(--success-bg)'
        cardBorder = 'var(--success)'
        letterBg = 'var(--success)'
        letterColor = 'white'
      } else if (isSelected && !isCorrect) {
        cardBg = 'var(--error-bg)'
        cardBorder = 'var(--error)'
        letterBg = 'var(--error)'
        letterColor = 'white'
      }
    } else if (isSelected) {
      cardBg = 'var(--accent-subtle)'
      cardBorder = 'var(--accent)'
      letterBg = 'var(--accent)'
      letterColor = 'white'
    }

    return {
      cardBg,
      cardBorder,
      letterBg,
      letterColor,
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  }

  return (
    <div style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid var(--border)',
      marginBottom: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
    }}>
      {/* Question Header - Alinhamento Consistente */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '24px',
        gap: '16px'
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: '1.6',
          flex: 1,
          textAlign: 'left'
        }}>
          {question.content}
        </div>
        
        {showFeedback && (
          <div style={{
            padding: '8px 16px',
            borderRadius: '24px',
            fontSize: '13px',
            fontWeight: 600,
            backgroundColor: isAnswerCorrect ? 'var(--success-bg)' : 'var(--error-bg)',
            color: isAnswerCorrect ? 'var(--success)' : 'var(--error)',
            whiteSpace: 'nowrap',
            boxShadow: isAnswerCorrect 
              ? '0 2px 8px rgba(34, 197, 94, 0.2)' 
              : '0 2px 8px rgba(239, 68, 68, 0.2)',
            textAlign: 'center'
          }}>
            {isAnswerCorrect ? '✓ Correto' : '✗ Incorreto'}
          </div>
        )}
      </div>

      {/* Options - Cards Clicáveis Melhorados */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {question.options.map((option, index) => {
          const letter = String.fromCharCode(65 + index)
          const isSelected = selectedLetters.includes(letter)
          const style = getOptionStyle(index)

          return (
            <div
              key={index}
              className="alternative-button"
              onClick={() => onOptionSelect(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '12px',
                border: `2px solid ${style.cardBorder}`,
                backgroundColor: style.cardBg,
                cursor: style.cursor,
                transition: style.transition,
                gap: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (!showFeedback && !isSelected) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
                }
              }}
              onMouseLeave={(e) => {
                if (!showFeedback && !isSelected) {
                  e.currentTarget.style.backgroundColor = style.cardBg
                }
              }}
            >
              {/* Option Letter - Fundo Colorido */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: style.letterBg,
                color: style.letterColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 700,
                flexShrink: 0,
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}>
                {letter}
              </div>

              {/* Option Text - Espaçamento Aumentado */}
              <div style={{
                fontSize: '16px',
                lineHeight: '1.6',
                flex: 1,
                color: 'var(--text-primary)',
                textAlign: 'left'
              }}>
                {option.replace(/^[A-Z]\.\s*/, '')}
              </div>
            </div>
          )
        })}
      </div>

      {/* Multi-select Indicator - Centralizado */}
      {multiSelect && (
        <div style={{
          marginTop: '20px',
          padding: '12px 20px',
          backgroundColor: 'var(--info-bg)',
          border: '1px solid var(--info)',
          borderRadius: '8px',
          fontSize: '14px',
          color: 'var(--info)',
          textAlign: 'center',
          fontWeight: 500
        }}>
          💡 Esta questão permite múltiplas respostas
        </div>
      )}

      {/* Explanation - Alinhamento Consistente */}
      {showFeedback && question.explanation && (
        <div style={{
          marginTop: '24px',
          padding: '20px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          fontSize: '15px',
          lineHeight: '1.6',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textAlign: 'left'
          }}>
            Explicação:
          </div>
          <div style={{ 
            color: 'var(--text-primary)',
            textAlign: 'left'
          }}>
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  )
}
