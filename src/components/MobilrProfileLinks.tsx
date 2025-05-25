import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from "next/link";
import { FaApple, FaLink, FaSpotify, FaYoutube } from "react-icons/fa";

export default function MobileProfileLinks() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-lg font-semibold bg-yellow-500 text-black rounded-full p-2 px-4 flex items-center gap-2 ">Links
                    <FaLink className="text-lg" />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Profile Links</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                <div className="flex flex-col  justify-center p-4 px-12 flex-wrap gap-4  ">
                    <button className="flex items-center justify-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaYoutube className="text-2xl" />
                        Youtube</button>
                    <button className="flex items-center justify-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaSpotify className="text-2xl" />
                        Spotify</button>
                    <button className="flex items-center justify-center gap-2 p-4 px-6 rounded-xl md:text-2xl bg-gradient-to-r from-red-400 to-red-300 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                        <FaApple className="text-2xl" />
                        Apple Music</button>
                        
                </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}