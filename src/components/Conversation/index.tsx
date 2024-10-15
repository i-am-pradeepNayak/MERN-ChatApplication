import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatSection from "./ChatSection";

function Conversation() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        height: "100%",
        maxHeight: "100vh",
        width: "auto",
      }}
    >
      <ChatHeader />
      <Box
        flexGrow={1}
        sx={{
          overflowY: "scroll",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <ChatSection />
      </Box>
      <ChatFooter />
    </Stack>
  );
}

export default Conversation;
