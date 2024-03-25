"use client";
import { signIn, signOut } from "next-auth/react";

export default function Appbar() {

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
