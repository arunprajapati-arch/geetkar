"use client"
import Image, { StaticImageData } from 'next/image';
import ytLogo from '@/assets/youtube(6).png'
import spotiLogo from '@/assets/spotify(3).png'
import appleMusicLogo from '@/assets/apple-music(3).png'
import Link from 'next/link';
import { $Enums } from '@prisma/client';
import { Square } from 'lucide-react';

interface props {
    platform: string
    link: string 
}



const SocialIcons = ({platform, link}: props) => {
  let logo:StaticImageData;

if(platform === $Enums.Platform.YouTube ) logo = ytLogo
  else if(platform === $Enums.Platform.Spotify) logo = spotiLogo
    else if(platform === $Enums.Platform.Apple_Music) logo = appleMusicLogo
      else return

  return (
    <div className='flex flex-col items-center justify-center gap-2 '>
      <Link href={link} target='_'>
      <Image className='' src={logo}alt='e'height={1}width={40} />
      </Link>
      {/* <span className='text-xs text-gray-400 '>1 M</span> */}
    </div>
  )
}

export default SocialIcons