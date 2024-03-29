import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/joy";

import Header from "../components/Header";
import { fetchTags } from "../api/homePageLoader";
import SelectAmountOfElements from "../components/SelectAmountOfElements";
import ListTags from "../components/ListTags";
import SortTags from "../components/SortTags";


const HomePage = () => {
  const { data, isPending, isError, error, isRefetching } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  
  return (
    <>
      <Header />
      <main>
        <Box className="flex gap-x-4 mb-6">
          <SortTags />
          <SelectAmountOfElements />
        </Box>
        {isPending || isRefetching && <p>Loading...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {!isPending && !isError && !isRefetching && <ListTags tags={data} />}
      </main>
    </>
  );
};

export default HomePage;
