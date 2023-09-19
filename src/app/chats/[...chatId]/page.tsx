import getChat from "@/actions/getChat";
import ChatWindow from "./components/ChatWindow";

async function ChatPage({ params }: any) {
  const chatId = params.chatId;
  const activeChat = await getChat(chatId);

  return <ChatWindow initialChat={activeChat} />;
}

export default ChatPage;
