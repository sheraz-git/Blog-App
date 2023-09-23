import React from "react";
import { Box, FormControl } from "@mui/material";
import theme from "../../Components/Theme/theme";
import Input from "../../Components/GlobalMaterial/Input";
import ButtonComp from "../../Components/GlobalMaterial/ButtonComp";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { userLoginAction } from "../../Redux/slices/user/userAction";
import PageLayout from "../PageLayout";


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

const LoginIndex = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(userLoginAction(values));
    },
  });
  const { handleSubmit, handleChange, values, isValid } = formik;
  const { loading, userAuth } = useSelector((state) => state.user);

  if(userAuth?.userInfo?.code){
    window.location.href="/dashboard"
  }
  return (
    <React.Fragment>
      <PageLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  background: theme.palette.Blog.black,
                  color: theme.palette.Blog.main,
                  padding: "70px",
                  marginTop: "50px",
                  gap: "20px",
                  borderRadius: "10px",
                }}
              >
                Login
                {userAuth?.error?.message && (
                  <h2>{userAuth?.error?.message}</h2>
                )}
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {loading ? (
                  <ButtonComp
                    type="submit"
                    label="Loading......"
                    disabled={!isValid}
                  />
                ) : (
                  <ButtonComp type="submit" label="Login" disabled={!isValid} />
                )}
                <Link to="/signup">
                  {" "}
                  <ButtonComp
                    type={"submit"}
                    label={"Create An Account"}
                  />{" "}
                </Link>
                <ButtonComp
                  type={"submit"}
                  label={"Signup with Google"}
                  icon={<GoogleIcon />}
                />
                <ButtonComp
                  type={"submit"}
                  label={"SignUp with Apple"}
                  icon={<AppleIcon />}
                />
              </Box>
            </FormControl>
          </form>
        </Box>
      </PageLayout>
    </React.Fragment>
  );
};
export default LoginIndex;
