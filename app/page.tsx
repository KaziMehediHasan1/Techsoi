import Hero from "./components/Home/Hero";
import CommonWrapper from "./components/layouts/CommonWrapper";
import BlogPrimaryHeading from "./components/shared/BlogPrimaryHeading";

import PrimaryTitle from "./components/shared/PrimaryTitle";

export default async function Home() {
  return (
    <CommonWrapper>
      <div className="my-2">
        <Hero />
        <PrimaryTitle
          headingOne="Products By "
          headingTwo="Category"
          subheading="Get Your Desired Product from Featured Category!"
        />
        <BlogPrimaryHeading  />
      </div>
    </CommonWrapper>
  );
}
