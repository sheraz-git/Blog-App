const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cloudinary = require('cloudinary').v2;
const fileUpload = require("express-fileupload");
const Port = process.env.PORT;
const connectToMongo=require("./db/connectDb");
const GlobalErrorHandler=require("./middleware/GlobalErrorHandler");
const userRoutes=require("./routes/user.routes");
const blogRoutes=require("./routes/blog.routes");
//console.clear();
connectToMongo();
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "ChatApp-Worked-Successfully",
  });
});

app.listen(Port, () => {
    console.log(`ChatApp-Backend-Working ${Port}`);
});

app.use(GlobalErrorHandler)

app.use("/api",userRoutes,blogRoutes, (req, res,next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});


