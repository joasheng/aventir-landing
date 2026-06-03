import { WaitlistForm } from "@/components/waitlist-form";

export function EarlyAccessCTA() {
  return (
    <section id="early-access" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              Join our early access program and be among the first to experience
              a new way to capture, share, and relive your adventures.
            </p>

            <div className="mt-8">
              <WaitlistForm
                variant="dark"
                buttonLabel="Get Early Access"
                successMessage="You're in. Check your inbox for next steps."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
