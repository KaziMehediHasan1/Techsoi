import ArrowIcon from "@/public/icons/arrow-up-right.svg";

const BlogPrimaryHeading = () => {
  return (
    <div>
      <section>
        <h1>Our Latest Blog</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </section>

      <button className="bg-primary-50 text-primary-800 flex items-center gap-2 p-2 rounded-md">
        <span>Read All</span>
        <ArrowIcon className="w-5 h-5 text-primary-800" />
      </button>
    </div>
  );
};

export default BlogPrimaryHeading