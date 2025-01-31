import React from 'react'
import { Button } from './ui/button'
import {  Highlight } from "@/components/ui/hero-highlight";
import { ArrowDownCircle } from 'lucide-react';
import Image from 'next/image';
import diskImage from "@/assets/disk.png"
import { SparklesCore } from './ui/sparkles';
import Link from 'next/link';


const HeroText = () => {
  

  return (
    <div className=' w-full  md:h-[89vh] relative  flex items-center justify-between '>
       {/* <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full absolute -z-50`"
                  particleColor="#FFFFFF"
                /> */}
        {/* <h1 className=' inline-block  p-3 md:p-4 rounded-2xl text-black bg-yellow-500 text-2xl md:text-8xl tracking-tighter font-bold max-md:font-extrabold font-sans'>Become a Professional Artist</h1> */}
      <div className=' space-y-8 h-2/3  flex flex-col max-md:mt-10 max-md:items-center justify-center  md:px-12  '>
        <Highlight className="text-black p-3 rounded-xl md:rounded-2xl text-2xl md:text-7xl tracking-tighter font-bold max-md:font-extrabold font-sans ">
        Become a Professional Artist
        </Highlight>
        <p className='text-xl font-semibold md:text-3xl md:ml-4  md:leading-tight md:tracking-wider max-md:text-center '>
            We help artists to professionally setup their <span className='md:block'></span> music profiles everywhere and <span className='md:block'></span>reach more audience.
        </p>
        <Link href={'/contact'} className=''>
        <Button className=' ml-4 tracking-wider rounded-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold  py-6'>Contact Us</Button>
        </Link>
        <ArrowDownCircle className="max-md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce " size={50}/>
        </div>
        {/* <div className='relative mr-28 max-md:hidden'>
          <Image
          src={diskImage}
          alt="alt"
          className='h-[32rem] w-[32rem] animate-pulse'
          />
        </div> */}
    </div>
  )
}

export default HeroText