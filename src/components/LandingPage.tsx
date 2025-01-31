
import { ArrowDownCircle } from 'lucide-react'
import HeroText from './HeroText'
import Navbar from './Navbar'
import Pricing from './Pricing'
import { Meteors } from './ui/meteors'
import { SparklesCore } from './ui/sparkles'



type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='bg-black w-full relative' >
        {/* <Meteors className=' ' number={20} /> */}
      
        <div className='px-4 overflow-x-hidden relative'>
        <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full absolute -z-50`"
                  particleColor="#FFFFFF"
                />
        <Navbar/>
        <HeroText/>
        </div>
        <Pricing/>
        {/* <div className='w-full h-screen bg-black '>
        
        </div> */}
    </div>
    
  )
}

export default LandingPage