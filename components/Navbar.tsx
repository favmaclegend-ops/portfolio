
"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { portfolioData } from "./portfolioData";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
	<header className="bg-[#0f1117] text-white px-6 lg:px-24 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
	  <h1 className="text-lg font-semibold text-red-500">{portfolioData.name}</h1>

	  <nav className="hidden md:flex gap-6">
		{navLinks.map((link) => (
		  <Link
			key={link.name}
			href={link.href}
			className="hover:text-red-500 transition-colors font-medium text-lg"
		  >
			{link.name}
		  </Link>
		))}
	  </nav>

	  <div className="md:hidden">
		<button onClick={toggleMenu} aria-label="Toggle menu">
		  {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
		</button>
	  </div>

	  {/* Mobile Menu */}
	  {menuOpen && (
		<div className="absolute top-16 left-0 w-full bg-[#10131b] py-6 px-6 flex flex-col gap-4 md:hidden">
		  {navLinks.map((link) => (
			<Link
			  key={link.name}
			  href={link.href}
			  onClick={toggleMenu}
			  className="hover:text-red-500 transition-colors font-semibold text-xl"
			>
			  {link.name}
			</Link>
		  ))}
		</div>
	  )}
	</header>
  );
}
