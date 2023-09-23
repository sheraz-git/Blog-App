import React from "react";
import Navbar from "../Components/GlobalComponents/Navbar";
const PageLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
