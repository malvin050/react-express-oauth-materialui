import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export const CoreTextField = ({ id, label, value, onChange, onBlur, onFocus, error }: Props) => {
  return (
    <TextField
      id={id}
      error={!!error}
      helperText={error}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      variant="filled"
      fullWidth
    />
  );
};
