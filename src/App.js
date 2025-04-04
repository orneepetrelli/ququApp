import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./scripts/inicio";
import Login from "./scripts/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
