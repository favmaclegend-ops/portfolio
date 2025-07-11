
import React from "react";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { portfolioData } from "./portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  "Web Development": <FaCode size={32} />,
  "UI/UX Design": <FaMobileAlt size={32} />,
  "Website Hosting": <FaServer size={32} />,
};

export default function Services() {
  return (
	<section className="px-6 lg:px-24 py-16 bg-[#10131b] grid sm:grid-cols-3 gap-8 text-center animate-fade-in">
	  {portfolioData.services.map((service) => (
		<div key={service.title} className="flex flex-col items-center space-y-2">
		  <div className="text-red-500">{iconMap[service.title] || <FaCode size={28} />}</div>
		  <h3 className="text-lg font-semibold">{service.title}</h3>
		</div>
	  ))}
	</section>
  );
}
