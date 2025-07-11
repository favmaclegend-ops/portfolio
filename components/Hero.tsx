
import React from "react";
import Image from "next/image";
import { portfolioData } from "./portfolioData";

export default function Hero() {
  return (
	<section className="py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
	  <div className="max-w-xl">
		<h2 className="text-xl font-light">
		  Hello<span className="text-red-500">.</span>
		</h2>
		<h1 className="text-4xl font-bold mt-2">{portfolioData.name}</h1>
		<h2 className="text-3xl font-semibold text-gray-300 mt-1">{portfolioData.tagline}</h2>
		<p className="mt-4 text-lg text-gray-400">{portfolioData.bio}</p>

		<div className="flex gap-4 mt-6">
		  {portfolioData.socials.map((social) => (
			<a
			  key={social.name}
			  href={social.url}
			  target="_blank"
			  rel="noopener noreferrer"
			  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
			>
			  {social.name}
			</a>
		  ))}
		  <a
			href="/CV.pdf"
			className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black"
		  >
			My resume
		  </a>
		</div>
	  </div>

	  <div className="rounded-full border-4 border-red-500 p-2">
		<Image
		  src="/images/profile.jpeg"
		  alt={portfolioData.name}
		  width={200}
		  height={200}
		  className="rounded-full"
		/>
	  </div>
	</section>
  );
}
