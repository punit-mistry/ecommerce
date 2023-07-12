import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FetchData } from '../Redux/Productslice';
import { add } from '../Redux/Productslice';
const Home = () => {
  const Dispatch = useDispatch();
  const State = useSelector(state=>state.product);
  useEffect(()=>{
    if(State.Data.length ==0){

      Dispatch(FetchData())
    }
  },[])

  const handleAdd=(_a)=>{
    Dispatch(add(_a))
  }

  return (
    <div className='bg-gray-400 h-full w-full flex flex-wrap gap-5 p-10 justify-center '>
      {
        State.isLoading &&
        <span> Loadingg</span>
      }



      {
         State.Data && State.Data.map((res,keys)=>{
          return (
            <div key={keys} className='bg-gray-300 min-w-[250px] max-w-[250px] h-[550px] p-3'>

              <span className='text-xl font-bold'>{res.title}.</span>

              <img src={res.image} className='mix-blend-multiply' height={150} />
              <span>${res.price}</span>
              <br/>
              <button onClick={()=>handleAdd(res)}>Add To Cart </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home