import PlanCard from "./PlanCard";
const plans = [
  {
    planname: "personal plan",
    price: "Starting at $21.00 per month",
    Property: [
      "Access to 11,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    planname: "Team Plan",
    price: "$30.00 a month per user",
    Property: [
      "Access to 11,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    planname: "Enterprise Plan",
    price: "Contact sales for pricing",
    Property: [
      "Access to 11,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
  },
  {
    planname: "Leadership Academy",
    price: "Contact sales for pricing",
    Property: [
      "Expert-led leadership training",
      "Research-based content curation",
      "Applied learning, tool kits, and group coaching",
      "Asynchronous learning with collaborative discussions",
      "Live virtual events",
      "AI-powered analytics and insights",
      "Strategic implementation services with add-on",
    ],
  },
];
function Plans() {
  return (
    <div className="my-16">
      <div className="w-full md:w-5/6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Accelerate growth — for you or your organization
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
          {plans.map((plan) => (
            <PlanCard
              key={crypto.randomUUID()}
              planname={plan.planname}
              price={plan.price}
              property={plan.Property}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
