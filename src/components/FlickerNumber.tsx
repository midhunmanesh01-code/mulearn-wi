import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'motion/react'

const DIGITS = '0123456789'

interface FlickerNumberProps {
  value: string
  className?: string
  delay?: number
  duration?: number
}

export const FlickerNumber: React.FC<FlickerNumberProps> = ({
  value,
  className = '',
  delay = 0,
  duration = 500,
}) => {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  // Trigger whenever the element enters the viewport
  const inView = useInView(ref, { margin: '-20px' })
  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const hoverIntervalRef = useRef<number | null>(null)

  const stopAnimation = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const startFlicker = useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    stopAnimation()

    const stepMs = 30
    const totalSteps = Math.max(12, Math.floor(duration / stepMs))
    let currentStep = 0
    const chars = value.split('')
    const targetLen = chars.length

    intervalRef.current = window.setInterval(() => {
      currentStep++
      const progress = currentStep / totalSteps

      const nextChars = chars.map((finalChar, index) => {
        // Keep non-numeric characters intact
        if (!DIGITS.includes(finalChar)) {
          return finalChar
        }

        // Left-to-right progressive lock threshold
        const lockThreshold = (index + 0.6) / targetLen
        if (progress >= lockThreshold) {
          return finalChar
        }

        // Rapid random digit
        return DIGITS[Math.floor(Math.random() * DIGITS.length)]
      })

      setDisplay(nextChars.join(''))

      if (currentStep >= totalSteps) {
        stopAnimation()
        setDisplay(value)
      }
    }, stepMs)
  }, [value, duration, stopAnimation])

  // Triggers whenever user reaches/scrolls into this element
  useEffect(() => {
    if (inView) {
      if (delay > 0) {
        timeoutRef.current = window.setTimeout(startFlicker, delay)
      } else {
        startFlicker()
      }
    }

    return () => stopAnimation()
  }, [inView, delay, startFlicker, stopAnimation])

  const handleMouseEnter = () => {
    if (hoverIntervalRef.current !== null) {
      clearInterval(hoverIntervalRef.current)
    }

    let step = 0
    const maxSteps = 10
    const chars = value.split('')
    const targetLen = chars.length

    hoverIntervalRef.current = window.setInterval(() => {
      step++
      const progress = step / maxSteps

      const nextChars = chars.map((finalChar, index) => {
        if (!DIGITS.includes(finalChar)) return finalChar
        if (progress >= (index + 0.6) / targetLen) return finalChar
        return DIGITS[Math.floor(Math.random() * DIGITS.length)]
      })

      setDisplay(nextChars.join(''))

      if (step >= maxSteps) {
        if (hoverIntervalRef.current !== null) {
          clearInterval(hoverIntervalRef.current)
          hoverIntervalRef.current = null
        }
        setDisplay(value)
      }
    }, 28)
  }

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={`inline-block font-mono tabular-nums select-none cursor-pointer text-[#111110] ${className}`}
    >
      {display}
    </span>
  )
}

export default FlickerNumber
