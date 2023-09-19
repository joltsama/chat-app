import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { allChats } from "./demoData";

export async function GET(request: NextApiRequest, { params }: any) {
  // populated chats of current user
  return NextResponse.json(allChats);
}
