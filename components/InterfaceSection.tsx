import { InterfaceSectionData } from "@/data/InterfaceSectionData";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Heading from "./ui/Heading";
import SwiperSlider from "./SwiperSlider";
import Slider from "./widgets/Slider";
import Image from "next/image";

const InterfaceSection = () => {
  return (
    <section
      id="interface"
      className="w-11/12 text-center space-y-10 py-16 px-5 md:px-16"
    >
      <Heading headingData={InterfaceSectionData.heading} />

      {/* <SwiperSlider /> */}
      <Slider>
        {InterfaceSectionData.interfaceList.map((item, index) => (
          <div key={index} className="hover:shadow-2xl hover:shadow-blue-300 duration-300">
            <Image
              src={item.interfaceImg}
              alt="slide_image_2"
              priority
              width={220}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InterfaceSection;
