import Image from "next/image";
import Link from "next/link";
import HeroSectionMockup from "@/public/assets/HeroSectionMockup.png";
import { DownloadSectionData } from "@/data/DownloadSectionData";
import DownloadBtn from "./ui/DownloadBtn";
import { HeroSectionData } from "@/data/HeroSectionData";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen py-16 bg_light_gradient rounded-b-3xl flex flex-col md:flex-row justify-center gap-10 items-center"
    >
      <div className="fixed special_gradient"></div>
      <div className="z-10 md:w-[500px] lg:w-6/12 space-y-5 p-10 text-black rounded-2xl">
        <h1 className="text-5xl font-bold gradient_blue_text">
          {HeroSectionData.heading.title}
        </h1>

        <p className="text-lg opacity-60">{HeroSectionData.heading.desc}</p>
        <p className="text-xl font-semibold">DOWNLOAD OUR APP</p>
        {/* <div className="flex justify-center items-center flex-wrap gap-5"> */}
        {/* <DownloadBtn btnData={DownloadSectionData.downloadStores[0]} /> */}
        <div className="w-40 flex justify-center gap-2 items-center bg-black text-white shadow-2xl hover:shadow-blue-300 duration-300 p-3 rounded-xl cursor-pointer">
          <Image
            src={DownloadSectionData.downloadStores[0].buttonIcon}
            alt={DownloadSectionData.downloadStores[0].from}
            priority
            width={25}
          />
          <div className="flex flex-col justify-start items-start">
            <span className="text-xs">
              {DownloadSectionData.downloadStores[0].status}
            </span>
            <p className="text-lg tracking-tight font-semibold">
              {DownloadSectionData.downloadStores[0].from}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="w-[300px] z-10 px-5 flex justify-center items-center">
        <Image
          src={HeroSectionData.mockup}
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
