import "../styles/header.css";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

function Header() {
  return (
    <header className="custom-header">
      <div className="floating-header"> 
        <button>holaa</button>
        <button>miaw</button>
        <button>miaw</button>
        <button>miaw</button>
      </div>
      <div className="header-right">
        <FaSearch className="icon" />
        <FaShoppingBag className="icon" />
      </div>
    </header>
  );
}

export default Header;
