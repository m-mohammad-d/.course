import TestimonialCard from "./TestimonialCard";

const TestimonialsData = [
  {
    name: "Alvin Lim",
    job: "Technical Co-Founder, CTO at Dimensional",
    comment:
      "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
    img: "https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg",
  },
  {
    name: "Sarah Johnson",
    job: "Product Manager at TechSolutions",
    comment:
      "Udemy helped me develop the skills I needed to take my career to the next level. The courses are fantastic!",
    img: "https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png",
  },
  {
    name: "Michael Nguyen",
    job: "Software Engineer at Innovatech",
    comment:
      "Thanks to Udemy, I was able to learn new programming languages and frameworks, making me more versatile in my job.",
    img: "https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png",
  },
  {
    name: "Emma Wilson",
    job: "Data Analyst at DataCorp",
    comment:
      "The variety of courses on Udemy allowed me to explore different areas of data science and improve my analytical skills.",
    img: "https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png",
  },
];

function Testimonials() {
  return (
    <div className="bg-softWhite py-10">
      <div className="flex justify-center">
        <div className="mx-4 sm:mx-8 lg:mx-16 max-w-screen-2xl">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-darkGray mb-6 sm:mb-8 text-center">
            See what others are achieving through learning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {TestimonialsData.map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                job={item.job}
                comment={item.comment}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
