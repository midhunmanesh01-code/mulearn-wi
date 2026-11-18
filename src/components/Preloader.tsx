import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export interface PreloaderProps {
  readonly onComplete?: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
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
    const totalDuration = 1400

    let animFrame: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(elapsed / totalDuration, 1)
      const easedProgress = Math.floor((1 - Math.pow(1 - rawProgress, 3)) * 100)
      setProgress(easedProgress)

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
            }, 700)
          }, 300)
        }, 120)
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
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#111110] text-[#FAFAF8] px-6 select-none overflow-hidden"
          role="status"
          aria-label="Loading µLearn CEC"
        >
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#BEFF62] flex items-center justify-center font-serif italic text-[#111110] text-3xl sm:text-4xl font-bold mb-5 shadow-[0_0_36px_rgba(190,255,98,0.3)]"
            >
              µ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight mb-6"
            >
              µLearn <span className="font-mono text-xl sm:text-2xl not-italic font-bold text-[#BEFF62]">CEC</span>
            </motion.h1>

            <div className="flex items-baseline gap-1 font-mono text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 tabular-nums">
              <span>{String(progress).padStart(2, '0')}</span>
              <span className="text-xl sm:text-2xl text-[#BEFF62] font-semibold">%</span>
            </div>

            <div className="w-52 sm:w-64 h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#BEFF62] shadow-[0_0_12px_#BEFF62] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
