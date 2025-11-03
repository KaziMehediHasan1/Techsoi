import Hero from "./components/Home/Hero";
import CommonWrapper from "./components/layouts/CommonWrapper";

export default async function Home() {
  return (
    <CommonWrapper>
      <div className="my-2">
        <Hero />
        
      </div>
    </CommonWrapper>
  );
}
