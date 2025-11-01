import Link from "next/link";
import CommonWrapper from "./CommonWrapper";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];

const LinkBar = () => {
  return (
    <div className="bg-primary-500 py-1">
      <CommonWrapper>
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5 md:gap-10 leading-[150%] text-white font-medium">
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-sm md:text-[18px] hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="contact-us"
            className="bg-white py-1 sm:py-2 px-2 sm:px-5 leading-[150%] text-sm md:text-[18px] text-basicDarkOne rounded-lg"
          >
            Contact Us
          </Link>
        </section>
      </CommonWrapper>
    </div>
  );
};

export default LinkBar;
