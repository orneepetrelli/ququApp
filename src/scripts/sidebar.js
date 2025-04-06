import "../styles/sidebar.css";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';


function SideBar () {
  const [atFooter, setAtFooter] = useState(false);
  const [visible, setVisible] = useState(true);
  const footerRef = useRef(null);
  const navigate = useNavigate();
  const ir_inicio = () =>{navigate("/")};
  const ir_fav = () =>{navigate("/favoritos")};

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
      <aside className={`sidebar ${(atFooter || !visible) ? "sidebar-hide" : ""}`}>

       <button onClick={ir_inicio}>

       <i className='bx bx-home'></i></button>

       <button onClick={() => navigate('/favoritos')}>
        <i className="bx bx-bookmark-heart"></i></button>

        <button title='Tienda'><i className= 'bx bx-store'></i></button>
        <button title="Ofertas"><i className= 'bx bx-purchase-tag'></i></button>
        <button title="Notificaciones"><i className='bx bx-bell'></i></button>
        <button title="Mensajes"><i className='bx bx-message'></i></button>
        <button title="Configuración"><i className='bx bx-cog'></i></button>
      </aside>

      {/* Botón toggle flotante debajo */}
      <button 
        className={`sidebar-toggle ${atFooter ? "toggle-hide" : ""}`}
        onClick={() => setVisible(prev => !prev)}
      >
        {visible ? <i className='bx bx-chevron-left'></i> : <i className='bx bx-chevron-right'></i>}
      </button>
    </>
  );
}

export default SideBar;
