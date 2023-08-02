import React from "react";
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
  const isLoggedIn = useSelector((state) => state.product.loggedIn);

  return (
    <div className="font-serif">
      {isLoggedIn && <Navbar />}
      <Routes>
        {/* Show Home, Product, and Cart when logged in */}
        <Route
          path="/CheckoutSuccess"
          element={<CheckoutSuccess />}
        />
        {isLoggedIn ? (
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
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
