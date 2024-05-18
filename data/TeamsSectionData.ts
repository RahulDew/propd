import InstagramIcon from "@/public/assets/socialicons/instagram.svg";
import LinkedinIcon from "@/public/assets/socialicons/linkedin.svg";
import GithubIcon from "@/public/assets/socialicons/github.svg";
import XIcon from "@/public/assets/socialicons/x.svg";

import AnkitVerma from "@/public/assets/teams/Ankit_Verma.png";
import DheerajJaiswal from "@/public/assets/teams/Dheeraj_Jaiswal.png";
import RahulDewangan from "@/public/assets/teams/Rahul_Dewangan.png";

export const TeamsSectionData = {
  heading: {
    title: "Our Team",
    desc: "Prop Deal was born out of the collaboration of innovative minds from real estate and technology,  determined to alleviate the challenges faced by real estate professionals. Prop Deal envisions a future where real estate professionals thrive without operational complexities. We aspire to be the Proptech platform, recognized for its ability to address pain points, foster efficiency, transparency, and success in real estate market.",
  },
  members: [
    {
      name: "Ankit Verma",
      position: "Founder",
      image: AnkitVerma,
      socialLinks: [
        {
          name: "X",
          icon: XIcon,
          link: "/",
          size: 25,
        },
        {
          name: "Linkedin",
          icon: LinkedinIcon,
          link: "/",
          size: 32,
        },
        {
          name: "Instagram",
          icon: InstagramIcon,
          link: "/",
          size: 25,
        },
      ],
    },
    {
      name: "Dhiraj Jaiswal",
      position: "Cofounder and CTO",
      image: DheerajJaiswal,
      socialLinks: [
        {
          name: "X",
          icon: XIcon,
          link: "/",
          size: 25,
        },
        {
          name: "Linkedin",
          icon: LinkedinIcon,
          link: "/",
          size: 32,
        },
        {
          name: "Instagram",
          icon: InstagramIcon,
          link: "/",
          size: 25,
        },
      ],
    },
    {
      name: "Rahul Dewangan",
      position: "Founding Member & Developer",
      image: RahulDewangan,
      socialLinks: [
        {
          name: "Github",
          icon: GithubIcon,
          link: "/",
          size: 32,
        },
        {
          name: "Linkedin",
          icon: LinkedinIcon,
          link: "/",
          size: 32,
        },
        {
          name: "Instagram",
          icon: InstagramIcon,
          link: "/",
          size: 25,
        },
      ],
    },
  ],
};
