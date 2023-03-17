import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="carrito">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
      <div className="navBar">
        <Link to={"/"}>
          <button>Home</button>
        </Link>

        <Link to={`/category/${"tradicional"}`}>
          <button>Tradicionales</button>
        </Link>

        <Link to={`/category/${"veggie"}`}>
          <button>Veggie</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
