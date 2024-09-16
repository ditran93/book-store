import { Stack, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

interface BookProps {
  id: string;
  name: string;
  price: number;
  description: string;
}

function Book({ id, name, price, description }: BookProps) {
  const dispatch = useDispatch();
  const handleAddToCart = (id: string, name: string, price: number) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <li key={id} style={{ listStyle: "none", marginBottom: 5 }}>
      <Stack
        direction="column"
        sx={{ backgroundColor: "white", borderRadius: 1, p: 2 }}
        spacing={2}
      >
        <Stack direction="row" spacing={30}>
          <Typography variant="h6" color="black">
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ backgroundColor: "black", borderRadius: 4, px: 2.5 }}
          >
            ${price}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={10}>
          <Typography variant="h6" color="black" flex={1}>
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black" }}
            //call API here, error handling
            onClick={() => handleAddToCart(id, name, price)}
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </li>
  );
}

export default Book;
