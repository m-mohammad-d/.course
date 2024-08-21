import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAddComment } from "../hooks/useAddComments";
import toast from "react-hot-toast";

interface CommentType {
  name: string;
  "comment-title": string;
  rating: number;
}

interface AddCommentProps {
  comments: CommentType[];
  id: string;
}

function AddCommentModal({ comments, id }: AddCommentProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isLoading, isSuccess, isError } = useAddComment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() && comment.trim() && rating > 0) {
      const newComment = {
        name,
        "comment-title": comment,
        rating,
      };

      mutate(
        { id, updatedComments: [...comments, newComment] },
        {
          onSuccess: () => {
            toast.success("Comment added successfully!");
          },
          onError: (error) => {
            toast.error(`Error adding comment: ${error.message}`);
          },
        }
      );

      setName("");
      setComment("");
      setRating(0);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        className="bg-primary text-white px-4 mt-12 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add Comment
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add a Comment</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Comment:</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Rating:</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={30}
                      className={`cursor-pointer ${
                        rating >= star ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  Submit
                </button>
              </div>
              {isError && <p className="text-red-500">Error adding comment</p>}
              {isSuccess && (
                <p className="text-green-500">Comment added successfully!</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCommentModal;
