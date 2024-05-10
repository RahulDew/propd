"use client";
import { InterfaceSectionData } from "@/data/InterfaceSectionData";
import Image from "next/image";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
// import { Autoplay, Parallax, Navigation, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// using external css for custom navigator and pagination

// const photos = [
//   'https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// ];

const InterfaceSection = () => {
  return (
    <section
      id="interface"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {InterfaceSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {InterfaceSectionData.desc}
      </p>
      {/* <div className="flex justify-center items-center gap-5 md:gap-10">
        {InterfaceSectionData.interfaceList.map((item, index) => (
          <div>
            <Image
              priority
              src={item.interfaceImg}
              alt="Features"
              width={250}
              className="shadow-2xl"
            />
          </div>
        ))}
      </div> */}
      {/* <div className="">
        <div className="lg:mx-auto w-5/6 mx-[1.5rem]">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect={"coverflow"}
            loop={true}
            // initialSlide={4}
            spaceBetween={30}
            slidesPerView={5}
            parallax={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: false,
            }}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            className="coverflow"
          >
            {InterfaceSectionData.interfaceList.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  priority
                  src={item.interfaceImg}
                  alt="Features"
                  width={300}
                  className=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={5}
          //   slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {/* <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide> */}
          {InterfaceSectionData.interfaceList.map((item, index) => (
            <SwiperSlide>
              <Image
                priority
                src={item.interfaceImg}
                alt="Features"
                width={250}
                className="shadow-2xl"
              />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <span>Prev</span>
            </div>
            <div className="swiper-button-next slider-arrow">
              <span>Next</span>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default InterfaceSection;
