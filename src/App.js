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
import Cart from './components/Cart';
import Form from './components/Form';
import { CartProvider } from './components/Context/CartContext'
import NonFound from './pages/NonFound/NonFound';

function App() {
  return (
    <CartProvider>
      <BrowserRouter className="App">
        <NavbarReact />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/IdeaPerone' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Tienda' element={<ItemListContainer greetings="¡Bienvenidos!" />}/* {<Tienda />}  *//>
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Cart' element={<Cart greetings="Carrito" />} />
          <Route path='/Form' element={<Form/>} />
          <Route path='*' element={<NonFound />} />
          <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos!" />} />
          <Route path='/category/:category' element={<ItemListContainer greetings="Filtro" />} />
          <Route path='/product/:itemId' element={<ItemDetailContainer greetings="Detalle" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;