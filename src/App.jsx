import { useState } from 'react'
import './App.css'
import Menubar from "./home/Menubar";
import Products from "./home/Products";
import Product from "./home/Product";
import { BrowserRouter, Route, Routes,useParams } from "react-router-dom";
import Cart from "./home/Cart";
function App() {
  const params = useParams()

  return (
    <div className='App'>
      <div className='container'>
      <BrowserRouter>
      <Menubar/>
      <Routes>
        <Route path="/" element= {<Products/>} />
        <Route path="/:category" element= {<Products/>} />
        <Route path="/product/:id" element= {<Product/>} />
        <Route path="/cart" element= {<Cart/>} />
      </Routes>
      </BrowserRouter>
        </div>
    </div>
  )
}

export default App
