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

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
  }

  const skills = [
    'Python',
    'Java',
    'C++',
    'Go/Golang',
    'JavaScript',
    'React',
    'Vite',
    'Tailwind',
    'Power BI',
    'Power Automate',
    'PowerApps',
    'SQL',
    'MySQL',
    'Docker',
    'GitHub Actions',
    'Selenium',
    'Puppeteer',
    'Streamlit',
    'SAP Automation',
    'Machine Learning',
  ]

  const navItems = [
    { label: 'Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const metrics = [
    { value: '200,000+', label: 'PO items automated' },
    { value: '8', label: 'APAC markets supported' },
    { value: '1,000s', label: 'hours reduced from manual work' },
    { value: '2+ years', label: 'enterprise operations impact' },
  ]

  const caseStudies = [
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

  const playbook = [
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

  const differentiators = [
    'Builds automation that scales from local scripts to cross-market enterprise processes.',
    'Combines software engineering depth with BI storytelling for faster business decisions.',
    'Ships secure, production-focused systems with clear documentation and maintainable workflows.',
  ]

  const trustedBy = ['AstraZeneca', 'MSU', 'APAC Teams', 'Power BI', 'Python Automation', 'SAP Workflows']

  return (
    <main className="min-h-screen bg-background" id="top">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 z-[100] h-1 bg-primary transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-sm font-semibold tracking-wide">
            Ahmad Arief
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? 'Light' : 'Dark'}
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
                  Ahmadrief.dev
                </p>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                  Automating
                  <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent"> workflows</span>
                  <br />
                  that matter.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I build automation systems that turn hours of manual work into seconds — 
                  helping teams focus on what actually moves the needle.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-6" asChild>
                  <a href="mailto:ahmadarief4701@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Let's Talk
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="#projects">View Work</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>

            <Card className="animate-rise border-primary/20 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg" style={{ animationDelay: '220ms' }}>
              <CardContent className="space-y-4 pt-6 text-sm">
                <div className="flex justify-center">
                  <img
                    src="/profile.JPG"
                    alt="Ahmad Arief"
                    className="h-65 w-65 rounded-2xl border-2 object-cover shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">Ahmad Arief</p>
                  <p className="text-xs text-muted-foreground">Software & Automation Engineer</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Kuala Lumpur, Malaysia</p>
                    <p className="text-xs text-muted-foreground">Open to remote/hybrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">2+ Years Experience</p>
                    <p className="text-xs text-muted-foreground">AstraZeneca</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="animate-rise border-primary/20 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-1 py-1">
                  <p className="text-2xl font-bold md:text-3xl">{metric.value}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-full border bg-card/70 py-3">
            <div className="marquee-track flex w-max text-sm">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="marquee-group flex min-w-full shrink-0 items-center justify-around gap-6 px-6"
                >
                  {trustedBy.map((item) => (
                    <span
                      key={`${groupIndex}-${item}`}
                      className="inline-flex items-center gap-2 whitespace-nowrap"
                    >
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

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-8 pb-16" id="impact">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Impact Engine</h2>
            <p className="text-sm text-muted-foreground">How I turn problems into systems</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">From Workflow Friction to Operational Speed</CardTitle>
              <CardDescription>
                I design systems that blend extraction, transformation, analytics, and delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              {playbook.map((step, index) => (
                <div key={step.title} className="rounded-xl border bg-background/70 p-4">
                  <p className="text-xs font-semibold text-primary">0{index + 1}</p>
                  <p className="mt-2 font-medium">{step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-xl">What I Deliver</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Automation Scripts</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">BI Dashboards</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Data Reconciliation</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">Process Documentation</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Workflow className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">AI-Enabled Workflows</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="experience">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Experience</h2>
            <p className="text-sm text-muted-foreground">Where I've made an impact</p>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>P2P Associate Analyst · AstraZeneca</CardTitle>
              <CardDescription>Sep 2025 – Current · Kuala Lumpur</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Built Python automation to migrate SAP to Coupa Purchase Orders at scale,
                processing up to 200,000 items with major time savings.
              </p>
              <p>
                Automated AP and T&amp;E reconciliation workflows, including extraction,
                Excel transformation logic, and standardized template outputs.
              </p>
              <p>
                Led global digitalization initiatives with Power Apps, Power Automate,
                SharePoint, and Power BI for operational visibility.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Internship & Associate Analyst (Contract) · AstraZeneca</CardTitle>
              <CardDescription>Mar 2024 – Aug 2025 · Kuala Lumpur</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Primary developer for an APAC-wide M+6 cashflow Power BI dashboard across
                8 markets with Python-driven SAP data pipelines.
              </p>
              <p>
                Built anomaly detection visualization, report export automation, and
                data transformation systems that removed thousands of manual hours.
              </p>
              <p>
                Authored internal upskilling and troubleshooting documentation for
                sustainable maintenance across regions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="projects">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Case Studies</h2>
            <p className="text-sm text-muted-foreground">Selected work with measurable outcomes</p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <Card
              key={project.title}
              className="h-full border-primary/15 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
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

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="skills">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Skills & Tools</h2>
            <p className="text-sm text-muted-foreground">Technologies I work with</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16" id="why-me">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Why Work With Me</h2>
            <p className="text-sm text-muted-foreground">What sets me apart</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {differentiators.map((item) => (
            <Card key={item}>
              <CardContent className="flex flex-col items-center text-center gap-3 py-1">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="education">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="text-sm text-muted-foreground">Academic background</p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Management & Science University</CardTitle>
            <CardDescription>
              Bachelor&apos;s in Computer Science (Hons), Software Engineering · Sep 2021 – Sep
              2024
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>CGPA: 3.76 · 3 Dean&apos;s List · 1 Conditional Dean&apos;s List</p>
            <p>
              Coursework: OOP, Web &amp; Mobile Programming, System Analysis &amp; Design,
              Architecture &amp; Testing, MySQL, Server Computing, Operating Systems.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* <section className="mx-auto max-w-6xl px-6 pb-16" id="social-proof">
        <h2 className="mb-6 text-2xl font-semibold">Builder Feedback</h2>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">AstraZeneca</Badge>
          <Badge variant="secondary">Management & Science University</Badge>
          <Badge variant="secondary">APAC Operations</Badge>
          <Badge variant="secondary">Power BI Delivery</Badge>
          <Badge variant="secondary">Python Automation</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {socialProof.map((item) => (
            <Card key={item.source}>
              <CardContent className="space-y-3 py-6">
                <p className="text-sm text-muted-foreground">“{item.quote}”</p>
                <p className="text-sm font-medium">{item.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16" id="contact">
        <div className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to automate your workflow?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I'm currently available for full-time roles and freelance automation projects.
              <br />Let's discuss how I can help streamline your operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" className="rounded-full px-6" asChild>
                  <a href="mailto:ahmadarief4701@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Let's Talk
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="#projects">View Work</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer">
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

      <footer className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahmadrief.dev · Built with passion
            </p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:ahmadarief4701@gmail.com" target="_blank" rel="noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/ahmad-arief" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/Izumi47" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* <Button
        asChild
        size="lg"
        className="fixed bottom-6 right-6 z-50 rounded-full px-5 shadow-sm animate-pulse-subtle"
      >
        <a href="#contact">Let&apos;s Talk</a>
      </Button> */}
    </main>
  )
}

export default App
