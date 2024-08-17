import { CiUser } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";

interface PlanCardType {
  planname: string;
  price: string;
  property: string[];
}

function PlanCard({ planname, price, property }: PlanCardType) {
  return (
    <div className="bg-softWhite rounded-lg shadow-xl mt-8 border-t-4 border-t-orangePeel w-full max-w-sm sm:w-80 mx-auto">
      <div className="bg-backgroundGray px-4 py-3 sm:px-5 sm:py-4">
        <h2 className="text-lg sm:text-xl font-bold text-darkGray">
          {planname}
        </h2>
        <p className="text-mediumGray text-sm sm:text-base">For you</p>
        <div className="flex items-center text-sm sm:text-base">
          <CiUser />
          <p className="ml-1 text-darkGray">Individual</p>
        </div>
      </div>
      <div className="mt-4 px-4 sm:px-5">
        <p className="text-xl sm:text-lg font-semibold text-darkGray">
          {price}
        </p>
        <p className="text-mediumGray text-sm sm:text-base">
          Billed monthly or annually. Cancel anytime.
        </p>
        <button className="mt-4 bg-primary text-white py-2 px-8 sm:px-20 rounded-lg text-sm sm:text-base">
          Try it free &rarr;
        </button>
      </div>
      <ul className="mt-6 px-4 sm:px-5 space-y-2">
        {property.map((item, index) => (
          <li
            className="flex items-center text-darkGray text-sm sm:text-base"
            key={index}
          >
            <FaRegCheckCircle className="text-green-500 mr-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanCard;
