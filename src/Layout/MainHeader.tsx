import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { RootState } from "../store";

function MainHeader() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const hanldeShowCart = () => {
    dispatch(uiActions.toggleCartVisibility());
  };
  return (
    <Stack direction="row" sx={{ backgroundColor: "black", py: 3, px: 10 }}>
      <Typography variant="h3" flex={1}>
        Book Store
      </Typography>
      <Button
        variant="outlined"
        sx={{ borderColor: "#1ad1b9" }}
        onClick={hanldeShowCart}
      >
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1" sx={{ color: "#1ad1b9" }}>
            My Cart
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              backgroundColor: "#1ad1b9",
              borderRadius: "30px",
              px: 2.5,
            }}
          >
            {totalQuantity}
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
}

export default MainHeader;
