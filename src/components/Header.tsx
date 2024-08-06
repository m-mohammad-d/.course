import { Link } from "react-router-dom";
import logo from "../asset/image/udemyLogo.png";
import SearchBar from "./SearchBar";
import AuthLink from "./AuthLink";

function Header() {
  return (
    <header className="flex p-6 items-center">
      <Link to="/">
        <img src={logo} />
      </Link>
      <SearchBar />
      <ul className="flex justify-between items-center">
        <li className="p-4 hover:text-primary  text-gray-600 transition-all delay-300 ease-in">
          plans pricing{" "}
        </li>
        <li className="p-4 hover:text-primary  text-gray-600 transition-all delay-300 ease-in">
          Udemy Business
        </li>
        <li className="p-4 hover:text-primary  text-gray-600 transition-all delay-300 ease-in">
          Teach on Udemy
        </li>
      </ul>
        <AuthLink text="login" type="login" href="/login" />
        <AuthLink text="sign up" type="signup" href="signup" />
    </header>
  );
}

export default Header;
