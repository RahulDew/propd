import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/PropDealLogo.svg";

export default function Navbar() {
  return (
    <nav className="w-full z-30 fixed flex justify-center items-center">
      <div className="w-10/12 bg-slate-100 shadow-2xl h-[60px] flex justify-around items-center rounded-2xl font-semibold text-base">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Features</Link>
        <Link
          href={"/"}
          className="flex justify-center items-center gap-1 bg-white p-3 rounded-md"
        >
          <Image
            src={logo}
            alt="PropDeal Logo"
            priority
            width={30}
            className=""
          />
          <p className="text-2xl font-extrabold text-primary">PropDeal</p>
        </Link>
        <Link href={"/"}>Interface</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"} className="bg-primary text-white px-3 py-2 rounded-xl">
          Download
        </Link>
      </div>
    </nav>
  );
}
