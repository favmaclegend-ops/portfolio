import React, { useState } from "react";

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("Sending...");
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setStatus("Message sent!");
				setForm({ name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send. Try again.");
			}
		} catch {
			setStatus("Failed to send. Try again.");
		}
	};

	return (
		<div className="max-w-md mx-auto py-10">
			<h1 className="text-2xl font-bold mb-4">Contact Me</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					name="name"
					type="text"
					placeholder="Your Name"
					value={form.name}
					onChange={handleChange}
					required
					className="border px-3 py-2 rounded"
				/>
				<input
					name="email"
					type="email"
					placeholder="Your Email"
					value={form.email}
					onChange={handleChange}
					required
					className="border px-3 py-2 rounded"
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={form.message}
					onChange={handleChange}
					required
					className="border px-3 py-2 rounded"
				/>
				<button
					type="submit"
					className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
					Send
				</button>
			</form>
			{status && <p className="mt-4">{status}</p>}
		</div>
	);
}
