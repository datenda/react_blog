"use client";

import React, { useState } from "react";

const CreateBlog = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container mx-auto my-8 text-black">
      <input
        type="text"
        className="border p-2 rounded-md"
        placeholder="Enter text..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className="mt-2 text-white">You entered: {inputValue}</p>
    </div>
  );
};

export default CreateBlog;
