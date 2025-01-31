import React from 'react'
import PricingCard from './PricingCard'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Switch } from '@radix-ui/react-switch'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className=' w-full min-h-96 max-md:mt-4 pb-4  text-black bg-yellow-500/90 rounded-3xl'>
       
        <div className=' flex flex-col  justify-center items-center gap-16'>
        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
        <h1 className='text-black  text-2xl md:text-7xl  max-md:tracking-tight font-serif font-bold '>Explore our <span className='text-white'> Subscription Plans</span></h1>
        <h2 className='text-white md:text-2xl'>No contract or credit card required</h2>
        <div className="hidden">
            {"Monthly/yearly"}
        </div>
        </div>
        <div className='flex max-md:flex-col items-center justify-center md:justify-evenly gap-10  w-full'>
            <PricingCard title={"Starter"} price={299}/>
            <PricingCard title={"Pro"} price={499}/>
            <PricingCard title={"Ultimate"} price={999}/>
        </div>
        </div>
    </div>
  )
}

export default Pricing