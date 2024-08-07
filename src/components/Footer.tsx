import { IoEarthOutline } from "react-icons/io5";
import logo from "../asset/image/udemyLogo.png";

function Footer() {
  return (
    <footer className="bg-[#2D2F31] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-[12px] mb-8">
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Udemy Business
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Teach on Udemy
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Get the app
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  About us
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Contact us
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Careers
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Blog
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Help and Support
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Affiliate
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Investors
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Terms
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Privacy policy
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Cookie settings
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Sitemap
                </li>
                <li className="transition-all delay-300 ease-linear hover:text-orangePeel hover:underline">
                  Accessibility statement
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left">
            <button className=" border border-white text-white py-2 px-4 rounded mb-4 md:mb-0 flex items-center justify-center">
              <IoEarthOutline />
              English
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Udemy Logo" className="h-8" />
          </div>
          <p className="text-xs">&copy; 2024 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
