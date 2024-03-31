import React from "react";
import { Box, Card, CardContent, Link, List, ListItem } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

import { QuestionData } from "../../model/QuestionData";
import PostStatistics from "./QuestionStatistics";
import QuestionTags from "./QuestionTags";
import QuestionAuthor from "./QuestionAuthor";

const ListQuestions: React.FC<{ questions: QuestionData[] }> = ({
  questions,
}) => {
  return (
    <List>
      {questions.map((question: QuestionData) => (
        <ListItem key={question.question_id}>
          <Card className="!flex !flex-row !items-center w-full">
            <PostStatistics
              score={question.score}
              answersCount={question.answers_count}
              viewCount={question.view_count}
            />
            <CardContent>
              <Link component={RouterLink} to={question.link} underline="none">
                {question.title}
              </Link>
              <Box className="flex">
                <QuestionTags tags={question.tags} />
                <QuestionAuthor owner={question.owner} />
              </Box>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default ListQuestions;
