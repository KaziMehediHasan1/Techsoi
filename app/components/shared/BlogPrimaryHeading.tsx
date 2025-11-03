import { IoIosArrowRoundForward } from "react-icons/io";

const BlogPrimaryHeading = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center-safe gap-4 sm:gap-0">
      <section>
        <h1 className="text-3xl md:text-[40px] text-primary-500 font-semibold md:leading-[150%] capitalize">
          Our Latest Blog
        </h1>
        <p className="text-sm md:text-lg text-basicDark">
          Get Your Desired Product from Featured Category!
        </p>
      </section>

      <button className="bg-primary-100 flex w-fit text-primary-800 cursor-pointer  items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm md:text-[16px] md:leading-[150%] transition hover:bg-primary-200">
        <span>Read All</span>
        <IoIosArrowRoundForward size={24} className="text-current" />
      </button>
    </div>
  );
};

export default BlogPrimaryHeading;
