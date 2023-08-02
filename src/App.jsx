import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Product from "./Components/Products";
import Login from "./Auth/Login";
import CheckoutPage from "./Pages/Checkout";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
const App = () => {
  // Get the login state from Redux
  const isLoggedIn = useState(() => {
    if (localStorage.getItem("isLogged") == "true") {
      return true;
    } else {
      return false;
    }
  });
  console.log(isLoggedIn);
  return (
    <div className="font-serif">
      {isLoggedIn[0] && <Navbar />}
      <Routes>
        {/* Show Home, Product, and Cart when logged in */}
        <Route
          path="/CheckoutSuccess"
          element={<CheckoutSuccess />}
        />
        {isLoggedIn[0] ? (
          <>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/product"
              element={<Product />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<CheckoutPage />}
            />
          </>
        ) : (
          // Show the login form when not logged in
          <Route
            path="/"
            element={<Login />}
          />
        )}
      </Routes>
      {isLoggedIn[0] && <Footer />}
    </div>
  );
};

export default App;
