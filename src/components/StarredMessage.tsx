import { Box, Stack, IconButton, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "../store/index";
import { updateSideBarType } from "../store/slices/appSlice";
import ChatSection from "./Conversation/ChatSection";

const ContactHeader = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        direction="row"
        spacing={3}
        p={2}
        alignItems="center"
      >
        <IconButton
          onClick={() => dispatch(updateSideBarType({ type: "CONTACT" }))}
        >
          <CaretLeft />
        </IconButton>

        <Typography variant="subtitle2">Starred Messages</Typography>
      </Stack>
    </Box>
  );
};

const ContactBody = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        position: "relative",
        flexGrow: 1,
        overflowY: "scroll",
        backgroundColor: "#F8FAFF",
      }}
      spacing={3}
      p={3}
    >
      <ChatSection />
    </Stack>
  );
};

const StarredMessage = () => {
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <ContactHeader />

        <ContactBody />
      </Stack>
    </Box>
  );
};

export default StarredMessage;
