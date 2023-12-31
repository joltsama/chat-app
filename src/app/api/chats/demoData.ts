import { IChat, IMessage } from "@/schemas";

interface IChats {
  [key: string]: IChat & {
    messages: IMessage[];
  };
}

export const chats: IChats = {
  chat1: {
    id: "chat1",
    title: "",
    users: [
      {
        id: "user1",
        name: "John",
      },
      {
        id: "user2",
        name: "Lorem",
      },
    ],
    isGroup: false,
    createdAt: new Date(),
    messages: [
      {
        id: "message1.1",
        seenBy: [
          {
            id: "user2",
            name: "Lorem",
          },
        ],
        body: "Hi, all good?",
        createdAt: new Date(),
        chat: "chat1",
        thread: "thread1",
        sender: {
          id: "user1",
          name: "John",
        },
      },
      {
        id: "message1.2",
        seenBy: [
          {
            id: "user1",
            name: "John",
          },
        ],
        body: "yeah, wbu?",
        createdAt: new Date(),
        chat: "chat1",
        thread: "thread2",
        sender: {
          id: "user2",
          name: "Lorem",
        },
      },
      {
        id: "message1.3",
        seenBy: [],
        body: "same",
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
        sender: {
          id: "user1",
          name: "John",
        },
      },
      {
        id: "message1.4",
        seenBy: [],
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
        sender: {
          id: "user1",
          name: "John",
        },
      },
    ],
  },
  chat2: {
    id: "chat2",
    title: "",
    users: [
      {
        id: "user1",
        name: "John",
      },
      {
        id: "user3",
        name: "Ipsum",
      },
    ],
    isGroup: false,
    createdAt: new Date(),
    messages: [
      {
        id: "message4",
        seenBy: [
          {
            id: "user1",
            name: "John",
          },
        ],
        body: "Free this weekend?",
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
        sender: {
          id: "user3",
          name: "Ipsum",
        },
      },
      {
        id: "message5",
        seenBy: [],
        body: "Sry",
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
        sender: {
          id: "user1",
          name: "John",
        },
      },
    ],
  },
  chat3: {
    id: "chat3",
    title: "Friends",
    users: [
      {
        id: "user1",
        name: "John",
      },
      {
        id: "user2",
        name: "Lorem",
      },
      {
        id: "user3",
        name: "Ipsum",
      },
    ],
    isGroup: true,
    createdAt: new Date(),
    messages: [
      {
        id: "message3.1",
        seenBy: [
          {
            id: "user1",
            name: "John",
          },
          {
            id: "user2",
            name: "Lorem",
          },
          {
            id: "user3",
            name: "Ipsum",
          },
        ],
        body: "Lets go for lunch?",
        createdAt: new Date(),
        chat: "chat3",
        thread: "",
        sender: {
          id: "user3",
          name: "Ipsum",
        },
      },
      {
        id: "message3.2",
        seenBy: [
          {
            id: "user1",
            name: "John",
          },
          {
            id: "user3",
            name: "Ipsum",
          },
        ],
        body: "Sure, when?",
        createdAt: new Date(),
        chat: "chat3",
        thread: "thread3.1",
        sender: {
          id: "user1",
          name: "John",
        },
      },
      {
        id: "message3.3",
        seenBy: [
          {
            id: "user3",
            name: "Ipsum",
          },
        ],
        body: "and where?",
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
        sender: {
          id: "user3",
          name: "Ipsum",
        },
      },
    ],
  },
};

export const allChats: (IChat & {
  messages: IMessage[];
})[] = [chats.chat1, chats.chat2, chats.chat3];
