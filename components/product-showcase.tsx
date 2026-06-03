import { PhoneMockup } from "@/components/phone-mockup";

const phones = [
  {
    src: "/showcase/aventir-feed.png",
    alt: "Aventir social feed",
    wrapperClass: "relative hidden w-56 md:block",
    glow: false,
    priority: false,
  },
  {
    src: "/showcase/aventir-track.png",
    alt: "Aventir live journey tracking",
    wrapperClass: "relative z-10 w-64 sm:w-72",
    glow: true,
    priority: true,
  },
  {
    src: "/showcase/aventir-explore.png",
    alt: "Aventir explore places",
    wrapperClass: "relative hidden w-56 md:block",
    glow: false,
    priority: false,
  },
];

export function ProductShowcase() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -top-8 -left-8 h-32 w-32 rounded-2xl bg-accent/40 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-2xl bg-secondary/40 blur-2xl" />

          <div className="relative flex items-center justify-center gap-4 sm:gap-8">
            {phones.map((phone) => (
              <div key={phone.src} className={phone.wrapperClass}>
                <PhoneMockup
                  src={phone.src}
                  alt={phone.alt}
                  className="w-full"
                  priority={phone.priority}
                />
                {phone.glow && (
                  <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-cta/20 blur-2xl" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 text-primary sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-primary sm:text-sm">Social Feed</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-cta/20 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 text-cta sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-primary sm:text-sm">Live Tracking</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/30 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 text-primary sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-primary sm:text-sm">Discover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
