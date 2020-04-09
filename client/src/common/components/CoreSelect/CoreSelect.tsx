import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

interface Options {
  value: string;
  label: string;
}

interface Props {
  label?: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Options[];
  error?: string;
  isDisabled?: boolean;
}

export const CoreSelect = ({ label, id, value, onChange, options, error, isDisabled }: Props) => {
  return (
    <TextField
      id={id}
      error={!!error}
      helperText={error}
      label={label}
      value={value}
      onChange={onChange}
      variant="filled"
      select
      fullWidth
      disabled={isDisabled}
    >
      {options.map(({ value, label: optionLabel }) => (
        <MenuItem key={value} value={value}>
          {optionLabel}
        </MenuItem>
      ))}
    </TextField>
  );
};
