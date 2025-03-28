import { cn } from "@/lib/utils";
import { Button } from "@repo/ui";
import { Spotify } from "react-spotify-embed";
import Navbar from "./Navbar";
import { Boxes } from "./ui/background-boxes";
import { ArrowDownCircle } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen relative w-full p-4 overflow-hidden bg-grey-800 flex flex-col items-center">
      <div className="absolute inset-0 w-full h-full bg-grey-800 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <Boxes />
      <Navbar />
      
     
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full max-w-7xl mx-auto mt-32   pb-24 md:pb-16">
        <div className="md:w-1/2 w-full space-y-5 px-2 z-20">
          <h1 className={cn("md:text-6xl lg:text-7xl font-bold text-3xl text-center md:text-left text-white")}>
            Elevate Your <span className="text-yellow-500">Musical Journey</span>
          </h1>
          <div className="text-base md:text-lg text-center md:text-left w-full md:w-5/6 text-neutral-300">
            Geetkar is a premier music label dedicated to discovering, developing and promoting exceptional musical talent across genres.
            
            <div className="flex flex-wrap  max-md:justify-center gap-4 mt-6 font-bold">
              <Button className="bg-yellow-500 hover:bg-yellow-600 transition-colors">Discover Our Artists</Button>
              <Button >Listen Now</Button>
            </div>
          </div>
        </div>
        
        
        <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0 mt-6 md:mt-0 z-20 mb-16 sm:mb-0 flex justify-center md:justify-start">
        {/* can use custom player later */}
          <Spotify link="https://open.spotify.com/album/5H5qWXVkPtu1TXb7sLfckt?si=9nfsG1AWRqG73p8PCM4leQ" />
        </div>
      </div>
      
      <div className="text-center z-20 w-full left-0 right-0 bottom-4 md:bottom-8 absolute">
        <h1 className="text-2xl  md:text-4xl lg:text-5xl font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
         <div> Our <span className="text-yellow-500">Services</span> </div>
          <ArrowDownCircle className="animate-bounce mt-1 md:mt-0" size={30} strokeWidth={1.5} />
        </h1>
      </div>
    </div>
  );
}