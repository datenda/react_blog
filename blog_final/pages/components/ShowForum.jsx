// ForumPostComponent.js

import React from "react";
import Link from "next/link";

const ForumPostComponent = ({ props }) => {
  return (
    <Link href={`/pages/${props._id}`} passHref>
      <div className="text-black">
        <div className="bg-white rounded-lg p-4 shadow-md m-2 h-full">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">{props.title}</h3>

            {Array.isArray(props.tags) && props.tags.length > 0 ? (
              <div className="flex flex-wrap mb-4 overflow-hidden">
                {props.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <p className="text-sm text-gray-500 mt-auto">
              Created on: {props.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForumPostComponent;
