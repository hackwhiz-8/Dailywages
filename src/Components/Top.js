import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceC from './ServiceC'
import Card2 from './Card2'
import axios from 'axios'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Top = (props) => {
  const url = `https://api.jikan.moe/v4/top/anime`

  const [resultD, error, loading] = CustomQuery(url);

  return (
    <div className=' flex flex-col items-center justify-center '
    >
      {loading && <h1>loading.....</h1>}
      {error && <h1>something wrong</h1>}


      <h1 className='text-white text-[50px] border-2 border-yellow-800  px-10  text-center uppercase  mt-5 f  p-2'>home service sirf ek click par!</h1>

      <Carousel
        responsive={responsive}
        draggable={true}
        // autoPlay= {deviceType !== "mobile" ? true : false}  
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"

        className='p-5 text-white max-w-[1000px]  	'>
        <ServiceC src={"https://cdn.pixabay.com/photo/2017/08/07/20/17/craftsmanship-2607408_640.jpg"} name={"Manpower"}></ServiceC>
        <ServiceC src={"https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_1280.jpg"} name={"electrician"} ></ServiceC>
        <ServiceC src={"https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_640.jpg"} name={"plumber"}></ServiceC>
        <ServiceC src={"https://cdn.pixabay.com/photo/2019/02/23/07/21/carpenter-4015109_640.jpg"} name={"carpentor"}></ServiceC>
        <ServiceC src={"https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_640.jpg"} name={"salon"}></ServiceC>
        <ServiceC src={"https://cdn.pixabay.com/photo/2017/09/29/15/38/cleanliness-2799459_640.jpg"} name={"cleaners"}></ServiceC>

      </Carousel>
    </div>
  )
}


export default Top

{/* {resultD.map((ele) => {
  return <Card2 anime={ele} key={ele.id}  ></Card2>
})} */}
const CustomQuery = (url) => {

  const [resultD, setresult] = useState([])
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)


  // const update = async () => {
  //   // const url = `https://api.jikan.moe/v4/anime?q=${props.name}&sfw`
  //   // const data = await fetch(url);
  //   // const result = await data.json()
  //   // console.log(result)

  //   // setresult(result.data)

  // }

  useEffect(() => {
    const controllar = new AbortController()

      ; (async () => {
        try {
          seterror(false);
          setloading(true);

          const res = await axios.get(url, { signal: controllar.signal });
          console.log(res.data)
          setresult(res.data.data);
          setloading(false)

        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('request canceled ', error.message)
            return
          }
          seterror(true)
          setloading(false);
        }


      })()
    // cleanup method
    // to unmount the eventhandler
    return () => {
      controllar.abort()
    }

  }, [])

  return [resultD, error, loading]
}