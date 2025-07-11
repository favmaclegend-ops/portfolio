

"use client";
import React from "react";
import { portfolioData } from "./portfolioData";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function About() {
  const { data: repos, error } = useSWR(
	"https://api.github.com/users/favmaclegend-ops/repos",
	fetcher
  );
  const completedProjects = repos ? repos.length : "...";
  const stats = [
	{ value: completedProjects, label: "Completed Projects" },
	{ value: "95%", label: "Client Satisfaction" },
	{ value: "10+", label: "Years of Experience" },
  ];

  return (
	<section className="px-6 lg:px-24 py-20 bg-[#0f1117] animate-fade-in">
	  <h2 className="text-2xl font-bold mb-4">About me</h2>
	  <p className="text-gray-400 max-w-2xl">
		{portfolioData.bio}
	  </p>
	  <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-xl">
		{stats.map((stat) => (
		  <div key={stat.label}>
			<p className="text-3xl font-bold text-red-500">{stat.value}</p>
			<p className="text-sm text-gray-400">{stat.label}</p>
		  </div>
		))}
	  </div>
	</section>
  );
}
