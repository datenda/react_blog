import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Thread from "../components/ThreadPost";

const ThreadPage = () => {
  const router = useRouter();
  const { threadId } = router.query;
  const [thread, setThread] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await fetch(`/api/thread/${threadId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch thread");
        }

        const data = await response.json();

        setThread(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchThread();
  }, [threadId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="bg-cover bg-center h-screen overflow-y-hidden"
      style={{
        backgroundImage:
          "url(/images/deszcz-pikseli-streszczenie-tlo/3203855.jpg)",
      }}
    >
      {thread && <Thread thread={thread} />}
    </div>
  );
};

export default ThreadPage;
