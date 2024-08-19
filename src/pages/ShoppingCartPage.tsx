import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { removeItem, clearCart } from "../store/CartSlice";
import CartItemCard from "../components/CartItemCard";

function ShoppingCartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="mt-8 bg-gray-100 p-4 rounded shadow-md">
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onRemove={handleRemoveFromCart}
            />
          ))}
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
