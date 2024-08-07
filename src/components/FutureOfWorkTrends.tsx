function FutureOfWorkTrends() {
  return (
    <div className=" bg-lightGray">
      <div className="mx-24 flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-8">
        <div className="text-left md:text-left w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-gray1">
            Top trends for the future of work
          </h2>
          <p className="text-lg mb-6 text-gray3">
            GenAI and leadership are at the core of today's skills-based
            economy. Get the 2024 Global Learning & Skills Trends Report to
            learn more.
          </p>
          <button className="bg-gray1 text-white px-4 py-2 rounded-lg">
            Get the report
          </button>
        </div>
        <div className="w-full md:w-2/3 flex justify-center mt-8 md:mt-0">
          <div className="relative  max-w-lg">
            <img
              src="https://piogroup.net/uploads/editor/e-learning-man-at-home-6513421cef6b0.jpg"
              alt="Global Learning & Skills Trends Report"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureOfWorkTrends;
