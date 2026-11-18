import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight, ExternalLink, ArrowRight, Zap, Users, Calendar, Star } from 'lucide-react'
import { chapter, stats, circles, events, pillars, karmaSteps, communityMoments } from '@/config/content'
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
          <div className="flex flex-wrap gap-3">
            <a
              href={chapter.joinUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#111110] text-white px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-[#2a2a28] hover:shadow-[0_8px_32px_-6px_rgba(0,0,0,0.3)] font-mono uppercase tracking-wider"
            >
              Join the chapter
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#circles"
              className="flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-7 py-3.5 text-sm font-mono uppercase tracking-wider text-[#3A3A37]/60 transition-all duration-200 hover:border-black/20 hover:text-[#111110]"
            >
              Explore circles
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
  'PEER LEARNING', 'BUILD IN PUBLIC', 'OPEN SOURCE', 'KARMA SYSTEM',
  'NO HIERARCHY', 'REAL PROJECTS', 'EARN BY DOING', 'CEC CAMPUS',
  'LEARNING CIRCLES', 'PROOF OF WORK', 'FOCES CEC', 'IEDC BOOTCAMP',
]
const Marquee: React.FC = () => {
  const doubled = [...TICKER, ...TICKER]
  return (
    <div className="border-y border-black/[0.07] overflow-hidden py-3.5 select-none bg-white">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[10px] tracking-[0.18em] text-[#111110]/20 uppercase px-5 whitespace-nowrap">
            {item}<span className="ml-5 text-[#BEFF62]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Community / About ────────────────────────────────────────────────────────
const Community: React.FC = () => (
  <section id="about" className="bg-[#FAFAF8]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-32">
      <div className="grid sm:grid-cols-[1fr_1fr] gap-16 sm:gap-24 items-start">
        {/* Left */}
        <FadeIn>
          <Label>About µLearn CEC</Label>
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-[#111110]">
            A community<br />that compounds.
          </h2>
          <div className="mt-5 flex gap-2">
            <div className="w-8 h-1 bg-[#BEFF62] rounded-full" />
            <div className="w-3 h-1 bg-[#BEFF62]/30 rounded-full" />
          </div>
          <p className="mt-7 text-sm text-[#3A3A37]/55 leading-[1.9] max-w-sm">
            GTech µLearn is Kerala's largest peer-learning movement — built on the idea that the best education happens when curious people get out of classrooms and build real things together.
          </p>
          <p className="mt-4 text-sm text-[#3A3A37]/55 leading-[1.9] max-w-sm">
            The CEC chapter connects students across all years and domains through learning circles, open-source sprints, hackathons, and a karma system that rewards real, verifiable work.
          </p>
          <a
            href={chapter.linktree}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 font-mono text-xs text-[#111110] uppercase tracking-wider border-b border-[#BEFF62] pb-0.5 hover:gap-3 transition-all duration-200"
          >
            All our links <ArrowRight size={12} />
          </a>
        </FadeIn>

        {/* Right — pillars */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col divide-y divide-black/[0.06]">
            {pillars.map((p) => (
              <div key={p.id} className="py-7 first:pt-0 last:pb-0 group cursor-default">
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 w-7 h-7 rounded-sm bg-[#BEFF62] flex items-center justify-center shrink-0">
                    <span className="font-mono text-[9px] font-medium text-[#111110]">{p.id}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#111110] mb-2">{p.title}</h3>
                    <p className="text-sm text-[#3A3A37]/50 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
)

// ─── Learning Circles ─────────────────────────────────────────────────────────
const Circles: React.FC = () => (
  <section id="circles" className="bg-[#111110]">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24">
      <FadeIn className="mb-14">
        {/* Dark-mode label variant */}
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-4 h-px bg-[#BEFF62]" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">Learning Circles</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-white">
            Pick a circle.<br /><span className="italic text-white/25">Start building.</span>
          </h2>
          <p className="text-sm text-white/30 max-w-xs leading-relaxed">
            Small groups, big output. Weekly standups, real codebases, shared projects.
          </p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
        {circles.map((c, i) => (
          <FadeIn key={c.id} delay={i * 0.06}>
            <div className="group relative bg-[#111110] p-8 sm:p-9 transition-colors duration-300 hover:bg-[#161614] h-full flex flex-col cursor-default">
              {/* Lime top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BEFF62] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none select-none" role="img" aria-label={c.name}>{c.emoji}</span>
                  <span className="font-mono text-[9px] text-[#BEFF62]/50 tracking-widest">{c.id}</span>
                </div>
                <span className="font-mono text-[9px] text-white/20 tracking-wider">{c.members} members</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#BEFF62] transition-colors duration-300">{c.name}</h3>
              <p className="text-sm text-white/35 leading-relaxed mb-7 flex-1">{c.blurb}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] tracking-wider text-white/20 border border-white/[0.07] rounded-sm px-2 py-1 uppercase group-hover:border-[#BEFF62]/20 group-hover:text-white/35 transition-colors duration-200">
                    {t}
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
