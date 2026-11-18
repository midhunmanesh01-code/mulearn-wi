import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, useInView, AnimatePresence } from 'motion/react'
import {
  ExternalLink,
  ArrowRight,
  ArrowUp,
  Heart,
  Zap,
  Users,
  Calendar,
  Star,
  Layers,
  Terminal,
  Globe,
  Code2,
  Rocket,
  CheckCircle2,
} from 'lucide-react'
import {
  chapter,
  stats,
  circles,
  events,
  pillars,
  loopSteps,
  karmaLedger,
  karmaChannels,
  communityMoments,
} from '@/config/content'
import { Navbar } from '@/components/Navbar'
import { Preloader } from '@/components/Preloader'
import { FlickerNumber } from '@/components/FlickerNumber'
import { SplitText } from '@/components/SplitText'

// ─── Scroll-reveal wrapper ─────────────────────────────────────────────────────
const FadeIn: React.FC<{
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}> = ({ children, delay = 0, className = '', y = 20 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section eyebrow label ────────────────────────────────────────────────────
const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 mb-5">
    <span className="w-4 h-px bg-[#BEFF62]" />
    <span className="font-mono text-[10px] tracking-[0.2em] text-[#9A9A95] uppercase">{children}</span>
  </div>
)

// ─── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ isReady?: boolean }> = ({ isReady = false }) => {
  const [fallbackStarted, setFallbackStarted] = useState(false)
  const hasStarted = isReady || fallbackStarted

  useEffect(() => {
    if (!isReady) {
      const timer = setTimeout(() => {
        setFallbackStarted(true)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isReady])

  return (
    <section id="top" className="relative overflow-hidden bg-[#FAFAF8]">
      {/* Fine grid */}
      <div className="grid-bg absolute inset-0 pointer-events-none opacity-100" aria-hidden="true" />

      {/* Very subtle lime glow top-center */}
      <div
        className="absolute left-1/2 -top-20 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(190,255,98,0.18) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 pt-28 sm:pt-32 pb-16 min-h-[100dvh] flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2.5 border border-black/[0.08] rounded-full px-4 py-2 mb-12 bg-white/70 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-[#9AE637]" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#9AE637]" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#9A9A95] uppercase">
              GTech µLearn · Campus Chapter · CEC CHN
            </span>
          </motion.div>

          {/* Headline — massive serif with isolated word-by-word fluid wave lift */}
          <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.88] tracking-tight mb-2 select-none">
            {/* First line: Break the syllabus. */}
            {hasStarted ? (
              <div className="flex flex-wrap items-baseline gap-x-[0.28em] overflow-visible pb-1">
                <SplitText
                  tag="span"
                  text="Break"
                  className="text-[#111110] inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  trigger="load"
                  hoverEffect="lift"
                />
                <SplitText
                  tag="span"
                  text="the"
                  className="text-[#111110] inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  startDelay={80}
                  trigger="load"
                  hoverEffect="lift"
                />
                <SplitText
                  tag="span"
                  text="syllabus."
                  className="text-[#111110] inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  startDelay={160}
                  trigger="load"
                  hoverEffect="lift"
                />
              </div>
            ) : (
              <div className="flex flex-wrap items-baseline gap-x-[0.28em] overflow-visible pb-1 opacity-0 pointer-events-none select-none">
                <span className="text-[#111110] inline-block">Break</span>
                <span className="text-[#111110] inline-block">the</span>
                <span className="text-[#111110] inline-block">syllabus.</span>
              </div>
            )}

            {/* Second line: Ship in public. (Natural muted tone, stays in its tone on hover) */}
            {hasStarted ? (
              <div className="flex flex-wrap items-baseline gap-x-[0.28em] overflow-visible pt-1 italic text-[#111110]/25">
                <SplitText
                  tag="span"
                  text="Ship"
                  className="text-[#111110]/25 inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  startDelay={240}
                  trigger="load"
                  hoverEffect="lift"
                />
                <SplitText
                  tag="span"
                  text="in"
                  className="text-[#111110]/25 inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  startDelay={300}
                  trigger="load"
                  hoverEffect="lift"
                />
                <SplitText
                  tag="span"
                  text="public."
                  className="text-[#111110]/25 inline-block"
                  effect="rise"
                  splitType="chars"
                  delay={35}
                  duration={0.9}
                  startDelay={360}
                  trigger="load"
                  hoverEffect="lift"
                />
              </div>
            ) : (
              <div className="flex flex-wrap items-baseline gap-x-[0.28em] overflow-visible pt-1 italic text-[#111110]/25 opacity-0 pointer-events-none select-none">
                <span className="text-[#111110]/25 inline-block">Ship</span>
                <span className="text-[#111110]/25 inline-block">in</span>
                <span className="text-[#111110]/25 inline-block">public.</span>
              </div>
            )}
          </h1>

          {/* Lime highlight bar under first line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={hasStarted ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="mt-3 h-1.5 w-32 bg-[#BEFF62] rounded-full"
          />

          {/* Sub + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16"
          >
            <p className="max-w-xs text-sm text-[#3A3A37]/60 leading-relaxed">
              {chapter.tagline}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={chapter.joinUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden flex items-center gap-2.5 rounded-full bg-[#111110] text-white px-7 py-3.5 text-sm font-bold font-mono uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-[1.02]">
                  Join the chapter
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </a>
              <a
                href="#circles"
                className="group relative overflow-hidden flex items-center gap-2.5 rounded-full border border-black/[0.12] hover:border-[#111110] bg-white text-[#111110] px-7 py-3.5 text-sm font-bold font-mono uppercase tracking-wider shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[#BEFF62]/35 before:to-transparent before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-[1.02]">
                  Explore circles
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#9A9A95] transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-[#111110]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats — anchored to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 sm:mt-18"
        >
          <div className="border-t border-black/[0.07] pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 sm:gap-x-12 lg:gap-x-16">
              {stats.map((s, idx) => (
                <div key={s.label} className="group">
                  {/* Number in Hero serif */}
                  <div>
                    {hasStarted ? (
                      <FlickerNumber
                        value={s.value}
                        delay={idx * 50 + 200}
                        className="font-serif text-[2.6rem] sm:text-[3.25rem] lg:text-[3.75rem] font-normal tracking-tight leading-[0.9] text-[#111110]"
                      />
                    ) : (
                      <span className="font-serif text-[2.6rem] sm:text-[3.25rem] lg:text-[3.75rem] font-normal tracking-tight leading-[0.9] text-[#111110] opacity-0 pointer-events-none select-none">
                        {s.value}
                      </span>
                    )}
                  </div>

                  {/* Label in Hero serif */}
                  <h4 className="font-serif text-lg sm:text-xl text-[#111110] tracking-tight leading-snug mt-2.5">
                    {s.label}
                  </h4>

                  {/* Subtitle in clean light sans */}
                  <p className="font-sans text-[11px] sm:text-xs text-[#3A3A37]/55 mt-0.5 leading-normal font-normal">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Marquee ticker ────────────────────────────────────────────────────────────
const TICKER = [
  'PEER-TO-PEER LEARNING',
  'LEARNING CIRCLES',
  'KARMA POINTS SYSTEM',
  'PROOF OF WORK',
  'BUILD IN PUBLIC',
  'INTEREST GROUPS',
  'OPEN SOURCE SPRINTS',
  'MICRO COMMUNITIES',
  'NO LECTURES NO HIERARCHY',
  'EARN BY SHIPPING',
  'GTECH µLEARN ECOSYSTEM',
  'PORTFOLIO REVIEWS',
]
const Marquee: React.FC = () => {
  const doubled = [...TICKER, ...TICKER]
  return (
    <div className="border-y border-black/[0.08] overflow-hidden py-4 select-none bg-white">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs font-medium tracking-[0.16em] text-[#111110]/75 uppercase px-6 whitespace-nowrap flex items-center"
          >
            {item}
            <span className="ml-6 inline-block w-1.5 h-1.5 rounded-full bg-[#BEFF62] border border-black/10 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Community / About ────────────────────────────────────────────────────────
const LOOP_ICONS = [Users, Code2, Rocket, Zap]
const PILLAR_ICONS = [Layers, Terminal, Globe]

const PeerLearningLoop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: '-60px 0px -60px 0px', amount: 0.2 })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setActiveStep(0)
      return
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopSteps.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [isInView])

  const active = loopSteps[activeStep]

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BEFF62] border border-black/15 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#111110]/70 font-semibold">
            Continuous Peer Loop
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#9A9A95] tracking-widest">
          PHASE 0{activeStep + 1} / 0{loopSteps.length}
        </span>
      </div>

      {/* 4 Steps Row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 items-center">
        {loopSteps.map((s, i) => {
          const Icon = LOOP_ICONS[i] || Users
          const isActive = activeStep === i
          const isPassed = activeStep > i

          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`group flex flex-col items-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#111110] text-white shadow-md scale-[1.02]'
                  : 'bg-[#FAFAF8] hover:bg-black/[0.04] text-[#111110]'
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-300 mb-2 ${
                  isActive
                    ? 'bg-[#BEFF62] text-[#111110]'
                    : isPassed
                    ? 'bg-black/[0.06] text-[#111110]'
                    : 'bg-white border border-black/[0.07] text-[#9A9A95]'
                }`}
              >
                <Icon size={16} />
              </div>
              <span
                className={`font-mono text-[10px] sm:text-xs tracking-wider uppercase font-medium ${
                  isActive ? 'text-white' : 'text-[#111110]/70'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] mt-0.5 tracking-tight ${
                  isActive ? 'text-[#BEFF62]' : 'text-[#9A9A95]'
                }`}
              >
                0{i + 1}
              </span>
            </button>
          )
        })}
      </div>

      {/* Dynamic Active Step Detail Card */}
      <div className="mt-3 pt-3 border-t border-black/[0.06] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#9A9A95] uppercase tracking-wider">
            0{activeStep + 1} //
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#111110]/80 font-medium">
            {active.desc}
          </p>
        </div>
        <div className="shrink-0 hidden sm:block">
          <span className="font-mono text-[9px] text-[#111110] font-medium px-2 py-0.5 rounded bg-[#BEFF62]/40 border border-[#BEFF62]/60 uppercase">
            {active.tagline}
          </span>
        </div>
      </div>
    </div>
  )
}

const Community: React.FC = () => (
  <section id="about" className="bg-[#FAFAF8] border-b border-black/[0.06]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
      {/* Top Header Grid */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
        <FadeIn>
          <Label>Manifesto · Why µLearn CEC</Label>
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.05] text-[#111110] tracking-tight">
            A community<br />
            <span className="italic text-[#111110]/35 font-normal">that compounds.</span>
          </h2>
          <div className="mt-4 flex gap-2">
            <div className="w-8 h-1 bg-[#BEFF62] rounded-full" />
            <div className="w-3 h-1 bg-[#BEFF62]/30 rounded-full" />
          </div>
          <p className="mt-5 text-sm sm:text-base text-[#111110]/75 leading-relaxed max-w-md">
            No lecture slides. No artificial attendance. Just small cohorts building real software and earning verifiable proof of work.
          </p>
        </FadeIn>

        {/* Right: Interactive Peer Loop Stepper */}
        <FadeIn delay={0.15}>
          <PeerLearningLoop />
        </FadeIn>
      </div>

      {/* Middle: 3 Interactive Pillar Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-16">
        {pillars.map((p, idx) => {
          const Icon = PILLAR_ICONS[idx] || Users
          return (
            <FadeIn key={p.id} delay={0.1 + idx * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] hover:-translate-y-1 overflow-hidden">
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BEFF62] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Background watermark number */}
                <span
                  className="font-mono text-6xl font-bold text-black/[0.025] absolute right-4 top-3 select-none pointer-events-none group-hover:text-black/[0.05] transition-colors"
                  aria-hidden="true"
                >
                  {p.id}
                </span>

                <div>
                  {/* Top row: Icon + Monospace badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-black/[0.07] flex items-center justify-center text-[#111110] group-hover:bg-[#BEFF62] group-hover:border-[#BEFF62] group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <Icon size={18} className="transition-transform duration-300 group-hover:rotate-[-6deg]" />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-[#9A9A95] uppercase font-semibold bg-[#FAFAF8] px-2 py-0.5 rounded-full border border-black/[0.05]">
                      {p.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-[#111110] font-normal leading-snug tracking-tight mt-5">
                    {p.title}
                  </h3>

                  {/* Body - short & clean */}
                  <p className="font-sans text-sm text-[#3A3A37]/70 leading-relaxed mt-2.5">
                    {p.body}
                  </p>
                </div>

                {/* Card bottom: tags & metric */}
                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#111110]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] border border-black/15 shrink-0" />
                    <span>{p.metric}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-wider text-[#111110]/55 bg-[#FAFAF8] border border-black/[0.06] rounded px-1.5 py-0.5 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>

      {/* Bottom: Manifesto Ethos Banner with IEDC-style Dual-Layer Tilted Frame */}
      <FadeIn delay={0.2} className="mt-14 sm:mt-16">
        <div className="relative group cursor-default">
          {/* Solid Accent Backdrop Plate - calibrated tilt in Electric Lime */}
          <div
            className="absolute inset-0 transition-all duration-300 transform rounded-2xl sm:rounded-3xl bg-[#BEFF62] shadow-sm rotate-[0.3deg] sm:rotate-[0.5deg] group-hover:rotate-[0.5deg] sm:group-hover:rotate-[0.8deg] group-hover:shadow-[0_12px_28px_rgba(190,255,98,0.3)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Solid Foreground Card in Deep Ink */}
          <div className="relative rounded-2xl sm:rounded-3xl p-7 sm:p-10 bg-[#111110] border border-black/15 transition-all duration-300 transform -rotate-[0.3deg] sm:-rotate-[0.5deg] group-hover:-rotate-[0.5deg] sm:group-hover:-rotate-[0.8deg] shadow-xl overflow-hidden">
            {/* Subtle background ambient light */}
            <div
              className="absolute -right-24 -top-24 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(190,255,98,0.12) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-7 lg:gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-4 h-px bg-[#BEFF62]" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#BEFF62] uppercase font-bold">
                    The Campus Ethos
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-white font-normal leading-[1.2] tracking-tight">
                  "The syllabus teaches you what worked yesterday.{' '}
                  <span className="italic text-[#BEFF62]">Shipping in public</span> teaches you what works today."
                </h3>

                <p className="mt-3.5 text-sm text-white/60 leading-relaxed max-w-lg">
                  No waiting for graduation. Jump into an active circle or initiate your own build sprint at CEC.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-5">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/70 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 size={11} className="text-[#BEFF62]" />
                    <span>Zero Theory</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/70 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 size={11} className="text-[#BEFF62]" />
                    <span>Peer Led</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/70 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 size={11} className="text-[#BEFF62]" />
                    <span>Verified Karma</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with the hero shimmer effect */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-center">
                <a
                  href={chapter.linktree}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#BEFF62] text-[#111110] font-sans font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Explore All Links
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-[#111110] transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5" />
                </a>

                <a
                  href={chapter.joinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/join relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white/80 hover:text-white border border-white/15 font-sans font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer w-full sm:w-auto"
                >
                  <span className="flex items-center gap-1.5">
                    Join µLearn Platform
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover/join:text-[#BEFF62] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
)

// ─── Learning Circles ─────────────────────────────────────────────────────────
const Circles: React.FC = () => {
  const [activeCircle, setActiveCircle] = useState('01')
  const hoverTimer = useRef<number | null>(null)

  const handleHover = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => {
      setActiveCircle(id)
    }, 55)
  }

  const handleLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }

  const handleClick = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setActiveCircle(id)
  }

  return (
    <section id="circles" className="bg-[#FAFAF8] border-b border-black/[0.08] relative">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 sm:py-32">
        {/* Header */}
        <FadeIn className="mb-14 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Label>Circles [04] · Student Guilds</Label>
              <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.05] text-[#111110] tracking-tight">
                Choose your craft.<br />
                <span className="italic text-[#111110]/35 font-normal">Four circles, zero classroom rules.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#111110]/70 leading-relaxed max-w-lg">
                Self-directed peer cohorts meeting weekly at CEC. Pick your domain, find your crew, and push verifiable commits.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#9A9A95] uppercase tracking-wider self-end">
              <span>Hover or click to inspect</span>
              <ArrowRight size={13} className="text-[#111110]" />
            </div>
          </div>
        </FadeIn>

        {/* Desktop: Expanding Horizontal Accordion Deck with Silky Quintic Easing */}
        <FadeIn delay={0.1}>
          <div className="hidden lg:flex gap-3.5 h-[500px]" onMouseLeave={handleLeave}>
            {circles.map((c) => {
              const isSelected = activeCircle === c.id

              return (
                <motion.div
                  key={c.id}
                  layout
                  onClick={() => handleClick(c.id)}
                  onMouseEnter={() => handleHover(c.id)}
                  transition={{
                    layout: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className={`relative rounded-2xl cursor-pointer overflow-hidden transition-colors duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'flex-[3.5] bg-white border border-black/10 p-8 sm:p-9 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)]'
                      : 'flex-1 bg-[#F2F2EE] hover:bg-[#EBEBE5] border border-black/[0.06] p-6'
                  }`}
                >
                  {/* Top lime accent on active */}
                  {isSelected && (
                    <motion.div
                      layoutId="circle-active-bar"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 right-0 h-1 bg-[#BEFF62]"
                    />
                  )}

                  <AnimatePresence mode="wait">
                    {/* Collapsed State: Vertical Typography */}
                    {!isSelected ? (
                      <motion.div
                        key={`collapsed-${c.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="h-full flex flex-col justify-between items-center py-2 select-none"
                      >
                        <span className="font-mono text-xs font-semibold text-[#111110]/40">
                          {c.id}
                        </span>

                        <span className="font-serif text-2xl text-[#111110] tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                          {c.name}
                        </span>

                        <span className="font-mono text-[10px] text-[#111110]/50 tracking-wider">
                          {c.members}p
                        </span>
                      </motion.div>
                    ) : (
                      /* Expanded Active State: Deep Editorial Showcase */
                      <motion.div
                        key={`expanded-${c.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div>
                          {/* Top bar */}
                          <div className="flex items-center justify-between pb-5 border-b border-black/[0.06]">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#111110] text-[#BEFF62]">
                                {c.id}
                              </span>
                              <span className="font-mono text-[10px] tracking-[0.2em] text-[#9A9A95] uppercase font-semibold">
                                {c.track}
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#111110]/70 bg-[#FAFAF8] border border-black/[0.06] px-3 py-1 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] border border-black/10" />
                              <span>{c.members} active builders</span>
                            </div>
                          </div>

                          {/* Main Title & Tagline */}
                          <div className="mt-6">
                            <h3 className="font-serif text-3xl sm:text-4xl text-[#111110] font-normal tracking-tight">
                              {c.name}
                            </h3>
                            <p className="font-sans text-xs text-[#111110]/50 font-medium tracking-wide mt-1">
                              {c.tagline}
                            </p>
                            <p className="font-sans text-sm text-[#3A3A37]/80 leading-relaxed mt-4 max-w-xl">
                              {c.blurb}
                            </p>
                          </div>

                          {/* Info grid */}
                          <div className="grid grid-cols-2 gap-6 mt-7 pt-5 border-t border-black/[0.06]">
                            <div>
                              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#9A9A95] font-semibold mb-1">
                                Primary Output
                              </span>
                              <p className="font-sans text-xs sm:text-sm text-[#111110]/85 font-medium leading-snug">
                                {c.output}
                              </p>
                            </div>
                            <div>
                              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#9A9A95] font-semibold mb-1">
                                Cohort Rhythm
                              </span>
                              <p className="font-sans text-xs sm:text-sm text-[#111110]/85 font-medium leading-snug">
                                {c.cadence}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Bottom row: Stack Tags + Shimmer Join Button */}
                        <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {c.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[9px] tracking-wider text-[#111110]/70 bg-[#FAFAF8] border border-black/[0.06] rounded px-2 py-1 uppercase"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <a
                            href={chapter.joinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111110] text-[#FAFAF8] font-sans font-medium text-xs tracking-wide shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out shrink-0"
                          >
                            <span className="relative z-10 flex items-center gap-1.5">
                              Join {c.name}
                            </span>
                            <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#BEFF62] transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>

        {/* Mobile: Sleek Vertical Accordion with AnimatePresence */}
        <div className="lg:hidden space-y-3">
          {circles.map((c) => {
            const isSelected = activeCircle === c.id

            return (
              <div
                key={c.id}
                onClick={() => handleClick(c.id)}
                className={`rounded-2xl transition-colors duration-200 overflow-hidden border ${
                  isSelected
                    ? 'bg-white border-black/15 shadow-md p-6'
                    : 'bg-[#F2F2EE] border-black/[0.06] p-4 cursor-pointer'
                }`}
              >
                {!isSelected ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#111110]/50">{c.id}</span>
                      <h3 className="font-serif text-lg text-[#111110]">{c.name}</h3>
                    </div>
                    <span className="font-mono text-xs text-[#9A9A95]">{c.members} peers</span>
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                        <span className="font-mono text-[9px] tracking-widest text-[#9A9A95] uppercase font-bold">
                          {c.track}
                        </span>
                        <span className="font-mono text-xs text-[#111110] font-medium">
                          {c.members} builders
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#111110] font-normal mt-3">
                        {c.name}
                      </h3>
                      <p className="font-sans text-xs text-[#3A3A37]/75 leading-relaxed mt-2">
                        {c.blurb}
                      </p>

                      <div className="mt-4 pt-3 border-t border-black/[0.06] space-y-2">
                        <div className="text-xs font-sans text-[#111110]/80">
                          <span className="font-mono text-[9px] uppercase text-[#9A9A95] block">Rhythm:</span>
                          {c.cadence}
                        </div>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] text-[#111110]/60 bg-[#FAFAF8] border border-black/[0.06] px-1.5 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={chapter.joinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#111110] font-semibold uppercase tracking-wider"
                      >
                        Join Circle <ArrowRight size={12} className="text-[#111110]" />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Editorial Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#3A3A37]/65">
            // Can’t find your domain? You can initiate a new circle at CEC with 3 peers.
          </p>

          <a
            href={chapter.discord}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#111110] font-semibold uppercase tracking-wider hover:gap-3 transition-all"
          >
            <span>Propose a New Circle</span>
            <ArrowRight size={12} className="text-[#111110]" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Karma / Proof of Work ────────────────────────────────────────────────────
const Karma: React.FC = () => (
  <section id="karma" className="bg-[#FAFAF8] border-b border-black/[0.08] relative overflow-hidden">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 sm:py-32">
      {/* Top Grid: Editorial Manifesto + The Physical Karma Passport */}
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        {/* Left Column: Manifesto & Value Proposition */}
        <FadeIn>
          <Label>03 // Proof of Work · The Karma System</Label>
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.05] text-[#111110] tracking-tight">
            No certificates.<br />
            <span className="italic text-[#111110]/35 font-normal">Just verifiable proof.</span>
          </h2>
          <div className="mt-4 flex gap-2">
            <div className="w-8 h-1 bg-[#BEFF62] rounded-full" />
            <div className="w-3 h-1 bg-[#BEFF62]/30 rounded-full" />
          </div>

          <p className="mt-6 text-sm sm:text-base text-[#111110]/75 leading-relaxed max-w-lg">
            Paper diplomas prove you sat in an auditorium. The µLearn Karma system proves you pushed production code, had your pull requests peer-reviewed, and shipped verifiable software.
          </p>

          {/* Three High-Agency Guarantees */}
          <div className="mt-8 space-y-3.5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-[#BEFF62] flex items-center justify-center shrink-0">
                <CheckCircle2 size={13} className="text-[#111110]" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#111110]/80">
                <strong className="text-[#111110] font-semibold">Public Git Repos over Paper Awards:</strong> Every point is backed by a permanent public link.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-[#BEFF62] flex items-center justify-center shrink-0">
                <CheckCircle2 size={13} className="text-[#111110]" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#111110]/80">
                <strong className="text-[#111110] font-semibold">Peer-Reviewed Validation:</strong> No self-certification; community leads inspect your output.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-[#BEFF62] flex items-center justify-center shrink-0">
                <CheckCircle2 size={13} className="text-[#111110]" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#111110]/80">
                <strong className="text-[#111110] font-semibold">Direct Industry Pipeline:</strong> Top Kerala startups filter candidates directly through the public leaderboard.
              </p>
            </div>
          </div>

          {/* Leaderboard CTA with shimmer sweep */}
          <div className="mt-9">
            <a
              href="https://app.mulearn.org"
              target="_blank"
              rel="noreferrer"
              className="group/btn relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#111110] text-[#FAFAF8] font-sans font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Explore Public Leaderboard
              </span>
              <ExternalLink className="relative z-10 w-4 h-4 text-[#BEFF62] transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
            </a>
          </div>
        </FadeIn>

        {/* Right Column: The Builder Proof Credential & Live Ledger Card */}
        <FadeIn delay={0.15}>
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-black/10 p-7 sm:p-9 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Top lime hairline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#BEFF62]" />

            {/* Passport Header */}
            <div className="flex items-center justify-between pb-5 border-b border-black/[0.06]">
              <div>
                <span className="font-mono text-[9px] tracking-[0.22em] text-[#9A9A95] uppercase block font-semibold">
                  µLearn Credential Protocol
                </span>
                <span className="font-mono text-xs text-[#111110] font-bold">
                  CEC-CAMPUS // BATCH '25
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#111110] bg-[#BEFF62]/40 border border-[#BEFF62] px-2.5 py-1 rounded-full font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111110]" />
                <span>VERIFIED LEDGER</span>
              </div>
            </div>

            {/* Middle: Big Karma Score Highlight */}
            <div className="py-6 border-b border-black/[0.06] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] text-[#9A9A95] uppercase tracking-wider block">
                  Total Verifiable Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <FlickerNumber
                    value="2,450"
                    className="font-serif text-5xl sm:text-6xl text-[#111110] font-normal tracking-tight leading-none"
                  />
                  <span className="font-mono text-lg font-bold text-[#111110]">KP</span>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="inline-block font-mono text-[10px] text-[#111110]/80 bg-[#FAFAF8] border border-black/[0.08] px-2.5 py-1 rounded-md font-medium">
                  RANK #14 AT CEC · TOP 10% STATEWIDE
                </span>
              </div>
            </div>

            {/* Recent Verified Output Stream */}
            <div className="py-5 space-y-3">
              <span className="font-mono text-[10px] text-[#9A9A95] uppercase tracking-wider block font-semibold mb-3">
                Recent Verified Output Feed
              </span>

              {karmaLedger.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center justify-between p-3 rounded-xl bg-[#FAFAF8] border border-black/[0.05] hover:border-black/15 transition-colors"
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[9px] font-bold text-[#111110]/60 uppercase tracking-wider">
                        {item.type}
                      </span>
                      <span className="font-mono text-[9px] text-[#9A9A95]">· {item.time}</span>
                    </div>
                    <p className="font-mono text-xs text-[#111110] font-semibold truncate">
                      {item.title}
                    </p>
                    <p className="font-sans text-[11px] text-[#3A3A37]/60 mt-0.5">
                      {item.reviewer}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs font-bold text-[#111110] bg-[#BEFF62] px-2.5 py-1 rounded-md border border-black/10">
                    {item.points}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Footer: Hash & Verification Link */}
            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-mono text-[#9A9A95]">
              <span>HASH // 9f8a..2025 · IMMUTABLE</span>
              <span className="text-[#111110]/70 font-semibold">app.mulearn.org/ledger</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom 3 Karma Proof Channels (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-16 sm:mt-20">
        {karmaChannels.map((channel, idx) => (
          <FadeIn key={channel.id} delay={0.1 + idx * 0.08}>
            <div className="group relative bg-white rounded-2xl border border-black/[0.08] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] hover:-translate-y-1 overflow-hidden">
              {/* Top hairline indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BEFF62] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <span className="font-mono text-xs font-bold text-[#111110]/40">
                    {channel.id} //
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#111110] bg-[#BEFF62] px-2 py-0.5 rounded">
                    {channel.yield}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#111110] font-normal leading-snug tracking-tight mt-5">
                  {channel.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#3A3A37]/70 leading-relaxed mt-2.5">
                  {channel.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                {channel.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-wider text-[#111110]/60 bg-[#FAFAF8] border border-black/[0.06] rounded px-2 py-0.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
)

// ─── Community Moments ────────────────────────────────────────────────────────
const Moments: React.FC = () => {
  const icons = [Calendar, Users, Zap, Star]

  return (
    <section className="bg-white border-y border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24">
        <FadeIn className="mb-14">
          <Label>Community Moments</Label>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-[#111110]">
            We show up,<br /><span className="italic text-[#111110]/25">every time.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ gridAutoRows: '180px' }}>
          {communityMoments.map((m, idx) => {
            const Icon = icons[idx]
            const isWide = m.aspect === 'wide'
            return (
              <FadeIn
                key={idx}
                delay={idx * 0.07}
                className={`${isWide ? 'col-span-2' : 'col-span-1'} row-span-1 h-[180px]`}
              >
                <div
                  className="group relative h-full rounded-xl border border-black/[0.07] overflow-hidden flex flex-col justify-end p-5 cursor-default card-lift"
                  style={{ background: '#F4F4F1' }}
                >
                  {/* Lime top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BEFF62] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Large icon texture */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300">
                    <Icon size={72} className="text-[#111110]" />
                  </div>

                  <div className="relative">
                    <p className="text-sm font-semibold text-[#111110]/80">{m.label}</p>
                    <p className="font-mono text-[9px] text-[#9A9A95] mt-1 uppercase tracking-wider">{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Events ───────────────────────────────────────────────────────────────────
const Events: React.FC = () => (
  <section id="events" className="bg-[#FAFAF8]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-32">
      <FadeIn className="mb-14">
        <Label>Events · 2025</Label>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-[#111110]">
            Our year, in full.
          </h2>
          <span className="font-mono text-xs text-[#9A9A95] uppercase tracking-wider">{events.length} events this year</span>
        </div>
      </FadeIn>

      <div>
        {events.map((e, i) => (
          <FadeIn key={e.title} delay={i * 0.07}>
            <div className="group grid grid-cols-[72px_1fr_auto] sm:grid-cols-[100px_1fr_auto] items-start gap-5 sm:gap-8 border-b border-black/[0.06] py-7 first:border-t transition-all duration-200 hover:bg-white hover:shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] px-4 -mx-4 rounded-xl">
              <div>
                <span className="font-mono text-lg font-medium text-[#9AE637]">{e.when}</span>
                <p className="font-mono text-[9px] text-[#C4C4BE] mt-0.5 uppercase tracking-wider">{e.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#111110] text-base mb-1.5 group-hover:text-[#111110] transition-colors">{e.title}</h3>
                <p className="text-sm text-[#3A3A37]/50 leading-relaxed">{e.note}</p>
              </div>
              <div className="pt-0.5">
                <span className="font-mono text-[9px] border border-black/[0.07] rounded-full px-3 py-1 text-[#9A9A95] uppercase tracking-wider whitespace-nowrap bg-white">
                  {e.type}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
)

// ─── Join CTA ──────────────────────────────────────────────────────────────────
const Join: React.FC = () => (
  <section id="join" className="bg-[#FAFAF8] border-b border-black/[0.08] relative">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 sm:py-32">
      <FadeIn>
        {/* Physical Boarding Pass Card */}
        <div className="relative rounded-3xl bg-[#111110] text-white border border-black/20 overflow-hidden shadow-2xl">
          {/* Top lime hairline indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#BEFF62]" />

          {/* Subtle background ambient glow */}
          <div
            className="absolute -left-20 -top-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(190,255,98,0.12) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            {/* Left: Manifesto & Headline */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-px bg-[#BEFF62]" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#BEFF62] uppercase font-bold">
                  Get Started · Chapter Induction
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.98] text-white tracking-tight">
                Start building.<br />
                <span className="italic text-[#BEFF62] font-normal">Earn karma.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/65 leading-relaxed max-w-lg">
                Create your µLearn account, join the CEC chapter, pick your circle. Karma starts the moment you show up.
              </p>

              {/* 3 Quick Proof Chips */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-white/75 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                  <CheckCircle2 size={12} className="text-[#BEFF62]" />
                  <span>Zero Club Fees</span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-white/75 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                  <CheckCircle2 size={12} className="text-[#BEFF62]" />
                  <span>4 Active Circles</span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-white/75 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                  <CheckCircle2 size={12} className="text-[#BEFF62]" />
                  <span>Public Leaderboard</span>
                </div>
              </div>

              {/* Shimmer Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 mt-8 items-stretch sm:items-center">
                <a
                  href={chapter.joinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#BEFF62] text-[#111110] font-sans font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-lg active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Create your account
                  </span>
                  <ExternalLink className="relative z-10 w-4 h-4 text-[#111110] transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
                </a>

                <a
                  href={chapter.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="group/disc relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/15 font-sans font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer"
                >
                  <span>Join Discord</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover/disc:text-[#BEFF62] group-hover/disc:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Right: The Crafted CEC Builder Pass Card */}
            <div className="relative rounded-2xl bg-[#161614] border border-white/10 p-6 sm:p-7 shadow-xl flex flex-col justify-between">
              {/* Pass Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BEFF62] animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-white font-bold uppercase">
                    CEC Builder Pass
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#BEFF62] bg-[#BEFF62]/15 border border-[#BEFF62]/30 px-2.5 py-0.5 rounded-full font-semibold">
                  BATCH '25
                </span>
              </div>

              {/* Authentic Variable-Width SVG Barcode */}
              <div className="flex items-center justify-center gap-[3px] py-4 opacity-30 select-none" aria-hidden="true">
                {[2, 1, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2].map((w, i) => (
                  <div key={i} className="h-6 bg-white rounded-full" style={{ width: `${w * 1.5}px` }} />
                ))}
              </div>

              {/* 3 Structured Step Cards */}
              <div className="space-y-2.5 my-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="font-mono text-[10px] font-bold bg-[#BEFF62] text-[#111110] px-2 py-0.5 rounded shrink-0">
                    01
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-sans font-semibold text-white leading-tight">Create Account</p>
                    <p className="font-mono text-[11px] text-[#BEFF62]/80 mt-0.5 truncate">app.mulearn.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="font-mono text-[10px] font-bold bg-[#BEFF62] text-[#111110] px-2 py-0.5 rounded shrink-0">
                    02
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-sans font-semibold text-white leading-tight">Connect Campus Chapter</p>
                    <p className="font-sans text-[11px] text-white/50 mt-0.5 truncate">College of Engineering Chengannur</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="font-mono text-[10px] font-bold bg-[#BEFF62] text-[#111110] px-2 py-0.5 rounded shrink-0">
                    03
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-sans font-semibold text-white leading-tight">Pick Circle & Ship</p>
                    <p className="font-sans text-[11px] text-white/50 mt-0.5 truncate">Push first commit to claim Karma</p>
                  </div>
                </div>
              </div>

              {/* Pass Footer */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/60 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62]" />
                  <span>137+ Active Builders</span>
                </div>

                <a
                  href={chapter.linktree}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-[#BEFF62] uppercase tracking-wider font-semibold hover:underline group/link"
                >
                  <span>All Links</span>
                  <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
)

// ─── Footer Components & Icons ───────────────────────────────────────────────
const DiscordIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinktreeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.38-4.005-4.117v9.977h-3.472v-9.977l-4.005 4.117-2.325-2.38 4.229-4.108h-5.937v-3.305h5.908l-4.2-4.005 2.325-2.38 4.005 4.117v-5.627h3.472v5.627z" />
  </svg>
)

const CEC_WORDS = [
  { word: 'College', startIndex: 0 },
  { word: 'of', startIndex: 7 },
  { word: 'Engineering', startIndex: 9 },
  { word: 'Chengannur', startIndex: 20 },
] as const

const CollegeHoverText: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://ceconline.edu"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group/cec relative inline-flex flex-wrap items-baseline text-white font-medium cursor-pointer transition-colors duration-200 ${className}`}
      title="Visit College of Engineering Chengannur Official Website"
      aria-label="College of Engineering Chengannur (opens official website in new tab)"
    >
      <span className="inline-flex flex-wrap items-baseline gap-x-[0.25em]">
        {CEC_WORDS.map(({ word, startIndex }) => (
          <span key={word} className="inline-flex whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const index = startIndex + charIdx
              return (
                <span
                  key={index}
                  className="inline-block transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] text-zinc-300"
                  style={{
                    transform: isHovered ? 'translateY(-2.5px)' : 'translateY(0px)',
                    color: isHovered ? '#BEFF62' : undefined,
                    filter: isHovered ? 'drop-shadow(0 0 8px rgba(190, 255, 98, 0.45))' : 'none',
                    transitionDelay: isHovered ? `${index * 14}ms` : '0ms',
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        ))}
      </span>

      {/* Micro external link indicator */}
      <span
        aria-hidden="true"
        className="inline-flex items-center ml-1 text-[#BEFF62] transition-all duration-200 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translate(0px, -1px)' : 'translate(-4px, 2px)',
        }}
      >
        <ExternalLink className="w-3 h-3" />
      </span>

      {/* Hairline animated underline */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#BEFF62] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"
        style={{
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
    </a>
  )
}

const FOOTER_SOCIALS = [
  { id: 'discord', label: 'Discord Community', href: chapter.discord, icon: DiscordIcon },
  { id: 'instagram', label: 'Instagram', href: chapter.instagram, icon: InstagramIcon },
  { id: 'linkedin', label: 'LinkedIn', href: chapter.linkedin, icon: LinkedinIcon },
  { id: 'github', label: 'GitHub CEC Org', href: 'https://github.com/mulearn-cec', icon: GithubIcon },
  { id: 'linktree', label: 'Linktree Hub', href: chapter.linktree, icon: LinktreeIcon },
]

const FOOTER_CIRCLES = [
  { id: '01', name: 'Web & Apps', count: '48 builders', href: '#circles' },
  { id: '02', name: 'AI & Machine Learning', count: '36 builders', href: '#circles' },
  { id: '03', name: 'Cloud & Security', count: '29 builders', href: '#circles' },
  { id: '04', name: 'Design & Product', count: '24 builders', href: '#circles' },
]

const FOOTER_NAV = [
  { label: 'Ethos & Pillars', href: '#about' },
  { label: 'Proof of Work', href: '#karma' },
  { label: 'Moments Gallery', href: '#moments' },
  { label: 'Campus Timeline', href: '#events' },
  { label: 'Boarding Pass', href: '#join' },
]

// ─── Footer ────────────────────────────────────────────────────────────────────
const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch') return
    const el = footerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--cursor-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--cursor-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--reveal-opacity', '1')
  }

  const handlePointerLeave = () => {
    const el = footerRef.current
    if (!el) return
    el.style.setProperty('--reveal-opacity', '0')
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative bg-[#111110] text-zinc-100 overflow-hidden border-t border-white/10"
    >
      {/* Animated Glowing Top Border Beam */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#BEFF62]/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Interactive Cursor-Revealed Typography (Ultra-Clear & Sharp, No Blurry Glow) */}
      <div
        className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div
          className="font-serif italic font-normal text-8xl md:text-9xl lg:text-[13rem] tracking-tight leading-none whitespace-nowrap transition-opacity duration-150"
          style={{
            maskImage:
              'radial-gradient(circle 320px at var(--cursor-x, -999px) var(--cursor-y, -999px), black 55%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle 320px at var(--cursor-x, -999px) var(--cursor-y, -999px), black 55%, transparent 100%)',
            opacity: 'var(--reveal-opacity, 0)',
          }}
        >
          <span className="text-white">µLearn </span>
          <span className="text-[#BEFF62]">CEC</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Column 1: Brand & Chapter Identity */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Brand Header */}
              <button
                type="button"
                onClick={handleBackToTop}
                className="group/brand flex items-center gap-3 cursor-pointer w-fit mb-5 text-left"
                title="Back to top"
              >
                <div className="w-10 h-10 rounded-md bg-[#BEFF62] flex items-center justify-center font-serif italic text-[#111110] text-2xl font-bold transition-all duration-300 group-hover/brand:scale-105 group-hover/brand:shadow-[0_0_24px_rgba(190,255,98,0.5)]">
                  µ
                </div>
                <div className="flex flex-col -space-y-0.5">
                  <span className="font-serif italic text-2xl text-white tracking-tight group-hover/brand:text-[#BEFF62] transition-colors">
                    µLearn <span className="font-mono text-sm not-italic font-bold text-[#BEFF62]">CEC</span>
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                    CAMPUS CHAPTER // COLLEGE OF ENGG CHENGANNUR
                  </span>
                </div>
              </button>

              {/* Bio with animated College link */}
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans mb-6 max-w-md">
                Autonomous student chapter of GTech µLearn based at <CollegeHoverText />. Students collaborating, writing real code, and proving skill by shipping in public.
              </p>
            </div>

            {/* Social channels with tactile card lift */}
            <div>
              <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-3">
                COMMUNITY CHANNELS
              </p>
              <div className="flex items-center gap-2">
                {FOOTER_SOCIALS.map((soc) => {
                  const Icon = soc.icon
                  return (
                    <a
                      key={soc.id}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      title={soc.label}
                      className="group/soc relative w-10 h-10 flex items-center justify-center bg-white/[0.04] hover:bg-[#BEFF62]/10 border border-white/10 hover:border-[#BEFF62]/60 text-white/70 hover:text-[#BEFF62] rounded-lg transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(190,255,98,0.25)] active:scale-95 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Columns 2 & 3: Mobile 2-column layout (Circles on Left, Explore on Right) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:col-span-6">
            {/* Left: Learning Circles */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEFF62] font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#BEFF62] rounded-full shadow-[0_0_8px_#BEFF62]" />
                <span>CIRCLES</span>
              </div>
              <div className="flex flex-col">
                {FOOTER_CIRCLES.map((circle) => (
                  <a
                    key={circle.id}
                    href={circle.href}
                    className="group flex items-center justify-between py-2 sm:py-2.5 border-b border-white/[0.06] hover:border-[#BEFF62]/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 transform-gpu group-hover:translate-x-1.5 transition-transform duration-200 ease-out">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF62] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 shadow-[0_0_8px_#BEFF62] -mr-1 group-hover:mr-0 shrink-0" />
                      <span className="text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors truncate">
                        {circle.name}
                      </span>
                    </div>
                    <span className="hidden sm:inline font-mono text-[10px] text-white/30 group-hover:text-[#BEFF62] transition-colors shrink-0">
                      {circle.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Platform Navigation */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEFF62] font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#BEFF62] rounded-full shadow-[0_0_8px_#BEFF62]" />
                <span>EXPLORE</span>
              </div>
              <div className="flex flex-col">
                {FOOTER_NAV.map((nav) => (
                  <a
                    key={nav.label}
                    href={nav.href}
                    className="group flex items-center justify-between py-2 sm:py-2.5 border-b border-white/[0.06] hover:border-[#BEFF62]/30 transition-all duration-200"
                  >
                    <span className="text-xs sm:text-sm text-white/60 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200 ease-out truncate pr-1">
                      {nav.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#BEFF62] group-hover:translate-x-1 transition-all duration-200 ease-out shrink-0" />
                  </a>
                ))}
                <a
                  href={chapter.joinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-2 sm:py-2.5 border-b border-white/[0.06] hover:border-[#BEFF62]/30 transition-all duration-200"
                >
                  <span className="text-xs sm:text-sm text-[#BEFF62]/80 group-hover:text-[#BEFF62] group-hover:translate-x-1.5 transition-all duration-200 ease-out truncate pr-1">
                    µLearn App
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BEFF62]/60 group-hover:text-[#BEFF62] transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Credit & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="order-2 sm:order-1 text-center sm:text-left text-[11px] sm:text-xs">
            © {new Date().getFullYear()} µLearn CEC · College of Engineering Chengannur
          </div>

          <div className="order-1 sm:order-2 flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
            <span className="text-[11px] text-white/40 inline-flex items-center gap-1.5">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#BEFF62] fill-[#BEFF62] inline shrink-0" role="img" aria-label="love" />
              <span>by</span>
              <span className="text-white/70 font-medium hover:text-[#BEFF62] transition-colors">
                CEC Builders
              </span>
            </span>

            <button
              type="button"
              onClick={handleBackToTop}
              className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#BEFF62]/15 border border-white/10 hover:border-[#BEFF62]/50 text-[11px] font-mono text-white/70 hover:text-[#BEFF62] transition-all duration-300 active:scale-95 cursor-pointer shadow-sm shrink-0"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App root ──────────────────────────────────────────────────────────────────
export const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReady(true)
      return
    }
    const lenis = new Lenis()
    let id = requestAnimationFrame(function raf(t: number) {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    })
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  return (
    <div className="paper-texture relative min-h-[100dvh] overflow-x-clip bg-[#FAFAF8] font-sans selection:bg-[#BEFF62] selection:text-[#111110]">
      <Preloader onComplete={() => setIsReady(true)} />
      <Navbar />
      <main>
        <Hero isReady={isReady} />
        <Marquee />
        <Community />
        <Circles />
        <Karma />
        <Moments />
        <Events />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
