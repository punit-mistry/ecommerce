import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData, search } from "../Redux/Productslice";
import { add } from "../Redux/Productslice";
const Home = () => {
  const Dispatch = useDispatch();
  const [Search, setSearch] = useState([]);
  const State = useSelector((state) => state.product);
  useEffect(() => {
    if (State.Data.length == 0) {
      Dispatch(FetchData());
    }
  }, []);
  const handleAdd = (_a) => {
    Dispatch(add(_a));
    // Your logic to handle adding to cart
    setIsGreen(true);
    setTimeout(() => setIsGreen(false), 2000); // Remove the green background class after 2 seconds
  };
  const handleChange = (_a) => {
    Dispatch(search(_a));
  };
  const myArray = Array(5).fill(0);

  return (
    <div className=" text-center p-5 ">
      <div>
        <input
          type="text"
          placeholder="Search Anything ..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className=" h-full w-full flex flex-wrap gap-5 p-10 justify-center  ">
        {[...Array(1)].map(
          (_, index) =>
            State.isLoading && // Make sure isLoading is false before rendering the elements
            myArray.map((res, i) => (
              <div
                // Provide a unique key for each repeated element
                className="shadow-lg bg-gray-500 min-w-[300px] max-w-[250px] h-[600px] p-1 flex flex-col justify-between hover:shadow-2xl rounded-xl m-3 animate-pulse"
              >
                <div>
                  <div className="w-full max-w-[250px] min-w-[250px] h-48 bg-gray-300 m-3"></div>
                  <div className="px-4">
                    <h4 className="bg-gray-300 h-6 w-1/2 mb-2"></h4>
                    <b className="bg-gray-300 h-4 w-1/4"></b>
                    <p className="bg-gray-300 h-4 w-2/3"></p>
                  </div>
                </div>
                <div>
                  <button
                    className="bg-gray-200 w-full h-8 rounded-lg"
                    onClick={() => handleAdd(res)}
                  ></button>
                </div>
              </div>
            ))
        )}

        {State.Data &&
          State.Data.map((res, keys) => (
            <div
              key={keys}
              className="shadow-lg bg-gray-300 min-w-[300px] max-w-[250px] h-[500px] p-1 flex flex-col justify-evenly hover:shadow-2xl hover:-translate-y-6 hover:border-4 border-black  transform  rounded-xl m-3 transition "
            >
              <div>
                <div className="w-full max-w-[250px] min-w-[250px] h-52 text-center">
                  <img
                    src={res.image}
                    alt="Avatar"
                    className="mix-blend-multiply w-full h-full"
                  />
                </div>
                <br />
                <div className="px-4 text-left">
                  <h4 className="text-xl font-bold w-full mb-2 truncate hover:truncate-none">
                    {res.title}
                  </h4>
                  <b>{res.category}</b>
                  <p>${res.price}</p>
                  <p>{res.rating.rate} ⭐</p>
                </div>
              </div>
              <div>
                <button
                  className={`w-52 h-8 rounded-lg text-white font-bold transition bg-gray-500 hover:bg-gray-100 hover:text-black`}
                  onClick={() => handleAdd(res)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
