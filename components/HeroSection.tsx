import Image from "next/image";
import Link from "next/link";
import HeroSectionMockup from "@/public/assets/HeroSectionMockup.png";
import { DownloadSectionData } from "@/data/DownloadSectionData";
import DownloadBtn from "./ui/DownloadBtn";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen py-16 bg_light_gradient rounded-b-3xl flex flex-col md:flex-row justify-center gap-10 items-center"
    >
      <div className="fixed special_gradient"></div>
      <div className="z-10 md:w-[500px] lg:w-6/12 space-y-5 p-10 text-black rounded-2xl">
        <h1 className="text-5xl font-bold gradient_blue_text">
          A Great App Makes
        </h1>
        <h1 className="text-5xl font-bold gradient_blue_text">
          Your Life Better
        </h1>
        <p className="text-lg opacity-60">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className="text-xl font-semibold">DOWNLOAD OUR APP</p>
        <div className="flex gap-5 text-black font-semibold">
          <div className="flex justify-center items-center flex-wrap gap-5">
            <DownloadBtn btnData={DownloadSectionData.downloadStores[0]} />
          </div>
        </div>
      </div>
      <div className="w-[300px] z-10 px-5 flex justify-center items-center">
        <Image
          src={HeroSectionMockup}
          alt="Shadient.co Logo"
          priority
          width={230}
        />
      </div>
    </section>
  );
}

// <div className="w-[270px] z-10">
//         <Image
//           src={HeroSectionMockup}
//           alt="Shadient.co Logo"
//           priority
//           width={260}
//         />
//       </div>
//       <div className="z-10 w-2/6 space-y-5 p-10 bg-bgColor shadow-xl rounded-2xl">
//         <h1 className="text-5xl font-semibold text-primary">
//           A Great App Makes Your Life Better
//         </h1>
//         <p className="text-lg text-secondary">
//           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//           sint. Velit officia consequat duis enim velit mollit. Exercitation
//           veniam consequat sunt nostrud amet.
//         </p>
//         <p className="text-xl font-semibold">DOWNLOAD OUR APP</p>
//         <div className="flex gap-5 text-white font-semibold">
//           <button className="bg-black p-2 rounded-md">Google Play</button>
//           <button className="bg-black p-2 rounded-md">App Store </button>
//         </div>
//       </div>
