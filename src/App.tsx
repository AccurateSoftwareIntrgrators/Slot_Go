import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const sections = {
  hero: 'hero',
  features: 'features',
  howItWorks: 'how-it-works',
  story: 'story',
  scale: 'scale',
  founders: 'founders',
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const navLinks = [
  { label: 'Features', id: sections.features },
  { label: 'How it works', id: sections.howItWorks },
  { label: 'Scaling', id: sections.scale },
  { label: 'Founders', id: sections.founders },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen w-full bg-slotgo-dark text-white font-sans">
      {/* Nav - full width */}
      <header className="sticky top-0 z-30 w-full backdrop-blur bg-slotgo-dark/80 border-b border-white/5">
        <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => handleNavClick(sections.hero)}
          >
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <img
                src="/logo.PNG"
                alt="SlotGo logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">
                Slot<span className="text-slotgo-green">Go</span>
              </p>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.2em]">
                Sports. Structured.
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navLinks.map(({ label, id }) => (
              <button key={id} onClick={() => handleNavClick(id)} className="hover:text-white transition-colors">
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(sections.hero)}
              className="rounded-full bg-slotgo-green px-4 py-2 text-xs font-semibold text-slotgo-dark shadow-glow-green hover:brightness-110 transition-all"
            >
              Get early access
            </button>
          </div>

          {/* Mobile / tablet: menu button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile / tablet overlay menu - fixed, does not occupy layout space */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slotgo-dark/98 backdrop-blur-md md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex h-full w-full flex-col">
              <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
                <span className="text-sm font-semibold text-white/80">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition-colors hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-4 py-6 sm:px-6">
                {navLinks.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className="rounded-xl py-3 px-4 text-left text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick(sections.hero)}
                  className="mt-4 rounded-xl bg-slotgo-green py-3 px-4 text-left text-sm font-semibold text-slotgo-dark"
                >
                  Get early access
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full px-4 pb-16 pt-10 sm:px-6 lg:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <section id={sections.hero} className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
              >
                Turf booking • Matchmaking • Tournaments
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                One app to book turfs,{' '}
                <span className="bg-gradient-to-r from-slotgo-green to-slotgo-accent bg-clip-text text-transparent">
                  build teams
                </span>
                , and run tournaments.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-xl text-sm text-white/70 sm:text-base"
              >
                SlotGo is a sports-tech platform by Skynex Technology Solutions that digitizes bookings, payments,
                matchmaking and tournament management—so players, organizers and turf owners can focus on the game, not
                the admin.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap items-center gap-3"
              >
                <button className="group flex items-center gap-2 rounded-full bg-slotgo-green px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-slotgo-dark shadow-glow-green transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,212,139,0.75)]">
                  Get the app soon
                  <span className="text-[10px] transition-transform group-hover:translate-x-0.5">▸</span>
                </button>
                <button
                  onClick={() => scrollTo(sections.howItWorks)}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur hover:border-slotgo-green/60 hover:text-white transition-all"
                >
                  See how SlotGo works
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 text-xs text-white/60"
              >
                <div>
                  Built for{' '}
                  <span className="font-semibold text-white">
                    players, organizers & turf owners
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="h-1 w-1 self-center rounded-full bg-slotgo-green" />
                  <span>Secure payments & real-time slots</span>
                </div>
              </motion.div>
            </div>

            {/* Mocked phone UI */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative h-[460px] w-60 rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-slotgo-gray to-slotgo-dark p-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-x-10 top-2 h-1.5 rounded-full bg-black/60" />
                <div className="mt-6 h-full overflow-hidden rounded-3xl bg-black/70 ring-1 ring-white/5">
                  <div className="h-full bg-gradient-to-b from-slotgo-dark via-[#050b1a] to-black p-4 text-[11px]">
                    <div className="mb-3 flex items-center justify-between text-[10px] text-white/60">
                      <span>Today · 7:30 PM</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-slotgo-green">
                        3 slots left
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-white">
                      Elite 5s Football Turf · Central City
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      5v5 · 60 mins · Turf · Lights included
                    </p>

                    <div className="mt-4 space-y-2">
                      {['7:30 PM', '8:30 PM', '9:30 PM'].map((time, i) => (
                        <div
                          key={time}
                          className={`flex items-center justify-between rounded-2xl border px-3 py-2 ${i === 0
                            ? 'border-slotgo-green/70 bg-slotgo-green/10 shadow-glow-green'
                            : 'border-white/10 bg-white/5'
                            }`}
                        >
                          <div>
                            <p className="text-[11px] font-semibold text-white">{time}</p>
                            <p className="text-[9px] text-white/60">₹1,200 · 10 players</p>
                          </div>
                          <button
                            className={`rounded-full px-3 py-1 text-[9px] font-semibold ${i === 0
                              ? 'bg-slotgo-green text-slotgo-dark'
                              : 'bg-white/8 text-white/80'
                              }`}
                          >
                            {i === 0 ? 'Book' : 'Hold'}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl bg-gradient-to-r from-slotgo-green/10 via-slotgo-accent/10 to-transparent p-3 ring-1 ring-white/5">
                      <p className="text-[10px] font-semibold text-white">
                        Smart matchmaking
                      </p>
                      <p className="mt-1 text-[9px] text-white/60">
                        SlotGo finds players at your skill level to fill your team automatically.
                      </p>
                    </div>

                    <div className="mt-4 flex justify-between text-[9px] text-white/50">
                      <span>Skynex Technology Solutions</span>
                      <span>Powered by SlotGo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Features */}
          <section id={sections.features} className="mt-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-white sm:text-xl"
            >
              What is SlotGo?
            </motion.h2>
            <p className="max-w-3xl text-sm text-white/70 sm:text-base">
              SlotGo is a centralized sports booking and management platform that connects turfs, players, teams and
              organizers in one structured ecosystem.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: 'Instant turf booking',
                  body: 'Browse nearby turfs, view real-time availability and lock slots in seconds—no more endless calls or WhatsApp threads.',
                },
                {
                  title: 'Secure online payments',
                  body: 'Collect and split payments seamlessly so owners, captains and players always know what is due and what is settled.',
                },
                {
                  title: 'Matches & tournaments',
                  body: 'Create or join open matches, build recurring leagues and run tournaments with fixtures, tables and results in one place.',
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-2xl border border-white/8 bg-white/5 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm"
                >
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-xs text-white/65 sm:text-sm">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section id={sections.howItWorks} className="mt-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-white sm:text-xl"
            >
              How SlotGo works
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-start">
              <ol className="space-y-4 text-sm text-white/75">
                {[
                  {
                    title: 'Players & teams',
                    body: 'Discover turfs, see live slot availability, create matches, invite teammates, and join tournaments—all within the app.',
                  },
                  {
                    title: 'Turf owners',
                    body: 'Publish slots, control pricing, track occupancy and manage payments from a single dashboard instead of manual registers.',
                  },
                  {
                    title: 'Organizers & academies',
                    body: 'Design league formats, schedule fixtures, handle registrations and manage leaderboards with full transparency.',
                  },
                ].map((step, idx) => (
                  <li key={step.title} className="flex gap-3">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs font-semibold text-slotgo-green ring-1 ring-slotgo-green/40">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-xs text-white/65 sm:text-sm">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="space-y-3 rounded-2xl border border-dashed border-slotgo-green/40 bg-slotgo-gray/40 p-4 text-xs text-white/70">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slotgo-green">
                  The problem SlotGo solves
                </p>
                <p>
                  We started with a simple observation—grassroots sports were still running on phone calls, WhatsApp
                  groups and physical registers.
                </p>
                <p>
                  That meant double bookings, missing payments, confused schedules and missed opportunities for players.
                  SlotGo turns that chaos into a reliable, digital system.
                </p>
              </div>
            </div>
          </section>

          {/* Story / Why it started */}
          <section id={sections.story} className="mt-20 grid gap-8 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold text-white sm:text-xl">Why SlotGo exists</h2>
              <p className="text-sm text-white/70 sm:text-base">
                SlotGo was built because we believe sports deserve structure. Grassroots infrastructure, local leagues
                and everyday turfs should run with the same efficiency as professional sport.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {[
                  'Digitize grassroots sports infrastructure across cities.',
                  'Bring full transparency to bookings and payments.',
                  'Simplify tournament and league operations end-to-end.',
                  'Help players find competitive, well-organized matches easily.',
                  'Empower turf owners with tools, not spreadsheets.',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slotgo-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.7)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slotgo-green">
                How it started
              </p>
              <p className="text-sm text-white/75">
                We saw turfs and grounds struggling with unorganized booking systems. Phone calls, scattered WhatsApp
                chats and paper registers made it hard to track who was playing, who had paid, and when slots were open.
              </p>
              <p className="text-sm text-white/75">
                SlotGo turns that manual process into an intelligent, digital workflow that lets every stakeholder see
                exactly what is happening in real time.
              </p>
            </motion.div>
          </section>

          {/* Scaling strategy */}
          <section id={sections.scale} className="mt-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-white sm:text-xl"
            >
              How we plan to scale SlotGo
            </motion.h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border border-white/8 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">City-by-city expansion</h3>
                <p className="text-xs text-white/70 sm:text-sm">
                  Onboard turfs and sports facilities across key cities, then gradually expand into new clusters, building
                  strong local supply before unlocking demand.
                </p>
                <p className="text-xs text-white/70 sm:text-sm">
                  As more players join in each city, SlotGo’s value compounds—more matches, more competition, more
                  reasons to keep playing.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-slotgo-green/30 bg-gradient-to-br from-slotgo-green/10 via-slotgo-accent/5 to-transparent p-4">
                <h3 className="text-sm font-semibold text-white">Network, tech & partnerships</h3>
                <ul className="space-y-2 text-xs text-white/75 sm:text-sm">
                  <li>• Strong matchmaking loops as teams, players and organizers converge on one platform.</li>
                  <li>• Continuous upgrades in automation, analytics and performance for owners and organizers.</li>
                  <li>• Partnerships with academies, event companies and local leagues to power full ecosystems.</li>
                  <li>• Multi-sport workflows beyond a single game, creating a full-stack sports infrastructure layer.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Founders */}
          <section id={sections.founders} className="mt-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-white sm:text-xl"
            >
              Founders & vision
            </motion.h2>

            <p className="max-w-3xl text-sm text-white/70 sm:text-base">
              SlotGo is developed by Skynex Technology Solutions Private Limited and led by founders committed to building
              a scalable, technology-driven sports ecosystem that empowers players, businesses and communities.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  name: 'Karuppiah Subbiah',
                  role: 'Co-Founder',
                  note: 'Driving the product vision to organize grassroots sports infrastructure across India.',
                },
                {
                  name: 'Vishal Kashi Raja',
                  role: 'Co-Founder',
                  note: 'Focused on partnerships, growth and building a sustainable sports-tech ecosystem.',
                },
              ].map((f) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-gradient-to-br from-slotgo-green to-slotgo-accent text-center text-[11px] font-semibold leading-9 text-slotgo-dark shadow-glow-green">
                    {f.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.name}</p>
                    <p className="text-xs text-slotgo-green/90">{f.role}</p>
                    <p className="mt-2 text-xs text-white/70 sm:text-sm">{f.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 rounded-3xl border border-slotgo-green/40 bg-gradient-to-r from-slotgo-green/15 via-slotgo-accent/10 to-transparent p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slotgo-green">
              Coming soon
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Be the first to know when SlotGo launches in your city.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/75">
              We are rolling out SlotGo city by city. Share SlotGo with turf owners, academies and organizers you know to
              bring structured sports to your community faster.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs">
              <button className="rounded-full bg-slotgo-dark px-5 py-2 font-semibold text-slotgo-green ring-1 ring-slotgo-green/60 hover:bg-black transition-colors">
                Talk to Skynex team
              </button>
              <button className="rounded-full bg-white/10 px-5 py-2 font-medium text-white/90 hover:bg-white/15 transition-colors">
                Download SlotGo (soon)
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-white/10 bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] text-white/60">
              © {new Date().getFullYear()} Skynex Technology Solutions Private Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-[11px]">
              <a
                href="/privacy-policy"
                className="text-white/60 transition-colors hover:text-slotgo-green"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="text-white/60 transition-colors hover:text-slotgo-green"
              >
                Terms & Conditions
              </a>
              <a
                href="/delete-account"
                className="text-white/60 transition-colors hover:text-red-400"
              >
                Delete Account
              </a>
            </div>
          </div>
          <p className="text-[10px] text-white/40">
            SlotGo · A structured, digital layer for sports bookings, payments and competition.
          </p>
        </div>
      </footer>



    </div>
  )
}

export default App

