import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useQueryClient } from "@tanstack/react-query";

import { RootState } from "../store/store";
import { getAmountOfData } from "../api/homePageFunctions";
import { RangeTags, setRange } from "../store/rangeTagsSlice";

const RangeResultsDisaplay = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const rangeTags = useSelector<RootState, RangeTags>(
    (state) => state.rangeTags
  );
  const amountOfTags = useSelector<RootState, string>(
    (state) => state.amountOfTags.amount
  );

  const amountOfData = getAmountOfData();

  const changeOrderItems = (action: string) => {
    dispatch(
      setRange({ receiveAmount: parseInt(amountOfTags), action: action })
    );
    queryClient.refetchQueries({ queryKey: ["tags"] });
  };

  return (
    <Box className="text-right">
      {rangeTags.from} - {rangeTags.to} from {amountOfData}
      <IconButton
        disabled={rangeTags.from <= 1}
        aria-label="Previous page"
        onClick={() => changeOrderItems("decrese")}
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
      <IconButton
        disabled={rangeTags.to >= amountOfData}
        aria-label="Next page"
        onClick={() => changeOrderItems("incresce")}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default RangeResultsDisaplay;
