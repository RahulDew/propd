import { TeamsSectionData } from "@/data/TeamsSectionData";
import Image from "next/image";
import Link from "next/link";

const TeamsSections = () => {
  return (
    <section
      id="teams"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {TeamsSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {TeamsSectionData.desc}
      </p>
      <div className="flex justify-center items-center gap-5">
        {TeamsSectionData.members.map((member, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-3 shadow-2xl p-5 rounded-2xl"
          >
            <Image
              src={member.image}
              alt={member.name}
              priority
              width={180}
              className="rounded-2xl"
            />
            <h4 className="font-semibold text-xl">{member.name}</h4>
            <span className="text-xs">{member.position}</span>
            <br />
            <ul className="flex justify-around items-center gap-5">
              {member.socialLinks.map((link, idx) => (
                <Link key={idx} href={"/"}>
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
