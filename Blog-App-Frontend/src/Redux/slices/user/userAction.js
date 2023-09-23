import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../baseURL";

export const userSignupAction = createAsyncThunk("userSignup",
  async (values, { rejectWithValue }) => {
    try {
      const { firstName, lastName, email, password } = values;
      const response = await axios.post(`${baseURL}/userSignup`,
        { firstName, lastName, email, password }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

export const userLoginAction = createAsyncThunk("/userLogin",
  async (values, { rejectWithValue }) => {
    try {
      const { email, password } = values;
      const response = await axios.post(`${baseURL}/userLogin`,
        { email, password },
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

export const userLogoutAction = createAsyncThunk("/logOut", async () => {
  localStorage.removeItem("userInfo");
  return null;
});

export const getUserProfileAction = createAsyncThunk("/userProfile",
  async (payload,{ rejectWithValue,getState }) => {
    try {
      const token=getState().user?.userAuth?.userInfo?.token;
      const userId=getState().user?.userAuth?.userInfo?.data?._id;
      const config={
        headers:{
          authorization:   `Bearer ${token}`
          }        
      }
      const {data} = await axios.get(`${baseURL}/userProfile/${userId}`,config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });



