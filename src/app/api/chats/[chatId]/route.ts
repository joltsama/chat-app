import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { chats } from "../demoData";
export async function GET(request: NextApiRequest, { params }: any) {
  // Assumptions, can be fetched from backend
  const userId = "user1";
  const { chatId }: { chatId: "chat1" | "chat2" | "chat3" } = params;

  // populated chats of current user and return
  return NextResponse.json(chats[chatId]);
}
