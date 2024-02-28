import React from 'react'

import {
    Link

} from "react-router-dom";

const ServiceC = (props) => {

    return (
        <>

            <div className='flex w-[250px] h-[300px ] items-center justify-center rounded-md  border-2 border-yellow-800 
            transition ease-in-out delay-150 hover:scale-125 	 p-2 m-2 text-white overflow-hidden '>
                <div className=' flex flex-col items-center justify-center'>

                    <div className="overflown-hidden" >
                        <img className="" src={props.src}  alt="..." />
                    </div>

                    <Link to='' > <p className='text-center mt-3 uppercasetext-white uppercase text-[20px] font-bold'>{props.name}</p></Link>
                    <button className='bg-yellow-800 text-md uppercase px-2 rounded-sm text-center mt-3 w-[120px] '>book now</button>
                </div>
            </div>
            



        </>
    )
}

export default ServiceC
