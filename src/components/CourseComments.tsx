import { FaStar } from "react-icons/fa";
import Comment from "./Comment";
import { useState } from "react";

interface CommentType {
  id: string;
  name: string;
  "comment-title": string;
  rating: number;
}

interface CourseCommentsProps {
  courseRating: string;
  comments: CommentType[];
}

function CourseComments({ courseRating, comments }: CourseCommentsProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="mt-6">
      <div className="text-2xl text-gray-800 flex gap-2 items-center">
        <FaStar className="text-orange-400" />
        <h2 className="font-bold">
          {courseRating} Course Rating - {comments?.length} Ratings
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {comments?.slice(0, visibleCount).map((comment) => (
          <Comment
            key={comment.id}
            commentName={comment.name}
            commentText={comment["comment-title"]}
            rating={comment.rating}
          />
        ))}
      </div>
      {visibleCount < comments?.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-orange text-white rounded-lg  transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseComments;
