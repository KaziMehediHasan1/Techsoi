"use client";
import CommonWrapper from "../layouts/CommonWrapper";
import PrimaryTitle from "../shared/PrimaryTitle";

const FeaturedProducts = () => {
  return (
    <CommonWrapper>
      <div>
        <PrimaryTitle
          headingOne="Featured"
          headingTwo=" Products"
          subheading="Get Your Desired Product from Featured Category!"
        />
      </div>
    </CommonWrapper>
  );
};

export default FeaturedProducts;
