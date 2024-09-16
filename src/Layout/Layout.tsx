import { Container, Stack } from "@mui/material";
import MainHeader from "./MainHeader";

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <Container maxWidth="md">
        <Stack
          direction="column"
          spacing={2}
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          {props.children}
        </Stack>
      </Container>
    </>
  );
}

export default Layout;
