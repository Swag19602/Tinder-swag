import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";
function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
      className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu2t06wB14isV8HIGtaMmM7vngnsIaE2qsRE9ggslRLmknCfLaosOr9bLuOtRfkZ_wFc&usqp=CAU"
        alt=""
      />
      <IconButton>
      <ForumIcon  fontSize="large" className="header__icon"/></IconButton>
    </div>
  );
}

export default Header;
