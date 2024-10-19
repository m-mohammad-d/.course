import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setItemLocal, getItemLocal } from "../utils/localStorageUtils";

interface Course {
  id: string;
  name: string;
  price: number;
  img: string;
  instructor: string;
}

export interface CartItem extends Course {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: getItemLocal("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Course>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

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
