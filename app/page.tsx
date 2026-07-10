import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { FeatureGrid } from "@/components/feature-grid";
import { HowItWorks } from "@/components/how-it-works";
import { MenuSpec } from "@/components/menu-spec";
import { Testimonials } from "@/components/testimonials";
import { GalleryStrip } from "@/components/gallery-strip";
import { CtaBand } from "@/components/cta-band";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <FeatureGrid />
        <HowItWorks />
        <MenuSpec />
        <Testimonials />
        <GalleryStrip />
        <CtaBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
