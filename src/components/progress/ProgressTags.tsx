import { Box, Skeleton } from "@mui/material";

const ProgressTags = () => {
  const amountOfProgress = Array(20)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <Box className="flex flex-wrap gap-3">
      {amountOfProgress.map((index: number) => (
        <Box
          key={index}
          className="w-[11rem] h-[5.5rem] border rounded-lg border-gray-200 p-4"
        >
          <Skeleton variant="rounded" width={85} height={20} />
          <Box className="flex mt-3 gap-x-2">
            <Skeleton variant="rounded" width={85} height={17} />
            <Skeleton variant="rounded" width={85} height={17} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressTags;
