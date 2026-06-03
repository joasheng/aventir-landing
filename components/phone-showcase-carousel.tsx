"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PhoneMockup } from "@/components/phone-mockup";

export type ShowcasePhone = {
  src: string;
  alt: string;
  label: string;
  glow?: boolean;
  priority?: boolean;
};

type PhoneShowcaseCarouselProps = {
  phones: ShowcasePhone[];
};

export function PhoneShowcaseCarousel({ phones }: PhoneShowcaseCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childCenter =
        (child as HTMLElement).offsetLeft +
        (child as HTMLElement).clientWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const slide = container?.children[index] as HTMLElement | undefined;
    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const trackSlide = container.children[1] as HTMLElement | undefined;
    if (trackSlide) {
      container.scrollLeft =
        trackSlide.offsetLeft -
        (container.clientWidth - trackSlide.clientWidth) / 2;
    }

    updateActiveIndex();
  }, [updateActiveIndex]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-[calc(50%-8rem)] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="App screenshots"
      >
        {phones.map((phone) => (
          <div
            key={phone.src}
            className="relative shrink-0 snap-center scroll-ml-[calc(50%-8rem)]"
          >
            <PhoneMockup
              src={phone.src}
              alt={phone.alt}
              className="w-64"
              priority={phone.priority}
            />
            {phone.glow && (
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-cta/20 blur-2xl" />
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-sm font-medium text-primary">
        {phones[activeIndex]?.label}
      </p>

      <div
        className="mt-3 flex justify-center gap-2"
        role="tablist"
        aria-label="Choose screenshot"
      >
        {phones.map((phone, index) => (
          <button
            key={phone.src}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={phone.label}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 bg-cta"
                : "w-2 bg-primary/25 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
