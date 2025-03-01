import Image from 'next/image'
import React from 'react'


const Background = () => {
  return (
    <div className='relative h-screen w-full -z-50 '>
        <Image
        className='object-center object-cover'
        src='/bg2.jpg'
        alt='background image'
        fill
        />
    </div>
  )
}

export default Background