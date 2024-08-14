import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaEllipsisH, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

interface CommentProps {
  commentName: string;
  commentText: string;
  rating: number;
}

function Comment({ commentName, commentText, rating }: CommentProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white text-2xl">
            <BiUserCircle />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-800">{commentName}</p>
            <p className="text-xs text-gray-500">Rating: {rating}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaEllipsisH size={20} />
        </button>
      </div>

      <div className="mt-4 text-gray-700 text-sm">
        <p>{commentText}</p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs text-gray-600">Helpful?</span>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-green-500">
            <FaThumbsUp />
          </button>
          <button className="text-gray-500 hover:text-red-500">
            <FaThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
