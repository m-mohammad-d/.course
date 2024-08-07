import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, isPending } = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray1">
          Log in to your Udemy account
        </h2>
        <form onSubmit={handleSubmit}>
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
              disabled={isPending}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange hover:bg-hoverOrange text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-orange hover:text-hoverOrange"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-600">Other log in options</p>
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
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange hover:text-hoverOrange">
              Sign up
            </Link>
          </p>
          <p className="text-gray-600">
            <a href="#" className="text-orange hover:text-hoverOrange">
              Log in with your organization
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
