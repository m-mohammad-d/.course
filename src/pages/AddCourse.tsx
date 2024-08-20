import AddCourseForm from "../components/addCourseForm";

function AddCourse() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>
      <AddCourseForm />
    </div>
  );
}

export default AddCourse;
