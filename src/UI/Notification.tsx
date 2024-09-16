import { Stack, Typography } from "@mui/material";

interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

function Notification({ status, title, message }: NotificationProps) {
  let statusColor = "";
  if (status === "error") {
    statusColor = "red";
  } else if (status === "success") {
    statusColor = "green";
  } else {
    statusColor = "black";
  }

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        color: statusColor,
        px: 7,
        m: 1,
        borderColor: statusColor,
        border: "1px solid",
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{message}</Typography>
    </Stack>
  );
}

export default Notification;
