import React from "react";
import { Box, Typography } from "@mui/joy";

const PostStatistics: React.FC<{
  score: number;
  answersCount: number;
  viewCount: number;
}> = ({ score, answersCount, viewCount }) => {
  return (
    <Box className="text-right">
      <Typography>{score} votes</Typography>
      <Typography>{answersCount} answers</Typography>
      <Typography>{viewCount} views</Typography>
    </Box>
  );
};

export default PostStatistics;
