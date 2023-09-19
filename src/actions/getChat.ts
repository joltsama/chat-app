const getChat = async (chatId: string) => {
  console.log("chatId", chatId);
  return await (
    await fetch(`http://localhost:3000/api/chats/${chatId}`, {
      cache: "no-cache",
    })
  ).json();
};

export default getChat;
