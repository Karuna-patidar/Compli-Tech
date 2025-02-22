import React from 'react'
import AboutUs from "../assets/AboutUs.png";
import { RiArrowDropRightFill } from '@remixicon/react';
const About = () => {
  return (
    <div id="about" className="text-white md:flex w-full justify-between items-start px-10 md:px-28 bg-slate-800" >
      <div className="md:w-full pt-10">
        <h2 className="text-2xl md:text-4xl font-bold">About Us</h2>
        <div className="flex gap-2 py-4">
          <RiArrowDropRightFill size={30} className="mt-1" />
          <span className="">
            <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
              Who We Are
            </h1>
            <p className="text-lg m-2 md:text-md leading-tight">
              We are a team of compliance and digital experts dedicated to simplifying business complexities.
              From company incorporation and legal filings to building your digital presence, Compli-Tech ensures entrepreneurs can focus on scaling their vision while we handle the rest.
              Our mission is to provide reliable, transparent, and hassle-free solutions that help businesses grow without barriers.
            </p>
          </span>
        </div>
        <div className="flex gap-2 py-4">
          <RiArrowDropRightFill size={30} className="mt-1" />
          <span className="">
            <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
              What We Do
            </h1>
            <p className="text-lg m-2 md:text-md leading-tight">
              We provide end-to-end solutions including company incorporation,
              tax & GST filings, trademark registration, website designing,
              branding, social media content creation, and professional reel editing —
              everything your business needs to stay sorted from A–Z. With Compli-Tech, you get more than just compliance;
              you get a partner who understands your entrepreneurial journey and supports you every step of the way.
            </p>
          </span>
        </div>
        <div className="flex gap-2 py-4">
          <RiArrowDropRightFill size={30} className="mt-1" />
          <span className="">
            <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
              Why Choose Us
            </h1>
            <p className="text-lg m-2 md:text-md leading-tight">
              Because we don’t just manage compliance — we unlock growth.
              Our approach blends legal expertise with modern digital solutions, ensuring you save time,
              reduce stress, and focus on what truly matters: your business. With reliable support,
              streamlined processes, engaging content, and a forward-looking mindset,
              Compli-Tech helps your business stay compliant, competitive, and ahead of the curve.
            </p>
          </span>
        </div>
      </div>
      <div className="pt-4 md:pt-40 justify-center items-center" >
        <img className=" md:m-5 p-5  md:p-0 rounded-3xl  md:rounded-lg border-x-slate-900" src={AboutUs} alt="About" img />
      </div>
    </div>
  )
}

export default About
