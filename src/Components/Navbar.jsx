import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const item = useSelector(state=>state.product.item)

  return (
    <>
        <div className='bg-blue-800 text-white font-bold flex justify-between p-5'>
            <div>
                Logo
            </div>
            <div className='flex gap-5'>
                <div>
                <Link to='/'>Home</Link> &nbsp;
                <Link to='/product'>Product</Link> &nbsp;
                <Link to='/cart'>Cart</Link>
                </div>
                <div>

                <span>Item:{item.length}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar