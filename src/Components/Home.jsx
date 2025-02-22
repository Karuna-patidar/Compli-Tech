import React from 'react';
import CompliTech from "../assets/Compli-Tech.png";
import TextChange from './Text';

const Home = () => {
  return (
    <div id="home" className="text-white md:flex w-full justify-between items-start px-10 md:px-28  bg-slate-800">
      <div className="md:w-full pt-14">
        <h1 className="text-xl  md:text-4xl mb-6 font-bold flex leading-normal tracking-tighter"> Hello,<TextChange /> </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Welcome to Compli-Tech – your trusted partner for business compliance and growth.
          From company registration and tax filings to trademark protection and digital presence,
          we handle it all so you can focus on building your success. We take the complexity out of compliance and turn it into clarity,
          helping businesses move forward without roadblocks.
          With end-to-end solutions – from incorporation and legal filings to website design and branding – we keep your business sorted from A–Z.
          At Compli-Tech, you don’t just stay compliant, you stay ahead.
        </p>
        <button className="mt-10 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#fca906]">
          <a href="https://www.instagram.com/compli__tech?igsh=Zzh6YjRjd2xwbWht" target="_blank">
            Contact Us
          </a>
        </button>
      </div>
      <div className="justify-center items-center">
        <img className=" md:m-5 p-5  md:p-0 rounded-3xl  md:rounded-lg border-x-slate-900" src={CompliTech} alt="Company" />
      </div>
    </div>
  )
}

export default Home
