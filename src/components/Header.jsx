import React, { useState, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [navBg, setNavBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 120) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    changeBgColor();
    window.addEventListener("scroll", changeBgColor);
  });
  return (
    <div className="relative">
      <header
        className={`flex justify-between z-50 ${
          navBg ? "" : "bg-aqua"
        } pb-4 pt-1 pl-2 pr-4 fixed w-full text-white`}
      >
        <div className="heading">
          <h1 className="text-2xl font-bold">TechAlpa</h1>
          <p className="text-xs">Top Class Software Solutions</p>
        </div>
        <div className="icons flex items-center gap-4">
          <IoIosCall className="text-2xl" />
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </header>
    </div>
  );
};

export default Header;
