"use client";

import axios from "axios";
import React, { useState } from "react";

const CreateBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionText, setSectionText] = useState("");
  const [content, setContent] = useState([]);
  const [files, setFiles] = useState(null);

  const handleSectionAdd = () => {
    if (sectionTitle && sectionText) {
      setContent([...content, { sectionTitle, sectionText }]);
      setSectionTitle("");
      setSectionText("");
    }
  };

  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there is at least one section
    if (content.length === 0) {
      console.error("At least one section is required.");
      return;
    }

    try {
      // Convert the file to Base64
      const fileBase64 =
        files && files.length > 0 ? await convertFileToBase64(files[0]) : null;

      const response = await axios.post(`/api/set_blog`, {
        author,
        title,
        content,
        file: fileBase64,
      });

      console.log("Blog post created:", response);

      // Optional: Clear the form after successful submission
      setAuthor("");
      setTitle("");
      setContent([]);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="container mx-auto my-8 text-black">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Author:</label>
          <input
            type="text"
            name="author"
            className="border p-2 rounded-md w-full"
            placeholder="Enter author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Title:</label>
          <input
            type="text"
            name="title"
            className="border p-2 rounded-md w-full"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Section Title:
          </label>
          <input
            type="text"
            name="sectionTitle"
            className="border p-2 rounded-md w-full"
            placeholder="Enter section title..."
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Section Text:
          </label>
          <textarea
            name="sectionText"
            rows="4"
            className="border p-2 rounded-md w-full"
            placeholder="Enter section text..."
            value={sectionText}
            onChange={(e) => setSectionText(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSectionAdd}
        >
          Add Section
        </button>
        <div className="mt-4 text-white">
          {content.map((section, index) => (
            <div key={index}>
              <p className="font-semibold">{section.sectionTitle}</p>
              <p>{section.sectionText}</p>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Image:</label>
          <input type="file" onChange={(e) => setFiles(e.target.files)} />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
