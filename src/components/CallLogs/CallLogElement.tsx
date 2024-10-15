import { Stack, Avatar, Typography, IconButton, Box } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { ArrowDownLeft, ArrowUpRight, Phone } from "phosphor-react";
import { StyledBadge } from "../MuiCustomComp";

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.default,
        borderRadius: "15px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">Dinesh</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              {incoming ? (
                <ArrowDownLeft size={16} color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight size={16} color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday, 16:53</Typography>
            </Stack>
          </Stack>
          
        </Stack>

        <IconButton>
          <Phone size={24} color="#76D45E" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default CallLogElement;
