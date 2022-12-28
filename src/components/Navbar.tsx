import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo2 from "../assets/logo2.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <header>
      <nav
        className={
          fix
            ? "z-50 fixed top-0 w-full flex items-center justify-between h-max py-3 px-8 mx-auto backdrop-blur-sm bg-gray-600/80 text-white border-b border-red-400 border-opacity-30 transition-all md:items-center mbl:px-4"
            : "z-50 fixed top-0 w-full flex items-center justify-between h-24 py-3 px-8 mx-auto backdrop-blur-0 bg-gray-600/20 text-white border-b-2 border-transparent transition-all md:items-center mbl:px-4"
        }
      >
        <Link to="/">
          <img
            className="mbl:w-8"
            src={Logo2}
            width={40}
            alt="Nordician Logo"
          />
        </Link>
        <div
          className={
            togglerNav
              ? "mbl:absolute mbl:w-[28.5rem] mbl:top-[6.5rem] mbl:right-0 mbl:p-6 mbl:flex mbl:items-left mbl:flex-col mbl:gap-4 text-gray-300 font-nordica text-2xl bg-black md:flex md:items-center"
              : "hidden gap-4 text-gray-300 font-nordica text-2xl md:flex md:items-center"
          }
        >
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/mythology"
          >
            Mitologia
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/reality"
          >
            Realidade
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? <XMarkIcon width={27} /> : <Bars3Icon width={27} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
