import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MagicRings } from '@/components/MagicRings'

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
    const totalDuration = 1500

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
            }, 750)
          }, 320)
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
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 w-full h-[100dvh] z-[99999] flex flex-col items-center justify-center bg-[#111110] text-[#FAFAF8] px-4 select-none overflow-hidden touch-none overscroll-none"
          role="status"
          aria-label="Loading µLearn CEC"
        >
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <MagicRings
              color="#BEFF62"
              colorTwo="#FFFFFF"
              ringCount={7}
              motion="pulse"
              speed={1.05}
              lineThickness={1.8}
              glow={1.4}
              baseRadius={0.38}
              radiusStep={0.08}
              expansion={0.06}
              taper={1.15}
              tilt={0}
              spin={0.08}
              dispersion={0}
              grain={0}
              opacity={0.88}
              interactive={false}
              followMouse={false}
              clickBurst={false}
              intro={true}
              theme="dark"
              maxDevicePixelRatio={1.5}
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(17,17,16,0.92)_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-sm px-4 mx-auto my-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-13 h-13 sm:w-18 sm:h-18 rounded-xl sm:rounded-2xl bg-[#BEFF62] flex items-center justify-center font-serif italic text-[#111110] text-2xl sm:text-4xl font-bold mb-4 sm:mb-5 shadow-[0_0_36px_rgba(190,255,98,0.45)]"
            >
              µ
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="flex items-baseline justify-center gap-2 sm:gap-3 mb-1 sm:mb-2"
            >
              <span className="loader-text-shimmer font-serif italic text-3xl sm:text-5xl tracking-tight leading-none">
                µLearn
              </span>
              <span className="font-mono text-xl sm:text-3xl not-italic font-black text-[#BEFF62] drop-shadow-[0_0_16px_rgba(190,255,98,0.5)]">
                CEC
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#BEFF62]/80 font-medium mb-5 sm:mb-7"
            >
              CAMPUS CHAPTER · CEC
            </motion.span>

            <div className="flex items-baseline gap-1 font-mono text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-5 tabular-nums">
              <span>{String(progress).padStart(2, '0')}</span>
              <span className="text-lg sm:text-2xl text-[#BEFF62] font-semibold">%</span>
            </div>

            <div className="w-44 sm:w-64 max-w-[70vw] h-1 sm:h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#BEFF62]/80 to-[#BEFF62] shadow-[0_0_12px_#BEFF62] transition-all duration-75 ease-out rounded-full"
                style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
