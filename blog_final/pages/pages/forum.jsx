// Forum.js

import React, { useEffect, useState } from "react";
import ShowBlog from "../components/ShowForum";

const Forum = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/get_forum")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto mt-8 bg-gray-100 h-screen">
      <h1 className="text-3xl font-semibold mb-4">Forum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-4 mx-20">
            <ShowBlog props={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
