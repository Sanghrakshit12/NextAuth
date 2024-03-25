import { Next_Auth_Config } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(Next_Auth_Config);
  return NextResponse.json({ session });
}
