import { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, Download, Image } from "phosphor-react";
import { messageOptions } from "../../data";

import {
  DividerMessage,
  TextMessage,
  ImageMessage,
  DocMessage,
  LinkMessage,
  ReplyMessage,
} from "./types";

function MessageOptions() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Stack spacing={1} px={1}>
          {messageOptions.map((ele) => {
            return <MenuItem>{ele.title}</MenuItem>;
          })}
        </Stack>
      </Menu>
    </>
  );
}

function Timeline({ text }: DividerMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Divider sx={{ width: "46%" }} />
      <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
        {text}
      </Typography>
      <Divider sx={{ width: "46%" }} />
    </Stack>
  );
}

function TextMsg({ incoming, message }: TextMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: incoming ? theme.palette.text.primary : "#fff" }}
        >
          {message}
        </Typography>
      </Box>

      <MessageOptions />
    </Stack>
  );
}

function MediaMsg({ incoming, img, message }: ImageMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          // backgroundColor: incoming
          //   ? theme.palette.background.default
          //   : theme.palette.primary.main,
        }}
      >
        <Stack spacing={1}>
          <img
            style={{ width: "210px", height: "210px", borderRadius: "10px" }}
            src={img}
            alt="img"
          />
          <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.primary }}
            >
              {message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
}

function ReplyMsg({ incoming, message, reply }: ReplyMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {message}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: incoming ? theme.palette.text.primary : "#FFFFFF",
            }}
          >
            {reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
}

function LinkMsg({ incoming, preview, message }: LinkMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems="start"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={preview}
              alt="preview"
              style={{ width: "200px", height: "180px", borderRadius: "10px" }}
            />

            <Stack spacing={2} alignItems="center">
              <Typography variant="subtitle2">Creating Chat app</Typography>
              <Typography
                sx={{ color: theme.palette.primary.main }}
                variant="subtitle2"
                component={Link}
              >
                www.youtube.com
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              sx={{ color: incoming ? theme.palette.text.primary : "#FFFFF" }}
            >
              {message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
}

function DocMsg({ incoming, message }: DocMessage) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: theme.palette.background.paper }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <Download />
            </IconButton>
          </Stack>
          <Typography
            variant="body1"
            sx={{ color: incoming ? theme.palette.text.primary : "#FFFFF" }}
          >
            {message}{" "}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
