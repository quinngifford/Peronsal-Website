import { Github, Linkedin, Mail, Instagram, ArrowDown } from "lucide-react"

const socials = [
  { href: "https://github.com/quinngifford", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/quinn-gifford-7b9902281/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/quinn.giff", label: "Instagram", Icon: Instagram },
  { href: "mailto:quinngiffordwork@gmail.com", label: "Email", Icon: Mail },
]

// Quick edit: this is the little "spec sheet" card next to my name.
const specs = [
  { label: "studying", value: "ECE @ Oregon State" },
  { label: "minoring in", value: "Computer Science" },
  { label: "currently", value: "Systems Engineer Intern @ Boeing" },
]

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Decorative background — grid + a soft accent glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-line-grid mask-fade-b opacity-60" />
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] glow-accent animate-float" />
        <div className="absolute top-[55%] -left-40 h-[320px] w-[320px] glow-accent opacity-50" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left: the introduction */}
            <div className="animate-rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
                  Currently interning at Boeing
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-balance leading-[0.95] mb-5">Quinn Gifford</h1>

              <p className="text-2xl md:text-3xl text-accent font-light mb-8">Hardware &amp; Software Engineer</p>

              <div className="max-w-xl space-y-4 mb-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a student at Oregon State University majoring in Electrical and Computer Engineering and
                  minoring in Computer Science. I&apos;ve been at two internships so far and I&apos;m looking to
                  continue expanding my horizons.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Scroll down to see my{" "}
                  <a href="#experience" className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">experience</a>,{" "}
                  <a href="#projects" className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">projects</a>, and{" "}
                  <a href="#about-me" className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">more about me</a>.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: spec sheet card */}
            <div className="animate-rise lg:mt-4" style={{ animationDelay: "120ms" }}>
              <div className="rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground">quinn.spec</span>
                </div>

                <dl className="divide-y divide-border/60">
                  {specs.map((spec) => (
                    <div key={spec.label} className="px-4 py-3.5">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-3 text-muted-foreground/60">
            <ArrowDown className="h-4 w-4" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">scroll</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
