import sectionImage from "../asset/image/skillSectionImage.png"; 

const SkillsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-backgroundGray p-8">
      <div className="md:w-1/2 ml-16 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-darkGray mb-4">
          Skills that drive you{" "}
          <span className="text-primary">forward</span>
        </h1>
        <p className="text-textGray mb-8 w-4/5">
          Technology and the world of work change fast — with us, you're faster.
          Achieve goals and stay competitive with on-demand learning, hands-on
          practice, and more.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-primary text-softWhite px-4 py-2 rounded mr-4 hover:bg-darkOrange">
            Plan for individuals
          </button>
          <button className="bg-darkGray text-softWhite px-4 py-2 rounded">
            Plans for organizations
          </button>
        </div>
      </div>

      <div className="md:w-1/2">
        <img src={sectionImage} alt="Skills" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default SkillsSection;
