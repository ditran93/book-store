import { Stack, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ id, name, price, quantity }: CartItemProps) {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    dispatch(cartActions.increaseQuantity(id));
  };
  const handleDecreaseQuantity = () => {
    dispatch(cartActions.decreaseQuantity(id));
  };
  return (
    <li style={{ listStyle: "none", marginBottom: 5 }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: "#242424", p: 2 }}
      >
        <Stack direction="row" spacing={30}>
          <Typography variant="h5">{name}</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6">${price * quantity} </Typography>
            <Typography variant="body2">(${price} each)</Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Typography variant="h5" flex={1}>
            x{quantity}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              sx={{ borderColor: "#1ad1b9" }}
              onClick={handleIncreaseQuantity}
            >
              <Typography variant="body2" sx={{ color: "#1ad1b9" }}>
                +
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#1ad1b9" }}
              onClick={handleDecreaseQuantity}
            >
              <Typography variant="body2" sx={{ color: "#1ad1b9" }}>
                -
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </li>
  );
}

export default CartItem;
