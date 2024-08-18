import { useState } from "react";
import { useAddFeedBack } from "../hooks/useAddFeedBack";
import toast from "react-hot-toast";

function FeedBackForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: addFeedBack, isLoading } = useAddFeedBack();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !description) {
      toast.error("Please fill out both fields.");
      return;
    }

    addFeedBack({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Send Feedback
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            className="block text-mediumGray text-sm font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
            className="w-full p-2 border border-mediumGray rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-mediumGray text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-mediumGray rounded-md"
            placeholder="Description"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded-md hover:bg-darkOrange"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}

export default FeedBackForm;
