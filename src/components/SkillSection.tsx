import sectionImage from "../asset/image/skillSectionImage.png";

const SkillsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-backgroundGray p-8">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-darkGray mb-4">
          Skills that drive you{" "}
          <span className="text-primary">forward</span>
        </h1>
        <p className="text-textGray mb-8 mx-auto md:mx-0 w-full md:w-4/5">
          Technology and the world of work change fast — with us, you're faster.
          Achieve goals and stay competitive with on-demand learning, hands-on
          practice, and more.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <button className="bg-primary text-softWhite px-4 py-2 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto max-w-xs hover:bg-darkOrange">
            Plan for individuals
          </button>
          <button className="bg-darkGray text-softWhite px-4 py-2 rounded w-full md:w-auto max-w-xs">
            Plans for organizations
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img src={sectionImage} alt="Skills" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>
    </div>
  );
};

export default SkillsSection;
