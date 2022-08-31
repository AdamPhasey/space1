import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SortResults({
  onClickAsc,
  buttonTextAsc,
  onClickDesc,
  buttonTextDesc,
  onClickTextAsc,
  buttonTextLetterAsc,
  onClickTextDesc,
  buttonTextLetterDesc,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Sort-by:
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={onClickTextAsc}>{buttonTextLetterAsc}</MenuItem>
        <MenuItem onClick={onClickTextDesc}>{buttonTextLetterDesc}</MenuItem>
        <MenuItem onClick={onClickAsc}>{buttonTextAsc}</MenuItem>
        <MenuItem onClick={onClickDesc}>{buttonTextDesc}</MenuItem>
      </Menu>
    </div>
  );
}
