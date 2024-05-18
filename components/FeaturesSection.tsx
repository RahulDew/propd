import Image from "next/image";
import { FeaturesSectionData } from "@/data/FeaturesSectionData";
import Heading from "./ui/Heading";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full bg_light_gradient text-center space-y-7 py-16 px-5 md:px-16 rounded-3xl"
    >
      <Heading headingData={FeaturesSectionData.heading} />

      {/* Features mockup */}
      <div className="flex md:hidden justify-center items-center">
        <Image
          priority
          src={FeaturesSectionData.featuresMockup}
          alt="Features"
          width={250}
          className="shadow-2xl max-lg:w-[190px]"
        />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        <div className="w-56 space-y-5">
          {FeaturesSectionData.featuresList1.map((feature, index) => (
            <div
              key={index}
              className="h-56 flex gap-2 justify-start md:justify-start items-center md:items-end flex-col rounded-xl"
            >
              <Image
                priority
                src={feature.icon}
                alt="Features"
                width={30}
                height={30}
                className="shadow-2xl"
              />
              <span className="md:text-right font-semibold">
                {feature.title}
              </span>
              <p className="md:text-right font-light text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        {/* Features mockup */}
        <div className="hidden md:block">
          <Image
            priority
            src={FeaturesSectionData.featuresMockup}
            alt="Features"
            width={250}
            className="shadow-2xl hover:shadow-blue-300 max-lg:w-[190px] rounded-2xl"
          />
        </div>
        {/* 2nd featureList */}
        <div className="w-56 space-y-5">
          {FeaturesSectionData.featuresList2.map((feature, index) => (
            <div
              key={index}
              className="h-56 flex gap-2 justify-start md:justify-start items-center md:items-start flex-col rounded-xl"
            >
              <Image
                priority
                src={feature.icon}
                alt="Features"
                width={30}
                height={30}
                className="shadow-2xl"
              />
              <span className="md:text-left font-semibold">
                {feature.title}
              </span>
              <p className="md:text-left font-light text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
