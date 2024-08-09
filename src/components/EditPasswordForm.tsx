import { useState } from "react";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import toast from "react-hot-toast";

interface EmailType {
  email: string | undefined;
}

function EditPasswordForm({ email }: EmailType) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { handleUpdatePassword, isLoading, error } = useUpdatePassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }

    handleUpdatePassword(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            disabled
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="repeat_password"
            className="block text-sm font-medium text-gray-700"
          >
            Repeat Password
          </label>
          <input
            type="password"
            name="repeat_password"
            id="repeat_password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 mt-8 bg-orange text-white rounded-md"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Password"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default EditPasswordForm;
