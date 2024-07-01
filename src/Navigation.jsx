import React from "react";
import blog from "./image/blog.png";



function Nav()
{
    return(
        <>
        <div className="nav" id="header">
            <div className="container">
                <div className="nav-in">

                <div className="image">
                    <img src={blog} alt="blog" />
                    </div>

                    <div class="menubar">
                    
                    <div class="bar">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    
                    <div className="list">

                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="/Testimonials"><li>Me</li></a>
                        <a href="#About"><li>About</li></a>
                        <a href="#contact"><li>Contact</li></a>
                        <a href="/Footer"><li>Footer</li></a>
                        <a href="/"><li>Log out</li></a>
                    </ul>
                    </div>
                    </div>

               

                </div>

            </div>

        </div>
        
        </>
        
    )
    
}
export{Nav}