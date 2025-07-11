


"use client";
import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
	fetch("https://api.github.com/users/favmaclegend-ops/repos")
	  .then((res) => {
		if (!res.ok) throw new Error("Failed to fetch repos");
		return res.json();
	  })
	  .then((data) => {
		setRepos(data);
		setLoading(false);
	  })
	  .catch((err) => {
		setError("Could not load projects.");
		setLoading(false);
	  });
  }, []);

  return (
	<section className="px-6 lg:px-24 py-20 bg-[#10131b] animate-fade-in">
	  <h2 className="text-2xl font-bold mb-6">Projects</h2>
	  {loading && <p className="text-gray-400">Loading projects...</p>}
	  {error && <p className="text-red-400">{error}</p>}
	  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
		{repos.map((repo) => (
		  <div key={repo.id} className="bg-[#0f1117] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
			<h3 className="text-xl font-bold text-red-500 mb-2">{repo.name}</h3>
			<p className="text-gray-400 mb-4">{repo.description || "No description provided."}</p>
			<a
			  href={repo.html_url}
			  target="_blank"
			  rel="noopener noreferrer"
			  className="text-red-500 font-semibold hover:underline"
			>
			  View on GitHub
			</a>
		  </div>
		))}
	  </div>
	</section>
  );
}
