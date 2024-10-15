import { useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Stack,
  Box,
  Typography,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  Lock,
  Key,
  PencilCircle,
  Image,
  ClipboardText,
  Article,
  WarningCircle,
  CaretLeft,
} from "phosphor-react";
import Shortcuts from "../../sections/settings/Shortcuts";

const SettingBar = ({ handleShortcutOpen }) => {
  const theme = useTheme();
  const options = [
    {
      key: 1,
      icon: <Bell size={24} />,
      name: "Notifications",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Lock size={24} />,
      name: "Privacy",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <Key size={24} />,
      name: "Security",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <PencilCircle size={24} />,
      name: "Theme",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Image size={24} />,
      name: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <ClipboardText size={24} />,
      name: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 7,
      icon: <Article size={24} />,
      name: "Keybaord shortcuts",
      onclick: handleShortcutOpen,
    },
    {
      key: 8,
      icon: <WarningCircle size={24} />,
      name: "help",
      onclick: () => {},
    },
  ];
  return (
    <Box
      p={3}
      width={320}
      sx={{
        height: "100vh",
        boxShadow: "0px 0px 4px 0px #00000040",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        overflowY: "scroll",
      }}
    >
      <Stack p={4} spacing={5}>
        {/* header */}
        <Stack direction="row" spacing={3} alignItems="center">
          <IconButton>
            <CaretLeft size={24} color="#4B4B4B" />
          </IconButton>
          <Typography variant="h6">Settings</Typography>
        </Stack>

        {/* profile */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar src={faker.image.avatar()} sx={{ height: 56, width: 56 }} />
          <Stack spacing={0.5}>
            <Typography variant="body1" fontWeight={700}>
              Shrena hshah
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              323231231
            </Typography>
          </Stack>
        </Stack>

        {/* options */}
        <Stack spacing={2}>
          {options.map(({ icon, name, key, onclick }) => (
            <Stack
              spacing={2}
              sx={{ cursor: "pointer" }}
              onClick={onclick}
              key={key}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                {icon}
                <Typography variant="body2">{name}</Typography>
              </Stack>
              {key !== 8 && <Divider />}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const SettingBody = () => {
  return (
    <Stack
      sx={{ width: `calc(100vw - 420px)` }}
      alignItems="center"
      justifyContent="center"
    >
      <img src="./image.png" alt="png" />
      <Typography variant="subtitle2">
        Select a conversation or start new
      </Typography>
    </Stack>
  );
};

const Settings = () => {
  const [shortcutOpen, setShortcutOpen] = useState(false);

  const handleShortcutOpen = () => {
    setShortcutOpen(true);
  };

  const handleShortcutClose = () => {
    setShortcutOpen(false);
  };
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <SettingBar handleShortcutOpen={handleShortcutOpen} />
        <SettingBody />
      </Stack>
      {shortcutOpen && (
        <Shortcuts
          shortcutOpen={shortcutOpen}
          handleShortcutClose={handleShortcutClose}
        />
      )}
    </>
  );
};

export default Settings;
