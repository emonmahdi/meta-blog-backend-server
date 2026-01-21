const express = require("express");
const Blog = require("../models/blog.model");
const {
  blogPostApi,
  getAllBlogFromDB,
  getSinleBlogById,
  deleteFromDB,
  updateBlogFromDB,
} = require("../controllers/blog.controller");

const router = express.Router();

// Post API
router.post("/add-blog", blogPostApi);

// Get all Blogs APIs
router.get("/", getAllBlogFromDB);

// Get Single Blog APIs
router.get("/:id", getSinleBlogById);

// Delete Single Blog APIs
router.delete("/:id", deleteFromDB);

// Update API
router.put("/:id", updateBlogFromDB);

module.exports = router;
