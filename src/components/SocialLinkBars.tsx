import React from 'react'
import Image, { StaticImageData } from 'next/image';
import ytLogo from '@/assets/youtube(6).png'
import spotiLogo from '@/assets/spotify(3).png'
import appleMusicLogo from '@/assets/apple-music(3).png'
import { $Enums } from '@prisma/client';
import Link from 'next/link';
interface props {
    platform: string
    link: string 
}


const SocialLinkBars = ({platform, link}: props) => {
     let logo:StaticImageData;
    if(platform === $Enums.Platform.YouTube ) logo = ytLogo
  else if(platform === $Enums.Platform.Spotify) logo = spotiLogo
    else if(platform === $Enums.Platform.Apple_Music) logo = appleMusicLogo
      else return
  return (
    <Link href={link} target='_'>
       <div className=' border border-green-500  text-white p-4 font-bold rounded-full flex items-center justify-between px-6  '>
        {platform === 'YouTube'?"Watch":"Listen"} on {platform}
        <Image src={logo}alt='e'height={30}width={30}/>
       </div>
       </Link>
  )
}

export default SocialLinkBars