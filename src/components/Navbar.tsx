import localFont from 'next/font/local';
import { Button } from './ui/button';

const downcomeFont = localFont({
    src: "../fonts/DOWNCOME.woff",
});

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between md:p-4 py-6 ">
        <h1 className={` ${downcomeFont.className} text-4xl md:text-7xl text-yellow-400 relative z-20"`}>
        GEETKAR
      </h1>
        <Button className='bg-yellow-400 rounded-full text-black text-md md:text-lg font-semibold p-2 md:px-4 md:py-6 hover:bg-yellow-500'>Create Profile</Button>
    </div>
  )
}

export default Navbar