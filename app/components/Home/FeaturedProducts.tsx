"use client";
import Image from "next/image";
import CommonWrapper from "../layouts/CommonWrapper";
import PrimaryTitle from "../shared/PrimaryTitle";
import Favourite from "@/public/icons/favourite.svg";
import Shopping from "@/public/icons/shopping-cart.svg";
import Buy from "@/public/icons/shopping-basket-01.svg";
import Star from "@/public/icons/Star.svg";
import cards from "@/app/lib/constants/CardsData";
const FeaturedProducts = () => {
  return (
    <CommonWrapper>
      <div className="space-y-12 mt-[140px]">
        <PrimaryTitle
          headingOne="Featured"
          headingTwo=" Products"
          subheading="Get Your Desired Product from Featured Category!"
        />
        {/* CARDS DATA START */}
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {cards.map((item) => (
            <section
              key={item.id}
              className="border border-primary-100 rounded-[20px] space-y-4  p-4 w-full max-w-[360px]"
            >
              <Image
                alt={item.title}
                src={item.image}
                width={200}
                height={200}
                className="w-fit mx-auto"
              />
              <h1 className="text-[22px] font-medium leading-[130%] text-basicDarkTwo">
                {item.title}
              </h1>
              <section className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <p className="text-2xl font-semibold leading-[130%] text-primary-500">
                    {item.price}
                  </p>
                  <del className="text-[16px] leading-[150%] font-normal text-basicDark ">
                    {item.previousprice}
                  </del>
                </div>
                <div className="flex items-center ">
                  <Image
                    src={Star}
                    alt="Favourite"
                    className="w-8 h-8 p-2 rounded-full"
                  />
                  <p>
                    {item.review} ({item.totalreviews})
                  </p>
                </div>
              </section>
              <section className="flex items-center justify-between">
                <button className="flex items-center gap-x-3 cursor-pointer bg-primary-50 pl-2 pr-4 py-1 rounded-xl">
                  <Image
                    src={Buy}
                    alt="Favourite"
                    className="w-10 h-10  p-2 rounded-full"
                  />
                  <p>Buy Now</p>
                </button>
                <div className="flex items-center gap-x-3">
                  <button className="cursor-pointer">
                    <Image
                      src={Shopping}
                      alt="Favourite"
                      className="w-full h-full bg-primary-50  p-3 rounded-xl"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <Image
                      src={Favourite}
                      alt="Favourite"
                      className="w-full h-full bg-primary-50 p-3 rounded-xl"
                    />
                  </button>
                </div>
              </section>
            </section>
          ))}
        </div>
        {/* CARDS DATA END */}
      </div>
    </CommonWrapper>
  );
};

export default FeaturedProducts;
