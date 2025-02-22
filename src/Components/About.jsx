import React from 'react'
import photo from "../assets/photo.png";
import { RiArrowDropRightFill } from '@remixicon/react';
const About = () => {
  return (
    <div id ="about" className="text-white md:flex w-full justify-between items-start px-10 md:px-20 md:py-6 bg-slate-800" >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">About</h2>
          <div className="flex gap-3 py-4">
              <RiArrowDropRightFill size={30} className="mt-1"/>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                   Education
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Basically I am pursuing my Btech in computer science engineering from Sushila Devi Bansal College Indore  with a CGPA of 7.6 .
                I completed my schooling from Shree academy MHOW.I got 84.8%in 12 standard and 86.8%in 10 standard. 
                </p>
              </span>
           </div>
           <div className="flex gap-3 py-4">
              <RiArrowDropRightFill size={30} className="mt-1"/>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                   I am a Frontend Developer skilled in HTML, CSS, JavaScript, Tailwind CSS and React, creating responsive and user-friendly web interfaces. I integrate RESTful APIs, ensure optimized performance, and write clean, scalable code. My experience with projects like ThoughtPut and knowledge of microservices architecture enhance my ability to build efficient, dynamic web applications.
                </p>
              </span>
           </div>
           <div className="flex gap-3 py-4">
              <RiArrowDropRightFill size={30} className="mt-1"/>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a Backend Developer skilled in building robust and scalable server-side applications. I work with Node.js, Express.js, MongoDB, and RESTful APIs to ensure efficient data handling and seamless communication between the frontend and backend. I focus on security, performance optimization, and creating reliable backend solutions for dynamic web applications.
                </p>
              </span>
           </div>
         </div>
        <div>
        <img  src={photo} alt="About img" />
        </div>
    </div>
  )
}

export default About
