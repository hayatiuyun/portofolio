import "./i18n/config";
import GithubLink from "./components/sections/GithubLink";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Contact from "./components/sections/Contact";

gsap.registerPlugin(ScrollTrigger, useGSAP);


function App() {
  return (
    <main className="!scroll-smooth !bg-bluish dark:!bg-[rgb(15,22,36)] text-gray-dark dark:text-white w-full">
      <GithubLink />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
