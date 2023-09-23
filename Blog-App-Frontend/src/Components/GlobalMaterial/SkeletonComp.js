import React from "react";
import { Skeleton } from "@mui/material";
const SkeletonComp = ({ variant, width, height, animation }) => {
  return (
    <React.Fragment>
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
      />
    </React.Fragment>
  );
};

export default SkeletonComp;
