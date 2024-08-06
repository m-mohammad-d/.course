interface FeatureCardType {
  title: string;
  description: string;
  enterprise?: boolean;
}

function FeatureCard({ title, description, enterprise }: FeatureCardType) {
  return (
    <div className="p-4 border border-orange border-l-4 rounded-md shadow-xl h-44 mt-10 ml-16">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        {enterprise && (
          <span className=" text-gray3 font-semibold text-sm border border-orangePeel px-2 py-1 rounded-lg">
            Enterprise Plan
          </span>
        )}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
