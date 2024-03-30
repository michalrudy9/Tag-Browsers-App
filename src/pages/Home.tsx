import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/joy";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import { fetchTags } from "../api/homePageFunctions";
import SelectAmountOfElements from "../components/SelectAmountOfElements";
import ListTags from "../components/ListTags";
import SortTags from "../components/SortTags";
import RangeResultsDisaplay from "../components/RangeResultsDisplay";
import { RootState } from "../store/store";

const HomePage = () => {
  const amountOfTags = useSelector<RootState, string>(
    (state) => state.amountOfTags.amount
  );
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
        {isPending && <p>Loading...</p>}
        {isRefetching && <p>Applying selected changes...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {!isPending && !isError && !isRefetching && (
          <Box>
            <ListTags tags={data} />
            {amountOfTags !== "all" && <RangeResultsDisaplay />}
          </Box>
        )}
      </main>
    </>
  );
};

export default HomePage;
