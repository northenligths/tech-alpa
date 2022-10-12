import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-300">
        <div className="flex items-center gap-4 px-6">
          <MdLocationOn className="text-3xl text-aqua" />
          <p>Vatu Vihar,Ram Nagar Varanasi</p>
        </div>
        <div className="flex items-center px-7 gap-4">
          <IoIosCall className="text-2xl" />: 12345678,23212543
        </div>
        <section className="flex items-center justify-center bg-slate-400 gap-2">
          Copyright <AiOutlineCopyright /> Tech-Alpa Software Solutions
        </section>
      </footer>
    </div>
  );
};
