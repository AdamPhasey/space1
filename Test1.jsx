import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export const data = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

const Test = () => {
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
      {view.map((e, id) => (
        <li key={id}>
          name: {e.name}, price: {e.price}
        </li>
      ))}
      <br />
      <Button variant="outlined" onClick={() => toggleClick(isExpanded)}>
        {buttonText}
      </Button>
    </>
  );
};

export default Test;
