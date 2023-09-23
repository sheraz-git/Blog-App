import { createSlice } from "@reduxjs/toolkit";
import { createBlogAction,getBlogAction,getAllBlogAction} from "./blogAction";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  getBlog:{},
  pagination:{},
  blogAuth: {
    blogInfo: {},
    loading: false,
    error: null,
  },
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createBlogAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlogAction.fulfilled, (state, action) => {
        state.blogAuth.blogInfo = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createBlogAction.rejected, (state, action) => {
        state.blogAuth.error = action.payload;
        state.loading = false;
      })
      .addCase(getBlogAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogAction.fulfilled, (state, action) => {
        state.getBlog = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getBlogAction.rejected, (state, action) => {
        state.getBlog.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllBlogAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBlogAction.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.pagination = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllBlogAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

const blogReducer = blogSlice.reducer;
export default blogReducer;