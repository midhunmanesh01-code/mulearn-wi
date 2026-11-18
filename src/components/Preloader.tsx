import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const STATUS_MESSAGES = [
  'INITIALIZING CAMPUS NODE #047',
  'CONNECTING GTECH µLEARN REPOSITORIES',
  'SYNCING PEER CIRCLES & ROADMAPS',
  'VERIFYING PROOF-OF-WORK LEDGER',
  'SYSTEM READY // SHIP IN PUBLIC',
]

export const Preloader: React.FC<{ readonly onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [isRemoved, setIsRemoved] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  useEffect(() => {
    if (isRemoved) {
      onComplete?.()
      return
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()
    const totalDuration = 1600 // 1.6s smooth duration

    let animFrame: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(elapsed / totalDuration, 1)

      // Quintic ease-out progress curve: fast start, smooth settle at 100%
      const easedProgress = Math.floor((1 - Math.pow(1 - rawProgress, 3)) * 100)
      setProgress(easedProgress)

      const msgIndex = Math.min(
        Math.floor((easedProgress / 100) * STATUS_MESSAGES.length),
        STATUS_MESSAGES.length - 1
      )
      setStatusIdx(msgIndex)

      if (rawProgress < 1) {
        animFrame = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setTimeout(() => {
          setIsDone(true)
          setTimeout(() => {
            document.body.style.overflow = prevOverflow
            onComplete?.()
            setTimeout(() => {
              setIsRemoved(true)
            }, 750)
          }, 350)
        }, 150)
      }
    }

    animFrame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animFrame)
      document.body.style.overflow = prevOverflow
    }
  }, [isRemoved, onComplete])

  if (isRemoved) return null

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#111110] text-[#FAFAF8] px-6 sm:px-12 py-8 sm:py-10 select-none overflow-hidden"
          role="status"
          aria-label="Loading µLearn CEC"
        >
          {/* Subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />

          {/* Top Bar: Chapter Registration & Campus Info */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-widest border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] animate-pulse" />
              <span className="text-white/80 font-semibold">µLEARN CEC</span>
              <span className="hidden sm:inline text-white/30">/ COLLEGE OF ENGINEERING CHENGANNUR</span>
            </div>
            <div className="font-mono text-white/50 tracking-wider">
              CAMPUS CHAPTER #047
            </div>
          </div>

          {/* Centerpiece: Brand Identity & Counter */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            {/* Tactile Stamp */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#BEFF62] flex items-center justify-center font-serif italic text-[#111110] text-3xl sm:text-4xl font-bold mb-6 shadow-[0_0_40px_rgba(190,255,98,0.35)]"
            >
              µ
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-serif italic text-3xl sm:text-5xl text-white tracking-tight mb-2"
            >
              µLearn <span className="font-mono text-2xl sm:text-4xl not-italic font-bold text-[#BEFF62]">CEC</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-[11px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mb-8"
            >
              Peers · Code · Proof of Work
            </motion.p>

            {/* Live Numerical Counter */}
            <div className="flex items-baseline gap-1 font-mono text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 tabular-nums">
              <span>{String(progress).padStart(2, '0')}</span>
              <span className="text-xl sm:text-2xl text-[#BEFF62] font-semibold">%</span>
            </div>

            {/* Precision Hairline Progress Bar */}
            <div className="w-56 sm:w-72 h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative mb-4">
              <div
                className="h-full bg-[#BEFF62] shadow-[0_0_12px_#BEFF62] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Status Stream */}
            <div className="font-mono text-[10px] sm:text-xs text-[#BEFF62] tracking-wider uppercase h-5 flex items-center justify-center">
              <span>{STATUS_MESSAGES[statusIdx]}</span>
            </div>
          </div>

          {/* Bottom Bar: System Coordinates & Ethos */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/30 border-t border-white/[0.08] pt-4">
            <span className="hidden sm:inline">ALAPPUZHA, KERALA // 9.3173° N, 76.6152° E</span>
            <span className="sm:hidden">KTU AFFILIATED</span>
            <span className="text-white/50 tracking-wider">NO TEXTBOOKS · JUST REPO COMMITS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
