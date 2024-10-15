import { Stack, Alert, Button } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFtextField } from "../../components/Hook-form";

const ProfileForm = () => {
  const ProfileSchema = yup.object({
    name: yup.string().required("Name is required"),
    about: yup.string().required("About is required"),
    avatarUrl: yup.string().required("Avatar is required"),
  });

  const defaultValues = {
    name: "David",
    about: "Cricket",
    avatarUrl: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const { reset, setError, handleSubmit, formState, watch, setValue } = methods;
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  const [name, about] = watch(["name", "about"], {
    name: "pradeep",
    about: "BRB",
  });

  useEffect(() => {
    console.log("profile useEffect");
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    try {
      console.log("onSubmit", data);
    } catch (err) {
      reset();
      setError("afterSubmit", { type: "Error", message: err.message });
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue],
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="warning">{errors.afterSubmit.message}</Alert>
          )}
          <RHFtextField
            name="name"
            label="Name"
            helperText="This name is visible to your contacts"
          />
          <RHFtextField name="about" label="About" multiline rows={4} />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
