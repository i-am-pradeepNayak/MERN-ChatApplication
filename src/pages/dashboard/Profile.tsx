import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
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
        <Stack p={4} spacing={5}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <CaretLeft size={24} color="#4B4B4B" />
            </IconButton>
            <Typography variant="h5">Profile</Typography>
          </Stack>
          {/* ProfileFrom */}
          <ProfileForm />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Profile;
