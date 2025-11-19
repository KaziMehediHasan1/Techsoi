import CategoryProducts from "./components/Home/CategoryProducts";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Hero from "./components/Home/Hero";
import Review from "./components/Home/Review";
import TopSellingProducts from "./components/Home/TopSellingProducts";
import WeAreProvide from "./components/Home/WeAreProvide";
import BlogCards from "./components/shared/BlogCards";

export default async function Home() {
  return (
    <>
      <Hero />
      <CategoryProducts />
      <FeaturedProducts />
      <TopSellingProducts />
      <WeAreProvide />
      <Review />
      <BlogCards />
    </>
  );
}
