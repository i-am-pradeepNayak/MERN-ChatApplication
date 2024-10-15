import {
  Stack,
  Box,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { MagnifyingGlass, Phone } from "phosphor-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/MuiCustomComp";
import CallLogElement from "../../components/CallLogs/CallLogElement";
import { callLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <>
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
              <Typography variant="h5">Call Log</Typography>
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
                Start new converstaion
              </Typography>

              <IconButton>
                <Phone
                  size={24}
                  style={{ color: theme.palette.primary.main }}
                  onClick={() => handleClickOpen()}
                />
              </IconButton>
            </Stack>

            <Divider />

            <Stack
              direction="column"
              spacing={3}
              sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
            >
              <Stack spacing={2.5}>
                {callLogs.map((ele) => (
                  <CallLogElement {...ele} key={ele.id} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {open && <StartCall open={open} handleClose={handleClose} />}
    </>
  );
};

export default Call;
