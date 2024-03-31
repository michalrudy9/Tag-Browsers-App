import React from "react";
import { Box, Typography } from "@mui/joy";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <Box className="text-center relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
      <CircularProgress />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default LoadingSpinner;
