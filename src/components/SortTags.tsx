import { Box, Select, Option } from "@mui/joy";

const SortTags = () => {
  return (
    <Box className="flex gap-x-4 items-center w-fit">
      Sort
      <Select defaultValue={"popular-descending"} className="w-[14rem]">
        <Option value="tag-name-descending">Tag name - descending</Option>
        <Option value="tag-name-ascending">Tag name - ascending</Option>
        <Option value="popular-descending">Popular - descending</Option>
        <Option value="popular-ascending">Popular - ascending</Option>
      </Select>
    </Box>
  );
};

export default SortTags;
