import { motion } from "framer-motion";
type PrimaryTitleType = {
  headingOne: string;
  headingTwo: string;
  subheading: string;
};

const PrimaryTitle = ({
  headingOne,
  headingTwo,
  subheading,
}: PrimaryTitleType) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-[40px] font-semibold md:leading-[150%] capitalize"
      >
        <span className="text-basicDarkThree">{headingOne}</span>
        <span className="text-primary-500">{headingTwo}</span>
      </motion.h1>

      <span className="text-sm md:text-lg text-basicDark text-center w-full max-w-xs sm:max-w-sm">
        {subheading}
      </span>
    </div>
  );
};

export default PrimaryTitle;
