import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/user/userSlice";
import blogReducer from "./slices/blogs/blogSlice";
const store = configureStore({
  reducer: {
    user:userReducer,
    blog:blogReducer
  }
});
export default store;