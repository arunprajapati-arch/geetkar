
import HeroText from './HeroText'
import Navbar from './Navbar'
import Pricing from './Pricing'
import { Meteors } from './ui/meteors'



type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='bg-black w-full relative' >
        <Meteors className=' ' number={20} />
        <div className='px-4'>
        <Navbar/>
        <HeroText/>
        </div>
        <Pricing/>
    </div>
    
  )
}

export default LandingPage