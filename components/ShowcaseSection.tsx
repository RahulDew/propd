import { ShowcaseSectionData } from "@/data/ShowcaseSectionData";
import Image from "next/image";
import Heading from "./ui/Heading";

const ShowcaseSection = () => {
  return (
    <section
      id="showcase"
      className="w-full bg_light_gradient text-center space-y-10 py-16 px-5 md:px-16 rounded-3xl"
    >
      <Heading headingData={ShowcaseSectionData.heading} />

      <div className="flex justify-center items-center gap-5 md:gap-10">
        <div className="group h-44 sm:h-56 w-5/6 sm:w-[400px] bg-primary bg-opacity-70 rounded-xl flex justify-center items-center shadow-2xl hover:shadow-blue-400 duration-300 cursor-pointer">
          <div className="p-0.5 bg-white bg-opacity-85 rounded-full shadow-2xl border-4 border-slate-300 cursor-pointer">
            <Image
              src={ShowcaseSectionData.PlayIcon}
              alt="PropDeal logo"
              priority
              width={40}
              className="text-white"
            />
          </div>
          <div className="absolute opacity-0 group-hover:opacity-100 w-5/6 sm:w-[400px] h-44 sm:h-56  backdrop-blur-2xl rounded-2xl flex justify-center items-center text-center duration-300">
            <h2 className="text-center text-2xl text-white font-semibold">
              Comming Soon
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
