import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchPosts } from "../api/tagDetailPageFunctions";
import ListQuestions from "../components/listQuestions/ListQuestions";
import SideBar from "../components/SideBar";

const TagDetailPage = () => {
  const { tagName } = useParams();

  const { data, isPending, isError, error, isRefetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(tagName),
  });

  return (
    <main className="sm:flex">
      <SideBar />
      <Box className="sm:w-[85%]">
        {isPending && <p>Loading...</p>}
        {isRefetching && <p>Applying selected changes...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {!isPending && !isError && !isRefetching && (
          <ListQuestions questions={data} />
        )}
      </Box>
    </main>
  );
};

export default TagDetailPage;
