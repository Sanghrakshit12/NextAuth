"use client";
import { useSession } from "next-auth/react";

export default function Getdata() {
  const session = useSession();
  return JSON.stringify(session);
}
