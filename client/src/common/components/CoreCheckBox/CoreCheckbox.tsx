import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
  id: string;
  label?: string;
  error?: string;
}

export const CoreCheckbox = ({ value, onChange, id, label, error }: Props) => {
  return (
    <FormControl error={!!error}>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={(event) => {
              onChange(event.target.checked);
            }}
            id={id}
          />
        }
        label={label}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
