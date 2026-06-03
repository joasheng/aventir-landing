import {
  SaveJourneyVisual,
  ShareJourneyVisual,
  StartTrackingVisual,
} from "@/components/how-it-works-visuals";

const steps = [
  {
    number: "01",
    title: "Start Tracking",
    description:
      "Tap the track button and go about your day. Aventir runs quietly in the background, mapping your journey as you move.",
    visual: <StartTrackingVisual />,
  },
  {
    number: "02",
    title: "Review & Save",
    description:
      "When you're done, review the detected places, add photos and ratings, then save your journey as a memory with one tap.",
    visual: <SaveJourneyVisual />,
  },
  {
    number: "03",
    title: "Share & Discover",
    description:
      "Your journey appears in friends' feeds. Browse their adventures, explore new places, and plan your next trip.",
    visual: <ShareJourneyVisual />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary/[0.03] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-cta">
            How It Works
          </p>
          <h2 className="font-heading mt-2 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Capture your adventures in three simple steps
          </h2>
          <p className="mt-4 text-pretty text-lg text-primary/70">
            No manual logging. No complicated setup. Just travel and let Aventir
            handle the rest.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-24 left-1/2 hidden h-0.5 w-full bg-primary/10 lg:block" />
              )}

              <div className="relative rounded-2xl border border-primary/10 bg-card p-6">
                <div className="absolute -top-4 left-6 rounded-full bg-cta px-3 py-1 text-sm font-bold text-cta-foreground">
                  {step.number}
                </div>

                <div className="mb-6 mt-4">{step.visual}</div>

                <h3 className="font-heading text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
