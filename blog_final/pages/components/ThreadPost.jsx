// components/Thread.js
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { checkToken } from "../utils/auth";
import axios from "axios";

const Thread = ({ thread }) => {
  const { user, title, content, date, replies } = thread;
  const [list, setList] = useState(replies);
  const [newComment, setNewComment] = useState("");
  const token = checkToken();

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  console.log(thread);
  const handleSubmitComment = async () => {
    try {
      const response = await axios.put("/api/new_comment", {
        _id: thread._id,
        user: "CurrentUserName",
        content: newComment,
      });

      console.log("New comment added:", response.data);

      // Create a new comment with a structure similar to existing comments
      const newCommentData = {
        user: "test",
        content: newComment,
        date: new Date(),
      };

      // Update the list state with the new comment
      setList((prevList) => [newCommentData, ...prevList]);
      console.log(newComment);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleRedirectToLogin = () => {
    console.log("Redirecting to login...");
  };

  return (
    <div className="w-full md:w-2/3 mx-auto p-4 bg-white h-screen rounded-md shadow-md my-4 bg-opacity-75">
      <div className="text-3xl font-bold mb-4">{title}</div>
      <div className="bg-gray-200 p-4 rounded-md">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <div className="text-sm font-semibold mr-2">Posted by:</div>
            <div className="text-base font-bold">{user}</div>
          </div>
          <div className="text-sm">{date}</div>
        </div>
        <div className="text-gray-800 mb-6 mt-2">{content}</div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold mb-4">Comments:</div>
        <Scrollbars style={{ height: 400 }}>
          {replies.length > 0 ? (
            <div>
              {list.map((reply) => (
                <div
                  key={reply._id}
                  className="bg-gray-100 p-4 mb-6 rounded-md"
                >
                  <div className="md:flex">
                    {/* Display user on the left for larger screens */}
                    <div className="">
                      <div className="font-bold text-black">{reply.user}</div>
                    </div>

                    {/* Display date and text underneath the username for smaller screens */}
                    <div className="md:ml-4 text-black">
                      <div className="text-gray-500">
                        {new Date(reply.date).toLocaleString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="text-black">{reply.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No replies yet.</div>
          )}
        </Scrollbars>

        {token ? (
          // Render comment input and submit button if a token is present
          <>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Leave a comment..."
              className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 mt-4 text-black"
            />
            <button
              onClick={handleSubmitComment}
              className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Comment
            </button>
          </>
        ) : (
          <div className="mt-4">
            <p>You must be logged in to leave a comment.</p>
            <button
              onClick={handleRedirectToLogin}
              className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thread;
