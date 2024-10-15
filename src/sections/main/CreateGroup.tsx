import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFtextField } from "../../components/Hook-form";
import RHFAutoComplete from "../../components/Hook-form/RHFAutoComplete";
import { XCircle } from "phosphor-react";

const members = ["Virat", "Rohit", "Dhoni"];

const CreateGroupForm = () => {
  const groupFormSchema = yup.object({
    groupName: yup.string().required("Group name is required"),
    groupMembers: yup.array().min(2, "Must have 2 memebers"),
  });

  const defaultValues = {
    groupName: "",
    groupMembers: [],
  };

  const methods = useForm({
    resolver: yupResolver(groupFormSchema),
    defaultValues,
  });
  const { reset, setError, handleSubmit, formState, clearErrors } = methods;
  const { isSubmitting, isSubmitted, errors, isValid } = formState;

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (err) {
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFtextField name="groupName" label="Group Name" />

        <RHFAutoComplete
          name="groupMembers"
          label="Group Members"
          options={members}
          freeSolo
          multiple
          filterSelectedOptions
        />
        <Stack
          spacing={2}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} keepMounted sx={{ padding: 4 }}>
      <DialogTitle sx={{ mb: 3 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">Create New Group</Typography>
          <IconButton onClick={handleClose}>
            <XCircle />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
