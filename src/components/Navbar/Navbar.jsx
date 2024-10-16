import React, { useState } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Services", link: "/#services" },
    { id: 3, name: "About", link: "/#about" },
  ];

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>

          {/* Hamburger Icon for mobile view */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className={`flex items-center gap-4 ${
              isOpen ? "block" : "hidden sm:flex"
            }`}
          >
            <ul className="flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Order Button Section */}
            <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-2">
              Order
              <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 text-white ${
          isOpen ? "block" : "hidden"
        } sm:hidden`}
      >
        <ul className="flex flex-col items-center gap-2 py-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="text-xl py-2 text-white/70 hover:text-white duration-200"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {menu.name}
              </a>
            </li>
          ))}
          {/* Mobile Order Button */}
          <li>
            <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-2">
              Order
              <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
