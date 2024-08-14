interface CourseContentType {
  courseSection: number;
  courseTime: number;
  courselectures: number;
}

function CourseContent({
  courseSection,
  courseTime,
  courselectures,
}: CourseContentType) {
  return (
    <div className="text-gray2 my-12">
      <h2 className="text-2xl">course content:</h2>
      <ul className="flex gap-4 items-center my-6 text-gray3">
        <li>{courseSection} sections </li>
        <li>{courselectures} lectures </li>
        <li>{courseTime} total length </li>
      </ul>
      <p>
        Due to database memory limitations, we are unable to display the course
        content at this time.
      </p>
    </div>
  );
}

export default CourseContent;
