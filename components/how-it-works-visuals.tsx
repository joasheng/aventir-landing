import Image from "next/image";

export function StartTrackingVisual() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-primary/5">
      <Image
        src="/showcase/aventir-start.png"
        alt="Start tracking a journey in Aventir"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 400px"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
        <div className="relative h-20 w-20">
          <span className="absolute inset-0 animate-ping rounded-full border-2 border-cta/30" />
          <span
            className="absolute inset-2 animate-ping rounded-full border-2 border-cta/40"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}

export function SaveJourneyVisual() {
  return (
    <div className="showcase-save-window relative h-48 w-full overflow-hidden rounded-xl bg-primary/5">
      <div className="showcase-save-scroll absolute inset-x-0 top-0 w-full">
        <Image
          src="/showcase/aventir-save.png"
          alt="Review and save your journey in Aventir"
          width={400}
          height={900}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 400px"
        />
      </div>
    </div>
  );
}

const shareImages = [
  { src: "/showcase/aventir-share1.png", alt: "Share journey preview 1" },
  { src: "/showcase/aventir-share2.png", alt: "Share journey preview 2" },
  { src: "/showcase/aventir-share3.png", alt: "Share journey preview 3" },
] as const;

export function ShareJourneyVisual() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-primary/5 p-2">
      <div className="flex h-full gap-1.5">
        {shareImages.map((image) => (
          <div
            key={image.src}
            className="relative min-w-0 flex-1 overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="120px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
