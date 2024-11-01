import { useState } from "react";
import {
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";
import { FormProvider, RHFtextField } from "../../components/Hook-form";
import { useDispatch } from "../../store";
import { LoginUser } from "../../store/slices/authSlice";
import { openSnackBar } from "../../store/slices/appSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const loginSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid email"),
    password: yup.string().required("password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });
  const { reset, setError, handleSubmit, formState, clearErrors } = methods;
  const { isSubmitting, isSubmitted, errors } = formState;

  const onSubmit = async (data) => {
    try {
      const loginResp = await dispatch(LoginUser(data)).unwrap();
      dispatch(
        openSnackBar({ message: loginResp.message, severity: "success" }),
      );
    } catch (err) {
      reset();
      setError("afterSubmit", { type: "Error", message: err.message });
      dispatch(openSnackBar({ message: err.message, severity: "error" }));
    }
  };

  const handleFocus = () => {
    clearErrors("afterSubmit");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* {errors.afterSubmit && (
          <Alert severity="warning">{errors.afterSubmit.message}</Alert>
        )} */}
        <RHFtextField
          name="email"
          label="Email address"
          onFocus={handleFocus}
        />
        <RHFtextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((val) => !val)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack direction="row" justifyContent="end" sx={{ my: 2 }}>
          <Link
            variant="body2"
            underline="always"
            sx={{ cursor: "pointer" }}
            component={RouterLink}
            to="/auth/forgotPassword"
          >
            Forgot password ?
          </Link>
        </Stack>

        <Button
          fullWidth
          size="medium"
          variant="contained"
          type="submit"
          color="inherit"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default LoginForm;
