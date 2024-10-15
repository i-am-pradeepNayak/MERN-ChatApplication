import { Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFtextField } from "../../components/Hook-form";

const ForgotPasswordFrom = () => {
  const ForgotPasswordSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid email"),
  });

  const defaultValues = {
    email: "",
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });
  const { reset, setError, handleSubmit, formState } = methods;
  const { isSubmitting, isSubmitted, errors } = formState;

  const onSubmit = (data) => {
    try {
      console.log("formData", data);
    } catch (err) {
      setError("afterSubmit", { message: err.message });
    } finally {
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFtextField name="email" label="Email address" />
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
          Send request
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ForgotPasswordFrom;
