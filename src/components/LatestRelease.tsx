import Image from "next/image";
import { FaYoutube, FaSpotify, FaApple, FaList } from "react-icons/fa";
import MobileTrackList from "./MobileTrackList";

export default function LatestRelease() {
    return (
        <div className="md:h-full w-full p-4 flex flex-col  justify-between gap-8 ">
            <div className="flex flex-wrap justify-between items-center gap-2">
            <h1 className="text-2xl md:text-4xl font-bold ">Latest Release</h1>
           <MobileTrackList />
            </div>
            <div className="flex md:flex-row flex-col justify-evenly items-center gap-8  md:h-full ">
                <div className="relative h-2/3 max-md:w-4/5 max-xl:w-2/4   2xl:h-3/4 aspect-square overflow-hidden">
                    <Image className="rounded-lg object-contain "
                        src="https://marketplace.canva.com/EAF7ByCEv4s/1/0/1600w/canva-black-and-white-vintage-photocentric-hip-hop-album-cover-0FHtwVWQXj0.jpg" alt="Latest Release" fill />
                </div>
                <div className="flex flex-col gap-4  ">
                    <button className="md:text-2xl flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaYoutube className="text-2xl" />
                        Watch on Youtube</button>
                    <button className="md:text-2xl flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaSpotify className="text-2xl" />
                        Listen on Spotify</button>
                    <button className="md:text-2xl flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-red-400 to-red-300 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaApple className="text-2xl" />
                        Listen on Apple Music</button>
                        
                </div>
            </div>
        </div>
    );
}