import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import InterfaceSection from "@/components/InterfaceSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TeamsSections from "@/components/TeamsSections";

import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <InterfaceSection />
      <ShowcaseSection />
      <DownloadSection />
      <TeamsSections />
      <TestimonialSection />
      <BlogsSection />
    </main>
  );
}
