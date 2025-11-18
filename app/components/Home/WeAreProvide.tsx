import Supports from "@/app/lib/constants/SupportSection";
import CommonWrapper from "../layouts/CommonWrapper";
import Image from "next/image";

const WeAreProvide = () => {
  return (
    <div className="my-20 bg-primary-50 w-full p-4 lg:p-10">
      <CommonWrapper>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-7 items-center justify-around">
          {Supports.map((item, index) => (
            <section
              key={item.id}
              className={`
                flex flex-col items-center w-full lg:max-w-[350px] lg:mx-auto space-y-2
                ${index < 3 && "border-b md:border-b-0 md:border-r border-primary-200 pr-1 pb-6 lg:pb-0 lg:pr-8"}`}
            >
              <Image
                alt={item.title}
                src={item.icon}
                className="bg-[#12485F] p-4 lg:w-1/4 mx-auto rounded-full"
              />
              <div className="text-center space-y-1 w-full lg:max-w-[70%]">
                <h1 className="text-lg lg:text-[24px] leading-[130%] text-basicDarkTwo">
                  {item.title}
                </h1>
                <p className="text-sm leading-[150%] text-basicDarkOne">
                  {item.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default WeAreProvide;
