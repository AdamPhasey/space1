import { Button } from "@mui/material";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import SortResults from "../Components/SortResults";
import ItemCard from "../Components/Card";
import { useState } from "react";

const data = [
  { name: "Item A", price: 125, imgSrc: "" },
  { name: "Item B", price: 230, imgSrc: "" },
  { name: "Item C", price: 295, imgSrc: "" },
  { name: "Item D", price: 245, imgSrc: "" },
  { name: "Item E", price: 900, imgSrc: "" },
  { name: "Item F", price: 875, imgSrc: "" },
  { name: "Item G", price: 235, imgSrc: "" },
  { name: "Item H", price: 400, imgSrc: "" },
];

export default function RealLook() {
  const router = useRouter();
  const viewAll = [...data].sort((a, b) => a.price - b.price);
  const first5 = viewAll.slice(0, 5);
  const [view, setView] = useState(first5);
  const [buttonText, setButtonText] = useState("View All");
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleClick(value) {
    switch (value) {
      case false:
        setView(viewAll);
        setButtonText("Collapse");
        setIsExpanded(true);
        break;
      case true:
        setView(first5);
        setButtonText("View All");
        setIsExpanded(false);
        break;
    }
  }

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
      <main>
      <div>
        
      </div>
      
        <div className="flex flex-wrap p-10 gap-11 justify-around items-center mb-12">
          <SortResults
            onCLickAsc={() => toggleClick(isExpanded)}
            buttonTextAsc={buttonText}
          />
          {view.map((e, id) => (
            <ItemCard key={id} price={e.price} name={e.name} image={e.imgSrc} />
          ))}
        </div>
      </main>
    </>
  );
}
