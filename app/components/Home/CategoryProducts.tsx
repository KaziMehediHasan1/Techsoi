"use client";
import Image from "next/image";
import CommonWrapper from "../layouts/CommonWrapper";
import PrimaryTitle from "../shared/PrimaryTitle";
import ProductCategory from "@/app/lib/constants/Logo";

const CategoryProducts = () => {
  return (
    <CommonWrapper>
      <div className="space-y-12">
        <PrimaryTitle
          headingOne="Products By"
          headingTwo=" Category"
          subheading="Get Your Desired Product from Featured Category!"
        />
        <section
          className="
          flex 
          flex-wrap 
          justify-center 
          gap-6"
        >
          {ProductCategory.map((cat) => (
            <div
              key={cat.name}
              className="
              flex flex-col items-center space-y-2 
              basis-1/4 xl:basis-auto"
            >
              <Image
                src={cat.icon}
                alt={cat.name}
                className="
                bg-primary-50 
                w-full 
                max-w-[90px] 
                p-3 sm:p-5 
                rounded-[99px]"
              />
              <p className="text-[16px] leading-[150%] text-primary-800">
                {cat.name}
              </p>
            </div>
          ))}
        </section>
      </div>
    </CommonWrapper>
  );
};

export default CategoryProducts;
