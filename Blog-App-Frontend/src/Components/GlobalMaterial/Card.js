import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../Theme/theme";
const Card = ({ values, profileCard }) => {
  return (
    <React.Fragment>
      {profileCard ? (
        <Box
          sx={{
            width: "350px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background: theme.palette.Blog.black,
            color: theme.palette.Blog.main,
          }}
        >
          <Box
            sx={{
              maxWidth: "350px",
              objectFit: "cover",
              borderRadius: "10px",
              position: "relative",
            display:"flex",
                justifyContent:"center",
            }}
          >
            <img src={values?.backImage} alt="blog" width="350px" height="200px" />
            <img
              src={values?.image || "/Blog/Blogging.jpg"}
              alt="user"
              width="150px"
              style={{
                borderRadius: "50%",
                backgroundSize: "cover",
                position: "absolute",
                bottom: "-25%",
              }}
            />
          </Box>

          <Box sx={{padding:"50px 10px"}}>
            <Typography>{values?.firstName}</Typography>
            <Typography>{values?.lastName}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding:"10px"
            }}
          >
            <Typography>{values?.followers}</Typography>
            <Typography>{values?.following}</Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "350px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background: theme.palette.Blog.black,
            color: theme.palette.Blog.main,
          }}
        >
          <Box
            sx={{
              maxWidth: "350px",
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <img src={values.images} alt="blog" width="350px" height="auto" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <Typography>{values.topic}</Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Typography>{values.description}</Typography>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Card;
