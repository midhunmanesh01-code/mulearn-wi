import React, { useEffect, useState } from 'react'
import { MagicRings } from '@/components/MagicRings'

export const Preloader: React.FC<{ readonly onComplete: () => void }> = ({ onComplete }) => {
  const [gone, setGone] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (gone) { onComplete(); return }
    const t = [
      setTimeout(() => setFading(true), 1900),
      setTimeout(onComplete, 2150),
      setTimeout(() => setGone(true), 2500),
    ]
    return () => t.forEach(clearTimeout)
  }, [gone, onComplete])

  if (gone) return null
  return (
    <div role="status" aria-label="Loading µLearn CEC"
      className={`fixed inset-0 z-[9999] grid place-items-center bg-night transition-all duration-500 ${fading ? 'opacity-0 scale-105 blur-sm' : ''}`}>
      <div className="absolute inset-0">
        <MagicRings color="#8b5cf6" colorTwo="#59d6e8" ringCount={7} motion="pulse" speed={1.05}
          lineThickness={1.8} glow={1.3} baseRadius={0.4} radiusStep={0.075} opacity={0.92}
          interactive={false} followMouse={false} clickBurst={false} intro theme="dark" maxDevicePixelRatio={1.5} />
      </div>
      <span className="shimmer relative font-display text-4xl font-bold tracking-tight sm:text-6xl">µLearn CEC</span>
    </div>
  )
}
