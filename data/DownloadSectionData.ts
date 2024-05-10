import GooglePlayIcon from "@/public/assets/downloadicons/google-play.svg";
import AppStoreIcon from "@/public/assets/downloadicons/apple.svg";
import DownloadsIcon from "@/public/assets/downloadicons/DownloadsIcon.svg";
import LikesIcon from "@/public/assets/downloadicons/LikeIcon.svg";
import StarsIcon from "@/public/assets/downloadicons/StarIcon.svg";

export const DownloadSectionData = {
  heading: "Download PropDeal Now",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  downloadStores: [
    { buttonIcon: GooglePlayIcon, status: "GET IT ON", from: "Google Play" },
    { buttonIcon: AppStoreIcon, status: "COMMING SOON", from: "App Store" },
  ],
  Response: [
    { icon: DownloadsIcon, name: "Download", numbers: 500 },
    { icon: LikesIcon, name: "Like", numbers: 200 },
    { icon: StarsIcon, name: "Ratings", numbers: 100 },
  ],
};
