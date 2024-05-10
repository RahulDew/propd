import { ShowcaseSectionData } from "@/data/ShowcaseSectionData";
import Image from "next/image";

const ShowcaseSection = () => {
  return (
    <section
      id="interface"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        how to use the app perfectly
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <div className="flex justify-center items-center gap-5 md:gap-10">
        <div className="h-56 w-2/6 bg-primary rounded-xl flex justify-center items-center shadow-2xl hover:shadow-blue-400 duration-300">
          <div className="p-0.5 bg-white bg-opacity-85 rounded-full shadow-2xl border-4 border-slate-300 cursor-pointer">
            <Image
              src={ShowcaseSectionData.PlayIcon}
              alt="PropDeal logo"
              priority
              width={40}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
