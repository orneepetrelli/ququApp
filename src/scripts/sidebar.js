import "../styles/sidebar.css";
import React from "react";
import { FaHome, FaBell, FaPlus, FaCommentDots, FaCog } from "react-icons/fa";

function SideBar () {
    return (

        <sidebar className = "custon-sidebar">

        <div className = "sidebar">
        <button><FaHome /></button>
                <button><FaPlus /></button>
                <button><FaBell /></button>
                <button><FaCommentDots /></button>
                <button><FaCog /></button>
        </div>




        </sidebar>

    )
}

export default SideBar;