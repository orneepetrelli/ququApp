import "../styles/sidebar.css";
import React, { useEffect, useState, useRef } from "react";
//import { FaHome, FaBell, FaPlus, FaCommentDots, FaCog } from "react-icons/fa";


function SideBar () {
  const [atFooter, setAtFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
      footerRef.current = footerElement;
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
  
    return (

        <aside className={`sidebar ${atFooter ? "sidebar-stopped" : ""}`}>

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