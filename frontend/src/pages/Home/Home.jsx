import React from "react";
import Banner from "./Banner";
import BlogList from "../Blog/BlogList";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-3">
      <Banner />
      <BlogList />
      <NewsLetter />
    </div>
  );
};

export default Home;
