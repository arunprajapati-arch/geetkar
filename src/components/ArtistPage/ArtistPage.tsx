"use client"
import { $Enums } from '@prisma/client';
import ytLogo from '@/assets/youtube(6).png'
import spotiLogo from '@/assets/spotify(3).png'
import appleLogo from '@/assets/apple-music(3).png'
import verifyLogo from '@/assets/verified.png'
import React from 'react'
import UserImage from './UserImage';
import { YoutubeIcon } from 'lucide-react';
import LatestRelease from './LatestRelease';
import Image from 'next/image';
import { SparklesCore } from "../ui/sparkles";
import { Spotlight } from '../ui/spotlight';

type Artist = {
  name: string;
  id: string;
  username: string;
  password: string | null;
  profileImage: string | null;
  provider: string;  // Assuming Provider is an enum
  links: Link[];  // Array of links
};

// $Enums.Platform
type Link = {
  link: string;
  id: string;
  platform: string;  // Assuming Platform is an enum
  artistId: string | null;
};

type ArtistDetails = Artist | null;


const ArtistPage = ({artistDetails}: {artistDetails: ArtistDetails}) => {
 
    console.log(artistDetails+"in artst page");
    
  return (
    <div className='w-full relative   flex  justify-center '>
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
        className="-top-40 left-0 md:left-80 md:-top-72"
        fill="white"
      />
    <div className=' h-screen w-full md:w-2/5   p-4 flex flex-col items-center    gap-8  '>
      <div className='flex flex-col items-center justify-center gap-4'>
        <UserImage url={artistDetails?.profileImage}/>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold flex items-center gap-1 '>{artistDetails?.name} Prajapati <Image className='' src={verifyLogo}alt='e'height={1}width={16}/></h1>
          <h2>@{artistDetails?.username}</h2>
       </div>
      </div>
       <div className='flex items-center justify-center gap-8  '>
        <span className='flex flex-col items-center justify-center gap-2 '><Image className='' src={ytLogo}alt='e'height={1}width={40}/><span className='text-xs text-gray-400 '>1 M</span></span>
        <span className='flex flex-col items-center justify-center gap-2'><Image src={spotiLogo}alt='e'height={40}width={40}/><span className='text-xs text-gray-400 ' >2 M</span></span>
        <span className='flex flex-col items-center justify-center gap-2'><Image src={appleLogo}alt='e'height={40}width={40}/><span className='text-xs text-gray-400'>100k</span></span>
        
       </div>
       <LatestRelease/>
       <div className='flex flex-col  justify-center w-full px-10 gap-4'>
       <div className='bg-black border border-green-500  text-white p-4 font-bold rounded-full flex items-center justify-between px-6  '>
        Listen on Spotify
        <Image src={spotiLogo}alt='e'height={30}width={30}/>
       </div>
       <div className='border border-red-500 text-white p-4   font-bold rounded-full flex items-center justify-between px-6 '>
        Watch on Youtube
        <Image src={ytLogo}alt='e'height={30}width={30}/>
       </div>
       </div>
    </div>
    </div>
  )
}

export default ArtistPage