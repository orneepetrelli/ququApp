import "../styles/sidebar.css";
import React from "react";
//import { FaHome, FaBell, FaPlus, FaCommentDots, FaCog } from "react-icons/fa";


function SideBar () {
    return (

        <aside className = "custom-sidebar">

<div className="sidebar">
<button title="Inicio"><i className='bx bx-home'></i></button>
<button title="Agregar"><i className='bx bx-plus'></i></button>
<button title="Notificaciones"><i className='bx bx-bell'></i></button>
<button title="Mensajes"><i className='bx bx-message'></i></button>
<button title="Configuración"><i className='bx bx-cog'></i></button>
</div>




        </aside>

    )
}

export default SideBar;