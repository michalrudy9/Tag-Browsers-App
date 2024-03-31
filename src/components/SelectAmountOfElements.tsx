import { Box } from "@mui/joy";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { setAmount } from "../store/amountOfTagsSlice";
import { setSubmitter } from "../store/firstSubmitterSlice";
import { RootState } from "../store/store";
import { setToField } from "../store/rangeTagsSlice";

const SelectAmountOfElements = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const amountOfTags = useSelector<RootState, string>(
    (state) => state.amountOfTags.amount
  );

  const changeHandler = (event: SelectChangeEvent) => {
    const amount = event.target.value;

    dispatch(setSubmitter("amount"));
    dispatch(setAmount(amount));
    dispatch(setToField(parseInt(amount)));

    queryClient.refetchQueries({ queryKey: ["tags"] });
  };

  return (
    <Box className="flex gap-x-4 items-center w-fit">
      Amount of elements
      <Select
        defaultValue={"all"}
        value={amountOfTags}
        onChange={changeHandler}
        size="small"
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="30">30</MenuItem>
        <MenuItem value="40">40</MenuItem>
        <MenuItem value="50">50</MenuItem>
        <MenuItem value="all">All</MenuItem>
      </Select>
    </Box>
  );
};

export default SelectAmountOfElements;
