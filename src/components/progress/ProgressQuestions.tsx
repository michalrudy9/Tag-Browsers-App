import { Box, Skeleton } from "@mui/material";

const ProgressQuestions = () => {
  const amountOfProgress = Array(10)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <>
      {amountOfProgress.map((index: number) => (
        <Box
          key={index}
          className="border rounded-lg border-gray-200 m-2 p-2 flex flex-row gap-2 items-center w-full"
        >
          <Box className="flex flex-col gap-y-1">
            <Skeleton variant="rounded" width={85} height={17} />
            <Skeleton variant="rounded" width={85} height={17} />
            <Skeleton variant="rounded" width={85} height={17} />
          </Box>
          <Box className="">
            <Skeleton variant="rounded" width="100%" />
            <Box className="flex justify-between flex-wrap gap-2 mt-2">
              <Box className="flex flex-wrap items-center gap-2">
                <Skeleton variant="rounded" width={85} height={15} />
                <Skeleton variant="rounded" width={85} height={15} />
                <Skeleton variant="rounded" width={85} height={15} />
                <Skeleton variant="rounded" width={85} height={15} />
              </Box>
              <Box className="flex flex-wrap items-center gap-2">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="rounded" width={85} height={18} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProgressQuestions;
