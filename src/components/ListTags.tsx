import React from "react";

import { FetchedTagData } from "../model/FetchedTagData";
import { List, Link, ListItem, Card, Chip, CardContent } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

const ListTags: React.FC<{ tags: FetchedTagData[] }> = ({ tags }) => {
  return (
    <List orientation="horizontal" wrap={true}>
      {tags.map((tag: FetchedTagData) => (
        <ListItem key={tag.name} className="!p-1">
          <Card className="!w-[11rem]">
            <Link component={RouterLink} to={`/${tag.name}`} underline="none">
              <Chip>{tag.name}</Chip>
            </Link>
            <CardContent sx={{ color: "gray", fontSize: "0.9rem" }}>
              {tag.count} questions
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default ListTags;
