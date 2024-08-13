function TopCompaniesNotice() {
  return (
    <div className="p-6 shadow-lg rounded-lg mb-6">
      <div className="mb-4">
        <span className="text-xl font-semibold text-gray-800 block">
          Top companies offer this course to their employees
        </span>
        <span className="text-sm text-gray-600 mt-2 block">
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide.
          <span className="text-blue-500">Learn more</span>
        </span>
      </div>
      <div className="flex justify-between">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt="Nasdaq"
          height="38"
          width="115"
          loading="lazy"
          className="h-10"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt="Volkswagen"
          height="38"
          width="44"
          loading="lazy"
          className="h-10"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt="Box"
          height="38"
          width="67"
          loading="lazy"
          className="h-10"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt="NetApp"
          height="38"
          width="115"
          loading="lazy"
          className="h-10"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt="Eventbrite"
          height="38"
          width="115"
          loading="lazy"
          className="h-10"
        />
      </div>
    </div>
  );
}

export default TopCompaniesNotice;
