import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { chatList } from "../../data";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/MuiCustomComp";
import ChatElement from "../../components/Conversation/ChatElement";

function Chats() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack
          sx={{
            width: "100%",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <IconButton>
                <MagnifyingGlass color="#7096E6" />
              </IconButton>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>

        <Stack spacing={1}>
          <Stack direction="row" alignItems="center">
            <ArchiveBox size="24" />
            <Button>Archived</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {chatList
              .filter((chat) => chat.pinned)
              .map((chat) => (
                <ChatElement {...chat} />
              ))}
          </Stack>

          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {chatList
              .filter((chat) => !chat.pinned)
              .map((chat) => (
                <ChatElement {...chat} />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
