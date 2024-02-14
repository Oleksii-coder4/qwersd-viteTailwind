import { useState } from "react";
import { navLinks } from "../constants";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:mx-auto relative ">
      <ul className="max-lg:hidden flex flex-1 justify-center items-center gap-16 ">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleMenu}
        className={`hidden max-lg:flex justify-center items-center flex-col w-10 h-10 transition-all duration-75 ${
          isOpen ? "rotate-[720deg]" : ""
        }`}
      >
        <span
          className={`w-8 h-1 bg-black inline-block m-0.5 rounded transition-all ${
            isOpen
              ? "rotate-45 translate-y-1 bg-coral-red rounded-none scale-110"
              : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black inline-block m-0.5 rounded transition-all duration-500 ${
            isOpen ? "opacity-0 hidden " : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black inline-block m-0.5 rounded transition-all  ${
            isOpen
              ? "rotate-[-45deg] -translate-y-1 bg-coral-red rounded-none scale-110"
              : ""
          }`}
        ></span>
      </button>
      <ul
        className={`lg:hidden flex justify-center items-center flex-col w-max right-2  border-black rounded-sm p-2 ${
          isOpen ? "absolute" : "hidden"
        }`}
      >
        {navLinks.map((item) => (
          <li
            key={item.label}
            className="flex justify-center border-b-[1px] last:border-none border-black w-full max-md:p-1.5 p-0.5"
          >
            <a
              href={item.href}
              className="max-md:text-sm font-montserrat leading-normal text-base text-slate-gray font-semibold"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
