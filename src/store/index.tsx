import cartReducer from "./cartSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
