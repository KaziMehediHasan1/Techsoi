import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow-up-right.svg"
import PC from "@/public/icons/cupcase.png"
const Hero = () => {
  return (
    <div className="bg-primary-50 rounded-lg p-4 sm:pl-28 sm:pt-28 sm:pb-20 sm:pr-44 flex flex-col md:flex-row gap-10 justify-between">
     
      <section className="space-y-6 md:space-y-14">

        <div className="space-y-2 md:space-y-[17px] w-full max-w-[490px]">
          <button className="text-sm md:text-[16px] text-basicDarkOne bg-white rounded-[100px] py-2 px-3 leading-[150%]">
            New Released
          </button>
          <h1 className="text-basicDarkTwo text-4xl md:text-6xl leading-[120%]">Best and Premium Computer Cases</h1>
          <p className="text-primary-500 text-lg md:text-2xl">Special offer for everyone... </p>
        </div>

        <button className="bg-primary-500 flex items-center gap-x-2 py-2.5 px-3 cursor-pointer group md:py-3 md:px-5 rounded-xl  ">
          <span className="text-white leading-[130%]  font-medium">Explore Product</span>
          <Image
            src={ArrowIcon}
            alt="ArrowIcon"
            className="w-5 h-5 text-white group-hover:rotate-45 transform translate-all duration-200 ease-in group-hover:text-black"
          />
        </button>

      </section>

      <section>
        <Image src={PC} alt="pc-image" className="w-full max-w-[380px]"/>
      </section>
    </div>
  );
};

export default Hero;