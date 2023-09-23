const express=require("express");
const User=require("../controller/user.controller");
const {authenticate}=require("../middleware/Authentication");
const router = express.Router();
 /// User///
//router.post("/uploadImage",userRoutes.uploadImage);
router.post("/userSignup",User.userSignupCtrl);
router.post("/userLogin",User.userLoginCtrl);
router.get("/userProfile/:id",authenticate,User.getProfileByIdCtrl);
router.get("/getAllUser",User.getAllUsers);
router.put("/UserUpdate/:id",User.updateUserInfo);
router.delete("/deleteUser/:id",User.deleteUser);

module.exports = router;