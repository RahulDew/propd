import { InterfaceSectionData } from "@/data/InterfaceSectionData";
import Heading from "./ui/Heading";
import Slider from "./widgets/Slider";
import Image from "next/image";

const InterfaceSection = () => {
  return (
    <section
      id="interface"
      className="w-11/12 text-center space-y-10 py-16 px-5 md:px-16"
    >
      <Heading headingData={InterfaceSectionData.heading} />

      <Slider className="pb-14">
        {InterfaceSectionData.interfaceList.map((item, index) => (
          <div
            key={index}
            className="hover:shadow-2xl hover:shadow-blue-300 rounded-3xl duration-300"
          >
            <Image
              src={item.interfaceImg}
              alt="slide_image_2"
              priority
              width={220}
              className=" w-[170px] md:w-[220px] rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InterfaceSection;
