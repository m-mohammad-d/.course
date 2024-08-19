
interface Course {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface CartItemCardProps {
  item: Course;
  onRemove: (id: string) => void;
}

function CartItemCard({ item, onRemove }: CartItemCardProps) {
  return (
    <div key={item.id} className="flex items-center mb-4 p-4 border-b border-textGray">
      <img
        src={item.img}
        alt={item.name}
        className="w-16 h-16 object-cover rounded mr-4"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItemCard;
