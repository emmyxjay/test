import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Mirror } from "@/components/Mirror";
import { SystemSteps } from "@/components/SystemSteps";
import { Dial } from "@/components/Dial";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Capture } from "@/components/Capture";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureGrid />
        <Mirror />
        <SystemSteps />
        <Dial />
        <Pricing />
        <Faq />
        <Capture />
      </main>
      <Footer />
    </>
  );
}
