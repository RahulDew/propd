import { FooterData } from "@/data/FooterData";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "./ui/ContactCard";

const Footer = () => {
  return (
    <footer className="w-full  relative py-5 pt-24 bg-secondary text-white flex flex-col justify-center items-center">
      {/* Contact cards */}
      <div className="absolute w-5/6 sm:w-4/6 bg-white -top-20 h-36 md:h-32 rounded-2xl shadow-2xl flex justify-around flex-col md:flex-row items-center text-black">
        {FooterData.contactDetails.map((contact, index) => (
          <ContactCard
            key={index}
            initial={index === 0 ? true : false}
            contactData={contact}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-start sm:justify-around max-lg:flex-col my-5 px-10 md:px-16">
        <div className="flex justify-around col-row-span-2 flex-col lg:flex-row gap-10">
          <div className="w-full flex gap-10 justify-center items-center md:justify-around flex-col md:flex-row">
            {/* Product description */}
            <div className="space-y-5 w-5/6 md:w-[300px] flex flex-col justify-center md:justify-start items-center md:items-start">
              <Link href={"/"} className="flex gap-2 rounded-md">
                <Image
                  src={FooterData.logo}
                  alt="PropDeal Logo"
                  priority
                  width={30}
                  className=""
                />
                <p className="text-2xl font-extrabold ">PropDeal</p>
              </Link>
              <p className="text-center md:text-left opacity-60">
                {FooterData.description}
              </p>
              {/* Social icons */}
              <div className="flex justify-start items-start flex-wrap gap-10">
                {FooterData.socialMediaIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center text-left"
                  >
                    <Image
                      src={icon.icon}
                      alt={icon.name}
                      priority
                      className="max-md:w-7 w-8"
                    />
                    {/* <div className="w-0.5 h-8 bg-white"></div> */}
                  </div>
                ))}
              </div>
            </div>
            {/* Links */}
            <div className="flex gap-10 justify-center items-center flex-wrap text-center md:text-left">
              {/* Quick links */}
              <div className="space-y-5">
                <h4 className="font-semibold text-xl">QUICK LINKS</h4>

                <div className="flex flex-col gap-2">
                  {FooterData.quickLinks.map((link, index) => (
                    <span key={index}>{link.link}</span>
                  ))}
                </div>
              </div>
              {/* Policies */}
              <div className="space-y-5">
                <h4 className="font-semibold text-xl">POLICIES</h4>

                <div className="flex flex-col gap-2">
                  {FooterData.policyLinks.map((link, index) => (
                    <span key={index}>{link.link}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Origin */}
          <div className="w-5/6 lg:w-3/6 mx-auto space-y-5 text-center lg:text-left">
            <Link href={FooterData.Origin.originLink} target="_blank">
              <h4 className="font-semibold text-3xl">
                {FooterData.Origin.createdBy}
              </h4>
            </Link>
            <p className="opacity-60">{FooterData.Origin.originDesc}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm opacity-60 my-5">
        {FooterData.copyright}
      </div>
    </footer>
  );
};

export default Footer;
