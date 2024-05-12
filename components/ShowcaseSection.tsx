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
        <div className="h-44 sm:h-56 w-5/6 sm:w-[400px] bg-primary rounded-xl flex justify-center items-center shadow-2xl hover:shadow-blue-400 duration-300">
          <div className="p-0.5 bg-white bg-opacity-85 rounded-full shadow-2xl border-4 border-slate-300 cursor-pointer">
            <Image
              src={ShowcaseSectionData.PlayIcon}
              alt="PropDeal logo"
              priority
              width={40}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
