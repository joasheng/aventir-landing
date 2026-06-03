import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Single source of truth for Aventir font families.
 * Mirrors the Expo app tokens; web values are CSS variables from next/font.
 */
export const fontFamily = {
  heading: "var(--font-plus-jakarta-sans)",
  headingSemibold: "var(--font-plus-jakarta-sans)",
  headingMedium: "var(--font-plus-jakarta-sans)",
  body: "var(--font-dm-sans)",
  bodyMedium: "var(--font-dm-sans)",
  bodySemibold: "var(--font-dm-sans)",
} as const;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const fontVariables = `${plusJakartaSans.variable} ${dmSans.variable}`;
