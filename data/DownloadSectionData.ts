import GooglePlayIcon from "@/public/assets/downloadicons/google-play.svg";
import AppStoreIcon from "@/public/assets/downloadicons/apple.svg";
import DownloadsIcon from "@/public/assets/downloadicons/downloads.svg";
import LikesIcon from "@/public/assets/downloadicons/likes.svg";
import RatingsIcon from "@/public/assets/downloadicons/ratings.svg";

export const DownloadSectionData = {
  heading: {
    title: "Download PropDeal Now",
    desc: "Over 100 businesses have transformed their sales processes with PropDeal. It's your turn now.",
  },
  downloadStores: [
    { buttonIcon: GooglePlayIcon, status: "GET IT ON", from: "Google Play" },
    { buttonIcon: AppStoreIcon, status: "COMMING SOON", from: "App Store" },
  ],
  Response: [
    { icon: DownloadsIcon, name: "Download", numbers: 500 },
    { icon: LikesIcon, name: "Like", numbers: 200 },
    { icon: RatingsIcon, name: "Ratings", numbers: 100 },
  ],
};
