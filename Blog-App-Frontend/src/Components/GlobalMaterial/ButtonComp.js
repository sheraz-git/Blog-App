import React from "react";
import { Button } from "@mui/material";
import theme from "../Theme/theme";
const ButtonComp = (props) => {
  return (
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
        gap: props.gap || "20px",
        "&:hover": {
          background: theme.palette.Blog.main,
          color: theme.palette.Blog.white,
          border: "1px solid 90FF00",
        },
      }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
      {props.icon}
    </Button>
  );
};

export default ButtonComp;