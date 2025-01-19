import Image from 'next/image'
import React from 'react'

type Props = {}

const LatestRelease = (props: Props) => {
  return (
    <div className='relative w-full max-md:h-[28%] h-2/3 rounded-xl overflow-hidden'>
        <Image
        className=''
        src={'https://images.unsplash.com/photo-1735527919007-3ba8d909049e'}
        alt='d'
        
        fill
        />
    </div>
  )
}

export default LatestRelease