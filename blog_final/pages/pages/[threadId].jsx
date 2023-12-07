// pages/ThreadPage.js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ThreadPage = () => {
  const router = useRouter();
  const { threadId } = router.query;
  const [thread, setThread] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await fetch(`/api/${threadId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch thread");
        }

        const data = await response.json();

        setThread(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchThread();
  }, [threadId]);

  // Conditional rendering based on loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {thread && (
        <div>
          {/* Render your thread data here */}
          <div>{thread.title}</div>
          <div>{thread.content}</div>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;
