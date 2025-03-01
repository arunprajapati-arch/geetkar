import React from 'react'
import { Button } from '@repo/ui'



const Navbar = () => {
  return (
    <nav className='absolute z-50 flex justify-between items-center w-full px-4 md:px-8 py-8'>
        <h1 className='text-2xl md:text-4xl font-bold bruno-ace-sc-font'>Geetkar</h1>
        <div className='flex items-center gap-2 md:gap-4'>
        <Button className=' shadow-md shadow-black  md:text-lg font-semibold md:p-6   cursor-pointer'>Login</Button>
        </div>
    </nav>
  )
}

export default Navbar