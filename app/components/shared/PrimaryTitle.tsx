type PrimaryTitleType = {
  headingOne: string;
  headingTwo: string;
  subheading: string;
};

const PrimaryTitle = ({ headingOne, headingTwo, subheading }: PrimaryTitleType) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-[40px] font-semibold md:leading-[150%] capitalize">
        <span className="text-basicDarkThree">{headingOne}</span>
        <span className="text-primary-500">{headingTwo}</span>
      </h1>
      <p className="text-sm md:text-lg text-basicDark">{subheading}</p>
    </div>
  );
};

export default PrimaryTitle;
