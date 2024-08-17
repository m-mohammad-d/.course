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
    <div className="flex flex-col md:flex-row justify-center bg-softWhite px-4 md:px-8 py-8">
      <div className="flex-1 flex flex-col gap-8 md:gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0 md:pl-12 flex-shrink-0">
        <img
          src={illustration}
          alt="Learning illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Features;
