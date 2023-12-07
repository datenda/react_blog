// components/Thread.js
import React from "react";

const Thread = ({ thread }) => {
  const { user, title, content, date, replies } = thread;

  return (
    <div className="w-1/2 mx-auto p-4 bg-white h-screen rounded-md shadow-md my-4 bg-opacity-75 overflow-y-scroll ">
      <div className="text-3xl font-bold mb-4">{title}</div>
      <div className="bg-gray-200 p-4 rounded-md">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <div className="text-sm font-semibold mr-2">Posted by:</div>
            <div className="text-base font-bold">{user}</div>
          </div>
          <div className="text-sm">{new Date(date).toLocaleString()}</div>
        </div>
        <div className="text-gray-800 mb-6 mt-2">{content}</div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold mb-4">Comments:</div>
        {replies.length > 0 ? (
          <div>
            {replies.map((reply) => (
              <div key={reply._id} className="bg-gray-100 p-4 mb-6 rounded-md">
                <div className="text-gray-600 mb-2">{reply.user} said:</div>
                <div className="text-gray-800">{reply.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>No replies yet.</div>
        )}
      </div>
    </div>
  );
};

export default Thread;
