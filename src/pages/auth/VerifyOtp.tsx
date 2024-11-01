import { Stack, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import VerifyForm from "../../sections/auth/VerifyOTPForm";
import { useSelector } from "../../store";
import { authState } from "../../store/slices/authSlice";

const VerifyOtp = () => {
  const { email } = useSelector(authState());

  if (!email) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">OTP verification</Typography>
      <Stack spacing={0.5}>
        <Typography variant="body2">
          Sent to email (pradeep@gmail.in)
        </Typography>
      </Stack>
      <VerifyForm />
    </Stack>
  );
};

export default VerifyOtp;
