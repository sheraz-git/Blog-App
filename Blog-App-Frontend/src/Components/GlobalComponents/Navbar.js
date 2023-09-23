import React from "react";
import { Box, ListItemButton, ListItemText, List } from "@mui/material";
import ButtonComp from "../GlobalMaterial/ButtonComp";
import Blogs from "../GlobalMaterial/Blogs";
import theme from "../Theme/theme";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutAction } from "../../Redux/slices/user/userAction";
const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user?.userAuth);
  const isLogin = userInfo?.token ? true : false;

  const handleLogout = () => {
    dispatch(userLogoutAction());
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        background: theme.palette.Blog.black,
        padding: "17px 70px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", padding: "0 10px" }}>
        <Blogs />
      </Box>
      <Box
        sx={{
          color: theme.palette.Blog.white,
          display: "flex",
          gap: "40px",
        }}
      >
        <List sx={{ display: "flex", gap: "60px" }}>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
          {isLogin && (
            <>

              <ListItemButton component={Link} to="/dashboard">
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton component={Link} to="/profile">
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ButtonComp label={"Logout"} onClick={handleLogout} />
            </>
          )}

          {!isLogin && (
            <>
              <ListItemButton component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItemButton>
              <Link to="/login">
                {" "}
                <ButtonComp label={"Login"} />{" "}
              </Link>
            </>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
