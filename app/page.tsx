import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { EarlyAccessCTA } from "@/components/early-access-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <EarlyAccessCTA />
      </main>
    </>
  );
}
