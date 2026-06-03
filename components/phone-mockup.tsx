import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  className = "w-64 sm:w-72",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="aspect-[9/19] overflow-hidden rounded-[2.5rem] border-4 border-primary bg-primary p-1 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-background">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 288px, 320px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
