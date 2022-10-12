import React, { useState, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { AiOutlineClose } from "react-icons/ai";

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
        className={`flex justify-between z-50  ${
          navBg || menuOpen ? "text-black" : "bg-aqua text-white"
        } pb-4 pt-1 pl-2 pr-4  w-full`}
      >
        <div className="heading">
          <h1 className="text-2xl font-bold">TechAlpa</h1>
          <p className="text-xs">Top Class Software Solutions</p>
        </div>

        <div className="icons flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4 font-bold- text-lg">
            <li>Industries</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>On-Demand Developers</li>
          </ul>
          <IoIosCall className="text-2xl" />
          {menuOpen ? (
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
      </header>
      {menuOpen && <Menu />}
    </div>
  );
};

export default Header;
