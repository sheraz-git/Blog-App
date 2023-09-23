const express=require("express");
const Blog=require("../controller/blog.controller");
const router = express.Router();
//const AdvanceResults=require("../middleware/AdvanceResults");
//const blog = require("../model/Blogs/blog.model");
const storage=require("../db/cloudinary");
const multer=require("multer");
const upload=multer({storage:storage })
/// Blog///
router.post("/postBlogImgCtrl",Blog.postBlogImgCtrl);
router.post("/AddPostBlog",Blog.postBlog);
router.get("/getBlog/:id",Blog.getBlogById);
router.get("/getAllBlogs",/*AdvanceResults(blog,"User"),*/Blog.getAllBlogs);
router.put("/updateBlogInfo/:id",Blog.updateBlogInfo);
router.delete("/deleteBlog/:id",Blog.deleteBlog);

module.exports = router;