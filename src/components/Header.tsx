import { Link } from "react-router-dom";
import logo from "../asset/image/udemyLogo.png";
import SearchBar from "./SearchBar";
import AuthLink from "./AuthLink";
import { RiShoppingCart2Line } from "react-icons/ri";

function Header() {
  return (
    <header className="flex p-6 items-center">
      <Link to="/" className="ml-4">
        <img src={logo} />
      </Link>
      <SearchBar />
      <ul className="flex justify-between items-center">
        <li className="p-3 hover:text-primary hover:text-orange  text-gray-600 transition-all delay-300 ease-in">
          plans pricing{" "}
        </li>
        <li className="p-3 hover:text-primary hover:text-orange text-gray-600 transition-all delay-300 ease-in">
          Udemy Business
        </li>
        <li className="p-3 hover:text-primary hover:text-orange  text-gray-600 transition-all delay-300 ease-in">
          Teach on Udemy
        </li>
      </ul>
      <RiShoppingCart2Line className="mx-3 w-4"  />
      <AuthLink text="login" type="login" href="/login" />
      <AuthLink text="sign up" type="signup" href="signup" />
    </header>
  );
}

export default Header;
