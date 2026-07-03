import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import Services from "../src/components/services";
import About from "../src/components/about";
import Technologies from "../src/components/technologies";
import Contact from "../src/components/contact";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Services />
        <About />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </>
  );
}