import React from "react";
// components/Hero.tsx
export default function Hero() {
	return (
		<section className="py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
			<div className="max-w-xl">
				<h2 className="text-xl font-light">
					Hello<span className="text-red-500">.</span>
				</h2>
				<h1 className="text-4xl font-bold mt-2">I’m Favour Macauley</h1>
				<h2 className="text-3xl font-semibold text-gray-300 mt-1">
					Web Developer
				</h2>

				<div className="flex gap-4 mt-6">
					<button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
						Got a project?
					</button>
					<button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
						My resume
					</button>
				</div>
			</div>

			<div className="rounded-full border-4 border-red-500 p-2">
				<div className="bg-gray-300 rounded-full  size-56" />
			</div>
		</section>
	);
}
