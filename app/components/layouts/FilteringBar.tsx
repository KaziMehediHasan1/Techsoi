"use client";
import { useState } from "react";
import CommonWrapper from "./CommonWrapper";

const Links = [
  "Laptop",
  "PC Components",
  "Monitor",
  "Casing",
  "PC Accessories",
  "Mouse",
  "Keyboard",
  "Headphone",
  "Speaker",
  "Gaming",
  "CCTV",
];

const FilteringBar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setActiveFilter(link);
    console.log(link, "hovered");
  };

  const handleMouseLeave = () => {
    setActiveFilter(null);
  };

  return (
    <div className="bg-primary-50 hidden md:block">
      <CommonWrapper>
        <section className="">
          <div className="overflow-x-auto scrollbar-hide flex items-center justify-between gap-5 md:gap-2 scrollbar-hide whitespace-nowrap text-[12px] md:text-[18px]">
            {Links.map((link) => (
              <button
                key={link}
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
                className="py-2 rounded hover:text-SuccessActive hover:cursor-pointer shrink-0 "
              >
                {link}
                {/* <div className="text-primary-200">|</div> */}
              </button>
            ))}
          </div>

          {/* Filter modal */}
          {activeFilter && (
            <div className="mt-4 p-4 bg-white shadow rounded">
              <p>Showing filters for: {activeFilter}</p>
              {/* You can render dynamic filters here based on activeFilter */}
            </div>
          )}
        </section>
      </CommonWrapper>
    </div>
  );
};

export default FilteringBar;
