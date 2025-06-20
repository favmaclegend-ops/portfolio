// components/Services.tsx
import React from "react";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

export default function Services() {
	const services = [
		{ icon: <FaCode size={28} />, title: "Website Development" },
		{ icon: <FaMobileAlt size={28} />, title: "App Development" },
		{ icon: <FaServer size={28} />, title: "Website Hosting" },
	];

	return (
		<section className="px-6 lg:px-24 py-16 bg-[#10131b] grid sm:grid-cols-3 gap-8 text-center">
			{services.map((service, index) => (
				<div key={index} className="flex flex-col items-center space-y-2">
					<div className="text-red-500">{service.icon}</div>
					<h3 className="text-lg font-semibold">{service.title}</h3>
				</div>
			))}
		</section>
	);
}
