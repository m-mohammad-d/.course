import { useState } from "react";
interface Feedback {
  name: string;
  description: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
}

function FeadBackCard({ feedback }: FeedbackCardProps) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="bg-softWhite border border-mediumGray rounded-lg p-4 mb-4 shadow-md w-full">
      <h3 className="text-primary font-bold text-lg mb-2">{feedback.name}</h3>
      <p
        className={`text-textGray ${
          showFullText ? "block" : "line-clamp-3"
        } overflow-hidden`}
      >
        {feedback.description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-primary text-softWhite px-4 py-2 rounded hover:bg-darkOrange transition-colors"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "Show Less" : "Show Full Text"}
        </button>
        <button
          className="bg-red-600 text-softWhite px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FeadBackCard;
