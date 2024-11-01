import { useState } from "react";
import { IconButton, InputAdornment, Stack, Button } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFtextField } from "../../components/Hook-form";
import { resetPassword } from "../../store/slices/authSlice";
import { useDispatch } from "../../store";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const passwordResetToken = searchParams.get("token");
  const dispatch = useDispatch();

  const resetPasswordSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "password must same"),
  });

  const defaultValues = {
    password: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues,
  });
  const { reset, setError, handleSubmit, formState } = methods;
  const { isSubmitting, isSubmitted, errors } = formState;

  const onSubmit = async (data) => {
    try {
      await dispatch(resetPassword({ ...data, passwordResetToken }));
    } catch (err) {
      setError("afterSubmit", { message: err.message });
    } finally {
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFtextField
          name="password"
          label="password"
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

        <RHFtextField
          name="confirmPassword"
          label="confirmPassword"
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
          Reset
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordForm;
