import CourseRecommendations from "../components/CourseRecomanded";
import Features from "../components/Features";
import Plans from "../components/Plans";
import SkillsSection from "../components/SkillSection";
import Testimonials from "../components/Testimonials";

function Homepage() {
  return (
    <div>
      <SkillsSection />
      <CourseRecommendations />
      <Features />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default Homepage;
