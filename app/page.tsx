import Hero from "../src/components/hero";
import Services from "../src/components/services";
import About from "../src/components/about";
import Technologies from "../src/components/technologies";
import Contact from "../src/components/contact";
import Navbar from "../src/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Contact />
    </>
  );
}