import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SortResults({
  dropdownTitle,
  onClickAsc,
  buttonTextAsc,
  onClickDesc,
  buttonTextDesc,
  onClickTextAsc,
  buttonTextLetterAsc,
  onClickTextDesc,
  buttonTextLetterDesc,
  onClickUnder250,
  buttonTextUnder250,
  onClickUnder400,
  buttonTextUnder400
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
        {dropdownTitle}
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
        {onClickTextAsc && <MenuItem onClick={onClickTextAsc}>{buttonTextLetterAsc}</MenuItem>}
        {onClickTextDesc && <MenuItem onClick={onClickTextDesc}>{buttonTextLetterDesc}</MenuItem>}
        {onClickAsc &&<MenuItem onClick={onClickAsc}>{buttonTextAsc}</MenuItem>}
        {onClickDesc && <MenuItem onClick={onClickDesc}>{buttonTextDesc}</MenuItem>}
        {onClickUnder250 && <MenuItem onClick={onClickUnder250}>{buttonTextUnder250}</MenuItem>}
        {onClickUnder400 && <MenuItem onClick={onClickUnder400}>{buttonTextUnder400}</MenuItem>}


      </Menu>
    </div>
  );
}
