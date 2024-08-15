interface FeatureCardType {
  title: string;
  description: string;
  enterprise?: boolean;
}

function FeatureCard({ title, description, enterprise }: FeatureCardType) {
  return (
    <div className="p-4 border border-orange-500 border-l-4 rounded-md shadow-xl h-auto md:h-44 mt-8 md:mt-10 mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="font-bold text-lg mb-2 md:mb-0">{title}</h3>
        {enterprise && (
          <span className="text-gray-500 font-semibold text-xs md:text-sm border border-orange-500 px-2 py-1 rounded-lg mt-2 md:mt-0">
            Enterprise Plan
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm md:text-base mt-2">{description}</p>
    </div>
  );
}

export default FeatureCard;
