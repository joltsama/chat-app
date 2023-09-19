import getChat from "@/actions/getChat";
import ChatWindow from "./components/ChatWindow";

async function ChatPage({ params }: any) {
  const chatId = params.chatId;
  // fetch data on server side and pass it to the client component
  const activeChat = await getChat(chatId);
  return <ChatWindow initialChat={activeChat} />;
}

export default ChatPage;
