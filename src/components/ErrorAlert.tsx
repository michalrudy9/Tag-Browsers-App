import React from "react";
import Alert from "@mui/material/Alert";

const ErrorAlert: React.FC<{
  message: string;
  position: "absolute" | "relative";
}> = ({ message, position }) => {
  const style = `w-[80%] justify-center ${position} left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`;

  return (
    <Alert severity="error" className={style}>
      {message}
    </Alert>
  );
};

export default ErrorAlert;
