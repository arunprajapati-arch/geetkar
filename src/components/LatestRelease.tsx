import Image from "next/image";
import { FaYoutube, FaSpotify, FaApple } from "react-icons/fa";

export default function LatestRelease() {
    return (
        <div className="h-full w-full p-4 flex flex-col justify-between">
            <h1 className="text-4xl font-bold">Latest Release</h1>
            <div className="flex justify-around items-center p-4 h-full">
                <div className="relative h-3/4 aspect-square overflow-hidden">
                    <Image className="rounded-lg"
                        src="https://marketplace.canva.com/EAF7ByCEv4s/1/0/1600w/canva-black-and-white-vintage-photocentric-hip-hop-album-cover-0FHtwVWQXj0.jpg" alt="Latest Release" fill />
                </div>
                <div className="flex flex-col justify-center gap-6 h-full">
                    <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                            <FaYoutube className="text-2xl" />
                            <h2 className="text-2xl font-bold">Watch on Youtube</h2>
                        </div>
                    </button>
                    <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                            <FaSpotify className="text-2xl" />
                            <h2 className="text-2xl font-bold">Listen on Spotify</h2>
                        </div>
                    </button>
                    <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-red-400 to-red-300 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                            <FaApple className="text-2xl" />
                            <h2 className="text-2xl font-bold">Listen on Apple Music</h2>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}