import React, { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface RollingNumberProps {
  value: string
  className?: string
  delay?: number
}

// Single digit rolling slot column
const DigitColumn: React.FC<{
  target: number
  inView: boolean
  colIndex: number
  spinKey: number
}> = ({ target, inView, colIndex, spinKey }) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // 2 full cycles of 0-9 before landing on the target number
  const cycles = 2
  const digitsList: number[] = []
  for (let c = 0; c < cycles; c++) {
    for (let d = 0; d < 10; d++) {
      digitsList.push(d)
    }
  }
  for (let d = 0; d <= target; d++) {
    digitsList.push(d)
  }

  const targetIndex = cycles * 10 + target
  const total = digitsList.length

  if (prefersReduced) {
    return (
      <span className="inline-block h-[1.12em] overflow-hidden align-top select-none">
        <span className="h-[1.12em] flex items-center justify-center leading-none">
          {target}
        </span>
      </span>
    )
  }

  return (
    <span className="inline-block h-[1.12em] overflow-hidden align-top select-none">
      <motion.span
        key={spinKey}
        initial={{ y: '0%' }}
        animate={inView ? { y: `-${(targetIndex / total) * 100}%` } : { y: '0%' }}
        transition={{
          duration: 1.05 + colIndex * 0.1,
          ease: [0.16, 1, 0.3, 1], // Silky smooth deceleration curve
        }}
        className="flex flex-col will-change-transform"
      >
        {digitsList.map((num, i) => (
          <span
            key={i}
            className="h-[1.12em] flex items-center justify-center leading-none"
          >
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

export const FlickerNumber: React.FC<RollingNumberProps> = ({
  value,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { margin: '-30px' })
  const [spinKey, setSpinKey] = useState(0)

  // Smooth re-roll on hover
  const handleMouseEnter = () => {
    setSpinKey(prev => prev + 1)
  }

  const chars = value.split('')

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={`inline-flex items-baseline font-serif cursor-pointer select-none text-[#111110] leading-none ${className}`}
    >
      {chars.map((char, idx) => {
        const isDigit = /^[0-9]$/.test(char)
        if (isDigit) {
          const target = parseInt(char, 10)
          return (
            <DigitColumn
              key={idx}
              target={target}
              inView={inView}
              colIndex={idx}
              spinKey={spinKey}
            />
          )
        }
        // Non-digits like '+', '.', 'K'
        return (
          <span
            key={idx}
            className="inline-block h-[1.12em] flex items-center justify-center leading-none px-[0.015em]"
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}

export default FlickerNumber
