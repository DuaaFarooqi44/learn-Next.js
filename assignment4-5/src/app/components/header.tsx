"use client";  // Required for Next.js client-side rendering

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 flex justify-between items-center h-20 p-4">
      {/* Left Section: Logo and Hamburger Menu */}
      <div className="flex items-center">
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="text-yellow-500 ml-4 font-semibold text-3xl">MyStore</p>
      </div>

      {/* Middle Section: Search Bar (Visible on all screen sizes) */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-12 text-gray-800 rounded-full focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute top-2 left-3 w-6 h-6 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Right Section: Navigation Links (Hidden on small screens) */}
      <ul className="hidden md:flex text-white gap-6 m-3">
        <li className="hover:text-yellow-500">
          <Link href="/home">Home</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link href="/categories">Categories</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link href="/services">Services</Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color="white"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 hover:text-yellow-500"
      >
        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>

      {/* Mobile Menu (Visible only when toggled) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-700 text-white flex flex-col items-center py-4 md:hidden">
          <Link href="/home" className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/categories" className="py-2" onClick={toggleMenu}>
            Categories
          </Link>
          <Link href="/services" className="py-2" onClick={toggleMenu}>
            Services
          </Link>
        </div>
      )}
    </nav>
  );
}
