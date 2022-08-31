import { Button, ButtonGroup } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Test from "../Test1";
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter()


  return (
    <>
      <Head>
        <title>My tech test!</title>
        <meta name="description" content="My test for Space" />
      </Head>

      <main className="flex flex-col h-screen justify-center items-center">
        <ButtonGroup
          className="bg-white mb-10"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => router.push('/real-look')}>View Upgraded Answer</Button>
        </ButtonGroup>
        <Test />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
