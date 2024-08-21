import FeatureCard from "./FeatureCard";
import illustration from "../asset/image/14620625_5492342.svg";

const features = [
  {
    title: "Hands-on training",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.",
  },
  {
    title: "Certification prep",
    description:
      "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
  },
  {
    title: "Insights and analytics",
    description:
      "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
    enterprise: true,
  },
  {
    title: "Customizable content",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    enterprise: true,
  },
];

function Features() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-softWhite px-6 md:px-8 lg:px-16 py-12">
      <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto text-center md:text-left md:mr-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0 flex-shrink-0 md:ml-8">
        <img
          src={illustration}
          alt="Learning illustration"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Features;
