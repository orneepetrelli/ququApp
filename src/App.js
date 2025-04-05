import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./scripts/inicio";
import Login from "./scripts/login";
import Productos from "./scripts/productos";
import InfoProducto from "./scripts/infoproducto";
import Carrito from "./scripts/carrito";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/informacionProducto" element={<InfoProducto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
}

export default App;
