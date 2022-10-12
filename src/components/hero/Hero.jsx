import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero bg-aqua text-white text-center text-2xl font-bold pt-10 pb-20">
      <div className="">
        Software Development & <br />
        Support Services For <br />
        Your Business
      </div>
      <button className="my-8 border-2 border-red-400 rounded-2xl px-4 py-4">
        Get Consulted Now
      </button>
    </section>
  );
};

export default Hero;
