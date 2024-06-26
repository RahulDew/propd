import { BlogsSectionData } from "@/data/BlogsSectionData";
import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/Heading";

const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="w-full bg_light_gradient rounded-t-3xl text-center space-y-10 pt-16 pb-32 px-5 md:px-16"
    >
      <Heading headingData={BlogsSectionData.heading} />
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {BlogsSectionData.populerBlogs.map((blog, index) => (
          <Link
            href={blog.link}
            key={index}
            className="group w-[350px] h-[350px] relative flex justify-start items-start flex-col gap-3 shadow-2xl bg-white hover:shadow-blue-300 hover:text-primary p-5 rounded-2xl duration-300"
          >
            <div className="bg-slate-700 w-full h-[200px] top-0 rounded-2xl flex justify-center items-center">
              <Image
                src={blog.image}
                alt={blog.title}
                priority
                width={180}
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 w-[310px] h-[200px] bg-primary bg-opacity-60  backdrop-blur-2xl rounded-2xl flex justify-center items-center text-center duration-300">
                <h2 className="text-center text-2xl text-white font-semibold">
                  Comming Soon
                </h2>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col text-left gap-3">
              <h4 className="font-semibold text-xl">{blog.title}</h4>
              {/* <span className="text-sm">{blog.desc}</span> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
