import db from "@/temp-db";
import { randomUUID } from "crypto";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  const threadId: string = randomUUID();
  console.log("threadId, request.body", { threadId, ...request.body });
  db.push("/threads", { threadId, ...request.body }, true);

  return new NextResponse(`Data saved`);
}
