import { Stack, Typography } from "@mui/material";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h3" paragraph>
        Reset Password
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 5,
        }}
      >
        Please set your new password
      </Typography>
      <ResetPasswordForm />
    </Stack>
  );
};

export default ResetPassword;
