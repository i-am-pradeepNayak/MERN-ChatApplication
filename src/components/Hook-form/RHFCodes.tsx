import { Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFCodes = ({ keyName = "", inputs = [], ...other }) => {
  const codesRef = useRef(null);
  const { control } = useFormContext();

  const handleChangeWithNextField = (event, handleChange) => {
    const { name, value, maxLength } = event.target;

    const otpBoxPosition = Number(name.replace(keyName, ""));

    if (value.length > maxLength) {
      event.target.value = value[0];
    }
    const nextField = document.querySelector(
      `input[name=${keyName}${otpBoxPosition + 1}`,
    );

    if (otpBoxPosition < 6 && value.length >= maxLength && nextField !== null) {
      nextField.focus();
    }
    handleChange(event);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center" ref={codesRef}>
      {inputs.map((name, index) => (
        <Controller
          key={name}
          name={`${keyName}${index + 1}`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              error={!!error}
              placeholder="-"
              {...other}
              autoFocus={index === 0}
              onChange={(e) => {
                handleChangeWithNextField(e, field.onChange);
              }}
              onFocus={(e) => e.currentTarget.select()}
              InputProps={{
                sx: {
                  width: { xs: 36, sm: 56 },
                  height: { xs: 36, sm: 56 },
                  "& input": { p: 0, textAlign: "center" },
                },
              }}
              inputProps={{
                maxLength: 1,
                type: "number",
              }}
            />
          )}
        />
      ))}
    </Stack>
  );
};

export default RHFCodes;
