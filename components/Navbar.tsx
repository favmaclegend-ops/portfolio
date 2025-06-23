// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className="bg-[#0f1117] text-white px-6 lg:px-24 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
			<h1 className="text-lg font-semibold">Favour Macauley</h1>

			<nav className="hidden md:flex gap-6">
				<Link href="/" className="hover:text-red-500">
					Home
				</Link>
				<Link href="/about" className="hover:text-red-500">
					About
				</Link>
				<Link href="/projects" className="hover:text-red-500">
					Projects
				</Link>
				<Link href="/contact" className="hover:text-red-500">
					Contact
				</Link>
			</nav>

			<div className="md:hidden">
				<button onClick={toggleMenu}>
					{menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-[#10131b] py-6 px-6 flex flex-col gap-4 md:hidden">
					<Link
						href="#home"
						onClick={toggleMenu}
						className="hover:text-red-500">
						Home
					</Link>
					<Link
						href="#about"
						onClick={toggleMenu}
						className="hover:text-red-500">
						About
					</Link>
					<Link
						href="#projects"
						onClick={toggleMenu}
						className="hover:text-red-500">
						Projects
					</Link>
					<Link
						href="#contact"
						onClick={toggleMenu}
						className="hover:text-red-500">
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}
