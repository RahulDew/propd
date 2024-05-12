import React from "react";
import { TestimonialSectionData } from "@/data/TestimonialsSectionData";
import Slider from "./widgets/Slider";
import Image from "next/image";
import Heading from "./ui/Heading";

const TestimonialSection = () => {
  const { heading, testimonialList } = TestimonialSectionData;
  return (
    <section
      id="testimonials"
      className="w-full space-y-7 px-10 py-16 md:px-16"
    >
      <Heading headingData={heading} />

      <Slider className="pt-10 pb-14">
        {testimonialList.map((Testimonial, idx) => (
          <li
            className="w-[250px] md:w-[330px] max-w-full relative bg-white rounded-2xl shadow-2xl shadow-blue-300 border-2 border-transparent hover:border-primary hover:text-primary flex flex-col justify-start items-start gap-4 flex-shrink-0 px-8 py-6 duration-300"
            key={idx}
          >
            <div className="flex justify-start items-start gap-2">
              <Image
                priority
                src={Testimonial.ProfileImg}
                alt={Testimonial.name}
              />
              <div>
                <span className="text-sm font-bold">{Testimonial.name}</span>
                <p className="text-sm text-left opacity-60">
                  {Testimonial.occupation}
                </p>
              </div>
            </div>
            <p className="text-left text-base font-light">
              {Testimonial.testimonial}
            </p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
