import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavbarData } from "@/data/NavbarData";
import CalScheduler from "./CalSheduler";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-30 px-3 lg:px-10 flex justify-center items-center backdrop-blur-md">
      <div className="w-full h-[60px] flex justify-between items-center font-semibold text-base ">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-1 p-1 rounded-md"
        >
          <Image
            src={NavbarData.navbarLogo}
            alt="PropDeal Logo"
            priority
            width={30}
          />
          <p className="text-2xl lg:text-[27px] font-extrabold gradient_blue_text">
            {NavbarData.logoName}
          </p>
        </Link>
        <div className="hidden md:flex justify-center items-center gap-2 lg:gap-5 bg-white shadow-2xl text-sm lg:text-base p-1.5 px-2 rounded-full">
          {NavbarData.navLinks.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.link}
              className={`${
                navLink.name === "Home" && "bg-primary text-white"
              } w-[80px] lg:w-[100px] text-center  p-1.5 px-2 rounded-full hover:text-primary duration-300`}
            >
              {navLink.name}
            </Link>
          ))}
        </div>
        {/* <Link
          href={NavbarData.downloadLink.link}
          className="hidden md:block bg-white shadow-2xl shadow-neutral-500 text-primary hover:bg-primary hover:text-white px-2.5 py-2 rounded-full duration-300"
        >
          {NavbarData.downloadLink.data}
        </Link> */}
        {/* CalCom sheduler */}
        <CalScheduler />
      </div>
      <MobileNav />
    </nav>
  );
}
