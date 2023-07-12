import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Productslice";
const Cart = () => {
  const Dispatch = useDispatch();
  const item = useSelector((state) => state.product.item);
  const handleRemove =(_a)=>{
    Dispatch(remove(_a))
  }
  return (
    <>
      <div className="flex flex-col m-10 gap-3 ">
        {item &&
          item.map((res) => {
            return (
              
              <div className="  bg-gray-300 h-32 flex justify-between px-10 items-center">
                <div>
                  <img src={res.image} width={80} className="mix-blend-multiply rounded-xl"/>
                </div>
                <div>

                <span>{res.title}</span>
                <br/>
                <span className="font-bold">
                  {res.price}
                </span>
                <br/>
                <button className="bg-purple-700 font-bold text-white w-24 h-10 rounded-lg hover:bg-purple-600 transition" onClick={()=>handleRemove(res.id)}>
                  Remove
                </button>
                </div>
              </div>
            );
          })}
          {
            item.length ==0 &&
            <div className="text-center text-3xl font-bold">
              No Item in the cart...
              </div>
          }
      </div>
    </>
  );
};
export default Cart;
