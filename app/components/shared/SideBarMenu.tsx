"use client";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

const FilterData = {
  Laptop: {
    brand: ["HP", "Dell", "Asus", "Acer", "Apple"],
    processor: ["i3", "i5", "i7", "Ryzen 5", "Ryzen 7"],
    priceRange: ["Under 50k", "50k-1L", "1L+"],
  },
  "PC Components": {
    category: ["Motherboard", "CPU", "GPU", "RAM", "Storage"],
    brand: ["Intel", "AMD", "Gigabyte", "MSI"],
  },
  Monitor: {
    size: ["22 inch", "24 inch", "27 inch", "32 inch"],
    resolution: ["1080p", "1440p", "4K"],
  },
  Keyboard: {
    type: ["Mechanical", "Membrane"],
    brand: ["Logitech", "Razer", "Corsair", "Fantech"],
  },
};

type MenuType = {
  closeMenu: () => void;
  openMenu: boolean;
};

const SideBarMenu = ({ closeMenu, openMenu }: MenuType) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <AnimatePresence>
      {openMenu && (
        <>
          {/* Overlay (fades in) */}
          <motion.div
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black "
          />

          {/* Sidebar (slides in from left) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 top-0 bottom-0 z-50 w-full max-w-[75%] bg-primary-50 shadow-lg flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-primary-500 transition"
            >
              <HiOutlineX size={28} />
            </button>

            {/* Menu Items */}
            <nav className="mt-14 flex flex-col gap-3 px-6">
              {Object.keys(FilterData).map((category) => (
                <div key={category} className="w-full">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="text-lg font-medium capitalize text-primary-500 flex justify-between w-full hover:text-primary-600"
                  >
                    {category}
                    <span>
                      {openCategory === category ? (
                        <RiArrowDropDownLine className="rotate-180" size={30} />
                      ) : (
                        <RiArrowDropDownLine size={30} />
                      )}
                    </span>
                  </button>
                  <div className="border-[0.5px] border-primary-100 w-full" />
                  <AnimatePresence>
                    {openCategory === category && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 ml-4 flex flex-col gap-1 overflow-hidden"
                      >
                        {Object.entries(FilterData[category]).map(
                          ([key, values]) => (
                            <div key={key}>
                              <h4 className="text-lg capitalize font-medium text-primary-500">
                                {key}
                              </h4>
                              <div className="border-[0.5px] border-primary-100 w-full" />
                              <ul className="ml-2 text-basicDarkOne text-sm">
                                {(values as string[]).map((item) => (
                                  <li
                                    key={item}
                                    className="hover:text-primary-500 cursor-pointer transition-colors"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBarMenu;
