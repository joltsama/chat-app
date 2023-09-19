import { IChat, IMessage } from "@/schemas";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { allChats } from "./demoData";

export async function GET(request: NextApiRequest, { params }: any) {
  // Assumptions, can be fetched from backend
  const userId = "user1";

  // populated chats of current user
  return NextResponse.json(allChats);
}
