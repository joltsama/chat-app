interface IReaction {
  userId: string;
  type: "LIKE" | "HEART";
}

interface IUser {
  id: string;
  name: string;
  image?: string;
}

interface IMessage {
  id: string;
  seenBy: IUser[];
  body: string;
  createdAt: Date;
  // string for id
  chat: string | IChat;
  thread: IThread | string;
  // string for id
  sender: IUser;
  reactions?: IReaction[];
}

interface IChat {
  id: string;
  title?: string;
  users: IUser[];
  isGroup: boolean;
  createdAt: Date;
  description?: string;
  image?: string;
}

interface IThread {
  id: string;
  beginningMessageId: string;
  createdAt: Date;
}

export type { IMessage, IReaction, IThread, IUser, IChat };
