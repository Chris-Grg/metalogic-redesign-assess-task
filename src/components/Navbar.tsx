import { useState } from "react";
import MetaLogo from "../../public/assets/metalogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <nav
      className="lg:flex justify-between gap-4 w-full
     text-white z-[1000] px-8 py-3 border-b contents-center fixed top-0 q
    border-color navbar border-transparent"
    >
      <a href="/" className="flex items-center gap-4">
        <img src={MetaLogo} className=" h-12 w-12" loading="lazy" />
        <div className="flex flex-col">
          <h1 className="flex text-3xl font-semibold tracking-widest">
            Metalogic
          </h1>
        </div>
      </a>
      <ul className="hidden lg:flex md:gap-6 lg:gap-8 font-semibold items-center cursor-pointer ">
        <li className="">
          <NavLink
            to={"/"}
            className={`pb-1 hover:border-red-600 ${
              activeLink === "home" ? "border-b-red-600" : ""
            } border-b-2 border-[rgb(0,0,0,0)] `}
            onClick={() => handleClick("home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`pb-1 hover:border-red-600 ${
              activeLink === "services" ? "border-b-red-600" : ""
            } border-b-2 border-[rgb(0,0,0,0)] `}
            onClick={() => handleClick("services")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/career"}
            className={`pb-1 hover:border-red-600 ${
              activeLink === "career" ? "border-b-red-600" : ""
            } border-b-2 border-[rgb(0,0,0,0)] `}
            onClick={() => handleClick("career")}
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blogs"}
            className={`pb-1 hover:border-red-600 ${
              activeLink === "blogs" ? "border-b-red-600" : ""
            } border-b-2 border-[rgb(0,0,0,0)] `}
            onClick={() => handleClick("blogs")}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`pb-1 hover:border-red-600 ${
              activeLink === "about" ? "border-b-red-600" : ""
            } border-b-2 border-[rgb(0,0,0,0)] `}
            onClick={() => handleClick("about")}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <button
        aria-label="hamburger menu"
        className="lg:hidden absolute right-3 top-4 text-secondary-400"
        onClick={() => setShow(!show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu "
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
      <div className="hidden lg:block">
        <a
          className="inline-flex items-center justify-center 
          whitespace-nowrap rounded-md text-sm font-medium transition-colors 
          focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 
          h-9 px-4 py-2 text-white bg-red-600"
          href="https://metalogic.com.np/contact"
        >
          Get in Touch
        </a>
      </div>
      <div
        className={`fixed z-[10000] h-screen w-screen pt-52 ${
          show ? "block" : "hidden"
        } text-black bg-white`}
      >
        <button
          className="absolute right-6 top-4"
          onClick={() => setShow(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x "
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <ul
          className="text-md flex flex-col gap-8 text-center font-semibold"
          onClick={() => setShow(false)}
        >
          <li>
            <NavLink to="/" className="Navbar_link__ambd4 null relative pb-1">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar_link__ambd4 null relative pb-1"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar_link__ambd4 null relative pb-1"
              to="/careers"
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar_link__ambd4 null relative pb-1"
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar_link__ambd4 Navbar_active__WxVct relative pb-1"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
