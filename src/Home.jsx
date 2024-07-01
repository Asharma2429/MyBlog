import React , {Component } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Navigation";
import { Slider } from "./Slider";
import { About } from "./About";
import { Contact } from "./Contact";

import {Testimonials} from "./Testimonials";

function Home() 
{
    return(
       <>
    <Nav/>
    <Testimonials/>
    <About/>
      <Contact/>
    <Footer/>    
  
    </>
    )
    
}
export{Home}