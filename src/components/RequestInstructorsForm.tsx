import { useState } from "react";

import toast from "react-hot-toast";
import useAddTeacherRequest from "../hooks/useAddTeacherRequest";

function RequestInstructorsForm() {
  const [name, setName] = useState("");
  const [bio, setBiography] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imageLink, setImageLink] = useState("");

  const { mutate } = useAddTeacherRequest();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        name,
        bio,
        job_title: jobTitle,
        image_url: imageLink,
      },
      {
        onSuccess: () => {
          setName("");
          setBiography("");
          setJobTitle("");
          setImageLink("");
        },
        onError: (error: Error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="w-full mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Request to Become a Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="biography" className="block text-gray-700">
            Biography
          </label>
          <textarea
            id="biography"
            value={bio}
            onChange={(e) => setBiography(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="imageLink" className="block text-gray-700">
            Image Link
          </label>
          <input
            type="text"
            id="imageLink"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-darkOrange transition-colors"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestInstructorsForm;
