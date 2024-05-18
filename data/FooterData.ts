import logo from "@/public/assets/PropDealLogo.svg";
import FacebookIcon from "@/public/assets/socialicons/facebook.svg";
import InstagramIcon from "@/public/assets/socialicons/instagram.svg";
import XIcon from "@/public/assets/socialicons/x.svg";
import Github from "@/public/assets/socialicons/github.svg";

import CallIcon from "@/public/assets/contacticons/call.svg";
import EmailIcon from "@/public/assets/contacticons/email.svg";

export const FooterData = {
  logo: logo,
  description:
    "Prop Deal was born out of the collaboration of innovative minds from real estate and technology,  determined to alleviate the challenges faced by real estate professionals",
  socialMediaIcons: [
    { name: "Faceboook", icon: FacebookIcon, link: "/", size: 30 },
    { name: "Instagram", icon: InstagramIcon, link: "/", size: 30 },
    { name: "X", icon: XIcon, link: "/", size: 30 },
    { name: "Github", icon: Github, link: "/", size: 35 },
  ],
  quickLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Features", link: "/#features" },
    // { name: "Interface", link: "/#interface" },
    { name: "Blogs", link: "/#blogs" },
  ],
  policyLinks: [
    { link: "Terms" },
    { link: "Privacy" },
    { link: "Guidelines" },
    { link: "Company" },
  ],
  Origin: {
    createdBy: "CodeCamber",
    originDesc:
      "Solution for startups and scale ups to access the beset technology leadership on cost effective partnership basis.",
    originLink: "https://www.codecamber.com/",
  },
  contactDetails: [
    {
      icon: CallIcon,
      data: "+91 6265004243",
      altName: "Contact Number",
    },
    {
      icon: EmailIcon,
      data: "info@youremail.com",
      altName: "Contact Email ID",
    },
  ],
  copyright: "Copyright 2024. CodeCamber. All Right Reserved.",
};
