import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, useInView } from 'motion/react'
import {
  ExternalLink,
  ArrowRight,
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
  karmaSteps,
  communityMoments,
} from '@/config/content'
import { Navbar } from '@/components/Navbar'
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
const Hero: React.FC = () => (
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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

          {/* Second line: Ship in public. (Natural muted tone, stays in its tone on hover) */}
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
        </h1>

        {/* Lime highlight bar under first line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
          className="mt-3 h-1.5 w-32 bg-[#BEFF62] rounded-full"
        />

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-14 sm:mt-18"
      >
        <div className="border-t border-black/[0.07] pt-8 sm:pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 sm:gap-x-12 lg:gap-x-16">
            {stats.map((s, idx) => (
              <div key={s.label} className="group">
                {/* Number in Hero serif */}
                <div>
                  <FlickerNumber
                    value={s.value}
                    delay={idx * 50}
                    className="font-serif text-[2.6rem] sm:text-[3.25rem] lg:text-[3.75rem] font-normal tracking-tight leading-[0.9] text-[#111110]"
                  />
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

        {/* Desktop: Expanding Horizontal Accordion Deck */}
        <FadeIn delay={0.1} className="hidden lg:flex gap-3.5 h-[500px]">
          {circles.map((c) => {
            const isSelected = activeCircle === c.id

            return (
              <motion.div
                key={c.id}
                layout
                onClick={() => setActiveCircle(c.id)}
                onMouseEnter={() => setActiveCircle(c.id)}
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                className={`relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'flex-[3.5] bg-white border border-black/10 p-8 sm:p-9 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)]'
                    : 'flex-1 bg-[#F2F2EE] hover:bg-[#EBEBE5] border border-black/[0.06] p-6'
                }`}
              >
                {/* Top lime accent on active */}
                {isSelected && (
                  <motion.div
                    layoutId="circle-active-bar"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#BEFF62]"
                  />
                )}

                {/* Collapsed State: Vertical Typography */}
                {!isSelected ? (
                  <div className="h-full flex flex-col justify-between items-center py-2 select-none">
                    <span className="font-mono text-xs font-semibold text-[#111110]/40">
                      {c.id}
                    </span>

                    <span className="font-serif text-2xl text-[#111110] tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                      {c.name}
                    </span>

                    <span className="font-mono text-[10px] text-[#111110]/50 tracking-wider">
                      {c.members}p
                    </span>
                  </div>
                ) : (
                  /* Expanded Active State: Deep Editorial Showcase */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
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
              </motion.div>
            )
          })}
        </FadeIn>

        {/* Mobile: Sleek Vertical Accordion */}
        <div className="lg:hidden space-y-3">
          {circles.map((c) => {
            const isSelected = activeCircle === c.id

            return (
              <div
                key={c.id}
                onClick={() => setActiveCircle(c.id)}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
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
                  <div>
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
                  </div>
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
  <section id="karma" className="bg-[#FAFAF8]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-32">
      <div className="grid sm:grid-cols-[1fr_1.1fr] gap-16 items-start">
        {/* Left */}
        <FadeIn>
          <Label>Proof of Work</Label>
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-[#111110] mb-6">
            No certificates.<br /><span className="italic text-[#111110]/25">Just karma.</span>
          </h2>
          <p className="text-sm text-[#3A3A37]/55 leading-relaxed mb-10 max-w-sm">
            The µLearn karma system is public, verifiable proof of your contribution. Every task completed, every project shipped — it all goes on a leaderboard anyone can see.
          </p>

          {/* Karma badge mockup */}
          <div className="inline-flex flex-col items-center gap-3 border border-black/[0.08] rounded-2xl px-10 py-7 bg-white shadow-[0_2px_24px_-4px_rgba(0,0,0,0.08)] card-lift">
            <div className="w-10 h-10 rounded-full bg-[#BEFF62] flex items-center justify-center">
              <Zap size={18} className="text-[#111110]" />
            </div>
            <FlickerNumber value="2.4K" delay={200} className="font-serif text-5xl leading-none" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-[#BEFF62]' : 'bg-[#E8E8E4]'}`} />
              ))}
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] text-[#9A9A95] uppercase tracking-widest">Karma Score</p>
              <p className="font-mono text-[9px] text-[#BEFF62] mt-0.5">Top 15% at CEC</p>
            </div>
          </div>
        </FadeIn>

        {/* Right — 4-step */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col gap-0">
            {karmaSteps.map((s, i) => (
              <div key={s.step} className="flex gap-5 pb-8 last:pb-0 relative">
                {i < karmaSteps.length - 1 && (
                  <div className="absolute left-[17px] top-10 bottom-0 w-px bg-black/[0.07]" />
                )}
                <div className="shrink-0 w-9 h-9 rounded-full border-2 border-[#BEFF62] bg-white flex items-center justify-center">
                  <span className="font-mono text-[10px] font-medium text-[#111110]">{s.step}</span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-semibold text-[#111110] mb-1.5">{s.label}</h3>
                  <p className="text-sm text-[#3A3A37]/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
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
  <section id="join" className="bg-[#111110]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-32">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl bg-[#BEFF62] px-8 py-20 sm:px-20 text-center">
          {/* Fine grid on lime */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-[#111110]/30" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#111110]/50 uppercase">Get started</span>
            </div>
            <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.92] text-[#111110] mb-6">
              Start building.
              <br />
              <span className="italic opacity-40">Earn karma.</span>
            </h2>
            <p className="text-[#111110]/55 text-sm max-w-sm mx-auto mb-10 leading-relaxed">
              Create your µLearn account, join the CEC chapter, pick your circle. Karma starts the moment you show up.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={chapter.joinUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111110] text-white px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-[#2a2a28] hover:shadow-[0_8px_32px_-6px_rgba(0,0,0,0.5)] font-mono uppercase tracking-wider"
              >
                Create your account
                <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={chapter.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#111110]/20 px-8 py-4 text-sm font-mono uppercase tracking-wider text-[#111110]/60 transition-all duration-200 hover:border-[#111110]/40 hover:text-[#111110]"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
)

// ─── Footer ────────────────────────────────────────────────────────────────────
const Footer: React.FC = () => (
  <footer className="bg-[#111110] border-t border-white/[0.05]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-sm bg-[#BEFF62] flex items-center justify-center font-serif italic text-[#111110] text-lg">µ</div>
            <span className="font-mono text-sm text-white/50">Learn <span className="text-[#BEFF62]">CEC</span></span>
          </div>
          <p className="text-xs text-white/25 max-w-[200px] leading-relaxed">Campus chapter of GTech µLearn at College of Engineering, Chengannur.</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-8">
          <div>
            <p className="font-mono text-[9px] tracking-widest text-white/20 uppercase mb-4">Community</p>
            <div className="flex flex-col gap-2.5">
              {[['Discord', chapter.discord], ['Instagram', chapter.instagram], ['LinkedIn', chapter.linkedin]].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-widest text-white/20 uppercase mb-4">Platform</p>
            <div className="flex flex-col gap-2.5">
              <a href={chapter.joinUrl} target="_blank" rel="noreferrer" className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">µLearn App</a>
              <a href="#circles" className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">Circles</a>
              <a href="#karma"   className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">Karma</a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-widest text-white/20 uppercase mb-4">Chapter</p>
            <div className="flex flex-col gap-2.5">
              <a href="#about"            className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">Manifesto</a>
              <a href="#events"           className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">Timeline</a>
              <a href="#join"             className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">Join</a>
              <a href={chapter.linktree} target="_blank" rel="noreferrer" className="text-xs text-white/30 hover:text-[#BEFF62] transition-colors">All links</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[10px] text-white/15 uppercase tracking-widest">© {new Date().getFullYear()} µLearn CEC</p>
        <p className="font-mono text-[10px] text-white/10">College of Engineering, Chengannur · Kerala, India</p>
      </div>
    </div>
  </footer>
)

// ─── App root ──────────────────────────────────────────────────────────────────
export const App: React.FC = () => {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis()
    let id = requestAnimationFrame(function raf(t: number) {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    })
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  return (
    <div className="paper-texture relative min-h-[100dvh] overflow-x-clip bg-[#FAFAF8] font-sans selection:bg-[#BEFF62] selection:text-[#111110]">
      <Navbar />
      <main>
        <Hero />
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
