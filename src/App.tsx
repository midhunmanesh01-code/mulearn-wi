import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Preloader } from '@/components/Preloader'
import { Glass } from '@/components/Glass'
import { MagicRings } from '@/components/MagicRings'
import { SplitText } from '@/components/SplitText'
import { chapter, circles, events, stats } from '@/config/content'

const links = [
  { href: '#circles', label: 'Circles' },
  { href: '#events', label: 'Events' },
  { href: '#join', label: 'Join' },
]

const Navbar: React.FC = () => (
  <Glass className="fixed left-1/2 top-4 z-50 flex w-[min(92%,900px)] -translate-x-1/2 items-center justify-between rounded-full py-2.5 pl-6 pr-2.5">
    <a href="#top" className="font-display text-lg font-bold tracking-tight">
      µLearn <span className="text-cyan">CEC</span>
    </a>
    <nav className="flex items-center gap-1 text-sm">
      {links.slice(0, 2).map((l) => (
        <a key={l.href} href={l.href} className="hidden rounded-full px-4 py-2 text-white/70 transition hover:bg-white/10 hover:text-white sm:block">{l.label}</a>
      ))}
      <a href="#join" className="rounded-full bg-violet px-5 py-2 font-semibold text-white shadow-[0_8px_24px_-8px_#8b5cf6] transition hover:-translate-y-0.5">Join</a>
    </nav>
  </Glass>
)

const Hero: React.FC<{ readonly isReady: boolean }> = ({ isReady }) => (
  <section id="top" className="relative grid min-h-[100dvh] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10">
    <div className="absolute inset-0" aria-hidden="true">
      <MagicRings color="#8b5cf6" colorTwo="#59d6e8" ringCount={6} motion="breathe" speed={0.8}
        lineThickness={1.6} glow={1.2} baseRadius={0.42} radiusStep={0.08} opacity={0.75}
        interactive followMouse mouseInfluence={0.25} clickBurst intro={false} theme="dark" maxDevicePixelRatio={1.5} />
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,transparent_30%,#0b1f3f_100%)]" aria-hidden="true" />
    <div className="relative mx-auto w-full max-w-6xl">
      <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.92] tracking-tight">
        {isReady ? (
          <>
            <SplitText tag="span" text="Learn" className="text-white" effect="rise" splitType="chars" delay={45} duration={1} trigger="load" hoverEffect="lift" />{' '}
            <SplitText tag="span" text="together" className="text-violet" effect="rise" splitType="chars" delay={45} duration={1} trigger="load" startDelay={250} hoverEffect="lift" />
          </>
        ) : (
          <span className="invisible">Learn together</span>
        )}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-white/70">{chapter.tagline}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#join" className="rounded-full bg-violet px-7 py-3.5 font-semibold shadow-[0_12px_32px_-10px_#8b5cf6] transition hover:-translate-y-0.5">Join the chapter</a>
        <a href="#circles" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:-translate-y-0.5">Browse circles</a>
      </div>
      <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-3">
        {stats.map((s) => (
          <Glass key={s.label} className="rounded-2xl p-4 sm:p-5">
            <dt className="font-display text-3xl font-bold sm:text-4xl">{s.value}</dt>
            <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</dd>
          </Glass>
        ))}
      </dl>
    </div>
  </section>
)

const Circles: React.FC = () => (
  <section id="circles" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
    <h2 className="mb-12 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Pick a circle and start building</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      {circles.map((c) => (
        <Glass key={c.name} tabIndex={0} className="rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5">
          <h3 className="font-display text-2xl font-bold">{c.name}</h3>
          <p className="mt-3 text-white/65">{c.blurb}</p>
          <p className="mt-6 text-sm font-semibold text-cyan">{c.members} members</p>
        </Glass>
      ))}
    </div>
  </section>
)

const Events: React.FC = () => (
  <section id="events" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
    <h2 className="mb-12 font-display text-4xl font-bold tracking-tight sm:text-5xl">Our year</h2>
    <ol className="relative space-y-5 border-l border-white/15 pl-8">
      {events.map((e) => (
        <li key={e.title} className="relative">
          <span className="absolute -left-[39px] top-7 h-3 w-3 rounded-full bg-cyan shadow-[0_0_18px_#59d6e8]" aria-hidden="true" />
          <Glass className="rounded-3xl p-6 sm:flex sm:items-center sm:gap-8">
            <time className="font-heading text-3xl font-bold uppercase text-violet sm:w-20">{e.when}</time>
            <div><h3 className="font-display text-xl font-bold">{e.title}</h3><p className="mt-1 text-white/65">{e.note}</p></div>
          </Glass>
        </li>
      ))}
    </ol>
  </section>
)

const Join: React.FC = () => (
  <section id="join" className="mx-auto max-w-5xl px-6 pb-28 pt-12 sm:px-10">
    <Glass className="rounded-[2rem] px-6 py-16 text-center sm:py-20">
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Ready to learn out loud?</h2>
      <p className="mx-auto mt-4 max-w-md text-white/65">Create your µLearn account, then tell us which circle you want.</p>
      <a href={chapter.joinUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-violet px-8 py-4 font-semibold shadow-[0_12px_32px_-10px_#8b5cf6] transition hover:-translate-y-0.5">Create your account</a>
    </Glass>
  </section>
)

export const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis()
    let id = requestAnimationFrame(function raf(t: number) { lenis.raf(t); id = requestAnimationFrame(raf) })
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  return (
    <>
      <Preloader onComplete={() => setIsReady(true)} />
      <div className="relative min-h-[100dvh] overflow-x-clip bg-night font-sans selection:bg-violet selection:text-white">
        <div className="pointer-events-none fixed -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-violet/15 blur-[130px]" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero isReady={isReady} />
          <Circles />
          <Events />
          <Join />
        </main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">© {new Date().getFullYear()} {chapter.name}</footer>
      </div>
    </>
  )
}

export default App
