import CourseRecommendations from "../components/CourseRecomanded";
import Features from "../components/Features";
import Plans from "../components/Plans";
import SkillsSection from "../components/SkillSection";

function Homepage() {
  return (
    <div>
      <SkillsSection />
      <CourseRecommendations />
      <Features />
      <Plans />
    </div>
  );
}

export default Homepage;
