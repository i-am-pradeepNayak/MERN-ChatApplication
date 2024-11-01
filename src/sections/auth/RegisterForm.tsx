import { useForm } from "react-hook-form";
import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFtextField } from "../../components/Hook-form";
import { useDispatch } from "../../store";
import { register } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string()
      .required("email is required")
      .email("Enter valid email address"),
    password: Yup.string().required("password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const handleFormData = async (data) => {
    try {
      await dispatch(register(data)).unwrap();
      navigate("/auth/verifyOTP");
    } catch (err) {
      console.log(err);
    } finally {
      // reset();
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleFormData)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFtextField name="firstName" label="firstname" />
          <RHFtextField name="lastName" label="lastName" />
        </Stack>
        <RHFtextField name="email" label="email" />
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
          Sign up
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
