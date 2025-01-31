
import ArtistPage from '@/components/ArtistPage/ArtistPage'
import prisma from '@/db'
// import prisma from '@/db'
import React from 'react'

interface artist {
  name: string
  links: link[]
}

interface link{
  platform: string
  link: string
}

 const page = async({params}:{params:{artist:string}}) => {
  const {artist} = await params;

    
  const artistDetails = {
    id: 'asdf',
    username: 'arun',
    name: 'Arun',
    password: 'as',
    profileImage: null,
    provider: 'Credentials',
    links: [
      { id: 'as', platform: 'YouTube', link: 'https://www.youtube.com/@SonySAB', artistId: 'asdf' },
      { id: 'as', platform: 'Spotify', link: 'https://www.youtube.com/@SonySAB', artistId: 'asdf' },
      { id: 'as', platform: 'Apple_Music', link: 'https://www.youtube.com/@SonySAB', artistId: 'asdf' },

    ]
  }
  // = await prisma.artist.findUnique({
  //   where:{username:artist},
  //   include: {links:true}
  // })
    
  console.log(artistDetails);
  
   
  return (
   
  <ArtistPage artistDetails = {artistDetails}/>
  )
}

export default page