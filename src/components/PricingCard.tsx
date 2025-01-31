import React from 'react'
import { Meteors } from './ui/meteors'

type Props = {
    title:string
    price: number
}

const PricingCard = ({title,price}: Props) => {
  return (
    <div className=" ">
    <div className=" w-72 md:w-[20vw] relative  h-96">
      <div className="relative shadow-xl bg-black border border-gray-800   px-4 py-8 h-full overflow-hidden  rounded-xl flex flex-col justify-between items-start">
       
        <div className='self-center flex flex-col items-center gap-4 relative z-50 mb-4'>
            <h1 className="font-bold text-4xl text-yellow-500   ">
                {title}
            </h1>
            <h4 className='text-white text-2xl'>&#8377;{price}/months</h4>
        </div>
        <div className='mb-4 relative z-50 space-y-4'>
        <p className="font-normal text-md text-slate-300 ">&#8226; Free distribution for upto 3 songs</p>
        <p className="font-normal text-md text-slate-300 ">&#8226; Posters</p>
        <p className="font-normal text-md text-slate-300 ">&#8226; Visualizers not included</p>
        <p className="font-normal text-md text-slate-300 ">&#8226; No dedicated artist management team or release planning</p>
        </div>
        {/* <button className="border hover:bg-yellow-500 px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
          Explore
        </button> */}

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
  )
}

export default PricingCard