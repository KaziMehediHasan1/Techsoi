"use client";
import Image from "next/image";
import CommonWrapper from "../layouts/CommonWrapper";
import PrimaryTitle from "../shared/PrimaryTitle";
import Favourite from "@/public/icons/favourite.svg";
import Shopping from "@/public/icons/shopping-cart.svg";
import Buy from "@/public/icons/shopping-basket-01.svg";
import Star from "@/public/icons/Star.svg";
import cards from "@/app/lib/constants/CardsData";
const TopSellingProducts = () => {
  return (
    <CommonWrapper>
      <div className="space-y-12 mt-20">
        <PrimaryTitle
          headingOne="Top Selling"
          headingTwo=" Products"
          subheading="Get Your Desired Product from Featured Category!"
        />
        {/* CARDS DATA START */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch">
          {cards.map((item) => (
            <section
              key={item.id}
              className="border border-primary-100 rounded-[20px] space-y-4 p-4 w-full overflow-hidden"
            >
              <Image
                alt={item.title}
                src={item.image}
                className="w-full max-w-[180px] mx-auto object-contain"
              />

              <h1 className="text-xl md:text-[22px] font-medium leading-[130%] text-basicDarkTwo">
                {item.title}
              </h1>

              <section className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <p className="text-md md:text-2xl font-semibold leading-[130%] text-primary-500">
                    {item.price}
                  </p>
                  <del className="text-sm md:text-[16px] leading-[150%] text-basicDark">
                    {item.previousprice}
                  </del>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <Image
                    src={Star}
                    alt="Favourite"
                    className="w-6 h-6 md:w-8 md:h-8 p-1 rounded-full object-contain"
                  />
                  <p className="text-sm">
                    {item.review} ({item.totalreviews})
                  </p>
                </div>
              </section>

              <section className="flex items-center justify-between">
                <button className="flex items-center gap-x-2 cursor-pointer bg-primary-50 pl-2 pr-4 py-1 rounded-xl shrink-0">
                  <Image
                    src={Buy}
                    alt="Buy"
                    className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full object-contain"
                  />
                  <p className="text-sm md:text-[16px]">Buy Now</p>
                </button>

                <div className="flex items-center gap-x-3 shrink-0">
                  <button>
                    <Image
                      src={Shopping}
                      alt="Shopping"
                      className="w-8 h-8 md:w-10 md:h-10 bg-primary-50 p-2 rounded-xl object-contain"
                    />
                  </button>

                  <button>
                    <Image
                      src={Favourite}
                      alt="Favourite"
                      className="w-8 h-8 md:w-10 md:h-10 bg-primary-50 p-2 rounded-xl object-contain"
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

export default TopSellingProducts;
