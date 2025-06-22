// components/About.tsx
import React from "react";
export default function About() {
	return (
		<section className="px-6 lg:px-24 py-20 bg-[#0f1117]">
			<h2 className="text-2xl font-bold mb-4">About me</h2>
			<p className="text-gray-400 max-w-2xl">
				I started my software journey from photography and graphics design.
				Through that, I learned to love the process of creating from
				scratch. Since then, this has led me to software development as it
				fulfills my love for learning and building things.
			</p>

			<div className="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-xl">
				<div>
					<p className="text-3xl font-bold text-red-500">120+</p>
					<p className="text-sm text-gray-400">Completed Projects</p>
				</div>
				<div>
					<p className="text-3xl font-bold text-red-500">95%</p>
					<p className="text-sm text-gray-400">Client Satisfaction</p>
				</div>
				<div>
					<p className="text-3xl font-bold text-red-500">10+</p>
					<p className="text-sm text-gray-400">Years of Experience</p>
				</div>
			</div>
		</section>
	);
}
// This component displays an "About me" section with a brief introduction and some statistics about the developer's work.
// It includes a title, a paragraph about the developer's journey, and a grid layout showcasing
// three key statistics: completed projects, client satisfaction, and years of experience.
