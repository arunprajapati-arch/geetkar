import { FaYoutube, FaSpotify, FaApple } from "react-icons/fa";

export default function ProfileLinks() {
    return (
        <div className="flex flex-col w-full  gap-12 ">
            <h1 className="text-2xl font-bold">Profile Links</h1>
            {/* <div className="flex w-full justify-center gap-8 flex-wrap items-center">
                <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-3">
                        <FaYoutube className="text-2xl" />
                        <h2 className="text-2xl font-bold">Youtube</h2>
                    </div>
                </button>
                <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-3">
                        <FaSpotify className="text-2xl" />
                        <h2 className="text-2xl font-bold">Spotify</h2>
                    </div>
                </button>
                <button className="group relative px-12 py-4 rounded-xl bg-gradient-to-r from-red-400 to-red-300 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-3">
                        <FaApple className="text-2xl" />
                        <h2 className="text-2xl font-bold">Apple Music</h2>
                    </div>
                </button>
            </div> */}
              <div className="flex flex-wrap gap-4  ">
                    <button className="flex items-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaYoutube className="text-2xl" />
                        Youtube</button>
                    <button className="flex items-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaSpotify className="text-2xl" />
                        Spotify</button>
                    <button className="flex items-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-red-400 to-red-300 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaApple className="text-2xl" />
                        Apple Music</button>
                        
                </div>
        </div>
    );
}