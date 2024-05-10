import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import HeroSectionMockup from "@/public/assets/HeroSectionMockup.png";

export default function HeroSection() {
  return (
    // <section className="w-full h-screen bg-gradient-to-tl via-sky-700/50 from-sky-700/30 to-white flex flex-col md:flex-row justify-center gap-40 items-center">
    <section className="w-full h-screen flex flex-col md:flex-row justify-center gap-40 items-center">
      <div className="fixed special_gradient"></div>
      <div className="w-[270px] z-10">
        <Image
          src={HeroSectionMockup}
          alt="Shadient.co Logo"
          priority
          width={260}
        />
      </div>
      {/* <div className="z-10 w-2/6 space-y-5 p-10 bg-bgColor shadow-xl rounded-2xl">
        <h1 className="text-5xl font-semibold text-primary">
          A Great App Makes Your Life Better
        </h1>
        <p className="text-lg text-secondary">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className="text-xl font-semibold">DOWNLOAD OUR APP</p>
        <div className="flex gap-5 text-white font-semibold">
          <button className="bg-black p-2 rounded-md">Google Play</button>
          <button className="bg-black p-2 rounded-md">App Store </button>
        </div>
      </div> */}
    </section>
  );
}
