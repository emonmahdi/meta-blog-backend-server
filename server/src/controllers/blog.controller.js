const Blog = require("../models/blog.model");

const blogPostApi = async (req, res) => {
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
};

// get all blog
const getAllBlogFromDB = async (req, res) => {
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
};

const getSinleBlogById = async (req, res) => {
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
};

// delete api
const deleteFromDB = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Blog not deleted!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Error! Blog Not Deleted",
      error: err.message,
    });
  }
};

// update api
const updateBlogFromDB = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndUpdate(id, req.body, { new: true });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Blog not Updated!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog Updated Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Error! Blog Not Updated",
      error: err.message,
    });
  }
};

module.exports = {
  blogPostApi,
  getAllBlogFromDB,
  getSinleBlogById,
  deleteFromDB,
  updateBlogFromDB,
};
