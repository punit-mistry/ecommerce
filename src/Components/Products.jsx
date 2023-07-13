import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData,search } from "../Redux/Productslice";
import { add } from "../Redux/Productslice";
const Home = () => {
  const Dispatch = useDispatch();
  const [Search,setSearch] = useState([]);
  const State = useSelector((state) => state.product);
  useEffect(() => {
    if (State.Data.length == 0) {
      Dispatch(FetchData());
    }
  }, []);
  const handleAdd = (_a) => {
    Dispatch(add(_a));
  };
  const handleChange =(_a)=>{
   
      Dispatch(search(_a));

  }
  return (
    <div className="bg-gray-400 text-center p-5">
      <div>
        <input type="text" placeholder="Search Anything ..." onChange={(e)=>handleChange(e.target.value)}/>
      </div>

    <div className=" h-full w-full flex flex-wrap gap-5 p-10 justify-center ">
      {State.isLoading && <span> Loadingg</span>}

      

      {State.Data &&
        State.Data.map((res, keys) => {
          return (
            <div
            key={keys}
              className="shadow-lg bg-gray-300 min-w-[300px] max-w-[250px] h-[600px] p-3 flex flex-col justify-between hover:shadow-2xl "
            >
              <div>
                <div className="w-full max-w-[250px] min-w-[250px]">
                  <img
                    src={res.image}
                    alt="Avatar"
                    className="mix-blend-darken"
                    />
                </div>
                <div className="px-4">
                  <h4>
                    <b>{res.title}</b>
                  </h4>
                    <b>{res.category}</b>
                  <p> ${res.price}</p>
                </div>
              </div>
              <div>
                <button onClick={() => handleAdd(res)}>Add To Cart </button>
              </div>
            </div>
          );
        })}
    </div>
          </div>
  );
};
export default Home;
