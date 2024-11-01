import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Conatct";
import { useSelector } from "../../store";
import { sideBarState } from "../../store/slices/appSlice";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";

function GeneralApp() {
  const theme = useTheme();
  const sideBar = useSelector(sideBarState());
  const width = sideBar.isopen ? `calc(100vw - 740px)` : `calc(100vw - 420px)`;

  return (
    <Stack direction="row" sx={{ height: "100%" }}>
      <Chats />
      <Box
        sx={{
          width,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#FFFFFF"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {sideBar.isopen &&
        (() => {
          switch (sideBar.type) {
            case "CONTACT":
              return <Contact />;

            case "SHARED":
              return <SharedMessage />;

            case "STARRED":
              return <StarredMessage />;

            default:
              return null;
          }
        })()}
    </Stack>
  );
}

export default GeneralApp;
