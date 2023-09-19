const getChats = async () => {
  return await (await fetch(`http://localhost:3000/api/chats`)).json();
};

export default getChats;
