import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const leftSideShortcutKeys = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },

  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },

  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },

  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },

  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },

  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },

  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },

  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];

const rightSideShortcutKeys = [
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },

  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },

  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },

  {
    key: 7,
    title: "Next Chat",
    combination: ["Cmd", "N"],
  },

  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },

  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },

  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },

  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
];

const Shortcuts = ({ shortcutOpen, handleShortcutClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={shortcutOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleShortcutClose}
      sx={{ p: 4 }}
    >
      <DialogTitle>Keyboard Shortcuts</DialogTitle>
      <DialogContent sx={{ mt: 4 }}>
        <DialogContentText>
          <Stack direction="row" spacing={3}>
            <Stack flexGrow={1} spacing={2}>
              {leftSideShortcutKeys.map(({ title, combination, key }) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  key={key}
                  spacing={3}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "14px", fontWeight: 700, color: "#515151" }}
                  >
                    {title}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {combination.map((text) => (
                      <Button
                        disabled
                        variant="contained"
                        sx={{ color: "#515151" }}
                      >
                        {text}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <Stack flexGrow={1} spacing={2}>
              {rightSideShortcutKeys.map(({ title, combination, key }) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  key={key}
                  spacing={3}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "14px", fontWeight: 700, color: "#515151" }}
                  >
                    {title}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {combination.map((text) => (
                      <Button
                        disabled
                        variant="contained"
                        sx={{ color: "#515151" }}
                      >
                        {text}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleShortcutClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Shortcuts;
