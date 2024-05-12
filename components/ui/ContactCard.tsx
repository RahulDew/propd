import { FooterData } from "@/data/FooterData";
import Image from "next/image";

interface contactData {
  icon: any;
  altName: string;
  data: string;
}

export default function ContactCard({
  contactData,
  initial = false,
}: {
  contactData: contactData;
  initial: boolean;
}) {
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <Image
          src={contactData.icon}
          alt={contactData.altName}
          priority
          width={60}
          className="max-lg:w-[40px]"
        />
        <p className="lg:text-xl">{contactData.data}</p>
      </div>
      {initial && (
        <div className="w-4/6 md:w-0.5 h-0.5 md:h-20 bg-secondary bg-opacity-60"></div>
      )}
    </>
  );
}
