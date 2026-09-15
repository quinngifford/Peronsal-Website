"use client"

import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import { ArrowUpRight, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const projectCategories = [
  { id: "hardware-pcb", title: "Hardware PCB" },
  { id: "hardware-silicon", title: "Hardware Silicon" },
  { id: "software-full-stack", title: "Software Full Stack" },
  { id: "software-local", title: "Software Local" },
] as const

interface Project {
  category: (typeof projectCategories)[number]["id"]
  title: string
  narrative: string
  tags: string[]
  link: string
  image: string
}

// Each project belongs to one tab, displayed in the category order above.
const projects: Project[] = [
  {
    title: "Fragmentor",
    category: "software-full-stack",
    narrative:
      "This is one of my startups which is a visual graph IDE for AI driven software development. It allows users to model system architecture and data flow in an easy to use, aesthetically pleasing interface. The software runs locally alongside a coding harness like Claude Code or Codex, sharing the same workspace as the AI. The AI understands how Fragmentor works, and builds the project according to the rules and constraints of the system. The graphs are automatically generated from the code and file structure that the AI builds. Tests can be created, saved, and run on each system and subsystem. It even supports debugging breakpoints in the system architecture to follow data and see what components of the system are failing.",
    tags: ["TypeScript", "Electron", "CLI", "System Engineering", "Software Architecture", "AI Integration"],
    link: "",
    image: "/fragmentor.gif",
  },
  {
    title: "Vibby AI",
    category: "software-full-stack",
    narrative:
      "I'm developing a chatbot app called Vibby AI, where users can interact with all of the top AI models in one place, with animated visual personas and customizable personalities. I have hired artists to bring life to all the biggest AI models such as Claude, ChatGPT, and also free local models such as Llama. The app is subscription based, enabling cool features such as group chats with models, custom characters, and more.",
    tags: ["Full Stack", "TypeScript", "Next.js", "Electron", "PostgreSQL", "Docker","Stripe", "AI Integration"],
    link: "",
    image: "/claudi.gif",
  },
  {
    title: "Lego Building Simulator",
    category: "software-local",
    narrative:
      "Build legos in a 3D space using purely C++ and OpenGL.",
    tags: ["C++", "OpenGL", "3D Graphics"],
    link: "https://github.com/quinngifford/Lego-Building-Simulation",
    image: "/LEGOs.gif",
  },
  {
    title: "Model Rocket Flight Computer",
    category: "hardware-pcb",
    narrative:
      "I built a real-time model rocket avionics system using a bare metal STM32 setup. The system handles sensor processing, flight data computation, flight event detection, and data logging. I designed a compact PCB and soldered it with the help of the rocket propulsion team I was working with. I wrote the embedded firmware in C++ and organized the system around real-time tasks with RTOS for sensor polling, calculations, and flight logic. After flights, I used Python and Matplotlib to display and analyze the flight data over time.",
    tags: ["RP2040", "RTOS", "C", "Python", "Soldering", "KiCad"],
    link: "https://github.com/quinngifford/STM32-Rocket-Computer",
    image: "/rocketo.png",
  },
  {
    title: "Wireless Game Controller",
    category: "hardware-pcb",
    narrative:
      "I built a wireless game controller using an ESP32 and a custom PCB. The controller has buttons that send data wirelessly to another ESP32, which can be connected to a corresponding game console or computer to receive the inputs. I designed the PCB in KiCad, soldered the components, and wrote firmware in C++ to handle button inputs and wireless communication.",
    tags: ["ESP32", "C++", "Soldering", "KiCad"],
    link: "https://github.com/quinngifford/ESP32-Wireless-Remote",
    image: "/gamecontroller.png",
  },
  {
    title: "OpenGL Traffic Simulation",
    category: "software-local",
    narrative:
      "I built a full traffic intersection simulator in C++ and OpenGL. I drew an intersection with shaders in OpenGL and programmed cars to drive through it with realistic physics in C++. I programmed multiple traffic light control algorithms in order to find the the most efficient one. The system tracks every car's wait time, and the total intersection throughput. I did this project because I think that a lot of intersections in the US suck and need to be upgraded with smarter software to reduce traffic. There are two versions of this project, one that I wrote by hand in 2023, and a revamped version with Claude. (Claude mogs)",
    tags: ["C", "C++", "OpenGL"],
    link: "https://github.com/quinngifford/OpenGL-traffic-simulator",
    image: "/traffic2.gif",
  },
  {
    title: "Guitar Hero on FPGA and ESP32",
    category: "hardware-silicon",
    narrative:
      "Recreated Guitar Hero using a CMOD F7 FPGA. The FPGA is hooked up to a 4 LED strip display. Using SystemVerilog I programmed the outputs of the FGPA to control the notes going down the LED strips. This was difficult because I had to write a pulse width encoder from scratch using an HDL, which is uncommon. I incorporated my previous wireless controller project to play, which required me to wire an ESP32 to the FPGA. Then I incorporated my beatmap generator project to generate the notes for the songs. I wrote SystemVerilog code to handle everything, including loading notes into memory, level selection, score tracking, and game logic.",
    tags: ["KiCad", "Soldering", "FPGA", "C++", "SystemVerilog"],
    link: "#",
    image: "/guitarhero.gif",
  },
  {
    title: "Beatmap Generator",
    category: "software-local",
    narrative:
      "Automatic beatmap generator that analyzes audio and produces playable rhythm-game charts across multiple difficulty levels. The system uses digital signal processing techniques to detect musical onsets, estimate tempo, track beats, classify percussion, and assign notes to playable lanes with precise timing. It generates JSON, CSV, and osu!mania-compatible charts. The pipeline achieves sub-millisecond timing accuracy on percussive test tracks and processes audio at roughly 200× real time.",
    tags: ["Python", "Digital Signal Processing", "Audio Analysis"],
    link: "https://github.com/quinngifford/Beatmap-Generator",
    image: "/beatmap.gif",
  },
  {
    title: "Application God",
    category: "software-full-stack",
    narrative:
      "I'm building a subscription app that allows anyone to continuously mass apply to jobs without touching a single application form. The app saves the users answers to every potential application question, and with the click of a button, fills out hundreds of applications from our prebuilt bundles. The app then continuously applies every subscribed user to any job that is added to the bundle. The app uses HTTP responses, API calls, or headless browser automation with reCAPTCHA V3 bypassing. We have a question mapping system that determines what the correct answer to a question on an application is based on the user's provided profile answers, using methods such as regex or semantic similarity.",
    tags: ["Full Stack", "JavaScript", "Linux", "AWS", "PostgreSQL", "Docker", "Stripe"],
    link: "https://autoapply-demo.onrender.com/",
    image: "/jobbot.gif",
  },
  {
    title: "Munkey AI",
    category: "software-full-stack",
    narrative:
      "My college roommate and I are building a full stack AI learning platform where teachers create courses, upload assignments and learning materials, manage grades, and teach students with the help of AI. Uses AI to automatically parse assignments, creating a designated AI chat for every student for each problem, using RAG or manual teacher input to create mappings to specific pages within related learning materials. Provides teachers the ability to customize the AI for every problem, defining the system prompt, resources, and instructional behavior/guidelines. There are more features such as allowing teachers to see student chat history for each problem.",
    tags: ["Full Stack Development", "TypeScript", "Next.js", "Supabase", "Pinecone", "OpenAI"],
    link: "https://munkeyai.com/",
    image: "/monkey.png",
  },
  {
    title: "Three Axis Robot Arm with Parkinsons",
    category: "hardware-pcb",
    narrative:
      "My Junior Design Group and I buit a 3 axis robot arm using cheap servos to write and draw on paper based on GCODE commands. I built a graphical user interface to allow the user to input GCODE commands, which would automatically do inverse kinematics to create arm movements. We had some mechnaical issues so we called it Parkinsons Arm. This project is a good example of a time when I encountered struggles and had to work with my team to overcome them.",
    tags: ["ESP32", "CAD", "C++", "Python", "Soldering"],
    link: "#",
    image: "/parkinson.gif",
  },
  {
    title: "Wireless Range Sensor Module",
    category: "hardware-pcb",
    narrative:
      "Simple Project for my Junior Design class.",
    tags: ["ESP32", "KiCad", "C++"],
    link: "#",
    image: "/IMG_5944.JPEG",
  },
  {
    title: "FPGA Vending Machine Controller",
    category: "hardware-silicon",
    narrative:
      "Practice project for my Digital Logic Design class. Simulates a vending machine, utilizing combinational and sequential logic, I/O, state machines, clock cycles, etc. Used Quartus to program the FPGA, and ModelSim to verify and debug outputs. Drew state machine diagrams, truth tables, and documentation.",
    tags: ["FPGA", "Quartus", "ModelSim", "Digital Logic Design"],
    link: "#",
    image: "/bs.png",
  },
  
]

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  const hasLink = project.link !== "#"

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group block w-full cursor-pointer text-left focus:outline-none"
        >
          {/* Image + hover reveal */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-secondary transition-colors group-hover:border-accent/50 group-focus-visible:border-accent">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
              priority={priority}
            />

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
          <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
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
              className="object-cover"
              sizes="(max-width: 768px) 92vw, 768px"
              unoptimized
            />
          </div>

          <Dialog.Close className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="space-y-6 p-6 md:p-8">
            <Dialog.Title className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</Dialog.Title>

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
          subtitle="Explore a category, then click any project for the full story."
        />
        <Tabs.Root defaultValue={projectCategories[0].id}>
          <Tabs.List aria-label="Project categories" className="mb-10 grid grid-cols-2 gap-2 rounded-xl border border-border/60 bg-secondary/40 p-2 sm:grid-cols-4">
            {projectCategories.map((category) => (
              <Tabs.Trigger
                key={category.id}
                value={category.id}
                className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                {category.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {projectCategories.map((category, categoryIndex) => (
            <Tabs.Content key={category.id} value={category.id} className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {projects.filter((project) => project.category === category.id).map((project) => (
                  <ProjectCard key={project.title} project={project} priority={categoryIndex === 0} />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
