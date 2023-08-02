import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const item = useSelector((state) => state.product.item);
  const Navigate = useNavigate();
  const logOut = () => {
    localStorage.setItem("isLogged", false);
    Navigate("/");
    location.reload();
  };

  return (
    <>
      <div className="bg-blue-800 text-white font-bold flex justify-between p-5 ">
        <div>Logo</div>
        <div className="flex gap-5 items-center">
          <div>
            <Link to="/">Home</Link> &nbsp; <Link to="/product">Product</Link>{" "}
            &nbsp; <Link to="/cart">Cart</Link>{" "}
          </div>
          <div>
            <span className="">
              Item
              <span className="p-0.5 w-full rounded-full relative bottom-3 bg-red-600  ">
                &nbsp;
                {item.length}&nbsp;
              </span>
            </span>
          </div>
          <div>
            <button
              className="w-24 h-10 bg-gray-400 text-black hover:bg-gray-600 hover:text-white font-bold font-sans rounded-lg transition delay-150"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
