import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Box,
  InputAdornment,
  Stack,
  IconButton,
  Fab,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { StyledInput } from "../MuiCustomComp";

interface ChatInputProps {
  isChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
function ChatInput({ isChatOpen }: ChatInputProps) {
  const [openActions, setOpenActions] = useState<boolean>(false);
  return (
    <StyledInput
      placeholder="Write a message ..."
      variant="filled"
      fullWidth
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((action) => {
                return (
                  <Box sx={{ position: "absolute", top: -action.y }}>
                    <Tooltip title={action.title} placement="right">
                      <Fab sx={{ backgroundColor: action.color }}>
                        {action.icon}
                      </Fab>
                    </Tooltip>
                  </Box>
                );
              })}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => isChatOpen((val) => !val)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

function ChatFooter() {
  const [chatOpen, isChatOpen] = useState(false);
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{ position: "relative" }}
      >
        <Stack flexGrow={1}>
          <ChatInput isChatOpen={isChatOpen} />
          <Box
            sx={{
              display: chatOpen ? "inline" : "none",
              position: "fixed",
              right: 100,
              bottom: 80,
              zIndex: 10,
            }}
          >
            <Picker data={data} theme={theme.palette.mode} />
          </Box>
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default ChatFooter;
