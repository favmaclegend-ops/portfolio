
"use client";

"use client";
import React, { useState } from "react";
import { portfolioData } from "./portfolioData";

function Modal({ message, success, onClose }: { message: string; success: boolean; onClose: () => void }) {
  return (
	<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
	  <div className={`bg-[#10131b] p-8 rounded-xl shadow-lg text-center max-w-sm w-full border ${success ? 'border-green-500' : 'border-red-500'}`}> 
		<h3 className={`text-lg font-bold mb-4 ${success ? 'text-green-500' : 'text-red-500'}`}>{success ? "Success!" : "Error"}</h3>
		<p className="mb-6 text-gray-300">{message}</p>
		<button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Close</button>
	  </div>
	</div>
  );
}

export default function Contact() {
  const [modal, setModal] = useState<{ message: string; success: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const form = e.currentTarget;
	const formData = new FormData(form);
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");
	const res = await fetch("/api/contact", {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify({ name, email, message })
	});
	if (res.ok) {
	  setModal({ message: "Message sent! We'll get back to you soon.", success: true });
	  form.reset();
	  setTimeout(() => window.location.reload(), 2000);
	} else {
	  setModal({ message: "Failed to send message. Please try again later.", success: false });
	}
  };

  return (
	<section id="contact" className="px-6 lg:px-24 py-20 bg-[#0f1117] animate-fade-in">
	  <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
	  <p className="text-gray-400 mb-10 max-w-xl">
		Got a question, project idea, or just want to connect? Drop me a message and I’ll get back to you soon!
	  </p>
	  <form className="grid gap-6 max-w-2xl" onSubmit={handleSubmit}>
		<input
		  name="name"
		  type="text"
		  placeholder="Your Name"
		  required
		  className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"
		/>
		<input
		  name="email"
		  type="email"
		  placeholder="Your Email"
		  required
		  className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"
		/>
		<textarea
		  name="message"
		  placeholder="Your Message"
		  rows={5}
		  required
		  className="bg-[#10131b] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-500"
		></textarea>
		<button
		  type="submit"
		  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md w-fit"
		>
		  Send Message
		</button>
	  </form>
	  <div className="mt-8 text-gray-400 text-center">
		Or email me directly: <a href={`mailto:${portfolioData.email}`} className="text-red-500 hover:underline">{portfolioData.email}</a>
	  </div>
	  {modal && <Modal message={modal.message} success={modal.success} onClose={() => setModal(null)} />}
	</section>
  );
}
