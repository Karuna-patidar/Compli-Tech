import React from 'react'
import ProjectCard from './ProjectCard'
import Blog from "../assets/Blog.png";
import Pdf from "../assets/Pdf.png";
import Exchange from "../assets/Exchange.png";

const Projects = () => {
  return (
    <div id="projects" className="text-white  w-full justify-between items-start px-10 md:px-20 bg-slate-800 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
      <ProjectCard
          image ={Blog}
          title="Blogging Website"
          main="A blog website is an online platform where users can create, share, and engage with written content. It features user management, post creation, comments, and social interactions, allowing readers to explore topics, leave feedback, and connect with authors."
          link="https://github.com/Karuna-patidar/MinorProject" 
        />
        <ProjectCard
           image ={Pdf}
           title="Pdf Merger"
           main="A PDF Merger website allows users to easily combine multiple PDF files into a single document. It offers a simple, user-friendly interface for uploading, rearranging, and merging PDFs while ensuring fast processing, security, and file privacy for a seamless user experience."
           link ="https://github.com/Karuna-patidar/Pdfmerger"
       />
       <ProjectCard
          image={Exchange}
          title = "Exchange website"
          main ="An exchange website enables users to trade assets such as currencies, cryptocurrencies, or goods securely and efficiently. It offers features like real-time pricing, secure transactions, user accounts, and transaction history, ensuring a seamless and reliable trading experience."
          link="https://github.com/Karuna-patidar/Exchange"
       />
    </div>
    </div>
  )
}

export default Projects
