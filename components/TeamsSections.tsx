import { TeamsSectionData } from "@/data/TeamsSectionData";
import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/Heading";

const TeamsSections = () => {
  return (
    <section
      id="teams"
      className="w-full bg_light_gradient text-center space-y-10 py-16 px-5 md:px-16 rounded-3xl"
    >
      <Heading headingData={TeamsSectionData.heading} />

      <div className="flex justify-center items-center flex-wrap gap-5">
        {TeamsSectionData.members.map((member, index) => (
          <div
            key={index}
            className="w-[250px] bg-white flex justify-center items-center flex-col gap-3 pb-10 p-5 rounded-2xl grayscale hover:grayscale-0 shadow-2xl hover:shadow-blue-300 hover:text-primary duration-300"
          >
            <div className="w-full h-[200px] top-0 rounded-2xl flex justify-center items-center">
              <Image
                src={member.image}
                alt={member.name}
                priority
                width={180}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h4 className="font-semibold text-xl">{member.name}</h4>
            <span className="text-xs">{member.position}</span>
            <ul className="flex justify-around items-center gap-5 mt-2">
              {member.socialLinks.map((link, idx) => (
                <Link key={idx} href={link.link}>
                  <Image
                    src={link.icon}
                    alt={link.name}
                    priority
                    width={25}
                    className="grayscale"
                  />
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsSections;
