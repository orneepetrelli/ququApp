import React from "react";
import { useLocation } from "react-router-dom";

function Buscar() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  return (
    <div>
      <h2>Resultados para: "{query}"</h2>
      {}
    </div>
  );
}

export default Buscar;