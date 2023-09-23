import React from "react";
import LandingPage from "../../Components/Home/LandingPage/LandingPage";
import TopBlogs from "../../Components/Home/TopBlogs/TopBlogs";
import Blogs from "../../Components/Home/Blogs/Blogs";
import Footer from "../../Components/GlobalComponents/Footer"
import PageLayout from "../PageLayout";


const HomePage = () => {
  return (
    <React.Fragment>
      <PageLayout>
        <LandingPage />
        <TopBlogs />
        <Blogs />
        {/* <PaginationComp /> */}
        <Footer/>
      </PageLayout>
    </React.Fragment>
  );
};

export default HomePage;
