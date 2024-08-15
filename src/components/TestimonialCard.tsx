import { MdFormatQuote } from "react-icons/md";

interface TestimonialCardType {
  name: string;
  job: string;
  comment: string;
  img: string;
}

function TestimonialCard({ name, job, comment, img }: TestimonialCardType) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-6 bg-lightgray rounded-xl shadow-xl">
      <MdFormatQuote size={40} className="text-gray2 my-4" />
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{comment}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12">
          <img src={img} alt="Testimonial" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="ml-3 sm:ml-4">
          <p className="text-sm sm:text-base font-semibold text-orangePeel">{name}</p>
          <p className="text-xs sm:text-sm text-gray-600">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
