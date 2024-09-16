import { Stack, Typography } from "@mui/material";
import Book from "./Book";

interface BookItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

const bookItems: BookItem[] = [
  {
    id: "1",
    name: "Harry Porter and the Philosopher's Stone",
    price: 10,
    description: "Harry Porter 1st book",
  },
  {
    id: "2",
    name: "Harry Porter and the Chamber of Secrets",
    price: 20,
    description: "Harry Porter 2nd book",
  },
  {
    id: "3",
    name: "Harry Porter and the Prisoner of Azkaban",
    price: 30,
    description: "Harry Porter 3rd book",
  },
];

function BookShelf() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">BUY YOUR FAVORITE BOOKS</Typography>
      <ul>
        {bookItems.map((item) => (
          <Book key={item.id} {...item} />
        ))}
      </ul>
    </Stack>
  );
}

export default BookShelf;
