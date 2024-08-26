import { IoEarthOutline } from "react-icons/io5";
import logo from "../asset/image/logo.svg";

function Footer() {
  return (
    <footer className="bg-darkGray text-softWhite py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm mb-8 md:mb-0">
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Udemy Business
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Teach on Udemy
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Get the app
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  About us
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Contact us
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Careers
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Blog
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Help and Support
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Affiliate
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Investors
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Terms
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Privacy policy
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Cookie settings
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Sitemap
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-primary hover:underline">
                  Accessibility statement
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <button className="border border-softWhite text-softWhite py-2 px-4 rounded flex items-center justify-center">
              <IoEarthOutline className="mr-2" />
              English
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Udemy Logo" className="h-8 mx-auto md:mx-0" />
          </div>
          <p className="text-xs">&copy; 2024 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
