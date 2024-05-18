import { AboutSectionData } from "@/data/AboutSectionData";
import Image from "next/image";
import Heading from "./ui/Heading";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <Heading headingData={AboutSectionData.heading} />

      <div className="flex justify-around items-center gap-5 max-md:flex-col-reverse">
        <div className="w-[350px] lg:w-[480px] space-y-5">
          {AboutSectionData.aboutList.map((about, index) => (
            <div
              key={index}
              className="flex gap-2 justify-start items-start flex-col shadow-xl hover:shadow-blue-200 p-5 rounded-xl duration-300"
            >
              <div className="flex justify-start items-center gap-2">
                <Image
                  priority
                  src={AboutSectionData.checkIcon}
                  alt="Features"
                  width={30}
                  height={30}
                  className="shadow-2xl"
                />
                <span className="font-semibold">{about.title}</span>
              </div>
              <p className="text-left font-light text-secondary text-sm">
                {about.desc}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Image
            src={AboutSectionData.AboutMockup}
            alt="Shadient.co Logo"
            priority
            width={370}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
