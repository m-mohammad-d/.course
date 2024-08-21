import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/image/logo.svg";
import SearchBar from "./SearchBar";
import AuthLink from "./AuthLink";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { getUserRole } from "../utils/getUserRole";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const userRole = getUserRole();
  const dashboardLink =
    userRole === "teacher"
      ? "/teacher/edit-profile"
      : userRole === "admin"
      ? "/admin/manage-users"
      : "/user/edit-profile";

  return (
    <header className="flex items-center justify-between p-4 md:p-6 bg-softWhite shadow-md relative">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <img src={logo} alt="Logo" className="h-6 md:h-8 lg:h-10" />
        </Link>
      </div>

      <div className="hidden md:flex flex-1 mx-2 md:mx-4 lg:mx-8">
        <SearchBar />
      </div>

      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-mediumGray hover:text-orangePeel focus:outline-none"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <li className="p-2 lg:p-3 hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
          <Link to="/pricing">Plans & Pricing</Link>
        </li>
        <li className="p-2 lg:p-3 hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
          <Link to="/business">Udemy Business</Link>
        </li>
        <li className="p-2 lg:p-3 hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
          <Link to="/teach">Teach on Udemy</Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/cart">
          <RiShoppingCart2Line className="text-mediumGray" size={28} />
        </Link>
        {userRole ? (
          <AuthLink text="Dashboard" href={dashboardLink} type="dashboard" />
        ) : (
          <>
            <AuthLink text="Login" type="login" href="/login" />
            <AuthLink text="Sign Up" type="signup" href="/signup" />
          </>
        )}
      </div>
      {isMenuOpen && (
        <ul className="fixed top-0 left-0 h-full w-64 bg-softWhite p-4 space-y-4 shadow-lg md:hidden z-50">
          <li className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-mediumGray hover:text-orangePeel"
            >
              <HiX size={28} />
            </button>
          </li>
          <li>
            <SearchBar />
          </li>
          <li className="hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
            <Link to="/pricing">Plans & Pricing</Link>
          </li>
          <li className="hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
            <Link to="/business">Udemy Business</Link>
          </li>
          <li className="hover:text-orangePeel text-mediumGray transition-all duration-300 ease-in">
            <Link to="/teach">Teach on Udemy</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link to="/cart">
              <RiShoppingCart2Line className="text-mediumGray" size={28} />
            </Link>
          </li>
          <li className="flex flex-col space-y-2">
            {userRole ? (
              <AuthLink
                text="Dashboard"
                href={dashboardLink}
                type="dashboard"
              />
            ) : (
              <>
                <AuthLink text="Login" type="login" href="/login" />
                <AuthLink text="Sign Up" type="signup" href="/signup" />
              </>
            )}
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
