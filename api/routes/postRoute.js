const router = require("express").Router();
// const { findById, updateOne } = require("../models/Post");
const Post = require("../models/Post");
const User = require("../models/User");
const postController = require("../controllers/postController");

//create Post

router.post("/", postController.createPost);

//update post

router.put("/:id", postController.updatePost);

//delete post
router.delete("/:id", postController.deletePost);

//like/unlike  post
router.put("/:id", postController.likePost);

//get a post

router.get("/:id", postController.getPost);

//get timeline posts

router.get("/timeline/:userId", postController.getTimelinePost);

router.get("/get_user_all_post/:username", postController.getUserAllPost);
module.exports = router;
