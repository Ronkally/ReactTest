import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
          <div className="header_logo">
              <span>X</span>
              Shoes
          </div>
          <div className="header_items">
              <a href="#">Tennis</a>
              <a href="#">Accesorios</a>
              <a href="#">Acerca de nosotros</a>
          </div>
      </div>

      <div className="header_right">
        <div className="header_searchbox">
          <input type="text"></input>
          <SearchIcon />
        </div>
        <Button variant="outlined" size="small" className="header_button" startIcon={<PersonIcon />}>
          Iniciar Sesión
        </Button>
      </div>

    </div>
  );
}

export default Header;
