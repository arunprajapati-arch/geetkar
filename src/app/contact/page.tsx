import { SparklesCore } from '@/components/ui/sparkles'
import { Instagram, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='w-full h-screen relative z-[100] bg-black flex flex-col gap-24 items-center md:justify-center p-8 font-sans' >
      <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full absolute -z-50`"
                        particleColor="#FFFFFF"
                      />
      <h1 className='text-yellow-400 font-bold text-4xl md:text-8xl '>Contact Us</h1>
      <div className='flex md:items-start justify-center z-[100] max-md:flex-col max-md:bg-neutral-900 max-md:p-8 rounded-2xl gap-20 '>
        <div className='flex flex-col items-center justify-center gap-8 '>
          <h2 className='text-2xl md:text-4xl text-yellow-400 font-semibold '>Contact Information</h2>
          <div className='flex flex-col gap-8 '>
          <span className='flex items-center gap-4 md:text-3xl'><Mail /><p> geetkar.in@gmail.com</p></span>
         <span className='flex items-center gap-4 md:text-3xl'> <MessageCircle /><p>+91 8077798874</p></span>
         </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 '>
          <h2 className='text-2xl md:text-4xl text-yellow-400 font-semibold '>Social Media</h2>
          <div className='flex flex-col gap-4'>
          <Link target='_blank' href="https://www.instagram.com/geetkar.in" className='  flex items-center gap-4 md:text-3xl'><Instagram /><p className='hover:text-yellow-400'>@geetkar.in</p></Link>
         {/* <span className='flex items-center gap-4 md:text-2xl'> <MessageCircle /><p>+91 8077798874</p></span> */}
         </div>
        </div>
      </div>
    </div>
  )
}

export default Contact