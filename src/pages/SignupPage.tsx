import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isPending } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup({ email, password, full_name: fullName });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-darkGray">
          Sign up and start learning
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-darkGray text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-textGray mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-darkOrange text-white font-bold w-full py-3 rounded-lg shadow-lg focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-textGray">Other sign up options</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-gray-100 p-2 rounded-full">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="h-6 w-6"
              />
            </button>
            <button className="bg-gray-100 p-2 rounded-full">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </button>
            <button className="bg-gray-100 p-2 rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/180px-GitHub_Invertocat_Logo.svg.png"
                alt="GitHub"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Have an account?{" "}
            <Link to="/login" className="text-primary hover:text-darkOrange">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
