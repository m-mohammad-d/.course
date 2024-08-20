
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-backgroundGray">
      <h1 className="text-9xl font-extrabold text-darkGray tracking-widest">
        404
      </h1>
      <div className="bg-accentYellow px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-deepBlue group active:text-darkOrange focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-deepBlue group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-softWhite border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
}

export default NotFoundPage;
