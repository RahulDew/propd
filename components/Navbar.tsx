import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavbarData } from "@/data/NavbarData";
import CalScheduler from "./CalSheduler";
import { NavLinks } from "./NavLinks";

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
        <NavLinks links={NavbarData.navLinks} />

        {/* CalCom sheduler */}
        <CalScheduler />
      </div>
      <MobileNav />
    </nav>
  );
}
