function CourseRequirements({ requirements }: { requirements: string }) {
  return (
    <div className="my-8 space-y-6">
      <h2 className="text-2xl">Requirements</h2>
      <p>{requirements || "This course has no requirements"}</p>
    </div>
  );
}

export default CourseRequirements;
