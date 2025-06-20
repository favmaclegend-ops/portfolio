// components/Contact.tsx
import React from "react";
export default function Contact() {
	return (
		<section id="contact" className="px-6 lg:px-24 py-20 bg-[#0f1117]">
			<h2 className="text-2xl font-bold mb-6">Contact Me</h2>
			<p className="text-gray-400 mb-10 max-w-xl">
				Got a question, project idea, or just want to connect? Drop me a
				message and I’ll get back to you soon!
			</p>

			<form className="grid gap-6 max-w-2xl">
				<input
					type="text"
					placeholder="Your Name"
					className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"
				/>
				<input
					type="email"
					placeholder="Your Email"
					className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"
				/>
				<textarea
					placeholder="Your Message"
					rows={5}
					className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"></textarea>
				<button
					type="submit"
					className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md w-fit">
					Send Message
				</button>
			</form>
		</section>
	);
}
