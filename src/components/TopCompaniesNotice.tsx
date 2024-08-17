function TopCompaniesNotice() {
  return (
    <div className="p-8 shadow-xl rounded-lg my-8 border border-gray-200">
      <div className="mb-4">
        <span className="text-xl font-semibold text-darkBlue block">
          Top companies offer this course to their employees
        </span>
        <span className="text-sm text-textGray mt-2 block">
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide.{" "}
          <a href="#" className="text-deepBlue hover:underline">
            Learn more
          </a>
        </span>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
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
