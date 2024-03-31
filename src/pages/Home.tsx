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
import ProgressTags from "../components/progress/ProgressTags";
import ErrorAlert from "../components/ErrorAlert";

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
        <Box>
          {isPending && <ProgressTags />}
          {isRefetching && <ProgressTags />}
          {isError && (
            <ErrorAlert message={error.message} position="absolute" />
          )}
          {!isPending && !isError && !isRefetching && (
            <>
              <ListTags tags={data} />
              {amountOfTags !== "all" && <RangeResultsDisaplay />}
            </>
          )}
        </Box>
      </main>
    </>
  );
};

export default HomePage;
