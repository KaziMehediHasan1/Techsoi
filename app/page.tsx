
import CategoryProducts from "./components/Home/CategoryProducts";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Hero from "./components/Home/Hero";
import CommonWrapper from "./components/layouts/CommonWrapper";

export default async function Home() {
  return (
    <CommonWrapper>
      <div className="my-2">
        <Hero />
        {/* <BrandsLogo/> */}
        <CategoryProducts />
        <FeaturedProducts/>
      </div>
    </CommonWrapper>
  );
}
