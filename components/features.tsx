import { MapPin, Route, Users, Camera, Compass, Heart } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Automatic Journey Tracking",
    description:
      "Hit start and go. Aventir maps your route in the background, detecting stops and visited places with minimal effort on your part.",
    color: "bg-cta/20 text-cta",
  },
  {
    icon: MapPin,
    title: "Smart Place Detection",
    description:
      "We recognize cafes, landmarks, and hidden gems along your route. Rate them, add photos, and build your personal travel map.",
    color: "bg-secondary/30 text-primary",
  },
  {
    icon: Users,
    title: "Social Travel Feed",
    description:
      "Follow friends and see their adventures in real-time. Like, comment, and discover new places through the people you trust.",
    color: "bg-accent/40 text-primary",
  },
  {
    icon: Compass,
    title: "Explore Nearby",
    description:
      "Find popular spots around you, see where friends have been, and save places for future visits. Your next adventure is always nearby.",
    color: "bg-muted text-primary",
  },
  {
    icon: Camera,
    title: "Beautiful Memories",
    description:
      "Attach photos to places, add notes, and create shareable journey posts that capture the full story of your travels.",
    color: "bg-accent/30 text-primary",
  },
  {
    icon: Heart,
    title: "Plan What's Next",
    description:
      "Save spots you want to visit, organize future trips, and get inspired by places your friends have loved.",
    color: "bg-secondary/20 text-primary",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-cta">
            Features
          </p>
          <h2 className="font-heading mt-2 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to capture and share your travels
          </h2>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-primary/10 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
