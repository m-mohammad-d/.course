import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setItemLocal, getItemLocal } from "../utils/localStorageUtils";

interface Course {
  id: string;
  name: string;
  price: number;
  img: string;
  instructor : string
}

export interface CartState {
  items: Course[];
}

const initialState: CartState = {
  items: getItemLocal<Course[]>("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Course>) => {
      console.log(initialState);

      state.items.push(action.payload);
      setItemLocal("cart", state.items);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      setItemLocal("cart", state.items);
    },
    clearCart: (state) => {
      state.items = [];
      setItemLocal("cart", state.items);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
