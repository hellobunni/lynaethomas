import * as React from "react"
import { motion } from "motion/react"
import { ChevronLeft, ChevronRight, type LucideIcon, Target, Globe, Code2, Rocket } from "lucide-react"

/**
 * ProcessTimeline
 *
 * A sleek, accessible horizontal timeline for showcasing a multi-step process.
 * - Keyboard accessible: Tab through steps and use Enter/Space to focus a step
 * - Responsive: Scrolls on small screens, evenly spaced on large screens
 * - Optional controlled mode via `activeIndex` and `onStepChange`
 * - Tailwind-based styling; swap tokens to match your design system
 */

export type TimelineStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export type ProcessTimelineProps = {
  steps: TimelineStep[]
  activeIndex?: number
  onStepChange?: (index: number) => void
  className?: string
}

export default function ProcessTimeline({
  steps,
  activeIndex: controlledIndex,
  onStepChange,
  className,
}: ProcessTimelineProps) {
  const isControlled = typeof controlledIndex === "number"
  const [uncontrolledIndex, setUncontrolledIndex] = React.useState(0)
  const activeIndex = isControlled ? controlledIndex! : uncontrolledIndex

  const setActive = (i: number) => {
    if (isControlled) onStepChange?.(i)
    else setUncontrolledIndex(i)
  }

  const trackRef = React.useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const delta = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * delta, behavior: "smooth" })
  }

  return (
    <div className={"max-w-7xl mx-auto w-full select-none  " + (className ?? "")}> 
      {/* Cards Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* hide scrollbar webkit */}
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
        {steps && steps.map((s, i) => {
          const Icon = s.icon
          const isActive = i === activeIndex
          return (
            <button
              key={s.step + s.title}
              data-card
              onClick={() => setActive(i)}
              className={
                "group relative min-w-[280px] flex-1 snap-center rounded-2xl border p-4 text-left transition-all duration-200 focus:outline-none " +
                (isActive
                  ? "border-neutral-900 bg-white shadow-lg ring-2 ring-neutral-900 dark:border-neutral-100 dark:bg-neutral-900 dark:ring-neutral-100"
                  : "border-neutral-200 bg-white/70 hover:bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:bg-neutral-900")
              }
              aria-current={isActive ? "step" : undefined}
              aria-label={`${s.step} ${s.title}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={
                  "grid h-10 w-10 place-items-center rounded-xl border text-neutral-700 transition-all dark:text-neutral-200 " +
                  (isActive
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                    : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900")
                }>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">Step {s.step}</div>
                  <div className="text-lg font-semibold leading-tight">{s.title}</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{s.description}</p>

              {isActive && (
                <motion.div
                  layoutId="glow"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
                  initial={false}
                  animate={{ boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                />
              )}
            </button>
          )
        })}
      </div>

    </div>
  )
}

// /** ---------------------------------------------
//  * Demo
//  * ----------------------------------------------*/
// export function ProcessTimelineDemo() {
//   const process: TimelineStep[] = [
//     {
//       step: "01",
//       title: "Discovery Call",
//       description: "We'll discuss your vision, goals, and requirements in a free 30-minute consultation.",
//       icon: Target,
//     },
//     {
//       step: "02",
//       title: "Proposal & Planning",
//       description: "I'll create a detailed proposal with timeline, milestones, and technical approach.",
//       icon: Globe,
//     },
//     {
//       step: "03",
//       title: "Development",
//       description: "Regular updates and demos ensure we're building exactly what you envision.",
//       icon: Code2,
//     },
//     {
//       step: "04",
//       title: "Launch & Support",
//       description: "Deployment, testing, and ongoing support to ensure your success.",
//       icon: Rocket,
//     },
//   ]

//   const [idx, setIdx] = React.useState(0)

//   return (
//     <div className="mx-auto max-w-6xl p-4">
//       <h2 className="mb-6 text-2xl font-bold">How We’ll Work Together</h2>
//       <ProcessTimeline steps={process} activeIndex={idx} onStepChange={setIdx} />
//       <div className="mt-6 rounded-xl border border-neutral-200 p-4 text-sm dark:border-neutral-800">
//         <strong>Selected Step:</strong> {process[idx].title}
//       </div>
//     </div>
//   )
// }
