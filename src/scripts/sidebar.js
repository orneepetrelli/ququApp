import "../styles/sidebar.css";
import React, { useEffect, useState, useRef } from "react";

function SideBar () {
  const [atFooter, setAtFooter] = useState(false);
  const [visible, setVisible] = useState(true); // 👈 nueva variable
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtFooter(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
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
    <>
      {/* Sidebar */}
      <aside className={`sidebar ${atFooter ? "sidebar-stopped" : ""} ${!visible ? "sidebar-hidden" : ""}`}>
        <button title="Inicio"><i className='bx bx-home'></i></button>
        <button title="Agregar"><i className='bx bx-plus'></i></button>
        <button title="Notificaciones"><i className='bx bx-bell'></i></button>
        <button title="Mensajes"><i className='bx bx-message'></i></button>
        <button title="Configuración"><i className='bx bx-cog'></i></button>
      </aside>

      {/* Botón toggle flotante */}
      <button 
        className="sidebar-toggle"
        onClick={() => setVisible(prev => !prev)}
      >
        {visible ? <i className='bx bx-chevron-left'></i> : <i className='bx bx-chevron-right'></i>}
      </button>
    </>
  );
}

export default SideBar;
