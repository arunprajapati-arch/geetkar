import Image from 'next/image'
import React from 'react'

type Props = {}

const FeaturedRelease = (props: Props) => {
  return (
    <div className='relative w-[20rem] md:w-[36rem] max-md:h-52 h-72 rounded-xl overflow-hidden'>
        <Image
        className=''
        src={'https://images.unsplash.com/photo-1735527919007-3ba8d909049e'}
        alt='alt'
        
        fill
        />
    </div>
  )
}

export default FeaturedRelease