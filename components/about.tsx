import { SectionHeading } from "@/components/section-heading"
import { Photo } from "@/components/photo"

/**
 * PHOTOS: drop files into /public, then set `src` on any <Photo> below
 * (e.g. src="/me-soldering.jpg"). Any Photo without a src stays a placeholder.
 * COPY: everything in this file is meant to be rewritten in your own voice.
 */

const quickHits = [
  { label: "on repeat", value: "Freewave 3" },
]

const talkingPoints = [
  "Lucki is the greatest music artist of all time",
  "Chelsea is winning the champions league this year",
  "What if Derrick Rose didn't tear his ACL?",
]

export function About() {
  // Blank entries would render as an orphan bullet, so drop them
  const points = talkingPoints.filter((point) => point.trim().length > 0)

  return (
    <section id="about-me" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 h-[380px] w-[380px] glow-accent opacity-60 animate-float" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            index="02 / ABOUT ME"
            title="About Me"
          />

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left: the actual story */}
            <div className="space-y-6">

              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                I like building things, making friends, and petting my two cats. The cats are named Echo and Jasper.
                I could talk for hours sports, especially soccer, basketball, and snowboarding. 
                Recently I've had the goal of climbing Mount Rainier with my Dad.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                I've been obsessed with computers ever since I started playing Dota 2 as a kid, which is why I decided to become an Engineer.
                I have a broad skillset that spans both hardware and software, and I enjoy working on projects that combine the two.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                I love low level engineering; building a system from scratch, bare metal or even silicon circuit design, high performance C++ firmware, and simulink modeling.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                I also enjoy highly abstracted work; vibe coding useful software applications with Claude and ChatGPT, performing data analysis, and building data infrastructure.
              </p>

              {/* Stamp — a little visual joke that fills space nicely */}
              <div className="pt-4">
                <div className="inline-flex -rotate-2 items-center gap-3 rounded-lg border-2 border-dashed border-accent/50 px-5 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    CERTIFIED PERSONALITY HIRE
                  </span>
                </div>
              </div>
            </div>

            {/* Right: photo stack */}
            <div className="grid grid-cols-2 gap-4">
              <Photo src="/me2.JPG" className="col-span-2 aspect-square" alt="me" caption="Me" />
              <Photo src="/echo.JPEG" className="aspect-square" alt="echo" caption="Echo" />
              <Photo src="/jasper.JPEG" className="aspect-square mt-6" alt="jasper" caption="Jasper" />
            </div>
          </div>
          
          {/* Quick hits — the bordered grid only makes sense with entries in it
          {quickHits.length > 0 && (
          <div
            className={`mt-20 grid gap-px overflow-hidden rounded-xl border border-border bg-border ${
              quickHits.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
            {quickHits.map((hit) => (
              <div key={hit.label} className="group bg-background p-6 transition-colors hover:bg-secondary/30">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {hit.label}
                </p>
                <p className="mt-2 text-base text-foreground transition-colors group-hover:text-accent">{hit.value}</p>
              </div>
            ))}
          </div>
          )}
          */}

          {/* Things I'll talk your ear off about — heading hides until there's a point to make
          <div className="mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Photo src="/lucki.jpeg" className="aspect-[3/4]" alt="Lucki" caption="Freewave 3 by Lucki" />
              <Photo src="/5472.jpg" className="aspect-[3/4] mt-8" alt="Chelsea" caption="Chelsea champions league" />
            </div>

            {points.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">Things you will hear me say often</h3>
              <ul className="space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex gap-4 group">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70 transition-transform group-hover:scale-150" />
                    <span className="text-lg text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
