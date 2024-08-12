import { useParams } from "react-router-dom";

function CoursePage() {
    const { id } = useParams();


    return (
      <div>
        <h1>Course ID: {id}</h1>
      </div>
    );
}

export default CoursePage
