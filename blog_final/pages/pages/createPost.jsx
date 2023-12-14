// Import necessary dependencies
import axios from "axios";
import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState(""); // Track the current tag being entered

  // Add a new tag to the list
  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag(""); // Clear the current tag input
    }
  };

  // Remove a tag from the list
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      console.error("Title and content are required.");
      return;
    }

    try {
      // Send a POST request to the server
      const response = await axios.post(`/api/set_forum`, {
        user: localStorage.getItem("username"),
        title,
        tags,
        content,
      });

      console.log("Blog post created:", response);

      // Optional: Clear the form after successful submission
      setTitle("");
      setContent("");
      setTags([]);
      setCurrentTag("");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  // Return the JSX for the component
  return (
    <div className="flex items-start justify-center h-screen text-black bg-gray-300 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-1/2 mt-4"
      >
        <h2 className="text-2xl font-bold mb-4">Create a New Topic</h2>

        {/* Title input */}
        <label className="block text-sm font-semibold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          className="border p-2 rounded-md w-full mb-4"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content textarea */}
        <label className="block text-sm font-semibold mb-2">Content:</label>
        <textarea
          name="content"
          className="border p-2 rounded-md w-full h-40 mb-4"
          placeholder="Enter content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Tags input and display */}
        <label className="block text-sm font-semibold mb-2">Tags:</label>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            name="tags"
            className="border p-2 rounded-md w-full"
            placeholder="Add tags..."
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
          />
          <button
            type="button"
            onClick={addTag}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Tag
          </button>
        </div>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-2 text-red-500"
              >
                x
              </button>
            </span>
          ))}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full mt-4 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
