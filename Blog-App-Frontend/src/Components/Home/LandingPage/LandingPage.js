import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../Theme/theme";

const LandingPage = () => {
  return (
    <Box
      sx={{
        background: theme.palette.Blog.black,
        color: theme.palette.Blog.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">Hi, This is </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
          color: theme.palette.Blog.main,
        }}
      >
        <Typography variant="h1">Blog</Typography>
        <Typography variant="h1">Website</Typography>
      </Box>
      <Typography variant="h5" sx={{ padding: "10px 0" }}>
        Nice to meet you. We would like to welcome you with this Website.
      </Typography>
    </Box>
  );
};

export default LandingPage;
