import React from 'react'
import { Button } from './ui/button'
import {  Highlight } from "@/components/ui/hero-highlight";
import { ArrowDownCircle } from 'lucide-react';
type Props = {}

const HeroText = (props: Props) => {
  

  return (
    <div className=' w-full  md:h-[89vh] relative content-center space-y-8 md:space-y-16  max-md:flex max-md:flex-col max-md:mt-10 max-md:items-center md:px-12 '>
        {/* <h1 className=' inline-block  p-3 md:p-4 rounded-2xl text-black bg-yellow-500 text-2xl md:text-8xl tracking-tighter font-bold max-md:font-extrabold font-sans'>Become a Professional Artist</h1> */}
        <Highlight className="text-black p-3 rounded-xl md:rounded-2xl text-2xl md:text-7xl tracking-tighter font-bold max-md:font-extrabold font-sans">
        Become a Professional Artist
        </Highlight>
        <p className='text-xl font-semibold md:text-3xl md:ml-4 md:leading-tight md:tracking-wider max-md:text-center'>
            We help artists to professionally setup their <span className='md:block'></span> music profiles everywhere and <span className='md:block'></span>reach more audience.
        </p>
        <Button className='ml-4  tracking-wider rounded-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold p- py-6'>Get Started</Button>
        <ArrowDownCircle className="max-md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce " size={50}/>
    </div>
  )
}

export default HeroText