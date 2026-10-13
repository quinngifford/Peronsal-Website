import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { StickerBoard } from "@/components/sticker-board"

const experiences = [
  {
    title: "Avionics Systems Engineer Intern",
    company: "Boeing",
    period: "June 2026 - Present",
    description: "",
  },
  {
    title: "Software Engineer Intern",
    company: "Alethian",
    period: "June 2025 - Sep 2025",
    description: "",
  },
  {
    title: "Contract AI Engineer",
    company: "Scale AI",
    period: "June 2024 - June 2025",
    description: "",
  },
  {
    title: "STEM Instructor",
    company: "STEP IT Academy",
    period: "June 2023 - Sep 2023",
    description: "",
  },
]

const stack = [
  "Kicad",
  "Matlab",
  "Linux",
  "MS Apps",
  "C",
  "C++",
  'C#',
  "Python",
  "SystemVerilog",
  "Java",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Assembly",
  "SQL",
  "RP2040",
  "STM32",
  "FPGA",
  "RTOS",
  "Soldering",
  "Claude",
  "OpenAI"
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="01 / EXPERIENCE"
          title="Experience"
          subtitle=""
          action={
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          }
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          <div className="relative">
            {/* Continuous rail behind the entries */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" />

            <div className="space-y-14">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-8">
                  <span className="absolute left-0 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent" />

                  <div className="space-y-2 mb-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        {String(experiences.length - index).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pl-8">
                      <p className="text-lg text-accent font-medium">{exp.company}</p>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="pl-8 text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Company stickers filling the space beside the timeline */}
          <StickerBoard />
        </div>
      </div>

      {/* Tools I reach for — scrolling strip fills the gap before the next section */}
      <div className="mt-24 border-y border-border/60 py-5 overflow-hidden mask-fade-x">
        {/* Duplicated once so the -50% translate loops seamlessly */}
        <div className="flex w-max animate-marquee" aria-hidden="true">
          {[...stack, ...stack].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-8 pr-8 font-mono text-sm text-muted-foreground/70 whitespace-nowrap"
            >
              {item}
              <span className="text-accent/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
