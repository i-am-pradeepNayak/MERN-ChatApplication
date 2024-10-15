import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { navButtons, profileMenu } from "../../data";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.png";
import { AntSwitch } from "../../components/MuiCustomComp";

// AccountSetting Component: For handling profile menu
function AccountSetting() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path?: string) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <Avatar
        id="logo-button"
        onClick={handleClick}
        src={faker.image.avatar()}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Stack spacing={1} px={1}>
          {profileMenu.map((item) => (
            <MenuItem key={item.title} onClick={() => handleClose(item.path)}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: 100 }}
              >
                <span>{item.title}</span>
                {item.icon}
              </Stack>
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
}

const getBackgroundColor = (isSelected: boolean, theme: any) => {
  if (isSelected) {
    return theme.palette.primary.main;
  }
  return "none";
};

const getTextColor = (isSelected: boolean, theme: any) => {
  if (isSelected) {
    return "white";
  }
  if (theme.palette.mode === "light") {
    return "#000";
  }
  return theme.palette.text.primary;
};

function Sidebar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const navigate = useNavigate();

  const handleNavClick = (index: number, path?: string) => {
    setSelected(index);
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box
      padding={2}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        height: "100vh",
        width: 100,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        {/* Logo and Navigation Buttons */}
        <Stack spacing={4} alignItems="center">
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>

          {/* Navigation Buttons */}
          <Stack
            sx={{ width: "max-content" }}
            spacing={3}
            direction="column"
            alignItems="center"
          >
            {navButtons.map((item) => {
              const isSelected = selected === item.index;
              return (
                <Box
                  key={item.index}
                  sx={{
                    backgroundColor: getBackgroundColor(isSelected, theme),
                    borderRadius: isSelected ? 2 : 0,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: getTextColor(isSelected, theme),
                    }}
                    onClick={() => handleNavClick(item.index, item.path)}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              );
            })}

            <Divider sx={{ width: 48 }} />

            {/* Settings Button */}
            <Box
              sx={{
                backgroundColor: getBackgroundColor(selected === 3, theme),
                borderRadius: selected === 3 ? 2 : 0,
              }}
            >
              <IconButton
                sx={{
                  width: "max-content",
                  color: getTextColor(selected === 3, theme),
                }}
                onClick={() => handleNavClick(3, "setting")}
              >
                <Gear />
              </IconButton>
            </Box>
          </Stack>
        </Stack>

        {/* Bottom Section: Toggle and Account */}
        <Stack alignItems="center" spacing={4}>
          <AntSwitch onChange={onToggleMode} defaultChecked />
          <AccountSetting />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Sidebar;
