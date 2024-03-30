import { Box } from "@mui/joy";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

import { SortTagModel, setSortType } from "../store/sortTagsSlice";
import { setSubmitter } from "../store/firstSubmitterSlice";
import { setAmount } from "../store/amountOfTagsSlice";

const SortTags = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const changeHandler = (event: SelectChangeEvent) => {
    const amount = event.target.value;
    const sortTagObject = prepareTagObject(amount);

    dispatch(setSubmitter("sort"));
    dispatch(setAmount("all"));
    dispatch(setSortType(sortTagObject));
    queryClient.refetchQueries({ queryKey: ["tags"] });
  };

  return (
    <Box className="flex gap-x-4 items-center w-fit">
      Sort
      <Select
        defaultValue={"popular-descending"}
        onChange={changeHandler}
        className="w-[14rem]"
      >
        <MenuItem value="tag-descending">Tag name - descending</MenuItem>
        <MenuItem value="tag-ascending">Tag name - ascending</MenuItem>
        <MenuItem value="popular-descending">Popular - descending</MenuItem>
        <MenuItem value="popular-ascending">Popular - ascending</MenuItem>
      </Select>
    </Box>
  );
};

const prepareTagObject = (data: string): SortTagModel => {
  const formatedParams = data.split("-");
  return {
    name: formatedParams[0],
    direction: formatedParams[1],
  } as SortTagModel;
};

export default SortTags;
