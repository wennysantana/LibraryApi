import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Livros from "./components/Livros";
import Usuarios from "./components/Usuarios";
import Relatorios from "./components/Relatorios";
import Emprestimos from "./components/Emprestimos";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
      </Routes>
    </Router>
  );
}

export default App;
