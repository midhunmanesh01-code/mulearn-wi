import React from 'react'

interface SectionDividerProps {
  code: string
  title: string
  meta?: string
  tagline?: string
  className?: string
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  code,
  title,
  meta,
  tagline,
  className = '',
}) => {
  return (
    <div
      className={`w-full border-y border-black/10 bg-[#F2F2EE]/90 backdrop-blur-md select-none py-2.5 sm:py-3 transition-colors relative z-10 ${className}`}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 flex items-center justify-between text-[11px] font-mono">
        {/* Left: Registration crosshair + Chapter Code + Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <span className="text-[#111110]/35 font-bold text-xs select-none">+</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#111110] text-[#BEFF62] font-mono text-[10px] font-bold tracking-wider shadow-xs">
              § {code}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#111110] font-bold">
              // {title}
            </span>
          </div>
          {tagline && (
            <span className="hidden md:inline font-mono text-[10px] text-[#9A9A95] tracking-widest uppercase pl-2 border-l border-black/10">
              {tagline}
            </span>
          )}
        </div>

        {/* Center: Subtle geometric spacer line for wide screens */}
        <div className="hidden lg:flex items-center gap-2 opacity-30 px-6 flex-1 justify-center">
          <span className="h-px bg-black/40 flex-1 max-w-[140px]" />
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#111110]" />
            <span className="w-1 h-1 rounded-full bg-[#BEFF62]" />
            <span className="w-1 h-1 rounded-full bg-[#111110]" />
          </div>
          <span className="h-px bg-black/40 flex-1 max-w-[140px]" />
        </div>

        {/* Right: Live Meta Badge + Corner Crosshair */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {meta && (
            <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#111110]/75 tracking-wider uppercase font-semibold bg-white px-2.5 py-0.5 rounded-full border border-black/10 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] border border-black/25 shrink-0 animate-pulse" />
              <span>{meta}</span>
            </div>
          )}
          <span className="text-[#111110]/35 font-bold text-xs select-none">+</span>
        </div>
      </div>
    </div>
  )
}

export default SectionDivider
