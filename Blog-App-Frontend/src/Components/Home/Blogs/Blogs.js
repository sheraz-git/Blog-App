import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../GlobalMaterial/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogAction } from "../../../Redux/slices/blogs/blogAction";
import PaginationComp from "../Pagination/PaginationComp";
import SkeletonComp from "../../GlobalMaterial/SkeletonComp";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const [showCards, setShowCards] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 3000);
    dispatch(getAllBlogAction({ page, limit }));
    return () => clearTimeout(timeout);
  }, [dispatch, page, limit]);

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const { blogs, error, loading } = useSelector((state) => state.blog);

  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "0px 160px",
          display: "flex",
          gap: "70px",
          flexWrap: "wrap",
        }}
      >
        {error ? (
          <Typography variant="h1">
            An error occurred. Please try again later.
          </Typography>
        ) : loading || !showCards ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonComp
              key={index}
              variant="rectangular"
              width={340}
              height={300}
              animation="wave"
            />
          ))
        ) : (
          blogs?.blogs?.map((values, index) => {
            return <Card key={index} values={values} />;
          })
        )}
      </Box>
      <PaginationComp
        pagination={blogs?.Pagination?.next}
        data={blogs?.data}
        onPageChange={handlePage}
      />
    </React.Fragment>
  );
};

export default Blogs;
