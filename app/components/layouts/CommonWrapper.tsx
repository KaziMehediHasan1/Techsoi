import { ReactNode } from "react";

const CommonWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1520px] mx-auto">{children}</div>;
};

export default CommonWrapper;
