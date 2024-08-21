import { MdFormatQuote } from "react-icons/md";

interface TestimonialCardType {
  name: string;
  job: string;
  comment: string;
  img: string;
}


function TestimonialCard({ name, job, comment, img }: TestimonialCardType) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-6 bg-backgroundGray rounded-xl shadow-xl flex flex-col items-center">
      <MdFormatQuote size={40} className="text-darkGray my-4" />
      <p className="text-base sm:text-lg text-darkGray mb-4 sm:mb-6 text-center">
        {comment}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14">
          <img
            src={img}
            alt="Testimonial"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="ml-3 sm:ml-4 text-center sm:text-left">
          <p className="text-sm sm:text-base font-semibold text-orangePeel">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-mediumGray">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
