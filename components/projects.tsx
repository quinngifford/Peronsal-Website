"use client"

import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, Star, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

interface Project {
  title: string
  /** Flagged with a star badge as a standout project. */
  featured?: boolean
  narrative: string
  tags: string[]
  link: string
  image: string
}

const projects: Project[] = [
    {
    title: "Munkey AI",
    featured: true,
    narrative:
      "Full scale LMS with built in AI tutoring for students and AI assistance for teachers. YC2026 applicant.",
    tags: ["Full Stack Development", "TypeScript", "React", "Next.js", "Supabase", "PostgreSQL", "Stripe", "Cloudflare", "AI Integration"],
    link: "https://munkey.ai/",
    image: "/munkeyai.png",
  },
  {
    title: "Fragmentor",
    featured: true,
    narrative:
      "Software architecture IDE that works alongside AI to provide transparency and control over AI generated code.",
    tags: ["TypeScript", "Electron", "CLI", "System Engineering", "Software Architecture", "AI Integration"],
    link: "https://fragmentor-software.vercel.app/",
    image: "/fragmentor2.gif",
  },
  {
    title: "Model Rocket Flight Computer",
    featured: true,
    narrative:
      "Flight computer for a model rocket running RTOS on an STM32 microcontroller. Polls multiple peripherals and logs data to an SD card.",
    tags: ["RP2040", "RTOS", "C", "Python", "Soldering", "KiCad"],
    link: "https://github.com/quinngifford/STM32-Rocket-Computer",
    image: "/rocketo.png",
  },
  {
    title: "Kawaii Chat",
    narrative:
      "Visual personas for all of the top LLM models. Customizable personalities and appearences. Group chats, mouse interactions, and other cool features.",
    tags: ["Full Stack", "TypeScript", "Next.js", "Electron", "PostgreSQL", "Docker","Stripe", "AI Integration"],
    link: "https://kawaiichat.app/",
    image: "/kawaiichat.gif",
  },
  {
    title: "Wireless Game Controller",
    narrative:
      "Wireless game controller using ESP32 on a custom PCB. The controller has 4 buttons that send inputs to another ESP32 over bluetooth or WIFI.",
    tags: ["ESP32", "C++", "Soldering", "KiCad"],
    link: "https://github.com/quinngifford/ESP32-Wireless-Remote",
    image: "/gamecontroller.png",
  },
  {
    title: "RF Receiver and Amplifier PCBs",
    narrative:
      "433.92 MHz RF receiver front end designed to filter an incoming wireless signal, mix it with a 100 MHz local oscillator, and downconvert it to a 333.92 MHz intermediate frequency. The IF output is then sent to an existing RF amplifier and ultimately into an SDR or demodulator for recovering the transmitted data or audio. To be honest this stuff is still black magic to me, I had help making this.",
    tags: ["KiCad", 'Signal Processing', 'RF Design'],
    link: "",
    image: "/receiever.png",
  },
  {
    title: "OpenGL Traffic Simulation",
    narrative:
      "Physics based traffic simulator built entirely with C++ and OpenGL. I programmed multiple traffic light control algorithms in order to find the the most efficient one. The system tracks every car's wait time, and the total intersection throughput. I wrote this by hand in 2023 and revamped it with Claude recently.",
    tags: ["C", "C++", "OpenGL"],
    link: "https://github.com/quinngifford/OpenGL-traffic-simulator",
    image: "/traffic2.gif",
  },
  {
    title: "Guitar Hero on FPGA and ESP32",
    featured: true,
    narrative:
      "Recreated Guitar Hero using a CMOD F7 FPGA. The FPGA is hooked up to a 4 LED strip display. Using SystemVerilog I programmed the outputs of the FGPA to control the notes going down the LED strips. This was difficult because I had to write a pulse width encoder from scratch using an HDL, which is a pretty uncommon task. I incorporated my previous wireless controller project to play, which required me to wire an ESP32 to the FPGA. Then I incorporated my beatmap generator project to generate the notes for the songs. I wrote SystemVerilog code to handle everything, including loading notes into memory, level selection, score tracking, and game logic.",
    tags: ["KiCad", "Soldering", "FPGA", "C++", "SystemVerilog"],
    link: "#",
    image: "/guitarhero.gif",
  },
{
    title: "Beatmap Generator",
    narrative:
      "Automatic beatmap generator that analyzes audio and produces playable rhythm-game charts across multiple difficulty levels. The system uses digital signal processing techniques to detect musical onsets, estimate tempo, track beats, classify percussion, and assign notes to playable lanes with precise timing. It generates JSON, CSV, and osu!mania-compatible charts. The pipeline achieves sub-millisecond timing accuracy on percussive test tracks and processes audio at roughly 200× real time.",
    tags: ["Python", "Digital Signal Processing", "Audio Analysis"],
    link: "https://github.com/quinngifford/Beatmap-Generator",
    image: "/beatmap.gif",
  },
  {
    title: "Lego Building Simulator",
    narrative:
      "Build legos in a 3D space using purely C++ and OpenGL.",
    tags: ["C++", "OpenGL", "3D Graphics"],
    link: "https://github.com/quinngifford/Lego-Building-Simulation",
    image: "/LEGOs.gif",
  },
  {
    title: "Application God",
    narrative:
      "I'm building a subscription app that allows anyone to continuously mass apply to jobs without touching a single application form. The app saves the users answers to every potential application question, and with the click of a button, fills out hundreds of applications from our prebuilt bundles. The app then continuously applies every subscribed user to any job that is added to the bundle. The app uses HTTP responses, API calls, or headless browser automation with reCAPTCHA V3 bypassing. We have a question mapping system that determines what the correct answer to a question on an application is based on the user's provided profile answers, using methods such as regex or semantic similarity.",
    tags: ["Full Stack", "JavaScript", "Linux", "AWS", "PostgreSQL", "Docker", "Stripe"],
    link: "https://autoapply-demo.onrender.com/",
    image: "/jobbot.gif",
  },
  /*
  {
    title: "Three Axis Robot Arm with Parkinsons",
    narrative:
      "My Junior Design Group and I buit a 3 axis robot arm using cheap servos to write and draw on paper based on GCODE commands. I built a graphical user interface to allow the user to input GCODE commands, which would automatically do inverse kinematics to create arm movements. We had some mechnaical issues so we called it Parkinsons Arm. This project is a good example of a time when I encountered struggles and had to work with my team to overcome them.",
    tags: ["ESP32", "CAD", "C++", "Python", "Soldering"],
    link: "#",
    image: "/parkinson.gif",
  },
  */
  {
    title: "Wireless Range Sensor Module",
    narrative:
      "Simple Project for my Junior Design class.",
    tags: ["ESP32", "KiCad", "C++"],
    link: "#",
    image: "/IMG_5944.JPEG",
  },
  {
    title: "FPGA Vending Machine Controller",
    narrative:
      "Practice project for my Digital Logic Design class. Simulates a vending machine, utilizing combinational and sequential logic, I/O, state machines, clock cycles, etc. Used Quartus to program the FPGA, and ModelSim to verify and debug outputs. Drew state machine diagrams, truth tables, and documentation.",
    tags: ["FPGA", "Quartus", "ModelSim", "Digital Logic Design"],
    link: "#",
    image: "/bs.png",
  },
  {
    title: "Voltage Regulator PCB",
    narrative:
      "Designed and soldered a voltage regulator PCB using KiCad.",
    tags: ["KiCad", "Soldering", "PCB Design"],
    link: "#",
    image: "/voltreg.png",
  },
  
]

