// ForumPostComponent.js

import React from "react";

const ForumPostComponent = ({ props }) => {
  console.log(props);
  return (
    <div className="bg-white rounded-lg p-4 shadow-md m-2 ">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-black">{props.title}</h3>
        <div className="text-gray-600 mb-4">tags</div>
        <p className="text-sm text-gray-500">Created on: {props.date}</p>
      </div>
    </div>
  );
};

export default ForumPostComponent;
