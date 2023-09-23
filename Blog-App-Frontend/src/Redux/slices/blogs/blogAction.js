import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../baseURL";

export const createBlogAction = createAsyncThunk(
  "/addBlogs",
  async (values, { rejectWithValue,getState }) => {
    try {
      const { topic, description } = values;
      const userId=getState().user?.userAuth?.userInfo?.data?._id;
      const token=getState().user?.userAuth?.userInfo?.token;
      const config={
        headers:{
          authorization:   `Bearer ${token}`
          }        
      }
      const response = await axios.post(`${baseURL}/AddPostBlog`, {
        topic,
        description,
        userId
      },config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const getBlogAction = createAsyncThunk("/BlogData",
  async (payload,{ rejectWithValue,getState }) => {
    try {
      const token=getState().user?.userAuth?.userInfo?.token;
      const userId=getState().user?.userAuth?.userInfo?.data?._id;
      const config={
        headers:{
          authorization:   `Bearer ${token}`
          }        
      }
      const {data} = await axios.get(`${baseURL}/getBlog/${userId}`,config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });


  export const getAllBlogAction = createAsyncThunk(
    "blogs/getAllBlogData",
    async ({ page, limit }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseURL}/getAllBlogs?page=${page}&limit=${limit}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );