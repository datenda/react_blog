// Forum.js

import React, { useEffect, useState } from "react";
import ShowBlog from "../components/ShowForum";

const Forum = () => {
  const [allBlogs, setAllBlogs] = useState([]); // Store all blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Store filtered blogs
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch all blogs initially
    fetch("/api/get_forum")
      .then((response) => response.json())
      .then((data) => {
        setAllBlogs(data);
        setFilteredBlogs(data); // Initialize filtered blogs with all blogs
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blogs based on the search query
    const filtered = allBlogs.filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredBlogs(filtered);
  };

  return (
    <div className="bg-gray-100 h-screen w-full p-4 text-black">
      <h1 className="text-3xl font-semibold mb-4">Forum</h1>

      {/* Search bar */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="mb-4 mx-20">
            <ShowBlog props={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
