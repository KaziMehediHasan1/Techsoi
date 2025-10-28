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
    <div className="bg-primary-500 py-2">
      <CommonWrapper>
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-10 leading-[150%] text-white font-medium">
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-[18px] hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="contact-us"
            className="bg-white py-2 px-5 leading-[150%] text-[18px] text-basicDarkOne rounded-lg"
          >
            Contact Us
          </Link>
        </section>
      </CommonWrapper>
    </div>
  );
};

export default LinkBar;
