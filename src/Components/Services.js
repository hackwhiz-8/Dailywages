import React from 'react'
import ServiceC from './ServiceC'


const Services = () => {
  return (
    <>
       <div className=' g-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>
        <h1 className='text-center text-white text-[40px] font-bold uppercase  p-2 mb-5'>services</h1>

        <div className='flex items-center justify-center flex-col mt-10 border-t-2 border-yellow-800'>
            <h1 className='text-center  text-white text-[25px] font-bold   mt-2'>HOUSEHOLD</h1>
            <div className='grid grid-cols-3 mt-2 gap-4'>
                <ServiceC src={"https://cdn.pixabay.com/photo/2017/08/07/20/17/craftsmanship-2607408_640.jpg"} name={"Manpower"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_1280.jpg"} name={"electrician"} ></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_640.jpg"} name={"plumber"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2019/02/23/07/21/carpenter-4015109_640.jpg"} name={"carpentor"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_640.jpg"} name={"salon"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2017/09/29/15/38/cleanliness-2799459_640.jpg"} name={"cleaners"}></ServiceC>
            </div>
        </div>

        <div className='flex items-center justify-center flex-col mt-10 border-t-2 border-yellow-800 mb-10'>
            <h1 className='text-center  text-black uppercase text-[25px] font-bold  mt-2'>Profesional</h1>
            <div className='grid grid-cols-3 mt-2 gap-4'>
                <ServiceC src={"https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_640.jpg"} name={"photgrapher"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2015/02/05/09/17/office-624749_640.jpg"} name={"consultancy"} ></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_640.jpg"} name={"furniture"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg"} name={"ac & repair"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2020/04/09/11/16/video-conference-5020951_640.jpg"} name={"event management"}></ServiceC>
                <ServiceC src={"https://cdn.pixabay.com/photo/2023/02/21/05/47/rain-7803539_640.jpg"} name={"courier"}></ServiceC>
            </div>
        </div>



       </div>
    </>
  )
}

export default Services
