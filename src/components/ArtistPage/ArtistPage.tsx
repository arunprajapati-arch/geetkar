
import { $Enums } from '@prisma/client';
import ytLogo from '@/assets/youtube(6).png'
import spotiLogo from '@/assets/spotify(3).png'
import appleLogo from '@/assets/apple-music(3).png'
import verifyLogo from '@/assets/verified.png'
import React from 'react'
import UserImage from './UserImage';
import { YoutubeIcon } from 'lucide-react';
import FeaturedRelease from './FeaturedRelease';
import Image from 'next/image';
import { SparklesCore } from "../ui/sparkles";
import { Spotlight } from '../ui/spotlight';
import SocialIcons from './SocialIcons';
import SocialLinkBars from '../SocialLinkBars';

type Artist = {
  name: string;
  id: string;
  username: string;
  password: string | null;
  profileImage: string | null;
  provider: $Enums.Provider;  // Assuming Provider is an enum
  links: Link[];  // Array of links
};

type Link = {
  link: string;
  id: string;
  platform: $Enums.Platform;  // Assuming Platform is an enum
  artistId: string | null
};

type ArtistDetails = Artist | null;


const ArtistPage = ({artistDetails}: {artistDetails: ArtistDetails}) => {
 
   
    if (!artistDetails)return
    
  return (
    <div className='w-full  overflow-y-hidden relative  bg-black flex  justify-center '>
      {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute"
          particleColor="#FFFFFF"
        /> */}
         <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-72"
        fill="white"
      />
    <div className='h-screen md:min-h-screen w-full md:w-2/5   p-4 flex flex-col items-center gap-8  '>
      <div className='flex flex-col items-center justify-center gap-4'>
        <UserImage url={artistDetails?.profileImage}/>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold flex items-center gap-1 '>{artistDetails?.name} Prajapati <Image className='' src={verifyLogo}alt='e'height={1}width={16}/></h1>
          <h2>@{artistDetails?.username}</h2>
       </div>
      </div>
       <div className='flex items-center justify-center gap-8  '>
      {artistDetails.links && 
      artistDetails.links.map((link, idx) => (
        <div key={idx}>
          <SocialIcons  platform = {link.platform} link={link.link} />
        </div>
      ))}
      
       </div>
       <div className=''>
       {/* <FeaturedRelease/> */}
       </div>
       <div className='flex flex-col  justify-center w-full px-10 gap-4'>
       {artistDetails.links && 
      artistDetails.links.map((link, idx) => (
        <div key={idx}>
          <SocialLinkBars  platform = {link.platform} link={link.link} />
        </div>
      ))}
       </div>
    </div>
    </div>
  )
}

export default ArtistPage