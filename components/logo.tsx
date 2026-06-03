import Image from "next/image";

type LogoProps = {
  showWordmark?: boolean;
};

export function Logo({ showWordmark = true }: LogoProps) {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Aventir"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-xl object-contain"
        priority
      />
      {showWordmark && (
        <span className="font-heading text-xl font-semibold tracking-tight text-primary">
          Aventir
        </span>
      )}
    </>
  );
}
