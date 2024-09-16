import Cart from "./Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import BookShelf from "./Shop/BookShelf";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import Notification from "./UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const isCartVisible = useSelector(
    (state: RootState) => state.ui.isCartVisible
  );
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    //loading xu ly o finally
    if (cart.cartChanged) {
      dispatch(sendCartData(cart.cartItems));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <BookShelf />
      </Layout>
    </>
  );
}

export default App;
