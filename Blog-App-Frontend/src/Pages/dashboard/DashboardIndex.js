import React, { useEffect } from "react";
import PageLayout from "../PageLayout";
import { Box, Typography } from "@mui/material";
import theme from "../../Components/Theme/theme";
import Input from "../../Components/GlobalMaterial/Input";
import Card from "../../Components/GlobalMaterial/Card";
import { profileData } from "../../data";
import ButtonComp from "../../Components/GlobalMaterial/ButtonComp";
import DashHeader from "../../Components/GlobalMaterial/DashHeader";
import { DashboardHeader } from "../../Components/GlobalComponents/DashboardHeader";
import { DashIcons } from "../../Components/GlobalMaterial/DashIcons";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../Redux/slices/user/userAction";
import SkeletonComp from "../../Components/GlobalMaterial/SkeletonComp";
const DashboardIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  const { loading, error, profile } = useSelector((state) => state?.user);

  return (
    <React.Fragment>
      <PageLayout>
        <Box
          sx={{
            background: theme.palette.Blog.black,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ background: theme.palette.Blog.black, flex: "1" }}>
            <Box
              sx={{
                padding: "5px 10px",
                color: theme.palette.Blog.white,
                background: theme.palette.Blog.black,
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Box sx={{ padding: "0 55px", marginTop: "20px" }}>
                <Input type={"text"} placeholder={"Search Something"} />
              </Box>
              <Box>
                {loading ? (
                  <SkeletonComp
                    variant="rectangular"
                    width={340}
                    height={300}
                    animation="wave"
                  />
                ) : (
                  <Card profileCard={true} values={profile?.data} />
                )}
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography variant="h6">People You may Know</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6">sheraz</Typography>
                  <ButtonComp type={"button"} label={"Follow"} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: theme.palette.Blog.black, flex: "2" }}>
            <DashHeader values={DashboardHeader} />
            <Box sx={{ border: "1px solid black", padding: "40px" }}>ds</Box>
          </Box>

          <Box sx={{ background: theme.palette.Blog.black, flex: "1" }}>
            <DashIcons />
          </Box>
        </Box>
      </PageLayout>
    </React.Fragment>
  );
};
export default DashboardIndex;
