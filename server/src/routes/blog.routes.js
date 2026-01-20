const express = require("express");
const Blog = require("../models/blog.model");

const router = express.Router();

// Post API
router.post("/add-blog", async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new Blog(blog);
    const result = await newBlog.save();

    res.status(200).json({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Error! Post Not Created",
      error: err.message,
    });
  }
});

// Get all Blogs APIs
router.get("/", async (req, res) => {
  try {
    const result = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Post Fetched Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Error! Post Not Fetched",
      error: err.message,
    });
  }
});
// Get Single Blog APIs
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findById(id);

    if (!result) {
      res.status(500).json({
        success: false,
        message: "Blog not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog Fetched Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Error! Blog Not Fetched",
      error: err.message,
    });
  }
});

module.exports = router;
