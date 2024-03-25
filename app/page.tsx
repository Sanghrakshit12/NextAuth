import Appbar from "@/components/app";
import Getdata from "@/components/getdata";
import { getServerSession } from "next-auth";
import { Next_Auth_Config } from "./lib/auth";
export default async function main() {
  const data = await getServerSession(Next_Auth_Config);
  return (
    <>
      <div>Home page</div>
      <br />
      <Appbar />
      <br />
      <h1>Data on client Side</h1>
      <br />
      <Getdata />
      <h1>Data on Server</h1>
      <br />
      {JSON.stringify(data)}
    </>
  );
}
