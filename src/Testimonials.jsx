import React from "react";
import test from "./image/ankit.png";

function Testimonials() {
  return (
    <>
      <div className="test">
        <div className="container">
          <div className="test-in">
         
            <br />
            <h1>THE BLOG</h1>
            <br />

            <img src={test} alt="test" />

            <div className="ptag">
              <p>
                My name is <strong>Ankit Sharma</strong> <br/> I live in Jaipur, I have done my
                Bachelors degree from Rajasthan University in Commerce And <br /> I am
                currently pursuing my MBA from Maharshi Dayanand University
                with the specialisation of IT and Marketing in Gurgaon <br /> My
                strengths are , I am hard working , quick learner, and self
                motivated person My hobbies are playing cricket , and listening
                music
              </p>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Testimonials };
