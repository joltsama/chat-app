import { randomUUID } from "crypto";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  const threadId: string = randomUUID();
  console.log("threadId, request.body", { threadId, ...request.body });

  return new NextResponse(`Data saved`);
}
