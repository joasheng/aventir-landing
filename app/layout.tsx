import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aventir - Your Social Travel Journal",
  description:
    "Save journeys, discover new places, and keep up with friends' travels. Track your adventures automatically and turn every trip into a shareable memory.",
  keywords: [
    "travel app",
    "travel journal",
    "trip tracker",
    "social travel",
    "journey planner",
    "travel memories",
  ],
  openGraph: {
    title: "Aventir - Your Social Travel Journal",
    description:
      "Save journeys, discover new places, and keep up with friends' travels.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aventir - Your Social Travel Journal",
    description:
      "Save journeys, discover new places, and keep up with friends' travels.",
  },
};

export const viewport: Viewport = {
  themeColor: "#34324C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} bg-background`}>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
