import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/MuiCustomComp";

import { chatList } from "../../data";
import ChatElement from "../../components/Conversation/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Box
        sx={{
          width: 320,
          height: "100vh",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack>
            <Typography variant="h5">Groups</Typography>
          </Stack>

          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <IconButton>
                  <MagnifyingGlass color="#7096E6" />
                </IconButton>
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "#709CE6", cursor: "pointer" }}
              component={Link}
            >
              Create New group
            </Typography>

            <IconButton onClick={handleClickOpen}>
              <Plus style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>

          <Divider />

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

      {/* create group modal */}
      {open && <CreateGroup open={open} handleClose={handleClose} />}
    </Stack>
  );
};

export default Group;