// Cards show a capped tag list so every card keeps the same height; the dialog shows them all.
const CARD_TAG_LIMIT = 6

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  const hasLink = project.link !== "#"
  const visibleTags = project.tags.slice(0, CARD_TAG_LIMIT)
  const hiddenTagCount = project.tags.length - visibleTags.length

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group flex h-full w-full cursor-pointer flex-col text-left focus:outline-none"
        >
          {/* Image + hover reveal */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/60 bg-secondary transition-colors group-hover:border-accent/50 group-focus-visible:border-accent">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
              priority={priority}
            />

            {project.featured && (
              <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-background/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
                <Star className="h-2.5 w-2.5 fill-current" />
                High Quality
              </span>
            )}

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="p-4">
                <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{project.narrative}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Title + tags underneath */}
          <h3 className="mt-4 flex items-start gap-1.5 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
            {project.featured && <Star className="mt-1.5 h-4 w-4 shrink-0 fill-current text-accent" />}
            {project.title}
          </h3>

          {/* min-height reserves two rows so every card keeps the same height */}
          <div className="mt-2.5 flex min-h-[2.75rem] flex-wrap content-start gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-secondary/50 px-2 py-0.5 font-mono text-[9px] leading-[1.4] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {hiddenTagCount > 0 && (
              <span className="rounded-full border border-border/60 bg-secondary/50 px-2 py-0.5 font-mono text-[9px] leading-[1.4] text-muted-foreground/70">
                +{hiddenTagCount}
              </span>
            )}
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-card shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 92vw, 768px"
              unoptimized
            />
          </div>

          <Dialog.Close className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="space-y-6 p-6 md:p-8">
            <Dialog.Title className="flex items-start gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {project.featured && <Star className="mt-1.5 h-5 w-5 shrink-0 fill-current text-accent" />}
              {project.title}
            </Dialog.Title>

            <Dialog.Description className="text-base leading-relaxed text-muted-foreground text-pretty">
              {project.narrative}
            </Dialog.Description>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Visit project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03 / PROJECTS"
          title="Project Examples"
          subtitle="Click any project for the full story."
        />
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
