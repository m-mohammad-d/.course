import { MdFormatQuote } from "react-icons/md";
interface TestimonialCardType {
  name: string;
  job: string;
  comment: string;
  img: string;
}
function TestimonialCard({ name, job, comment, img }: TestimonialCardType) {
  return (
    <div className="max-w-md p-6 bg-lightgray rounded-xl shadow-xl ml-4">
      <MdFormatQuote size={50} className="text-gray2 my-4" />
      <p className="text-lg text-gray-700 mb-6">{comment}</p>
      <div className="flex items-center">
        <div className="w-12 h-12">
          <img src={img} className="rounded-full" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold text-orangePeel">{name}</p>
          <p className="text-sm text-gray-600">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
