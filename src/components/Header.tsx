import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/image/udemyLogo.png";
import SearchBar from "./SearchBar";
import AuthLink from "./AuthLink";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 md:p-6 bg-white shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <img src={logo} alt="Logo" className="h-6 md:h-8 lg:h-10" />
        </Link>
      </div>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex flex-1 mx-2 md:mx-4 lg:mx-8">
        <SearchBar />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <li className="p-2 lg:p-3 hover:text-orange text-gray-600 transition-all duration-300 ease-in">
          <Link to="/pricing">Plans & Pricing</Link>
        </li>
        <li className="p-2 lg:p-3 hover:text-orange text-gray-600 transition-all duration-300 ease-in">
          <Link to="/business">Udemy Business</Link>
        </li>
        <li className="p-2 lg:p-3 hover:text-orange text-gray-600 transition-all duration-300 ease-in">
          <Link to="/teach">Teach on Udemy</Link>
        </li>
      </ul>

      {/* Shopping Cart & Auth Links (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center space-x-4">
        <RiShoppingCart2Line className="text-gray-600" size={28} />
        <AuthLink text="Login" type="login" href="/login" />
        <AuthLink text="Sign Up" type="signup" href="/signup" />
      </div>

      {/* Mobile Dropdown Menu (Opens from the Left) */}
      {isMenuOpen && (
        <ul className="fixed top-0 left-0 h-full w-64 bg-white p-4 space-y-4 shadow-lg md:hidden z-50">
          <li className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-700"
            >
              <HiX size={28} />
            </button>
          </li>
          <li>
            <SearchBar />
          </li>
          <li className="hover:text-orange text-gray-600 transition-all duration-300 ease-in">
            <Link to="/pricing">Plans & Pricing</Link>
          </li>
          <li className="hover:text-orange text-gray-600 transition-all duration-300 ease-in">
            <Link to="/business">Udemy Business</Link>
          </li>
          <li className="hover:text-orange text-gray-600 transition-all duration-300 ease-in">
            <Link to="/teach">Teach on Udemy</Link>
          </li>
          <li className="flex items-center space-x-2">
            <RiShoppingCart2Line className="text-gray-600" size={28} />
          </li>
          <li>
            <AuthLink text="Login" type="login" href="/login" />
          </li>
          <li>
            <AuthLink text="Sign Up" type="signup" href="/signup" />
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
