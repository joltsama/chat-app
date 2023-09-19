import db from "@/temp-db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest, { params }: any) {
  // we will use params to access the data passed to the dynamic route
  const { threadId } = params;
  if (threadId === "thread1")
    return NextResponse.json({
      id: "thread1",
      beginningMessageId: "message1",
      createdAt: new Date(),
      messages: [
        {
          id: "message1.1.1",
          seenBy: [],
          body: "Yo",
          createdAt: new Date(),
          chat: "chat1",
          thread: "thread1",
          sender: {
            id: "user1",
            name: "John",
          },
        },
        {
          id: "message1.1.2",
          seenBy: [],
          body: "Hows it goin?",
          createdAt: new Date(),
          chat: "chat1",
          thread: "thread1",
          sender: {
            id: "user2",
            name: "Lorem",
          },
        },
      ],
    });

  if (threadId === "thread3.1")
    return NextResponse.json({
      id: "thread3.1",
      beginningMessageId: "message3.1",
      createdAt: new Date(),
      messages: [
        {
          id: "message3.3.1",
          seenBy: [],
          body: "Yo",
          createdAt: new Date(),
          chat: "chat3",
          thread: "thread3.1",
          sender: {
            id: "user1",
            name: "John",
          },
        },
        {
          id: "message3.3.2",
          seenBy: [],
          body: "Hows it goin?",
          createdAt: new Date(),
          chat: "chat3",
          thread: "thread3.1",
          sender: {
            id: "user2",
            name: "Lorem",
          },
        },
      ],
    });
  return NextResponse.json({});
}

export async function POST(request: NextApiRequest, { params }: any) {
  // we will use params to access the data passed to the dynamic route
  const { threadId } = params;
  db.push(`/threads/${threadId}`, request.body);
  return NextResponse.json(`Data saved`);
}
