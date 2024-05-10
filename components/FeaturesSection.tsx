import Image from "next/image";
import { FeaturesSectionData } from "@/data/FeaturesSectionData";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {FeaturesSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {FeaturesSectionData.desc}
      </p>
      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        <div className="w-56 space-y-7">
          {FeaturesSectionData.featuresList1.map((feature, index) => (
            <div
              key={index}
              className="flex gap-2 justify-end items-end flex-col shadow-2xl p-5 rounded-xl"
            >
              <Image
                priority
                src={feature.icon}
                alt="Features"
                width={30}
                height={30}
                className="shadow-2xl"
              />
              <span className="font-semibold">{feature.title}</span>
              <p className="text-right font-light text-secondary text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Image
            priority
            src={FeaturesSectionData.featuresMockup}
            alt="Features"
            width={250}
            className="shadow-2xl"
          />
        </div>
        <div className="w-56 space-y-8">
          {FeaturesSectionData.featuresList2.map((feature, index) => (
            <div
              key={index}
              className="flex gap-2 justify-start items-start flex-col shadow-2xl p-5 rounded-xl"
            >
              <Image
                priority
                src={feature.icon}
                alt="Features"
                width={30}
                height={30}
                className="shadow-2xl"
              />
              <span className="font-semibold">{feature.title}</span>
              <p className="text-left font-light text-secondary text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
