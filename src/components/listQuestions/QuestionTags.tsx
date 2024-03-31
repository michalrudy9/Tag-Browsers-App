import React from "react";
import { Box, Chip, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

const QuestionTags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <Box>
      {tags.map((tag: string) => (
        <Link key={tag} component={RouterLink} to={`/${tag}`} underline="none">
          <Chip size="sm" color="primary" className="mr-2">
            <span className="font-normal">{tag}</span>
          </Chip>
        </Link>
      ))}
    </Box>
  );
};

export default QuestionTags;
