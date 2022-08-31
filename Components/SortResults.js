import { Button } from "@mui/material";

export default function SortResults({ onCLickAsc, buttonTextAsc }) {
  return (
    <>
      <Button variant="outlined" onClick={onCLickAsc}>
        {buttonTextAsc}
      </Button>
    </>
  );
}
