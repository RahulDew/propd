"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import CalanderIcon from "@/public/assets/calander.svg";
import Image from "next/image";

const calLink = process.env.CAL_LINK;

const CalScheduler = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#1D5BB6",
          },
        },
      });
    })();
  }, []);
  return (
    // <Cal
    //   calLink="dhiraj-jaiswal-v13yvu/30min"
    //   style={{ width: "100%", height: "100%", overflow: "scroll" }}
    //   config={{ layout: "month_view" }}
    // />
    <button
      data-cal-link={calLink}
      className="max-md:mr-12 bg-secondary py-2.5 px-4 rounded-full text-white font-semibold flex justify-center items-center gap-2"
    >
      <Image src={CalanderIcon} alt={"Calander"} priority width={18} />
      <p className="max-md:hidden pt-0.5">Book the call </p>
    </button>
  );
};

export default CalScheduler;
