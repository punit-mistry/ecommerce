import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Productslice";
import { addQuantity, removeQuantity } from "../Redux/Productslice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
const Cart = () => {
  const Dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const item = useSelector((state) => state.product.item);
  const Remove = (_a) => {
    Dispatch(remove(_a));
  };
  const handleadd = (_a) => {
    Dispatch(addQuantity(_a));
  };
  const handleRemove = (_a) => {
    Dispatch(removeQuantity(_a));
  };

  return (
    <>
      {isloading && (
        <div className="absolute bg-gray-600 bg-opacity-60 w-full h-[100vh]  z-50 flex justify-center items-center">
          <span className="text-xl text-black font-extrabold animate-spin"></span>
        </div>
      )}

      <div className="flex flex-col m-10 gap-3 ">
        {item &&
          item.map((res) => {
            return (
              <div className="  bg-gray-300 h-44 flex  px-10 items-center gap-5 relative ">
                <div>
                  <img
                    src={res.image}
                    width={80}
                    className="mix-blend-multiply rounded-xl"
                  />
                </div>
                <div className="min-w-[550px] max-w-[550px]">
                  <span>{res.title}</span>
                  <br />
                  <span className="font-bold">{res.price}</span>
                  <br />
                  <span>
                    quantity:{" "}
                    <button onClick={() => handleadd(res.id)}>+</button> &nbsp;
                    <span className="font-bold">{res.quantity}</span>
                    &nbsp;&nbsp;
                    <button onClick={() => handleRemove(res.id)}>-</button>
                  </span>
                  <br />
                  <br />
                  <button
                    className="bg-purple-700 font-bold text-white w-24 h-10 rounded-lg hover:bg-purple-600 transition"
                    onClick={() => Remove(res.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        {item.length == 0 && (
          <div className="text-center text-3xl font-bold">
            No Item in the cart...
          </div>
        )}
        {item.length !== 0 && (
          <>
            <div className=" text-right">
              Total of all prices: $
              <span className="font-extrabold">
                {Math.round(item.reduce((acc, res) => acc + res.Total_sum, 0))}
              </span>
            </div>
          </>
        )}
        <br />
        <div>
          {/* <button
            className="bg-blue-700 w-32 h-8 rounded-lg font-bold text-white"
            onClick={Checkout}
          >
            CheckOut
          </button> */}
          <Checkout cart={item} />
          &nbsp; &nbsp;
          <button className="bg-green-700 w-32 h-8 rounded-lg font-bold text-white">
            <Link to="/product">Buy More</Link> &nbsp;
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
