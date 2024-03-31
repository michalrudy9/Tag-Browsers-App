import React from "react";
import Alert from "@mui/material/Alert";

const ErrorAlert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Alert
      severity="error"
      className="w-[80%] justify-center relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
    >
      {message}
    </Alert>
  );
};

export default ErrorAlert;
