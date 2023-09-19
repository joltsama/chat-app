const getThread = async (threadId: string) => {
  console.log("threadId", threadId);
  return await (
    await fetch(`http://localhost:3000/api/threads/${threadId}`, {
      cache: "no-cache",
    })
  ).json();
};

export default getThread;
