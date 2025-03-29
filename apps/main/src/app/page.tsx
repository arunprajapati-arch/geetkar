// "use client";
import React from "react";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import GetinTouch from "@/components/GetinTouch";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Hero/>
      <Services/>
      <GetinTouch/>
      <Footer/>
    </div>
  );

}

