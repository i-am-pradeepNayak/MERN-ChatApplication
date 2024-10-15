import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

import ForgotPasswordFrom from "../../sections/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h3" paragraph>
        Forgot your Password ?
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 5,
        }}
      >
        Please enter the email address associated with your email account and we
        mail you link to reset password
      </Typography>

      <ForgotPasswordFrom />

      <Link
        component={RouterLink}
        to="/auth/login"
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mt: 3,
          mx: "auto",
        }}
      >
        <CaretLeft /> Back To Login Page
      </Link>
    </Stack>
  );
};

export default ForgotPassword;
