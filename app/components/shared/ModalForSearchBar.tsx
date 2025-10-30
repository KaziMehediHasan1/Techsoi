import SearchIcon from "@/public/icons/search.svg";
import { Debounce } from "@/app/lib/utils/Debounce";
import Image from "next/image";
import { useMemo } from "react";
import { HiOutlineX } from "react-icons/hi";

const ModalForSearchBar = ({ closeModal }: { closeModal: () => void }) => {
  const debouncedSearch = useMemo(
    () =>
      Debounce((text: string) => {
        console.log("Searching for:", text);
      }, 2000),
    []
  );
  return (
    <section className="fixed inset-0 md:hidden flex justify-center top-1/5 sm:top-1/4 z-50">
      <div className="relative bg-primary-300/50 backdrop-blur-lg w-full max-w-[90%] h-1/2 py-8 px-4 transform translate-all rounded-xl shadow-lg duration-300">
        <div className="relative md:hidden block w-full mt-5">
          <input
            onChange={(e) => {
              debouncedSearch(e.target.value);
            }}
            type="search"
            placeholder="Search products.."
            className="placeholder:text-basicDark text-black border-white border py-2 rounded-xl focus:outline-none px-4 w-full my-input"
          />
          <button type="submit" className="absolute inset-y-0 right-0 pr-3 ">
            <Image src={SearchIcon} alt="Favourite" width={20} height={20} />
          </button>
        </div>

        {/* SEARCH DATA SHOWING THIS PLACE - START */}
        <div className="my-5 text-basicDarkOne text-center">Search your favourite products...</div>
        {/* SEARCH DATA SHOWING THIS PLACE - END */}

        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-black"
        >
          <HiOutlineX />
        </button>
      </div>
    </section>
  );
};

export default ModalForSearchBar;
