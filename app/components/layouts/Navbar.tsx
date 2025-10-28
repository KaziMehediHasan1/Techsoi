import Logo from "@/public/icons/logo.svg";
import Favourite from "@/public/icons/favourite.svg";
import Shopping from "@/public/icons/shopping-cart.svg";

import CommonWrapper from "./CommonWrapper";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <CommonWrapper>
      <section className="flex items-center justify-between ">
        <Link href="/">
          <Image src={Logo} alt="My Icon" className="w-[100px] md:w-[200px]" />
        </Link>

        <div className="relative hidden lg:block w-full max-w-xl">
          <input
            type="search"
            placeholder="Search products.."
            className="placeholder:text-basicDark border-primary-200 border-2 py-2 rounded-xl focus:outline-none px-4 w-full"
          />
        </div>

        <div className="flex items-center gap-5">
          <section className="flex gap-2">
            <Image
              src={Favourite}
              alt="Favourite"
              className="w-6 h-6 bg-primary-50 p-0.5 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm md:text-[18px] text-primary-500">Favorite</p>
              <p className="text-xs md:text-sm">$670</p>
            </div>
          </section>

          <section className="flex gap-2">
            <Image
              src={Shopping}
              alt="Shopping"
              className="w-6 h-6 bg-primary-50 p-0.5 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm md:text-[18px] text-primary-500">Shopping</p>
              <p className="text-xs md:text-sm">$230</p>
            </div>
          </section>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Navbar;
