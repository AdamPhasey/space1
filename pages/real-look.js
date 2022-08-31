import { Button } from "@mui/material";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";

export default function RealLook() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Upgraded Answer</title>
        <meta name="description" content="My upgraded version for Space" />
      </Head>
      <header className="flex flex-col">
        <Navbar />
        <div className="sticky top-0 p-5 md:p-10 z-[999] flex flex-row w-full items-center">
          <Button
            variant="contained"
            className="bg-[#9a8c98]"
            onClick={() => router.push("/")}
          >
            GO BACK
          </Button>
        </div>
      </header>
      <main></main>
    </>
  );
}
