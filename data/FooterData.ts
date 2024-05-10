import logo from "@/public/assets/PropDealLogo.svg";
import FacebookIcon from "@/public/assets/socialicons/facebook-fill.svg";
import InstagramIcon from "@/public/assets/socialicons/instagram-fill.svg";
import TwitterIcon from "@/public/assets/socialicons/twitter-fill.svg";
import YoutubeIcon from "@/public/assets/socialicons/youtube-fill.svg";

import CallIcon from "@/public/assets/footericons/Call.svg";
import EmailIcon from "@/public/assets/footericons/Email Icon.svg";

export const FooterData = {
  logo: logo,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
  socialMediaIcons: [
    { name: "Faceboook", icon: FacebookIcon },
    { name: "Instagram", icon: InstagramIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Youtube", icon: YoutubeIcon },
  ],
  quickLinks: [
    { link: "About" },
    { link: "Features" },
    { link: "Interface" },
    { link: "Blog" },
  ],
  Origin: {
    createdBy: "Codecamber",
    originDesc:
      "Solution for startups and scale ups to access the beset technology leadership on cost effective partnership basis. Follow us on Twitter. Custome Software Dev.",
    originLink: "https://www.codecamber.com/",
  },
  copyright: "Copyright 2024. CodeCamber. All Right Reserved.",
  contactDetails: {
    call: {
      icon: CallIcon,
      data: "+880 321 655 9985",
      altName: "Contact Number",
    },
    email: {
      icon: EmailIcon,
      data: "info@youremail.com",
      altName: "Contact Email ID",
    },
  },
};
