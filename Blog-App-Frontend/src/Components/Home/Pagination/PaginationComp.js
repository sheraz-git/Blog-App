import { Box } from "@mui/material";
import React from "react";
import { Pagination } from "@mui/material";

const PaginationComp = ({ pagination, data, onPageChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        marginTop: "40px"
      }}
    >
      <Pagination
        count={Math.ceil(data / pagination?.limit)}
        variant="outlined"
        shape="rounded"
        page={pagination?.page}
        onChange={(event, page) => onPageChange(page)}
      />
    </Box>
  );
};

export default PaginationComp;