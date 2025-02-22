import React from 'react' ;
import picture from "../assets/picture.png";
import TextChange from './Text';

const Home = () => {
  return (
    <div  id="home" className="text-white md:flex w-full justify-between items-start px-10 md:px-28 bg-slate-800">
    <div className="md:w-2/4 md:pt-10">
          <h1 className="text-xl md:text-4xl mb-6 font-bold flex leading-normal tracking-tighter"> Hello,<TextChange/> </h1>
          <p className="text-sm md:text-2xl tracking-tight ">
          Computer Science student with strong MERN stack proficiency. 
          Experienced in full-stack web development, RESTful APIs, and version control. 
          Demonstrates excellent organizational, problem-solving, and attention to detail skills.
          Strong verbal communication and adaptability in fast-paced environments. 
          Seeking an entry-level Full Stack or Backend Developer role to apply technical knowledge and abilities in a dynamic setting.
        </p>
        <button className="mt-8 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="https://www.linkedin.com/in/karuna-patidar-3b66a6236/"  target="_blank">
          Contact Me
          </a>
        </button>
      </div>
      <div>
         <img src={picture} alt="Avatar" />
      </div>
    </div>
  )
}

export default Home
