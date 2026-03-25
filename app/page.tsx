'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { SimuladoProgress, SimuladoInfo } from '@/lib/types'
import { getQuizStatus } from '@/lib/utils/formatting'
import { SimuladoType } from '@prisma/client'

export default function Home() {
  const [progressData, setProgressData] = useState<SimuladoProgress>({})

  useEffect(() => {
    // Carregar progresso do localStorage
    const saved = localStorage.getItem('simuladoProgress')
    if (saved) {
      setProgressData(JSON.parse(saved))
    }
  }, [])

  const simulados: SimuladoInfo[] = [
    {
      id: SimuladoType.v1,
      title: 'Simulado V1',
      description: '60 questões - 90 min',
      icon: '1',
      color: '#00bcd4'
    },
    {
      id: SimuladoType.v2,
      title: 'Simulado V2',
      description: '60 questões - 90 min',
      icon: '2',
      color: '#9c27b0'
    },
    {
      id: SimuladoType.v3,
      title: 'Simulado V3',
      description: '60 questões - 90 min',
      icon: '3',
      color: '#ff9800'
    },
    {
      id: SimuladoType.v4,
      title: 'Simulado V4',
      description: '60 questões - 90 min',
      icon: '4',
      color: '#4caf50'
    }
  ]

  const getProgressStatus = (simuladoId: string) => {
    const progress = progressData[simuladoId]
    if (!progress) return getQuizStatus(0, 60, false)
    return getQuizStatus(progress.answered, progress.total, progress.completed)
  }

  return (
    <div style={{
      margin: 0,
      padding: 0,
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }}>
      {/* Sticky Header */}
      <header className="sticky-header" style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <img
            src="/zello-logo-removebg-preview.png"
            alt="Zello"
            style={{
              height: '40px',
              width: 'auto'
            }}
          />
          <ThemeToggle />
        </div>
        <img
          src="/fabrica-removebg-preview.png"
          alt="Fábrica"
          style={{
            height: '120px',
            width: 'auto'
          }}
        />
      </header>

      {/* Main Content */}
      <main style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Title Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '12px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Simulados MuleSoft
          </h1>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: '20px',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            <span>MuleSoft Hyperautomation Specialist</span>
          </div>

          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Pratique para a certificação MuleSoft Hyperautomation Especialist.
          </p>
        </div>

        {/* Simulados Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {simulados.map((simulado) => {
            const progress = getProgressStatus(simulado.id)
            return (
              <Link
                key={simulado.id}
                href={`/quiz?type=${simulado.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div className="card animate-scaleIn" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)'
                }}>
                  {/* Progress Indicator */}
                  {progress.percentage > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: 'var(--border-secondary)'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${progress.percentage}%`,
                        backgroundColor: progress.color,
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  )}

                  {/* Card Content */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '16px'
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: `${simulado.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: simulado.color,
                      border: `2px solid ${simulado.color}40`
                    }}>
                      {simulado.icon}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 600,
                      margin: 0,
                      color: 'var(--text-primary)'
                    }}>
                      {simulado.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {simulado.description}
                    </p>

                    {/* Status Badge */}
                    <div style={{
                      padding: '6px 12px',
                      backgroundColor: `${progress.color}20`,
                      border: `1px solid ${progress.color}40`,
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: progress.color
                    }}>
                      {progress.status}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Results Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <Link
            href="/resultados"
            className="btn btn-outline"
            style={{
              textDecoration: 'none'
            }}
          >
            📊 Ver Resultados
          </Link>
        </div>
      </main>
    </div>
  )
}
