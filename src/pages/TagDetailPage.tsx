import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchPosts } from "../api/tagDetailPageFunctions";
import ListQuestions from "../components/listQuestions/ListQuestions";
import SideBar from "../components/SideBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

const TagDetailPage = () => {
  const { tagName } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(tagName),
  });

  return (
    <main className="sm:flex">
      <SideBar />
      <Box className="sm:w-[85%] h-screen">
        {isPending && <LoadingSpinner text="Loading..." />}
        {isError && <ErrorAlert message={error.message} />}
        {!isPending && !isError && <ListQuestions questions={data} />}
      </Box>
    </main>
  );
};

export default TagDetailPage;
