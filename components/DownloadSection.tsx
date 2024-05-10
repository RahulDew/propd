import { AboutSectionData } from "@/data/AboutSectionData";
import { DownloadSectionData } from "@/data/DownloadSectionData";
import Image from "next/image";
import React from "react";

const DownloadSection = () => {
  return (
    <section
      id="features"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {DownloadSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {DownloadSectionData.desc}
      </p>
      <div className="space-y-7">
        {/* Download Buttons */}
        <div className="flex justify-center items-center gap-5">
          {DownloadSectionData.downloadStores.map((button, index) => (
            <div key={index} className="w-56 flex justify-center gap-5 items-center bg-secondary shadow-2xl hover:shadow-blue-400 duration-300 text-white p-5 rounded-2xl cursor-pointer">
              <Image
                src={button.buttonIcon}
                alt="PropDeal logo"
                priority
                width={30}
                className=""
              />
              <div className="flex flex-col justify-start items-start">
                <span className="text-xs">{button.status}</span>
                <p className="text-2xl tracking-tight">{button.from}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Download Response */}
        <div className="flex justify-center items-center gap-5">
          {DownloadSectionData.Response.map((item, index) => (
            <div key={index} className="w-48 flex justify-center gap-2 items-center flex-col bg-primary shadow-2xl hover:shadow-blue-400 duration-300 text-white p-5 rounded-2xl cursor-pointer">
              <Image
                src={item.icon}
                alt="PropDeal logo"
                priority
                width={30}
                className=""
              />
              <span className="">{item.numbers}</span>
              <p className="text-2xl tracking-tight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
