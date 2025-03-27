// "use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import {Button} from "@repo/ui";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full p-4 overflow-hidden bg-grey-800 flex flex-col justify-center items-center  rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-grey-800 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <Navbar />
      <div className="flex justify-around w-full">
        <div className="w-2/5 ">
        <h1 className={cn("md:text-7xl font-bold text-xl text-white relative z-20")}>
          Elevate Your <span className="text-yellow-500"> Musical Journey </span>
        </h1>
        <p className="text-left text-xl mt-2 w-4/5 text-neutral-300 relative z-20">
          Geetkar is a premier music label dedicate to discovering, developing and promoting exceptional musical talent across genres.
          <div className="flex gap-5 mt-4 z-50 font-bold">
          <Button className="bg-yellow-500">Discover Our Artists</Button>
          <Button>Listen Now</Button>
        </div>
        </p>
       
        </div>
        <div>
          //spotify player
        </div>
      </div>
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}

export default BackgroundBoxesDemo;