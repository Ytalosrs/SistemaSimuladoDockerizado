'use client'

import { useEffect, useState } from 'react';

// Segmentos do display de 7 segmentos (a, b, c, d, e, f, g)
const SEGMENTS: Record<number, number[]> = {
  0: [1,1,1,1,1,1,0],
  1: [0,1,1,0,0,0,0],
  2: [1,1,0,1,1,0,1],
  3: [1,1,1,1,0,0,1],
  4: [0,1,1,0,0,1,1],
  5: [1,0,1,1,0,1,1],
  6: [1,0,1,1,1,1,1],
  7: [1,1,1,0,0,0,0],
  8: [1,1,1,1,1,1,1],
  9: [1,1,1,1,0,1,1],
};

const ON  = 'rgba(255, 30, 30, 1)';
const DIM = 'rgba(255, 30, 30, 0.08)';

interface SegmentProps {
    active: number;
    style: React.CSSProperties;
}

function Segment({ active, style }: SegmentProps) {
  return (
    <div style={{
      background: active ? ON : DIM,
      boxShadow: active ? `0 0 6px 2px rgba(255,0,0,0.7), 0 0 14px rgba(255,0,0,0.4)` : 'none',
      borderRadius: 2,
      ...style,
    }} />
  );
}

function Digit({ value }: { value: number }) {
  const segs = SEGMENTS[value] || SEGMENTS[0];
  // Layout 7 segmentos: top, top-right, bot-right, bottom, bot-left, top-left, middle
  return (
    <div style={{ position: 'relative', width: 28, height: 52, margin: '0 3px' }}>
      {/* a - topo */}
      <Segment active={segs[0]} style={{ position:'absolute', top:0, left:4, width:20, height:4 }} />
      {/* b - direita cima */}
      <Segment active={segs[1]} style={{ position:'absolute', top:4, right:0, width:4, height:20 }} />
      {/* c - direita baixo */}
      <Segment active={segs[2]} style={{ position:'absolute', bottom:4, right:0, width:4, height:20 }} />
      {/* d - base */}
      <Segment active={segs[3]} style={{ position:'absolute', bottom:0, left:4, width:20, height:4 }} />
      {/* e - esquerda baixo */}
      <Segment active={segs[4]} style={{ position:'absolute', bottom:4, left:0, width:4, height:20 }} />
      {/* f - esquerda cima */}
      <Segment active={segs[5]} style={{ position:'absolute', top:4, left:0, width:4, height:20 }} />
      {/* g - meio */}
      <Segment active={segs[6]} style={{ position:'absolute', top:'50%', left:4, width:20, height:4, transform:'translateY(-50%)' }} />
    </div>
  );
}

function Colon({ blink }: { blink: boolean }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:8, padding:'0 2px', marginBottom:2 }}>
      {[0,1].map(i => (
        <div key={i} style={{
          width: 5, height: 5,
          borderRadius: '50%',
          background: blink ? ON : DIM,
          boxShadow: blink ? `0 0 6px 2px rgba(255,0,0,0.7)` : 'none',
          transition: 'background 0.2s',
        }} />
      ))}
    </div>
  );
}

interface QuizTimerProps {
    isRunning: boolean;
    totalSeconds?: number;
    onTimeUp?: () => void;
}

export default function QuizTimer({ isRunning, totalSeconds = 5400, onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [blink, setBlink]       = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    
    if (timeLeft <= 0) {
        if (onTimeUp) onTimeUp();
        return;
    }

    const tick = setInterval(() => {
      setTimeLeft(p => {
          if (p <= 1) {
              clearInterval(tick);
              if (onTimeUp) onTimeUp();
              return 0;
          }
          return p - 1;
      });
      setBlink(p => !p);
    }, 1000);
    return () => clearInterval(tick);
  }, [isRunning, timeLeft, onTimeUp]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const d = (n: number, pos: number) => Math.floor(n / (pos === 0 ? 10 : 1)) % 10;

  const isWarning = timeLeft <= 300; // 5 minutos
  const isUrgent  = timeLeft <= 60;  // 1 minuto

  return (
    <div style={{
      position: 'fixed',
      top: '14px',
      right: '20px',
      zIndex: 9999,
      background: '#0a0000',
      border: `1.5px solid ${isUrgent ? '#ff0000' : isWarning ? '#aa0000' : '#330000'}`,
      borderRadius: 6,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      boxShadow: isUrgent
        ? '0 0 20px rgba(255,0,0,0.5), inset 0 0 10px rgba(255,0,0,0.1)'
        : '0 2px 12px rgba(0,0,0,0.8)',
      transition: 'box-shadow 0.5s, border-color 0.5s',
    }}>
      <Digit value={d(mins, 0)} />
      <Digit value={d(mins, 1)} />
      <Colon blink={blink} />
      <Digit value={d(secs, 0)} />
      <Digit value={d(secs, 1)} />
    </div>
  );
}
