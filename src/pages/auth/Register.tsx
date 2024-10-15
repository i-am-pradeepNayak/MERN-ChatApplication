import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Get Started With Tawk</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">Already have an account ?</Typography>
        <Link to="/auth/Login" component={RouterLink} varaint="subtitle2">
          Sign In
        </Link>
      </Stack>

      {/* register form */}
      <RegisterForm />

      <Typography
        component="div"
        sx={{
          textAlign: "center",
          typography: "caption",
          mt: 3,
          color: "text.secondary",
        }}
      >
        {"By signing up,i agree to "}
        <Link underline="always">Terms of policy</Link> {"and "}
        <Link underline="always">Privacy policy</Link>
      </Typography>

      {/* social login */}
      <AuthSocial />
    </Stack>
  );
};

export default Register;
