import { CiUser } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
interface PlanCardType {
  planname: string;
  price: string;
  property: string[];
}
function PlanCard({ planname, price, property }: PlanCardType) {
  return (
    <div className="bg-white rounded-lg shadow-xl mt-8 w-80 border-t-4 border-t-orangePeel">
      <div className=" bg-lightGray px-5 py-3">
        <h2 className="text-xl font-bold">{planname}</h2>
        <p className="text-gray-500">For you</p>
        <div className="flex items-center">
          <CiUser />
          <p className="ml-1">Individual</p>
        </div>
      </div>
      <div className="mt-4 w-4/5 mx-auto">
        <p className="text-lg font-semibold">{price}</p>
        <p className="text-gray-400">
          Billed monthly or annually. Cancel anytime.
        </p>
        <button className="mt-4 bg-gray2 text-white py-2 px-20 rounded-lg">
          Try it free &rarr;
        </button>
      </div>
      <ul className="mt-6 ml-4 space-y-2 h-96">
        {property.map((item) => (
          <li className="flex items-center text-gray-700 mx-3">
            <FaRegCheckCircle className="text-green-500 mr-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanCard;
