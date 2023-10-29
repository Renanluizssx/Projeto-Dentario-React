import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../Componentes/Home";
import Contato from "../../Componentes/Contato";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
