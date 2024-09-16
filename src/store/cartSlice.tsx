import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export interface CartState {
  cartItems: CartItem[];
  cartChanged: boolean;
}

const initialState: CartState = {
  cartItems: [],
  cartChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cartChanged = true;
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    increaseQuantity(state, action) {
      state.cartChanged = true;
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      state.cartChanged = true;
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    replaceCart(state, action) {
      state.cartChanged = false;
      state.cartItems = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
