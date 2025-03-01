import React from 'react'
import Background from './Background'
import Navbar from '../Navbar'
import { Button } from '@repo/ui'

const LandingPage = () => {
  return (
    <div className='w-full h-screen relative '>
      <Navbar/>
      <Background/>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:border-2    w-full py-6 '>
        <div className='flex flex-wrap lg:flex-nowrap  justify-center gap-10 bruno-ace-sc-font text-2xl md:text-3xl xl:text-6xl font-extrabold text-center '>
         <span>Music Production</span> 
          <span>Video Production</span>
          <span>Artist Management</span>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2  mt-12 xl:mt-24  flex items-center justify-center flex-col md:flex-row gap-8 w-full '>
        <Button className=' shadow-md shadow-black  text-lg font-semibold p-6   cursor-pointer'>Book a Call</Button>
        <Button className='cursor-pointer shadow-md  shadow-black bg-transparent text-black hover:bg-transparent border p-6 text-lg font-semibold '>Our Services</Button>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage