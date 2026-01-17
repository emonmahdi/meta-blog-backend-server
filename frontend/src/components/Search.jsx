import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-[#F4F4F5] px-4 py-2 pl-3 focus:outline-none rounded-full"
        placeholder="Search"
      />
      <button>
        <FaSearch className="absolute right-3 top-2.5 hover:text-secondary cursor-pointer" />
      </button>
    </div>
  );
};

export default Search;
