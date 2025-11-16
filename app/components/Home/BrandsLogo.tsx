import Image from "next/image";
import Boltshift from "@/public/icons/Boltshift.svg"
function BrandsLogo() {
  return (
    <div className="mx-20 my-4 flex items-center justify-between">
      <section className="flex gap-x-10">
        <div>
          <h1 className="leading-[150%] font-semibold text-4xl text-primary-500">
            All Brands
          </h1>
          <p className="leading-[150%] text-[16px] text-basicDark">
            in our online store
          </p>
        </div>
        <div className="border-[0.5px] border-primary-100 "/>
      </section>
      <section className="flex items-center gap-x-4">
        <Image width={200} height={200} alt="logo" src={Boltshift}/>
        <Image width={200} height={200} alt="logo" src={Boltshift}/>
        <Image width={200} height={200} alt="logo" src={Boltshift}/>
        <Image width={200} height={200} alt="logo" src={Boltshift}/>
        <Image width={200} height={200} alt="logo" src={Boltshift}/>
      </section>
    </div>
  );
}

export default BrandsLogo;
