import React from "react";
import { Box, Typography, Button } from "@mui/material";
import theme from "../Theme/theme";
const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ background: theme.palette.Blog.black, marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "30px 0",
          }}
        >
          <Typography variant="h5" sx={{ color: theme.palette.Blog.main }}>
            Collaboration
          </Typography>
          <Typography variant="h1" sx={{ color: theme.palette.Blog.white }}>
            Lets talk about Collaboration
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            id="demo-customized-button"
            aria-haspopup="true"
            variant="text"
            disableElevation
            sx={{
              background: theme.palette.Blog.main,
              color: theme.palette.Blog.black,
              border: "1px solid 90FF00",
              padding: "10px 20px",
            }}
          >
            See Blogs
          </Button>
          <Button
            id="demo-customized-button1"
            aria-haspopup="true"
            variant="text"
            disableElevation
            sx={{
              background: theme.palette.Blog.black,
              color: theme.palette.Blog.white,
              border: "1px solid white",
              padding: "10px 20px",
            }}
          >
            Get In Touch
          </Button>
        </Box>
        <hr style={{ marginTop: "40px" }} />

        <Box sx={{ color: theme.palette.Blog.white, padding: "20px 30px" }}>
          <Typography variant="h5">
            Working in blogs have given us a strong sense of the extraordinary
            in our digital blogs.
          </Typography>
          <Typography variant="h6">
            Abdul Graphics. All rights reserved 2023.
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Footer;
