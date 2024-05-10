import { AboutSectionData } from "@/data/AboutSectionData";
import { FeaturesSectionData } from "@/data/FeaturesSectionData";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {AboutSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {AboutSectionData.desc}
      </p>

      <div className="flex justify-center items-center gap-40">
        <div className="w-2/6 space-y-5">
          {AboutSectionData.aboutList.map((about, index) => (
            <div
              key={index}
              className="flex gap-2 justify-start items-start flex-col shadow-2xl p-5 rounded-xl"
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
            width={350}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
