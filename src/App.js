import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./scripts/inicio";
import Login from "./scripts/login";
import Registro from "./scripts/registrarse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
