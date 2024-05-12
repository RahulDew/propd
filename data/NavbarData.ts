import logo from "@/public/assets/PropDealLogo.svg";
import SidebarIcon from "@/public/assets/SidebarIcon.svg";

export const NavbarData = {
  navbarLogo: logo,
  logoName: "PropDeal",
  navLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Features", link: "/#features" },
    { name: "Interface", link: "/#interface" },
    { name: "Blogs", link: "/#blogs" },
  ],
  downloadLink: {
    link: "/#download",
    data: "Download",
  },
  sidebarIcon: SidebarIcon,
};
