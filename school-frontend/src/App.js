import React from "react";
import NavBar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";

import Register from "./components/register";
import AddProduct from "./components/addproduct";
import Products from "./components/Products";
import Product from "./components/product";
import Search from "./components/search";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}
