import CategoryProducts from "./components/Home/CategoryProducts";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Hero from "./components/Home/Hero";
import TopSellingProducts from "./components/Home/TopSellingProducts";
import WeAreProvide from "./components/Home/WeAreProvide";


export default async function Home() {
  return (
    <>
      <Hero />
      <CategoryProducts />
      <FeaturedProducts />
      <TopSellingProducts />
      <WeAreProvide />
    </>
  );
}
