function Sidebar() {
  return (
    <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-8 lg:mt-0">
      <img
        src="your-image-url"
        alt="Course preview"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <p className="text-gray-600 mb-4">Price: $74.99</p>
      <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        Add to Cart
      </button>
    </div>
  );
}

export default Sidebar;
