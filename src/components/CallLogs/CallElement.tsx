import { useTheme } from "@mui/material/styles";
import { Box, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { VideoCamera, Phone } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { StyledBadge } from "../MuiCustomComp";

const CallElement = ({ online }) => {
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
              <Typography variant="caption">Yesterday, 16:53</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={0.3} direction="row" alignItems="center">
          <IconButton>
            <Phone size={24} color="#76D45E" />
          </IconButton>

          <IconButton>
            <VideoCamera size={24} color="#76D45E" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CallElement;
