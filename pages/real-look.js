import { Button } from "@mui/material";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import SortResults from "../Components/SortResults";
import ItemCard from "../Components/Card";
import { useState } from "react";

const data = [
  { name: "Item A", price: 125, description: "", imgSrc: "/letter-a.svg" },
  { name: "Item B", price: 230, description: "", imgSrc: "/letter-b.svg" },
  { name: "Item C", price: 295, description: "", imgSrc: "/letter-c.svg" },
  { name: "Item D", price: 245, description: "", imgSrc: "/letter-d.svg" },
  { name: "Item E", price: 900, description: "", imgSrc: "/letter-e.svg" },
  { name: "Item F", price: 875, description: "", imgSrc: "/letter-f.svg" },
  { name: "Item G", price: 235, description: "", imgSrc: "/letter-g.svg" },
  { name: "Item H", price: 400, description: "", imgSrc: "/letter-h.svg" },
];

export default function RealLook() {
  const router = useRouter();
  const ascView = [...data].sort((a, b) => a.price - b.price);
  const descView = [...data].sort((a, b) => b.price - a.price);
  const textAsc = [...data].sort((a, b) => a.name - b.name);
  // const textDesc = textAsc.reverse();


  const [view, setView] = useState(ascView);
  const [buttonText, setButtonText] = useState("View All");
  const [isExpanded, setIsExpanded] = useState(false);

  

  function toggleClick(value) {
    switch (value) {
      case true:
        setButtonText("Collapse");
        setIsExpanded(true);
        break;
      case false:
        setButtonText("View All");
        setIsExpanded(false);
        break;
      case "descView":
        setView(descView);
        break;
      case "ascView":
        setView(ascView)
        break;
      case "A-Z":
        setView(textAsc);
        break;
        case "Z-A":
        setView(textAsc.reverse());
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
          <div className="flex w-1/2">
            <Button
              variant="contained"
              className="bg-[#9a8c98]"
              onClick={() => router.push("/")}
            >
              GO BACK
            </Button>
          </div>
          <div className="flex justify-center">
            <Button variant="outlined" className="text-[1.5vmax] md:text-[1vmax]" onClick={() => toggleClick(!isExpanded)}>{buttonText}</Button>
          </div>
          <div className="flex justify-end w-1/2">
            <SortResults
              onClickAsc={() => toggleClick("ascView")}
              buttonTextAsc={"Ascending by price"}
              onClickDesc={() => toggleClick("descView")}
              buttonTextDesc={"Descending by price"}
              onClickTextAsc={() => toggleClick("A-Z")}
              buttonTextLetterAsc={"A-Z"}
              onClickTextDesc={() => toggleClick("Z-A")}
              buttonTextLetterDesc={"Z-A"}
            />
          </div>
        </div>
      </header>
      <main>
        <div></div>

        <div className="flex flex-wrap p-10 gap-5 justify-around items-center mb-12">
        {!isExpanded ? (
          view.slice(0, 5).map((e, id) => (
            <ItemCard key={id} price={`£${e.price}`} name={e.name} image={e.imgSrc} description={e.description} />
          ))
        ) : (
          view.map((e, id) => (
            <ItemCard key={id} price={`£${e.price}`} name={e.name} image={e.imgSrc} description={e.description} />
          ))
        )
        }
        </div>
      </main>
    </>
  );
}
