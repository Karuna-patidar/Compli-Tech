import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
     id="contact"
      className="flex justify-around bg-slate-700 text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
           Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:compli.tech.01@gmail.com" target="_blank"> compli.tech.01@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiInstagram />
          <a href ="https://www.instagram.com/compli__tech?igsh=Zzh6YjRjd2xwbWht" target="_blank">Instagram : Compli__Tech</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;