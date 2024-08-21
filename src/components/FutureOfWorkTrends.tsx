function FutureOfWorkTrends() {
  return (
    <div className="bg-backgroundGray flex justify-center py-12">
      <div className="mx-4 md:mx-8  flex flex-col md:flex-row items-center justify-between max-w-screen-2xl w-full px-4 md:px-8">
        <div className="text-left md:text-left w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-darkGray">
            Top trends for the future of work
          </h2>
          <p className="text-lg mb-6 text-mediumGray">
            GenAI and leadership are at the core of today's skills-based
            economy. Get the 2024 Global Learning & Skills Trends Report to
            learn more.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-darkOrange transition duration-300">
            Get the report
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center">
          <div className="relative max-w-lg">
            <img
              src="https://piogroup.net/uploads/editor/e-learning-man-at-home-6513421cef6b0.jpg"
              alt="Global Learning & Skills Trends Report"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureOfWorkTrends;
