import { AboutSectionData } from "@/data/AboutSectionData";
import { DownloadSectionData } from "@/data/DownloadSectionData";
import Image from "next/image";
import React from "react";
import DownloadBtn from "./ui/DownloadBtn";
import Heading from "./ui/Heading";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <Heading headingData={DownloadSectionData.heading} />
      <div className="space-y-7">
        {/* Download Buttons */}
        <div className="flex justify-center items-center flex-wrap gap-5">
          {DownloadSectionData.downloadStores.map((btnData, index) => (
            <DownloadBtn key={index} btnData={btnData} />
          ))}
        </div>
        {/* Download Response */}
        <div className="flex justify-center items-center flex-wrap gap-5">
          {DownloadSectionData.Response.map((item, index) => (
            <div
              key={index}
              className="w-32 md:w-44 flex justify-center gap-2 items-center flex-col bg-primary shadow-2xl hover:shadow-blue-300 duration-300 text-white p-5 rounded-2xl cursor-pointer"
            >
              <Image
                src={item.icon}
                alt="PropDeal logo"
                priority
                width={30}
                className=""
              />
              <span className="">{item.numbers}</span>
              <p className="text-lg md:text-2xl">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
