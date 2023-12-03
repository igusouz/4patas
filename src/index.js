import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';  // Adicionado o import do ReactDOM
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Home from './Rotas/Home';
import AdicionarPet from './Rotas/AdicionarPet';
import Pets from './Rotas/Pets';

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/Pets/adicionarpet' element={<AdicionarPet />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);