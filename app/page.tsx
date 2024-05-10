import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import InterfaceSection from "@/components/InterfaceSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TeamsSections from "@/components/TeamsSections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <h1>Hii</h1> */}
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <InterfaceSection />
      <DownloadSection />
      <ShowcaseSection />
      <TeamsSections />
      <BlogsSection />
    </main>
  );
}
