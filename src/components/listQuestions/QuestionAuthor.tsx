import React from "react";
import { Box, Avatar, Typography, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

const QuestionAuthor: React.FC<{
  owner: {
    display_name: string;
    profile_image: string;
    link: string;
  };
}> = ({ owner }) => {
  return (
    <Box className="w-[40%] flex justify-end items-center gap-x-4">
      <Avatar
        alt={owner.display_name}
        src={owner.profile_image}
        className="!w-6 !h-6"
      />
      <Link
        component={RouterLink}
        to={owner.link}
        target="_blank"
        underline="none"
      >
        <Typography>{owner.display_name}</Typography>
      </Link>
    </Box>
  );
};

export default QuestionAuthor;
