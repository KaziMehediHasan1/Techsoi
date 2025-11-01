"use client";
import Logo from "@/public/icons/logo.svg";
import Call from "@/public/icons/call.svg";
import Mail from "@/public/icons/mail-01.svg";
import Facebook from "@/public/icons/facebook-01.svg";
import Instagram from "@/public/icons/instagram.svg";
import Location from "@/public/icons/location-06.svg";
import Image from "next/image";
import CommonWrapper from "./CommonWrapper";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];
const Category = [
  {
    name: "PC Accessories",
    href: "",
  },
  {
    name: "Casing",
    href: "",
  },
  {
    name: "Laptop",
    href: "/blog",
  },
  {
    name: "Monitor",
    href: "/contact-us",
  },
];
const Footer = () => {
  return (
    <div className="bg-primary-50">
      <CommonWrapper>
        {/* MINI FOOTER, TOP SECTION -> START */}
        <div className="mb-3 md:mb-7 py-3 space-y-2">
          <section className="flex flex-wrap md:items-center justify-between space-y-0.5 md:space-y-0">
            <p className="text-xs md:text-sm  leading-[150%] text-basicDark">
              © 2025 Techsoi. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm  leading-[150%] text-basicDark">
              Empowering Your Life with Cutting-Edge Electronics
            </p>
          </section>
          <div className="border-primary-100 border-b" />
        </div>
        {/* MINI FOOTER, TOP SECTION -> END */}

        {/* MAIN FOOTER SECTION IS -> START */}
        <section className="text-basicDarkTwo flex flex-col md:flex-row  justify-between gap-y-4 md:gap-y-0">

          <div>
            <Image src={Logo} alt="Logo" className="w-[100px] md:w-[150px] " />
            <p className="py-4 md:py-7 text-sm md:text-[16px] w-full max-w-sm">
              Techsoi – Empowering Your Life with Cutting-Edge Electronics.
              Discover, Shop, and Unleash the Power of Technology with Us!
            </p>
            <section className="space-y-1.5 text-sm md:text-[16px]">
              <div className="flex items-center gap-x-2">
                <Image src={Call} alt="Logo" className="w-3.5 md:w-5 " />
                <span>+8801843300648</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src={Mail} alt="Logo" className="w-3.5 md:w-5 " />
                <span>hellotechsoi@gmail.com</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src={Location} alt="Logo" className="w-3.5 md:w-5 " />
                <span>Mohakhali, Amtoli, Dhaka, Bangladesh.</span>
              </div>
            </section>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="text-sm md:text-lg font-semibold">Quick Links</h1>
            <section>
              {links.map((link) => (
                <Link
                  className="flex flex-col py-1 text-sm md:text-[16px]"
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </section>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="text-sm md:text-lg font-semibold">Top Category</h1>
            <section>
              {Category.map((item) => (
                <Link
                  className="flex flex-col py-1 text-sm md:text-[16px]"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </section>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="text-sm md:text-lg font-semibold">Quick Links</h1>
            <section className="space-y-1">
              <Link href="/facebook" className="flex items-center gap-x-2">
                <Image src={Facebook} alt="Logo" className="w-3.5 md:w-5 " />
                <span className="text-sm md:text-[16px]">Facebook</span>
              </Link>
              <Link href="/instagram" className="flex items-center gap-x-2">
                <Image src={Instagram} alt="Logo" className="w-3.5 md:w-5 " />
                <span className="text-sm md:text-[16px]">Instagram</span>
              </Link>
            </section>
          </div>

        </section>
        {/* MAIN FOOTER SECTION IS -> END */}
      </CommonWrapper>
    </div>
  );
};

export default Footer;
