import { useParams } from "react-router-dom";
import useGetInstructor from "../hooks/useGetInstructor";
import Spinner from "./Spinner";

function InstructorProfile() {
  const { id } = useParams();
  const { data, isLoading } = useGetInstructor(id);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col md:flex-row p-6  mx-auto bg-white shadow rounded-lg">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-52 h-52 object-cover rounded-full"
          src={data.image_url}
          alt={id}
          loading="lazy"
        />
      </div>

      <div className="flex-1">
        <div className="text-lg font-semibold text-darkGray mb-2">
          Instructor
        </div>
        <h1 className="text-4xl font-serif font-bold text-mediumGray mb-2">
          {data?.name}
        </h1>
        <h2 className="text-xl font-medium text-textGray mb-6">
          {data["job_title"]}
        </h2>

        <div className="mb-6">
          <div className="flex space-x-8">
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-500">
                Total students
              </div>
              <div className="text-xl font-bold">{data["students_count"]}</div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-500">Reviews</div>
              <div className="text-xl font-bold">{data["reviews_count"]}</div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">About me</h2>
        <div className="max-h-80 overflow-hidden">
          <p className="text-textGray">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
