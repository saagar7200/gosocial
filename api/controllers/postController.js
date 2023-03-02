const Post = require("../models/Post");
const User = require("../models/User");

//create post

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json({ savedPost });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//update post by id

exports.updatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    if (post.userId !== req.body.userId) {
      return res.status(401).json({ message: "you can not update this post." });
    }

    post = await post.updateOne({ $set: req.body });

    res.status(200).json({ message: "Post has been updated", post });
  } catch (err) {
    res.status(500).json("something went wrong.");
  }
};

//delete one post

exports.deletePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    if (post.userId !== req.body.userId) {
      return res.status(401).json({ message: "you can not delete this post." });
    }

    post = await post.deleteOne({ $set: req.body });

    res.status(200).json({ message: "Post has been deleted", post });
  } catch (err) {
    res.status(500).json("something went wrong.");
  }
};

// like/unlike post

exports.likePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    if (!post.likes.includes(req.body.userId)) {
      post = await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ message: "Post has been liked", post });
    } else {
      post = await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({ message: "Post has been disliked", post });
    }
  } catch (err) {
    res.status(500).json({ message: "something went wrong." });
  }
};

//get a post
exports.getPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json({ post, likes: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get timeline post

exports.getTimelinePost = async (req, res) => {
  try {
    let currUser = await User.findById(req.params.userId);

    if (!currUser) {
      return res.status(404).json({ message: "user not found." });
    }
    const userPost = await Post.find({ userId: currUser._id });
    const friendPost = await Promise.all(
      currUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res.status(200).json(userPost.concat(...friendPost));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get user's all post

exports.getUserAllPost = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ message: "user not found." });
    }
    const post = await Post.find({ userId: user._id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
