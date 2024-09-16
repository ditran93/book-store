import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <Stack
      direction="column"
      sx={{ backgroundColor: "black", p: 2, borderRadius: 2 }}
      spacing={1}
    >
      <Typography variant="h5">My Shopping Cart</Typography>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </Stack>
  );
}

export default Cart;
