import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { NAVIGATION_LINKS, NAV_CONFIG } from '@/config/content'
import { Button } from '@/components/common/Button'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]             = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [clickedHref, setClickedHref]           = useState<string | null>(null)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY
          setIsScrolled(prev => {
            if (!prev && y > 48) return true
            if (prev  && y < 20) return false
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    if (isMobileMenuOpen) {
      setClickedHref(href)
      setTimeout(() => {
        setIsMobileMenuOpen(false)
        scrollTo(href)
        setTimeout(() => setClickedHref(null), 350)
      }, 150)
    } else {
      scrollTo(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 transform-gpu">
      <div
        className={`pointer-events-auto relative w-full transition-[max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'max-w-3xl' : 'max-w-7xl'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`relative mx-auto flex flex-col rounded-[28px] transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'py-2 px-3.5 sm:px-5' : 'py-2.5 sm:py-3 px-3 sm:px-5'
          }`}
        >
          {/* Frosted pill background — light mode */}
          <div
            className={`hidden md:block absolute inset-0 rounded-[inherit] -z-10 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? 'opacity-100 bg-white/85 backdrop-blur-xl border border-black/[0.08] shadow-[0_4px_28px_-6px_rgba(0,0,0,0.12)]'
                : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center w-full">

            {/* ── Left: brand ─────────────────────────── */}
            <div className="flex items-center justify-start min-w-0">
              <a
                href="#top"
                onClick={(e) => handleNavClick(e, '#top')}
                className="flex items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BEFF62] p-1 rounded-sm shrink-0 transition-[gap] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] gap-2.5 sm:gap-3"
                aria-label="µLearn CEC home"
              >
                {/* Logo mark */}
                <div className={`flex-shrink-0 flex items-center justify-center rounded-sm bg-[#111110] font-serif italic font-normal text-[#BEFF62] transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-black shadow-xs ${
                  isScrolled ? 'w-8 h-8 text-base' : 'w-9 h-9 sm:w-10 sm:h-10 text-xl'
                }`}>
                  µ
                </div>

                {/* Brand text */}
                <div
                  className={`flex flex-col -space-y-0.5 transition-[max-width,opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isScrolled
                      ? 'max-w-0 opacity-0 -translate-x-2 pointer-events-none'
                      : 'max-w-[280px] opacity-100 translate-x-0'
                  }`}
                  aria-hidden={isScrolled}
                >
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#111110]">
                      {NAV_CONFIG.brandName}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-semibold bg-[#111110] text-[#BEFF62] px-1.5 py-0.5 rounded tracking-wider uppercase">
                      {NAV_CONFIG.brandSuffix}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9A9A95] whitespace-nowrap">
                    {NAV_CONFIG.organizerBadge}
                  </span>
                </div>
              </a>
            </div>

            {/* ── Center: desktop nav ──────────────────── */}
            <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#3A3A37]/70 hover:text-[#111110] transition-colors duration-200 group whitespace-nowrap flex items-center gap-1.5"
                >
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-y-0.5 font-medium">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-tight bg-[#BEFF62] text-[#111110] font-semibold rounded-sm shadow-xs">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-[#BEFF62] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              ))}
            </div>

            {/* ── Right: CTA + hamburger ───────────────── */}
            <div className="flex items-center justify-end gap-2.5">
              <div className="hidden md:flex items-center">
                <Button
                  variant="primary"
                  size="sm"
                  href={NAV_CONFIG.ctaHref}
                  onClick={(e) => handleNavClick(e, NAV_CONFIG.ctaHref)}
                  rightIcon={
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  }
                  className="group !rounded-full !bg-[#111110] !text-white hover:!bg-[#2a2a28] hover:shadow-[0_8px_32px_-6px_rgba(0,0,0,0.3)] transition-all duration-200 !px-4.5 !py-2 !text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap"
                >
                  {NAV_CONFIG.ctaText}
                </Button>
              </div>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(prev => !prev)}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  className="p-2.5 rounded-full bg-[#111110] text-white hover:bg-[#2a2a28] transition-colors duration-200 flex items-center justify-center overflow-hidden relative w-11 h-11 cursor-pointer shrink-0 shadow-sm"
                >
                  <div className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                    <X className="w-5 h-5" />
                  </div>
                  <div className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                    <Menu className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* ── Mobile drawer (light) ────────────────── */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-navigation"
                key="mobile-drawer"
                initial={{ opacity: 0, height: 0, y: -10, scale: 0.97 }}
                animate={{
                  opacity: 1, height: 'auto', y: 0, scale: 1,
                  transition: { height: { duration: 0.35, ease: [0.16,1,0.3,1] }, opacity: { duration: 0.2 } },
                }}
                exit={{
                  opacity: 0, height: 0, y: -10, scale: 0.97,
                  transition: { height: { duration: 0.3, ease: [0.16,1,0.3,1] }, opacity: { duration: 0.2 } },
                }}
                className="overflow-hidden md:hidden mt-2 rounded-[22px] bg-white border border-black/[0.08] shadow-[0_12px_36px_-8px_rgba(0,0,0,0.18)]"
              >
                <div className="flex flex-col space-y-1 p-3">
                  {NAVIGATION_LINKS.map((link, idx) => {
                    const isSelected = clickedHref === link.href
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 border cursor-pointer ${
                          isSelected
                            ? 'bg-[#BEFF62]/25 border-[#BEFF62] text-[#111110]'
                            : 'border-transparent text-[#3A3A37] hover:bg-[#BEFF62]/15 hover:border-[#BEFF62]/40'
                        }`}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#9A9A95]">0{idx + 1}</span>
                            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#111110]">{link.label}</span>
                            {link.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold bg-[#BEFF62] text-[#111110] rounded-sm">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          {link.desc && (
                            <span className="text-[11px] text-[#9A9A95] mt-0.5 ml-5">
                              {link.desc}
                            </span>
                          )}
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-all duration-200 ${isSelected ? 'translate-x-1 text-[#111110]' : 'text-[#C4C4BE] group-hover:translate-x-1 group-hover:text-[#111110]'}`} />
                      </a>
                    )
                  })}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="md"
                      href={NAV_CONFIG.ctaHref}
                      onClick={(e) => handleNavClick(e, NAV_CONFIG.ctaHref)}
                      className="group w-full justify-center !rounded-xl !bg-[#111110] !text-white hover:!bg-[#2a2a28] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] transition-all duration-200"
                      rightIcon={
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      }
                    >
                      {NAV_CONFIG.ctaText}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
