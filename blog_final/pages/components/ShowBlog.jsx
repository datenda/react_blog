import { useState, useEffect } from "react";

const ShowBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from your API or wherever it's hosted
    fetch("/api/get_blog") // Update the URL accordingly
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto mt-8 text-black">
      <h1 className="text-3xl font-bold mb-4 text-black">Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog border p-4 mb-4">
          {blog.title && (
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          )}
          {blog.author && (
            <p className="text-gray-600 mb-2">Author: {blog.author}</p>
          )}
          {blog.content &&
            blog.content.map((section) => (
              <div key={section._id}>
                <h3 className="text-lg font-bold mb-1">
                  {section.sectionTitle}
                </h3>
                <p>{section.sectionText}</p>
              </div>
            ))}
          {/* Display the image if available */}
          {blog.file && (
            <div className="mt-4">
              <img
                src={blog.file} // Assuming blog.file contains the Base64 string
                alt="Blog Image"
                className="max-w-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowBlog;
