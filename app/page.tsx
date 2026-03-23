import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Ben Johansen | Home",
	description: "Ben Johansen's Home page for portfolio"
};

function SectionLink({ name, route }: { name: string, route: string }) {
  return (
    <li className="p-2 border-2">
      <a href={route}>{name}</a>
    </li>
  );
}

export default function Home() {
  return (
    <Layout currentPage="Home">
      <h1 className="font-bold text-6xl">I'm Ben Johansen</h1>
      <h2>I'm a Web Developer, IT technicain and Tech nerd. I am mostly self-taught, but I have been taking classes through the BYU Pathways online program.</h2>
      <p className="text-sm italic text-gray-500">Note: My portfolio isn't finished; I am actively working on it.</p>

      <ul className="flex gap-4 mt-8 mb-16 justify-center">
        <SectionLink name="About Me" route="#about-me" />
        <SectionLink name="Contact Me" route="#contact" />
        <SectionLink name="View My Projects" route="#projects" />
      </ul>

      {/* <Contact /> */}
      <AboutMe />
      <Projects />
    </Layout>
  );
}
