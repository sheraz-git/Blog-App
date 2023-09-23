import React from "react";

const Image = ({ src }) => {
  return (
    <React.Fragment>
      <img src={src} alt="Avatar" width="100px" style={{
        borderRadius: "50%",
        backgroundSize: "cover",
      }} />
    </React.Fragment>
  );
};

export default Image;