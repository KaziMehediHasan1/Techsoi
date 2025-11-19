"use client";
import Calendar from "@/public/icons/calendar-03.svg";
import Arrow from "@/public/icons/arrow-up-right.svg";
import Image from "next/image";
import CommonWrapper from "../layouts/CommonWrapper";
import BlogPrimaryHeading from "./BlogPrimaryHeading";
import BlogData from "@/app/lib/constants/BlogData";
import Link from "next/link";

const BlogCards = () => {
  return (
    <div className="my-20 md:mt-[120px]">
      <CommonWrapper>
        <section className="space-y-10">
          <BlogPrimaryHeading />

          {/* CARD START */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogData?.map((data) => (
              <div
                key={data.id}
                className="p-5 shadow-sm w-full h-auto border border-primary-100 rounded-2xl space-y-3 bg-white"
              >
                <Image
                  alt={data.title}
                  src={data.image}
                  className="w-full h-auto object-cover rounded-xl"
                />

                <div className="flex items-center gap-2 text-basicDarkOne">
                  <Image alt="icon" src={Calendar} width={20} height={20} />
                  <p className="text-sm md:text-base">{data.date}</p>
                </div>

                <h1 className="text-lg md:text-xl font-semibold text-basicDarkTwo leading-[130%]">
                  {data.title}
                </h1>

                <p className="text-sm md:text-[15px] text-basicDarkOne leading-[150%] line-clamp-3">
                  {data.description}
                </p>

                <Link
                  href="blog"
                  className="flex items-center gap-2 text-primary-600 font-medium pt-1"
                >
                  <p className="text-sm md:text-base">Read more</p>
                  <Image alt="arrow-icon" src={Arrow} width={20} height={20} />
                </Link>
              </div>
            ))}
          </section>
          {/* CARD END */}
          
        </section>
      </CommonWrapper>
    </div>
  );
};

export default BlogCards;
