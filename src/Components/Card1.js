import React from 'react'
import './Card1.css'
import {
    Link

} from "react-router-dom";

const Card = (props) => {

    return (
        <>

            <div className='flex w-[250px] items-center justify-center rounded-md  	 p-2 m-2 text-white overflow-hidden '>
                <div className=''>

                    <div className="overflown-hidden" >
                        <img className="" src={props.anime.images.jpg.large_image_url}  alt="..." />
                    </div>

                    <Link to={`/anime/${props.anime.mal_id}`} > <p>{props.anime.title}</p></Link>
                </div>
            </div>



        </>
    )
}

export default Card
