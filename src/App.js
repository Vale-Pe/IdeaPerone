import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar';
import Home from './pages/Home/Home';
// import Tienda from './pages/Tienda/Tienda';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <NavbarReact />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Tienda' element={<ItemListContainer greetings="¡Bienvenidos!" />}/* {<Tienda />}  *//>
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos!" />} />
        <Route path='/category/:catId' element={<ItemListContainer greetings="Filtro" />} />
        <Route path='/product/:itemId' element={<ItemDetailContainer greetings="Detalle" />} />
      </Routes>
      {/* 
      <ItemDetailContainer greetings='DETALLES' /> */}
      
    </BrowserRouter>
  );
}

export default App;

/* import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings='¡Bienvenidos!' />
      <ItemDetailContainer greetings='DETALLES' />
    </div>
  );
}

export default App; */