import { Navbar } from "./components/layout/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { Projects } from "./components/Projects.jsx";
import { Technologies } from "./components/Technologies.jsx";
import { Footer } from "./components/layout/Footer.jsx";

export default function Home() {
  return (
    <div className="grid ">
      <Navbar />
      <section className="headerSection">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}
