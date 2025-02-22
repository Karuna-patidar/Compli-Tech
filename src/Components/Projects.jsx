import React from 'react'
import ProjectCard from './ProjectCard'
import Startup from "../assets/Startup.png";
import Company from "../assets/1.png";
import Website from "../assets/Website.png";
import Gst from "../assets/Gst.png";
import Graph from "../assets/Graph.png";
import MsMe from "../assets/MsMe.png";
import Design from "../assets/Desgin.png";
import Trade from "../assets/Trade.png";
import Strike from "../assets/Strike.png";
import Income from "../assets/Income.png";
import Band from "../assets/Band.png";
import Draft from "../assets/Draft.png";
import EComm from "../assets/E-comm.png";
import Digital from "../assets/Digital.png";
import Roc from "../assets/Roc.png";

const Projects = () => {
   return (
      <div id="projects" className="text-white  w-full justify-between items-start px-10 md:px-20 bg-slate-800 pt-14 ">
         <h1 className="text-2xl md:text-4xl text-white font-bold">Services</h1>
         <br></br>
         <h1 className="text-xl md:text-2xl text-white font-bold">Compliance & Legal Service and Digital & Branding Services </h1>
         <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
            <ProjectCard
               image={Startup}
               title="Startup Consultancy & Advisory"
               main="Guidance on structure, funding, and compliance to grow your startup smoothly."
            />
            <ProjectCard
               image={Company}
               title="Company Incorporation (Pvt Ltd, LLP, OPC, Partnership)"
               main="We register your company legally so you can start business without confusion."
            />
            <ProjectCard
               image={Website}
               title="Website Designing & Development"
               main="Create modern, responsive websites that build trust, credibility, and lasting relationships with your audience, enhance user experience, and drive business growth."
            />

         </div>
         <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
            <ProjectCard
               image={Gst}
               title="GST Registration & Filings"
               main="We help you get GST registered and manage your monthly/quarterly filings on time — keeping your business compliant and penalty-free."

            />
            <ProjectCard
                image={Graph}
               title="Graphic Designing"
               main="Stunning visuals for social media, marketing, promotions, and brand identity that capture attention instantly.
          Bold and memorable visuals for marketing, social media, and promotions that elevate your brand presence."

            />
            <ProjectCard
                   image={MsMe}
               title="MSME / Udyam Registration"
               main="Register as an MSME to unlock government benefits & subsidies."

            />
            <div />
         </div>
         <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
            <ProjectCard
                  image={Design}
               title="Logo Designing & Brand Identity"
               main="Craft a unique logo and consistent branding to stand out."

            />
            <ProjectCard
                  image={Trade}
               title="Trademark Registration & Protection"
               main="Protect your brand name, logo, or tagline legally so no one can copy it."

            />
            <ProjectCard
                  image={Strike}
               title="Strike Off / Winding Up of Company"
               main="We help close down inactive companies in a proper legal way."

            />
         </div>
         <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
            <ProjectCard
                  image={Income}
               title="Income Tax Filing & Advisory"
               main="We ensure smooth ITR filing and provide expert advice to save tax legally"

            />

            <ProjectCard
                image={Band}
               title="Customized Product Branding (Packaging, Labeling, Creatives)"
               main="Give your products a professional & attractive look with unique packaging & labels."

            />
            <ProjectCard
                image={Draft}
               title="Drafting Legal Documents (MOA, AOA, Agreements, NDAs)"
               main="Get professional legal documents drafted for your business needs."

            />
         </div>
         <div className="py-8 px-8 md:flex space-y-5 md:space-y-0  gap-5">
            <ProjectCard
                image={EComm}
               title="E-commerce Website Setup"
               main="Launch your online store with product listings, payments, and order management."

            />

            <ProjectCard
                image={Digital}
               title="Digital Signature Certificate (DSC) issuance"
               main="Get a government-approved digital signature to securely sign and submit your online filings."

            />
            <ProjectCard
               image={Roc}
               title="ROC Related Filings (Annual returns, statutory filings)"
               main="We handle your company’s mandatory yearly filings with MCA to avoid penalties."

            />
         </div>
      </div>
   )
}

export default Projects
