import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../Redux/slices/user/userAction";
import PageLayout from "../PageLayout";
import { Box, FormControl, Typography } from "@mui/material";
import theme from "../../Components/Theme/theme";
import Input from "../../Components/GlobalMaterial/Input";
import ButtonComp from "../../Components/GlobalMaterial/ButtonComp";

const ProfileIndex = () => {
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
            padding: "50px",
          }}
        >
          <Box sx={{ background: theme.palette.Blog.black }}>
            <Box
              sx={{
                maxWidth: "350px",
                objectFit: "cover",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <img
                src={profile?.data?.image}
                alt="blog"
                width="350px"
                height="auto"
              />
        
            </Box>
            <Box sx={{ color: theme.palette.Blog.main }}>
              <Typography variant="h4">{profile?.data?.firstName} </Typography>
              <Typography variant="h4">{profile?.data?.lastName} </Typography>
              <Typography variant="h4">{profile?.data?.email} </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: theme.palette.Blog.black,
              color: theme.palette.Blog.main,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding:"20px 100px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form>
                <FormControl>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      background: theme.palette.Blog.black,
                      color: theme.palette.Blog.main,
                      padding: "50px",
                      marginTop: "20px",
                      gap: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    Update Profile
                    <Input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      id="firstName"
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      id="lastName"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                    {loading ? (
                      <ButtonComp type="submit" label="Loading......" />
                    ) : (
                      <ButtonComp type="submit" label="Update" />
                    )}
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </PageLayout>
    </React.Fragment>
  );
};
export default ProfileIndex;
