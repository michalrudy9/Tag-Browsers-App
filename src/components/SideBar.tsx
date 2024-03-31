import { Link } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/joy";
import StyleIcon from "@mui/icons-material/Style";

const SideBar = () => {
  return (
    <Box className="sm:w-[15%] sm:flex sm:justify-between">
      <Link to="/" className="flex gap-x-1 my-2">
        <StyleIcon fontSize="small" />
        <Typography className="font-semibold">Tags</Typography>
      </Link>
      <Divider orientation="horizontal" className="sm:hidden" />
      <Divider orientation="vertical" className="hidden sm:block" />
    </Box>
  );
};

export default SideBar;
