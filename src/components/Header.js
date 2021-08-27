import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Test Leo Madeiras</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Listar
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
