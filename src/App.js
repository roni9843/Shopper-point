import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Test from "./components/TestFile/Test";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="product/:id" element={<ProductPage />} />
          <Route path="/demo" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
