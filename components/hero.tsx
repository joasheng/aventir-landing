import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Now in early access
          </div>

          <h1 className="font-heading text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            It's about the{" "}
            <span className="relative inline-block">
              journey.
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8c50-6 100-6 196 0"
                  stroke="#A9BD89"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary/70 sm:text-xl">
            Aventir is a social travel journal that maps your routes, captures
            memories, and keeps you connected with friends' adventures.
          </p>

          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
