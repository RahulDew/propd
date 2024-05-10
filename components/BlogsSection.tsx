import { BlogsSectionData } from "@/data/BlogsSectionData";
import Image from "next/image";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <section
      id="teams"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {BlogsSectionData.heading}
      </h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {BlogsSectionData.desc}
      </p>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {BlogsSectionData.populerBlogs.map((blog, index) => (
          <Link href={blog.link}
            key={index}
            className="w-[350px] h-[400px] flex justify-start items-start flex-col gap-3 shadow-2xl hover:shadow-blue-300 hover:text-primary p-5 rounded-2xl duration-300"
          >
            <div className="bg-slate-700 w-full h-[200px] top-0 rounded-2xl flex justify-center items-center">
              <Image
                src={blog.image}
                alt={blog.title}
                priority
                width={180}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex justify-start items-start flex-col text-left gap-3">
              <h4 className="font-semibold text-xl">{blog.title}</h4>
              <span className="text-xs">{blog.desc}</span>
              {/* <Link href={blog.link} className="font-semibold text-primary">Read More</Link> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
