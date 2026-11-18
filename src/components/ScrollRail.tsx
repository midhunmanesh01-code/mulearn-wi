import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react'

const SECTIONS = [
  { id: 'top', label: 'Hero', tag: '00' },
  { id: 'about', label: 'Ethos', tag: '01' },
  { id: 'circles', label: 'Circles', tag: '02' },
  { id: 'karma', label: 'Karma', tag: '03' },
  { id: 'moments', label: 'Moments', tag: '04' },
  { id: 'events', label: 'Timeline', tag: '05' },
  { id: 'join', label: 'Join Pass', tag: '06' },
]

export const ScrollRail: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('top')
  const [percent, setPercent] = useState(0)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const trackRef = useRef<HTMLDivElement>(null)

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.0001,
  })

  const thumbTop = useTransform(smoothProgress, [0, 1], ['14px', 'calc(100% - 14px)'])
  const fillHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 60 && !isVisible) setIsVisible(true)
    if (latest <= 60 && isVisible) setIsVisible(false)
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setPercent(Math.round(latest * 100))
  })

  useEffect(() => {
    const handleScrollCheck = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = SECTIONS[0].id

      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            current = s.id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScrollCheck, { passive: true })
    handleScrollCheck()
    return () => window.removeEventListener('scroll', handleScrollCheck)
  }, [])

  const handleScrubTo = useCallback((clientY: number) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const targetY = ratio * maxScroll

    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleScrubTo(e.clientY)

    const handleMouseMove = (ev: MouseEvent) => {
      handleScrubTo(ev.clientY)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex fixed right-3.5 lg:right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setHoveredSection(null)
          }}
        >
          <AnimatePresence>
            {(isHovered || isDragging) && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="absolute right-7 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111110] text-[#FAFAF8] border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md whitespace-nowrap pointer-events-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] animate-pulse" />
                <span className="font-mono text-[10px] text-white/50 tracking-wider">
                  {SECTIONS.find((s) => s.id === (hoveredSection || activeSection))?.tag} //
                </span>
                <span className="font-mono text-[11px] font-semibold text-white tracking-wide uppercase">
                  {SECTIONS.find((s) => s.id === (hoveredSection || activeSection))?.label}
                </span>
                <span className="font-mono text-[10px] text-[#BEFF62] font-semibold pl-1.5 border-l border-white/10">
                  {percent}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            className="relative h-64 lg:h-72 w-6 flex items-center justify-center cursor-pointer group"
          >
            <div className="absolute top-0 bottom-0 w-[2.5px] rounded-full bg-black/[0.08] dark:bg-white/[0.1] backdrop-blur-xs transition-colors duration-200 group-hover:bg-black/[0.15]" />

            <motion.div
              style={{ height: fillHeight }}
              className="absolute top-0 w-[2.5px] rounded-full bg-[#111110]"
            />

            <div className="absolute top-0 bottom-0 w-full flex flex-col justify-between py-1 pointer-events-none">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={(e) => scrollToSection(sec.id, e)}
                    onMouseEnter={() => setHoveredSection(sec.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    className="pointer-events-auto relative flex items-center justify-center w-full h-3.5 group/tick cursor-pointer"
                    title={sec.label}
                    aria-label={`Scroll to ${sec.label}`}
                  >
                    <div
                      className={`h-[1.5px] transition-all duration-300 rounded-full ${
                        isActive
                          ? 'w-3.5 bg-[#BEFF62] shadow-[0_0_8px_#BEFF62]'
                          : 'w-1.5 bg-black/25 group-hover/tick:w-3 group-hover/tick:bg-[#111110]'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <motion.div
              style={{ top: thumbTop }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div
                className={`w-[9px] h-7 rounded-full bg-[#111110] border border-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 ${
                  isHovered || isDragging ? 'scale-125 shadow-[0_4px_16px_rgba(0,0,0,0.45)]' : 'scale-100'
                }`}
              >
                <div className="w-[3px] h-2.5 rounded-full bg-[#BEFF62] shadow-[0_0_6px_#BEFF62]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollRail
