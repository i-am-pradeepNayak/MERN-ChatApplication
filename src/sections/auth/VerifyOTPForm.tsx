import { Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../components/Hook-form";
import RHFCodes from "../../components/Hook-form/RHFCodes";
import { useDispatch, useSelector } from "../../store";
import { authState, verifyOTP } from "../../store/slices/authSlice";

const VerifyForm = () => {
  const { email } = useSelector(authState());
  const dispatch = useDispatch();

  const verifyCodeSchema = yup.object({
    code1: yup.string().required("Code1 is required"),
    code2: yup.string().required("Code2 is required"),
    code3: yup.string().required("Code3 is required"),
    code4: yup.string().required("Code4 is required"),
    code5: yup.string().required("Code5 is required"),
    code6: yup.string().required("Code6 is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(verifyCodeSchema),
    defaultValues,
  });

  const { reset, setError, handleSubmit, formState } = methods;
  const { isSubmitting, isSubmitted, errors } = formState;

  const onSubmit = async (data) => {
    try {
      const otp = Number(Object.values(data).join(""));
      await dispatch(verifyOTP({ otp, email })).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFCodes
          keyName="code"
          inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
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
          Verfiy OTP
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default VerifyForm;
