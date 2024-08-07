import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray1">
          Sign up and start learning
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              full name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="full name"
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
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange hover:bg-hoverOrange text-white font-bold w-full py-3 rounded-lg shadow-lg focus:outline-none focus:shadow-outline"
              type="button"
            >
              sign up
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-gray-600">Other sign up options</p>
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
                alt="Apple"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            have an account?{" "}
            <Link to="/login" className="text-orange hover:text-hoverOrange">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
