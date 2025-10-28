import CallIcon from "@/public/icons/call.svg";
import UserIcon from "@/public/icons/user-circle.svg";
import CommonWrapper from "./CommonWrapper";
import Image from "next/image";

const MiniNavbar = ({ name, offer }: { name: string; offer: string }) => {
  return (
    <CommonWrapper>
      <section className="flex items-center justify-between">
        <div className="cursor-pointer flex items-center gap-x-2">
          <Image src={CallIcon} alt="My Icon" className="w-2 sm:w-4" />
          <p className="leading-[150%] text-[8px] sm:text-sm">Phone +888 8888 888</p>
        </div>

        <div className="leading-[150%] text-[8px] sm:text-sm">
          {offer
            ? offer
            : "Get Upto 25% cashback using this Coupon Code: 8558212"}
        </div>

        <div className="cursor-pointer hidden sm:flex items-center gap-x-2">
          <Image src={UserIcon} alt="My Icon"  className="w-4 h-4" />
          <p className="leading-[150%] text-sm">
            {name ? name : "Mr. Jhon Don"}
          </p>
        </div>

      </section>
    </CommonWrapper>
  );
};

export default MiniNavbar;
