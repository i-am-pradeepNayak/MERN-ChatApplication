import { Autocomplete, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const RHFAutoComplete = ({ name, helperText, label, ...other }) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Autocomplete
            {...field}
            fullWidth
            value={field.value}
            onChange={(event, newValue) => {
              setValue(field.name, newValue, { shouldValidate: true });
            }}
            {...other}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!error}
                helperText={error ? error.message : helperText}
              />
            )}
          />
        );
      }}
    />
  );
};

export default RHFAutoComplete;
