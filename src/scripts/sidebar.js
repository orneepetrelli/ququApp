import React from "react";
import "./header.css";
import { FaHome, FaBell, FaPlus, FaCommentDots, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-icons">
        <button><FaHome /></button>
        <button><FaPlus /></button>
        <button><FaBell /></button>
        <button><FaCommentDots /></button>
        <button><FaCog /></button>
      </div>
    </aside>
  );
}

export default Sidebar;