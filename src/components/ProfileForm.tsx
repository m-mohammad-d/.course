import { useState } from "react";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

interface FormState {
  full_name: string;
  headline: string;
  description: string;
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

interface ProfileFormProps {
  initialData: FormState;
}


function ProfileForm({ initialData }: ProfileFormProps) {
  const { handleUpdateProfile, error, isLoading } = useUpdateProfile();
  const [formState, setFormState] = useState<FormState>(initialData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleUpdateProfile(formState);
    } catch (err) {
      console.error("Profile update failed", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md w-full max-w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            value={formState.full_name}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="headline"
            className="block text-sm font-medium text-gray-700"
          >
            Headline
          </label>
          <input
            type="text"
            name="headline"
            id="headline"
            value={formState.headline}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formState.description}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            type="url"
            name="website"
            id="website"
            value={formState.website}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-gray-700"
          >
            Twitter Profile
          </label>
          <input
            type="text"
            name="twitter"
            id="twitter"
            value={formState.twitter}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-gray-700"
          >
            Facebook Profile
          </label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            value={formState.facebook}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn Profile
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            value={formState.linkedin}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="youtube"
            className="block text-sm font-medium text-gray-700"
          >
            YouTube Profile
          </label>
          <input
            type="text"
            name="youtube"
            id="youtube"
            value={formState.youtube}
            onChange={handleChange}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange text-white rounded-md"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}

export default ProfileForm;
