import { AppThunk } from ".";
import { uiActions } from "./uiSlice";
import { CartItem, cartActions } from "./cartSlice";

export const fetchCartData = (): AppThunk => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://book-store-37df3-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }
      const data: CartItem[] = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData || []));
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart: CartItem[]): AppThunk => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://book-store-37df3-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
