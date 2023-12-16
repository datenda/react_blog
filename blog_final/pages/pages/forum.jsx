// Forum.js

import React, { useEffect, useState } from "react";
import ShowBlog from "../components/ShowForum";
import Link from "next/link";

const Forum = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/get_forum")
      .then((response) => response.json())
      .then((data) => {
        setAllBlogs(data);
        setFilteredBlogs(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = allBlogs.filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredBlogs(filtered);
  };

  return (
    <div className="bg-gray-100 h-full w-full p-4 text-black overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div className="text-3xl font-semibold">Forum</div>
        <Link href="/pages/createPost">
          <div className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Create Post
          </div>
        </Link>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="mb-4">
            <ShowBlog props={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
