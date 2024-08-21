import { useState } from "react";
import { useAddCourse } from "../hooks/useAddCourse";
import toast from "react-hot-toast";
import { getItemLocal } from "../utils/localStorageUtils";
import useGetInstructorByUserid from "../hooks/useGetInstructorByUserId";
interface AuthToken {
  user: {
    id: string;
  };
}
function AddCourseForm() {
  const { mutate, isLoading, isError } = useAddCourse();
  const userId = getItemLocal<AuthToken>("sb-llgyyyodgevtfoidrwjf-auth-token")
    ?.user.id;

  const {
    data: instructor,
    isLoading: isInstructorLoading,
    error: isInstructorError,
  } = useGetInstructorByUserid(userId);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    price: "",
    image: "",
    sections: "",
    coursetime: "",
    requirements: "",
    lectures: "",
  });
  const instructorId = instructor?.id;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      name,
      title,
      price,
      image,
      sections,
      coursetime,
      requirements,
      lectures,
    } = formData;

    mutate(
      {
        name,
        title,
        price: parseFloat(price),
        imageUrl: image,
        sections: parseInt(sections),
        coursetime,
        requirements,
        lectures: parseInt(lectures),
        instructorId,
      },
      {
        onSuccess: () => {
          toast.success("Course added successfully!");
          setFormData({
            name: "",
            title: "",
            price: "",
            image: "",
            sections: "",
            coursetime: "",
            requirements: "",
            lectures: "",
            instructorId: instructor?.id,
          });
        },
        onError: (error: Error) => {
          toast.error(`Failed to add course: ${error.message}`);
        },
      }
    );
  };

  if (isInstructorLoading) return <p>Loading instructor data...</p>;
  if (isInstructorError)
    return <p>Error loading instructor data: {isInstructorError.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Course Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Course Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="sections"
        placeholder="Number of Sections"
        value={formData.sections}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="coursetime"
        placeholder="Course Time"
        value={formData.coursetime}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="requirements"
        placeholder="Course Requirements"
        value={formData.requirements}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="lectures"
        placeholder="Number of Lectures"
        value={formData.lectures}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isLoading ? "Adding Course..." : "Add Course"}
      </button>
      {isError && <p className="text-red-500">Error: {isError}</p>}
    </form>
  );
}

export default AddCourseForm;
