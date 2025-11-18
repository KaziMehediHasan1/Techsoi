import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow-up-right.svg";
import PC from "@/public/icons/cupcase.png";
import CommonWrapper from "../layouts/CommonWrapper";
const Hero = () => {
  return (
    <CommonWrapper>
      <div className="bg-primary-50 overflow-hidden rounded-lg p-4 sm:pl-28 sm:pt-28 sm:pb-20 sm:pr-44 flex flex-col md:flex-row gap-16 justify-between">
        {" "}
        <section className="space-y-6 md:space-y-14">
          <div className="space-y-2 md:space-y-[17px] w-full max-w-[590px]">
            <button className="text-sm md:text-[16px] text-basicDarkOne bg-white rounded-[100px] py-2 px-3 leading-[150%]">
              New Released
            </button>
            <h1 className="text-basicDarkTwo sm:text-4xl md:text-6xl leading-[120%]">
              Best and Premium Computer Cases
            </h1>
            <p className="text-primary-500 text-lg md:text-2xl">
              Special offer for everyone...{" "}
            </p>
          </div>

          {/* BUTTON SHAPE FOR BIG DEVICES ONLY -- START */}
          <section className="relative w-max">
            {/* Bottom shape */}
            <div
              className="absolute 
            xl:-bottom-[260px]
            xl:left-1/6
            -translate-x-1/2
            w-[260px] 
            h-80
            bg-primary-300 
            rounded-4xl 
            rotate-45
            opacity-10"
            ></div>

            {/* Top shape */}
            <div
              className="absolute 
            xl:-bottom-[230px]
            xl:left-1/5
            -translate-x-1/2
            w-[290px] 
            h-80
            bg-primary-500 
            rounded-4xl 
            rotate-45
            opacity-10"
            ></div>

            {/* Button */}
            <button
              className="
            relative 
            bg-primary-500 
            flex items-center gap-x-2 
            py-2.5 px-4 
            md:py-3 md:px-6 
            rounded-xl
            cursor-pointer 
            group 
            z-10"
            >
              <span className="text-white leading-[130%] font-medium">
                Explore Product
              </span>
              <Image
                src={ArrowIcon}
                alt="ArrowIcon"
                className="
              w-5 h-5 
              group-hover:rotate-45 
              transition-all 
              duration-200"
              />
            </button>
          </section>
          {/* BUTTON SHAPE FOR BIG DEVICES ONLY -- END */}
        </section>
        <section>
          <Image src={PC} alt="pc-image" className="w-full max-w-[380px]" />
        </section>
      </div>
    </CommonWrapper>
  );
};

export default Hero;
