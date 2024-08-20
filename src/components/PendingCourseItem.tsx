interface courseItem {
  name: string;
  title: string;
  image: string;
  price: number;
}

function PendingCourseItem({ name, title, image, price }: courseItem) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col space-y-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="text-gray-600 flex justify-between">
          <p>{title}</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Approve
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingCourseItem;
