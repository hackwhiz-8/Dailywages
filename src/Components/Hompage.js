import React from 'react'
import { useState, useEffect } from 'react'
import Top from './Top'
import Card1 from './Card1'
import axios from 'axios'
import About from './About'
import ServiceC from './ServiceC'
import Footer from './Footer'


const Hompage = (props) => {
  const url = `https://api.jikan.moe/v4/anime?q=${props.name}&sfw`
  const [resultD, error, loading] = CustomQuery(url);


  // if (error) {
  //   return (
  //     <h1>something wrong</h1>
  //   )
  // }

  // if (loading) {
  //   return (<h1 className='text-center font-bold text-[50px]'>loading...</h1>)
  // }
  return (
    < >
    <div className=' bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
      <Top />
      <div className='border-t-2 border-yellow-800 flex flex-col items-center justify-center'>
        <h1 className='text-center text-[30px] font-bold text-white mb-5  uppercase  mt-2'>service</h1>
        <div className='grid grid-cols-3 text-white gap-5 '>
          <ServiceC src={"https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_640.jpg"} name={"photgrapher"}  price={'$100'}></ServiceC>
          <ServiceC src={"https://cdn.pixabay.com/photo/2015/02/05/09/17/office-624749_640.jpg"} name={"consultancy"}  price={'$100'}></ServiceC>
          <ServiceC src={"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_640.jpg"} name={"furniture"} price={'$100'}></ServiceC>
          <ServiceC src={"https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg"} name={"ac & repair"}></ServiceC>
          <ServiceC src={"https://cdn.pixabay.com/photo/2020/04/09/11/16/video-conference-5020951_640.jpg"} name={"event management"} price={'$100'}></ServiceC>
          <ServiceC src={"https://cdn.pixabay.com/photo/2023/02/21/05/47/rain-7803539_640.jpg"} name={"courier"} price={'$100'}></ServiceC>
        </div>
      </div>
      <About />

      <Footer />
      </div>

    </>


  )
}


export default Hompage


const CustomQuery = (url) => {

  const [resultD, setresult] = useState([])
  const [dataT, setdataT] = useState([])
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