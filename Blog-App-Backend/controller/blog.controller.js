const Blog = require("../model/Blogs/blog.model");
const { success, error } = require("../helper/response");

exports.postBlogImgCtrl=(req,res)=>{
  console.log("---",req.file);
try{

}
catch(error){
   error(err.message, "INTERNAL_SERVER_ERROR", res);
}}




exports.postBlog = async (req, res) => {
  try {
    const { images, topic, description,User } = req.body;
    const existingBlog = await Blog.findOne({ topic: topic });
    if (existingBlog) {
      return error("Blog Topic Already Exist", "CONFLICT", res);
    }
    const newBlog = await Blog.create({images,User,topic,description});
    await newBlog.save();
    success("BLog Created Successfully", { newBlog }, "CREATED", res);
  } catch (err) {
    error(err.message, "INTERNAL_SERVER_ERROR", res);
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    blog
      ? success("Blog", { data: blog }, "OK", res)
      : error("BlogNotFound", "NOT_FOUND", res);
  } catch (err) {
    error(err.message, "INTERNAL_SERVER_ERROR", res);
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const skip = (page - 1) * limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalCounts = await Blog.count();
    const Pagination = {};
if(!page || !limit){
  return error("notFund","NOT_FOUND", res);  
}
    if (endIndex < totalCounts) {
      Pagination.next = {
        page: page + 1,
        limit,
      };
    }
    if (startIndex > 0) {
      Pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    const blogs = await Blog.find({}).skip(skip).limit(limit);
    success("Blogs", { data:totalCounts,Pagination,blogs}, "OK", res);
  } catch (err) {
    error(err.message, "INTERNAL_SERVER_ERROR", res);
  }
};

// exports.getAllBlogs = async (req, res) => {
//   try {
//     success("Blogs", {data: res.results}, "OK", res);
//   } catch (err) {
//     error(err.message, "INTERNAL_SERVER_ERROR", res);
//   }
// };
exports.updateBlogInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) {
      blog.set(req.body);
      const updatedBlog = await blog.save();
      success("Blog", { data: updatedBlog }, "OK", res);
    } else {
      error("BlogNotFound", "NOT_FOUND", res);
    }
  } catch (err) {
    error(err.message, "INTERNAL_SERVER_ERROR", res);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) {
      await Blog.findByIdAndDelete(blog);
      success("Blog-deleted", "OK", res);
    } else {
      error("BlogNotFound", "NOT_FOUND", res);
    }
  } catch (err) {
    error(err.message, "INTERNAL_SERVER_ERROR", res);
  }
};
