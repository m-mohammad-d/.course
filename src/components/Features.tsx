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
    <div className="flex justify-center bg-white">
      <div className="my-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex justify-center items-center pl-24">
        <img src={illustration} alt="Learning illustration" className="" />
      </div>
    </div>
  );
}

export default Features;
