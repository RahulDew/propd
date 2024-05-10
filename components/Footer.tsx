import { FooterData } from "@/data/FooterData";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-16 relative py-5 pt-28 bg-secondary text-white flex flex-col justify-center items-center">
      {/* Contact card */}
      <div className="absolute w-4/6 bg-white -top-20 h-32 rounded-2xl shadow-2xl flex justify-around items-center text-black">
        <div className="flex justify-center items-center gap-5">
          <Image
            src={FooterData.contactDetails.email.icon}
            alt={FooterData.contactDetails.email.altName}
            priority
            width={70}
            className=""
          />
          <p className="text-xl">{FooterData.contactDetails.email.data}</p>
        </div>
        <div className="w-0.5 h-20 bg-secondary"></div>
        <div className="flex justify-center items-center gap-5">
          <Image
            src={FooterData.contactDetails.call.icon}
            alt={FooterData.contactDetails.call.altName}
            priority
            width={70}
            className=""
          />
          <p className="text-xl">{FooterData.contactDetails.call.data}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-start sm:justify-around max-lg:flex-col my-5 px-10 md:px-16 lg:mr-28">
        <div className="flex justify-around col-row-span-2 max-lg:flex-wrap gap-10 lg:gap-10 xl:gap-24">
          <div className="w-full flex gap-24">
            <div className="w-[300px] space-y-5">
              <Link
                href={"/"}
                className="text-left flex gap-2 p-3 rounded-md"
              >
                <Image
                  src={FooterData.logo}
                  alt="PropDeal Logo"
                  priority
                  width={30}
                  className=""
                />
                <p className="text-2xl font-extrabold ">PropDeal</p>
              </Link>
              <p>{FooterData.description}</p>
              <div className="text-left m-0 flex justify-around items-center flex-wrap">
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
            <div className=" space-y-5">
              <h4 className="font-semibold text-xl">QUICK LINKS</h4>

              <div className="flex flex-col gap-2">
                {FooterData.quickLinks.map((link, index) => (
                  <span key={index}>{link.link}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[600px] space-y-5">
            <Link href={FooterData.Origin.originLink} target="_blank">
              <h4 className="font-semibold text-3xl">
                {FooterData.Origin.createdBy}
              </h4>
            </Link>
            <p>{FooterData.Origin.originDesc}</p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm opacity-60 my-5">
        {FooterData.copyright}
      </div>
    </footer>
  );
};

export default Footer;
