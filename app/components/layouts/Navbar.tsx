"use client";
import Logo from "@/public/icons/logo.svg";
import Favourite from "@/public/icons/favourite.svg";
import Shopping from "@/public/icons/shopping-cart.svg";
import SearchIcon from "@/public/icons/search.svg";
import CommonWrapper from "./CommonWrapper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Debounce } from "@/app/lib/utils/Debounce";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ModalForSearchBar from "../shared/ModalForSearchBar";
import SideBarMenu from "../shared/SideBarMenu";
import { cn } from "@/app/lib/utils/cn";


const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const debouncedSearch = useMemo(
    () =>
      Debounce((text: string) => {
        console.log("Searching for:", text);
      }, 2000),
    []
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setModal(false);
      } else {
        setModal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  console.log(modal, menu, "madal er ki khobor");

  return (
    <>
      <CommonWrapper>
        <section className="flex items-center justify-between">
          {/* THIS SECTION FOR MOBILE DEVICE ONLY - Start */}

          <section className="flex items-center gap-3">
            <div className="block md:hidden text-primary-500">
              {!menu ? (
                <HiOutlineMenu onClick={openMenu} size="25" />
              ) : (
                <HiOutlineX onClick={closeMenu} size="25" />
              )}
            </div>
            <Link href="/">
              <Image
                src={Logo}
                alt="My Icon"
                className="w-[120px] md:w-[200px]"
              />
            </Link>
          </section>

          {/* THIS SECTION FOR MOBILE DEVICE ONLY - End */}

          <div className="relative hidden md:block w-full max-w-xl mx-4">
            <input
              onChange={(e) => {
                debouncedSearch(e.target.value);
              }}
              type="search"
              placeholder="Search products.."
              className="placeholder:text-basicDark text-basicDark border-primary-100 border py-2 rounded-xl focus:outline-none px-4 w-full my-input"
            />
            <button type="submit" className="absolute inset-y-0 right-0 pr-3">
              <Image src={SearchIcon} alt="Favourite" width={20} height={20} />
            </button>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-5">
            <div onClick={openModal} className="block md:hidden w-10 h-10">
              <button type="submit">
                <Image
                  src={SearchIcon}
                  alt="Favourite"
                  className="w-full h-full bg-primary-50 p-2.5 rounded-full"
                />
              </button>
            </div>
            <section className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src={Favourite}
                  alt="Favourite"
                  className="w-full h-full bg-primary-50 p-2 rounded-full"
                />
                <span className="absolute inset-y-1 right-0.5 flex items-center justify-center w-4.5 h-4.5 text-[10px] leading-[150%] text-white bg-primary-500 rounded-full">
                  4
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm md:text-[18px] text-primary-500 font-medium">
                  Favourite
                </p>
                <p className="text-xs md:text-sm">৳260</p>
              </div>
            </section>

            <section className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src={Shopping}
                  alt="Shopping"
                  className="w-full h-full bg-primary-50 p-2 rounded-full"
                />
                <span className="absolute inset-y-1 right-0.5 flex items-center justify-center w-4.5 h-4.5 text-[10px] leading-[150%] text-white bg-primary-500 rounded-full">
                  9
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm md:text-[18px] text-primary-500 font-medium">
                  My Cart
                </p>
                <p className="text-xs md:text-sm">৳590</p>
              </div>
            </section>
          </div>
        </section>
      </CommonWrapper>

      {/* when click the search icon then modal is open */}
      <section className={cn(modal && "hidden", "flex items-center justify-center")}>
        {modal && <ModalForSearchBar closeModal={closeModal} />}
      </section>

      {/* when click the menu-bar icon then sidebar modal is open */}
      <section >
        {menu && <SideBarMenu closeMenu={closeMenu} openMenu={menu} />}
      </section>
    </>
  );
};

export default Navbar;
