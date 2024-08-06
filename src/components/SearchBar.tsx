function SearchBar() {
  return (
    <div className="flex items-center bg-gray-200 mx-3 rounded-full p-3 w-3/5">
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M10.5 18.5a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <input
        className="bg-gray-200 ml-2 outline-none w-full"
        type="text"
        placeholder="Search for anything"
      />
    </div>
  );
}
export default SearchBar;
