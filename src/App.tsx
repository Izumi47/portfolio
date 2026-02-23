import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronUp,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
  Workflow,
  Zap,
} from 'lucide-react'

type Metric = {
  label: string
  target: number
  kind: 'plus' | 'plain' | 'thousands-s' | 'years-plus'
}

const NAV_ITEMS = [
  { label: 'Impact', href: '#impact' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const METRICS: Metric[] = [
  { target: 200000, label: 'PO items automated', kind: 'plus' },
  { target: 8, label: 'APAC markets supported', kind: 'plain' },
  { target: 1000, label: 'hours reduced from manual work', kind: 'thousands-s' },
  { target: 2, label: 'enterprise operations impact', kind: 'years-plus' },
]

const CASE_STUDIES = [
  {
    title: 'SAP → Coupa Purchase Order Migration',
    role: 'Automation Lead',
    problem: 'Manual PO migration was slow, error-prone, and blocked operational throughput.',
    solution:
      'Engineered Python extraction and transformation pipeline to convert SAP outputs into Coupa-ready upload formats.',
    impact: 'Scaled processing up to 200,000 PO items with dramatic cycle-time reduction.',
    stack: 'Python · SAP · Coupa · Excel Automation',
  },
  {
    title: 'APAC Cashflow Forecasting M+6 Dashboard',
    role: 'Primary Developer',
    problem: 'Forecasting visibility across regional markets was fragmented and delayed decisions.',
    solution:
      'Built Power BI + Python data flows to centralize six-month forecasts, anomaly flags, and real-time insights.',
    impact: 'Unified reporting across 8 markets and removed thousands of hours of repetitive work.',
    stack: 'Power BI · Python · SAP Data Pipeline',
  },
  {
    title: 'Secure Vault Android App',
    role: 'Solo Developer',
    problem: 'Sensitive personal media required stronger privacy than standard storage apps provide.',
    solution:
      'Developed calculator-disguised vault with encrypted media handling and layered covert authentication.',
    impact: 'Delivered secure-by-design user experience with practical stealth and protection controls.',
    stack: 'Android · Encryption · Access Control',
  },
  {
    title: 'Game Save Editor & Binary Parser',
    role: 'Systems Engineer',
    problem: 'Encrypted proprietary save formats made edits difficult for non-technical users.',
    solution:
      'Built cross-platform Go/Fyne GUI with binary parsing, encryption/decryption, and JSON serialization.',
    impact: 'Turned low-level data operations into a fast visual workflow with version-control-ready output.',
    stack: 'Go · Fyne · Binary Parsing · JSON',
  },
]

const PLAYBOOK = [
  {
    title: 'Diagnose Bottlenecks',
    detail:
      'Map the manual process, identify high-friction steps, and define measurable baseline metrics.',
  },
  {
    title: 'Engineer The Workflow',
    detail:
      'Build robust automation scripts, validation logic, and reusable templates for reliable execution.',
  },
  {
    title: 'Scale & Hand-off',
    detail:
      'Deploy dashboards and documentation so teams can monitor, operate, and evolve confidently.',
  },
]

const DIFFERENTIATORS = [
  'Builds automation that scales from local scripts to cross-market enterprise processes.',
  'Combines software engineering depth with BI storytelling for faster business decisions.',
  'Ships secure, production-focused systems with clear documentation and maintainable workflows.',
]

const TRUSTED_BY = [
  'AstraZeneca',
  'MSU',
  'APAC Teams',
  'Power BI',
  'Python Automation',
  'SAP Workflows',
]

const EXPERIENCES = [
  {
    title: 'P2P Associate Analyst · AstraZeneca',
    period: 'Sep 2025 – Current · Kuala Lumpur',
    bullets: [
      'Built Python automation to migrate SAP to Coupa Purchase Orders at scale, processing up to 200,000 items with major time savings.',
      'Automated AP and T&E reconciliation workflows, including extraction, Excel transformation logic, and standardized template outputs.',
      'Led global digitalization initiatives with Power Apps, Power Automate, SharePoint, and Power BI for operational visibility.',
    ],
  },
  {
    title: 'Internship & Associate Analyst (Contract) · AstraZeneca',
    period: 'Mar 2024 – Aug 2025 · Kuala Lumpur',
    bullets: [
      'Primary developer for an APAC-wide M+6 cashflow Power BI dashboard across 8 markets with Python-driven SAP data pipelines.',
      'Built anomaly detection visualization, report export automation, and data transformation systems that removed thousands of manual hours.',
      'Authored internal upskilling and troubleshooting documentation for sustainable maintenance across regions.',
    ],
  },
]

const SKILL_GROUPS = [
  {
    title: 'Automation & Backend',
    items: ['Python', 'Java', 'C++', 'Go/Golang', 'SQL', 'MySQL', 'Docker', 'Selenium', 'Puppeteer'],
  },
  {
    title: 'Frontend & Apps',
    items: ['JavaScript', 'React', 'Vite', 'Tailwind', 'PowerApps', 'Streamlit'],
  },
  {
    title: 'Data & Operations',
    items: [
      'Power BI',
      'Power Automate',
      'SAP Automation',
      'Machine Learning',
      'GitHub Actions',
    ],
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Ahmad consistently turns manual, high-friction tasks into maintainable automation workflows that teams can actually run.',
    source: 'Operations Stakeholder · AstraZeneca',
  },
  {
    quote:
      'Strong engineering and business communication balance. Dashboards and process outputs are both technically solid and decision-friendly.',
    source: 'Regional Reporting Partner · APAC',
  },
  {
    quote:
      'Clear documentation, practical handover, and reliable delivery cadence made his automation work easy to scale across teams.',
    source: 'Cross-functional Collaborator',
  },
]

function formatMetricValue(metric: Metric, value: number) {
  if (metric.kind === 'plain') {
    return `${value}`
  }
  if (metric.kind === 'plus') {
    return `${value.toLocaleString()}+`
  }
  if (metric.kind === 'thousands-s') {
    return `${value.toLocaleString()}s`
  }
  return `${value}+ years`
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].href.replace('#', ''))
  const [metricValues, setMetricValues] = useState<number[]>(() => METRICS.map(() => 0))
  const [hasCountedMetrics, setHasCountedMetrics] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
      setShowBackToTop(scrollTop > 420)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (revealTargets.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionTargets = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      Boolean,
    ) as Element[]

    if (sectionTargets.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.65],
        rootMargin: '-20% 0px -55% 0px',
      },
    )

    sectionTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (hasCountedMetrics) {
      return
    }

    const metricsContainer = document.getElementById('hero-metrics')
    if (!metricsContainer) {
      return
    }

    let frame = 0
    const duration = 1300
    const start = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const nextValues = METRICS.map((metric) => Math.round(metric.target * eased))
      setMetricValues(nextValues)

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasCountedMetrics(true)
          frame = window.requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(metricsContainer)

    return () => {
      observer.disconnect()
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [hasCountedMetrics])

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const isNarrowViewport = window.innerWidth < 768
    if (isCoarsePointer || isNarrowViewport) {
      return
    }

    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'))

    const cleanups = magneticTargets.map((element) => {
      const handleMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2

        element.style.transform = `translate3d(${x * 0.08}px, ${y * 0.08}px, 0)`
      }

      const handleLeave = () => {
        element.style.transform = 'translate3d(0, 0, 0)'
      }

      element.addEventListener('pointermove', handleMove)
      element.addEventListener('pointerleave', handleLeave)

      return () => {
        element.removeEventListener('pointermove', handleMove)
        element.removeEventListener('pointerleave', handleLeave)
        element.style.transform = 'translate3d(0, 0, 0)'
      }
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
  }

  const progressCircumference = 2 * Math.PI * 16
  const progressOffset = progressCircumference - (scrollProgress / 100) * progressCircumference

  return (
    <main className="min-h-screen bg-background" id="top">
      <div className="noise-overlay" />

      <div
        className="fixed left-0 top-0 z-[100] h-1 bg-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-sm font-semibold tracking-wide">
            Ahmad Arief
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={`nav-link ${activeSection === item.href.replace('#', '') ? 'nav-link-active' : ''}`}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <Button variant="outline" size="sm" onClick={toggleTheme} className="rounded-full px-3 icon-draw">
            <span className="relative h-4 w-4">
              <Sun
                className={`theme-icon absolute h-4 w-4 ${
                  isDark ? 'theme-icon-hidden' : 'theme-icon-visible'
                }`}
              />
              <Moon
                className={`theme-icon absolute h-4 w-4 ${
                  isDark ? 'theme-icon-visible' : 'theme-icon-hidden'
                }`}
              />
            </span>
            <span className="text-xs">{isDark ? 'Light' : 'Dark'}</span>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-36 top-8 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
          <div className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-chart-2/30 blur-3xl animate-float-delayed" />
          <div className="absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-chart-4/25 blur-3xl animate-float-slow" />
          <div className="texture-grid absolute inset-0 opacity-40" />
        </div>

        <div className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-8 pt-14 md:pt-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <Badge className="rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Open to opportunities
              </Badge>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  AhmadArief.dev
                </p>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                  Automating
                  <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    {' '}
                    workflows
                  </span>
                  <br />
                  that matter.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I build automation systems that turn hours of manual work into seconds — helping teams focus on what actually moves the needle.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                  <a href="mailto:ahmadarief4701@gmail.com" data-magnetic>
                    <Mail className="mr-2 h-4 w-4" /> Let&apos;s Talk
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 magnetic" asChild>
                  <a href="#projects" data-magnetic>
                    View Work
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                  <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer" data-magnetic>
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                  <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer" data-magnetic>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>

            <Card
              className="animate-rise border-primary/20 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              style={{ animationDelay: '220ms' }}
            >
              <CardContent className="space-y-4 pt-6 text-sm">
                <div className="flex justify-center">
                  <img src="/profile.JPG" alt="Ahmad Arief" className="h-65 w-65 rounded-2xl border-2 object-cover shadow-lg" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">Ahmad Arief</p>
                  <p className="text-xs text-muted-foreground">Software & Automation Engineer</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 icon-draw">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Kuala Lumpur, Malaysia</p>
                    <p className="text-xs text-muted-foreground">Open to remote/hybrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 icon-draw">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">2+ Years Experience</p>
                    <p className="text-xs text-muted-foreground">AstraZeneca</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 icon-draw">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Ready to start</p>
                    <p className="text-xs text-muted-foreground">1 month notice</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div id="hero-metrics" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {METRICS.map((metric, index) => (
              <Card
                key={metric.label}
                className="animate-rise border-primary/20 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-1 py-1">
                  <p className="text-2xl font-bold md:text-3xl">{formatMetricValue(metric, metricValues[index])}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-full border bg-card/70 py-3" data-reveal>
            <div className="marquee-track flex w-max text-sm">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="marquee-group flex min-w-full shrink-0 items-center justify-around gap-6 px-6"
                >
                  {TRUSTED_BY.map((item) => (
                    <span key={`${groupIndex}-${item}`} className="inline-flex items-center gap-2 whitespace-nowrap">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-8" id="impact" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Impact Engine</h2>
            <p className="text-sm text-muted-foreground">How I turn problems into systems</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2" data-reveal>
            <CardHeader>
              <CardTitle className="text-xl">From Workflow Friction to Operational Speed</CardTitle>
              <CardDescription>
                I design systems that blend extraction, transformation, analytics, and delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              {PLAYBOOK.map((step, index) => (
                <div key={step.title} className="rounded-xl border bg-background/70 p-4" data-reveal>
                  <p className="text-xs font-semibold text-primary">0{index + 1}</p>
                  <p className="mt-2 font-medium">{step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10" data-reveal>
            <CardHeader>
              <CardTitle className="text-xl">What I Deliver</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 icon-draw">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Automation Scripts</p>
              </div>
              <div className="flex items-center gap-3 icon-draw">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">BI Dashboards</p>
              </div>
              <div className="flex items-center gap-3 icon-draw">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Data Reconciliation</p>
              </div>
              <div className="flex items-center gap-3 icon-draw">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Process Documentation</p>
              </div>
              <div className="flex items-center gap-3 icon-draw">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Workflow className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">AI-Enabled Workflows</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="experience" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Experience</h2>
            <p className="text-sm text-muted-foreground">Where I&apos;ve made an impact</p>
          </div>
        </div>

        <div className="relative pl-6 md:pl-8">
          <div className="timeline-line absolute bottom-2 left-2 top-2 w-px" />
          {EXPERIENCES.map((experience) => (
            <div key={experience.title} className="relative pb-6 last:pb-0" data-reveal>
              <span className="timeline-node absolute left-[-0.15rem] top-8 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <Card className="ml-4">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {experience.bullets.map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="projects" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Case Studies</h2>
            <p className="text-sm text-muted-foreground">Selected work with measurable outcomes</p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {CASE_STUDIES.map((project) => (
            <Card
              key={project.title}
              className="project-card h-full border-primary/15 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              data-reveal
            >
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="w-fit rounded-full">
                    {project.stack}
                  </Badge>
                  <Badge variant="outline" className="w-fit rounded-full">
                    {project.role}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="rounded-xl border bg-background/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Problem</p>
                  <p className="mt-1 text-muted-foreground">{project.problem}</p>
                </div>
                <div className="rounded-xl border bg-background/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Solution</p>
                  <p className="mt-1 text-muted-foreground">{project.solution}</p>
                </div>
                <div className="rounded-xl bg-primary/12 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Impact</p>
                  <p className="mt-1 font-medium">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="skills" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Skills & Tools</h2>
            <p className="text-sm text-muted-foreground">Technologies I work with</p>
          </div>
        </div>
        <div className="skills-cloud grid gap-4 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <Card key={group.title} className="skills-group" data-reveal>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-chip rounded-full px-3 py-1 text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16" id="why-me" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Why Work With Me</h2>
            <p className="text-sm text-muted-foreground">What sets me apart</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <Card key={item} data-reveal>
              <CardContent className="flex flex-col items-center gap-3 py-1 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16" id="social-proof" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <p className="text-sm text-muted-foreground">Feedback on delivery and collaboration</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card key={item.source} data-reveal>
              <CardContent className="space-y-3 py-6">
                <p className="text-sm text-muted-foreground">“{item.quote}”</p>
                <p className="text-sm font-medium">{item.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="education" data-reveal>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 icon-draw">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="text-sm text-muted-foreground">Academic background</p>
          </div>
        </div>
        <Card data-reveal>
          <CardHeader>
            <CardTitle>Management &amp; Science University</CardTitle>
            <CardDescription>
              Bachelor&apos;s in Computer Science (Hons), Software Engineering · Sep 2021 – Sep 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>CGPA: 3.76 · 3 Dean&apos;s List · 1 Conditional Dean&apos;s List</p>
            <p>
              Coursework: OOP, Web &amp; Mobile Programming, System Analysis &amp; Design, Architecture &amp; Testing, MySQL, Server Computing, Operating Systems.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="contact" data-reveal>
        <div className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to automate your workflow?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I&apos;m currently available for full-time roles and freelance automation projects.
              <br />
              Let&apos;s discuss how I can help streamline your operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                <a href="mailto:ahmadarief4701@gmail.com" data-magnetic>
                  <Mail className="mr-2 h-4 w-4" /> Let&apos;s Talk
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 magnetic" asChild>
                <a href="#projects" data-magnetic>
                  View Work
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer" data-magnetic>
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 magnetic icon-draw" asChild>
                <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer" data-magnetic>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Based in Kuala Lumpur · Open to remote · 1 month notice
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30" data-reveal>
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AhmadArief.dev · Built with passion
            </p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" asChild className="icon-draw">
                <a href="mailto:ahmadarief4701@gmail.com" target="_blank" rel="noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="icon-draw">
                <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="icon-draw">
                <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <Button
        size="icon"
        className={`back-to-top fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg className="pointer-events-none absolute inset-0 -rotate-90" viewBox="0 0 40 40" aria-hidden>
          {/* <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-border/80"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary transition-all duration-200"
            strokeDasharray={`${progressCircumference} ${progressCircumference}`}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          /> */}
        </svg>
        <ChevronUp className="relative z-10 h-4 w-4" />
      </Button>
    </main>
  )
}

export default App
