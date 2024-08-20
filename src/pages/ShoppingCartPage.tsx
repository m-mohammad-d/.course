import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { removeItem, clearCart } from "../store/CartSlice";
import CartItemCard from "../components/CartItemCard";
import { useCheckout } from "../hooks/useCheckout";
import toast from "react-hot-toast";

function ShoppingCartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { mutate: checkout, isLoading, isError } = useCheckout();

  const handleRemoveFromCart = (id: string) => dispatch(removeItem(id));

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    const courses = cartItems.map((item) => ({
      courseId: item.id,
      courseName: item.name,
      courseImage: item.img,
      instructorName: item.instructor,
    }));

    checkout(courses, {
      onSuccess: () => {
        toast.success("Checkout successful!");
        dispatch(clearCart());
      },
      onError: (error: Error) => {
        toast.error(`Checkout failed: ${error.message}`);
      },
    });
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
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </button>
          </div>
          {isError && (
            <p className="text-red-500 mt-2">Error: {isError}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
