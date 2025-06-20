// app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<main className="bg-[#0f1117] text-white font-sans scroll-smooth">
			<Navbar />
			<div id="home" className="pt-20">
				<Hero />
				<Services />
				<About />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}
