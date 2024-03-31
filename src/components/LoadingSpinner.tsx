import React from "react";
import { Box, Typography } from "@mui/joy";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner: React.FC<{
  text?: string;
  position: "absolute" | "relative";
}> = ({ text, position }) => {
  const style = `text-center ${position} left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`;

  return (
    <Box className={style}>
      <CircularProgress />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default LoadingSpinner;
