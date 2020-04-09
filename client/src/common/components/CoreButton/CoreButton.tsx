import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const CoreButton = ({ children, onClick, isDisabled, type }: Props) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} disabled={isDisabled} type={type}>
      {children}
    </Button>
  );
};
