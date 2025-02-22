import React from "react";

const ProjectCard = ({ title, main, image , link }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-52 md:w-96 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 h-64 w-80" src={image} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        <button className="mt-2 w-32 text-white py-2 px-2 text-sm  hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <a href={link} target="_blank" >
              Source Code
         </a>
        </button>
    </div>
  );
};

export default ProjectCard;