import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchPosts } from "../api/tagDetailPageFunctions";
import ListQuestions from "../components/listQuestions/ListQuestions";
import SideBar from "../components/SideBar";
import ErrorAlert from "../components/ErrorAlert";
import ProgressQuestions from "../components/progress/ProgressQuestions";

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
        {isPending && <ProgressQuestions />}
        {isError && <ErrorAlert message={error.message} position="relative" />}
        {!isPending && !isError && data && data.length === 0 && (
          <p className="text-gray-400 font-light !text-center !text-xl absolute left-[50%] sm:left-[57%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            There are not posts in {tagName} tag
          </p>
        )}
        {!isPending && !isError && <ListQuestions questions={data} />}
      </Box>
    </main>
  );
};

export default TagDetailPage;
