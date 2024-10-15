import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const RHFtextField = ({ name, helperText, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
};

export default RHFtextField;
