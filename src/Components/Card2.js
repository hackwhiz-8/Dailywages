import React from 'react'
// import './Card1.css'
import {
    Link

} from "react-router-dom";

const Card2 = (props) => {

    return (
        <>

            <div className='flex w-[250px]  items-center justify-center rounded-md mx-4 px-5  backdrop-blur-sm  text-white  '>
                <div className='    '>

                    <div className="overflown-hidden w-[250px]" >
                        <img className="w-[250px] h-[300px]" src={props.anime.images.jpg.large_image_url}  alt="..." />
                    </div>

                    <Link to={`/anime/${props.anime.mal_id}`} className='w-[250px]' > <p className='mt-3 text-2xl text-white '>{props.anime.title}</p></Link>
                </div>
            </div>



        </>
    )
}

export default Card2
