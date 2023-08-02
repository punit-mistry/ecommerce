import React from "react";
import axios from "axios";
const Checkout = ({ cart }) => {
  const handleChange = () => {
    console.log(cart);
    axios
      .post("http://localhost:4242/create-checkout-session", {
        cart,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          window.location.href = res.data.url;
        } else {
          alert("Error");
        }
      });
  };

  return (
    <>
      <button
        className="bg-blue-700 w-32 h-8 rounded-lg font-bold text-white"
        onClick={handleChange}
      >
        CheckOut!
      </button>
    </>
  );
};

export default Checkout;
