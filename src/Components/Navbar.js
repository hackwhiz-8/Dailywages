import React from 'react'
import './Navbar1.css'
import {
  Link
} from "react-router-dom"

const Navbar = (props) => {



  const handleUpdate = (e) => {

    props.setBool(!props.update);


  }

  return (
    <>
      <nav className="backdrop-grayscale bg-gray/30	bg-black">
        <div className="flex justify-between text-white	uppercase font-medium">
          <Link className="text-[20px] font-md  mx-4 my-2 p-2 text-center  " to="/"><span >D</span>aily
           <span className='text-[40px]' >W</span>ages </Link>

          <div className="flex p-2 justify-between items-center  " id="navbarNav">
            <ul className="flex justify-evenly mx-5 mt-2"> 
              <li className="mx-3 text-md text-center text-white font-medium w-10	">
                <Link className="hover:border-2 hover:border-sky-500 p-1" aria-current="page" active to="/home">Home</Link>
              </li>
              <li className="mx-3 text-md text-white font-medium w-10 ">
                <Link className="text-center hover:border-2 hover:border-sky-500 p-1" to="/services">services</Link>
              </li>
              <li className="mx-3 text-md text-white font-medium  w-10">
                <Link className="text-center hover:border-2 hover:border-sky-500 ml-4" to="/Cart">cart</Link>
              </li>
              <li className="mx-3 text-md text-white font-medium w-10 ">
                <Link className="text-center hover:border-2 hover:border-sky-500 p-1" to="/about">about</Link>
              </li>
              {/* <li className="mx-3 text-md text-white font-medium w-10 ">
                <Link className="text-center hover:border-2 hover:border-sky-500 p-1" to="/anime/20">news</Link>
              </li> */}

            </ul>
            <form className="my-1  p-2" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="appearance-none border-2 text-black italic font-normal px-2 placeholder:italic placeholder:p-2 placeholder:text-slate-400 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="search" placeholder="Search" onChange={(e) => { props.setname(e.target.value) }} aria-label="Search" />

              <Link to="/login"> <button className="border-2 p-1 border-sky-500 px-3 rounded hover:bg-sky-500" type="submit" onClick={handleUpdate}>Search</button></Link>

            </form>
            <Link to="/login"> <button className="border-2 p-1 border-sky-500 px-3 rounded hover:bg-sky-500" type="submit" >Login</button></Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
