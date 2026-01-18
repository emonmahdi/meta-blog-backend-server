import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import BlogList from "./BlogList";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("/blogs.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching blog data: " + error));
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-3">
      <Banner />
      <BlogList />
    </div>
  );
};

export default Blog;
