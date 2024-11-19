import Header from "./components/header";
import Hero from "./components/hero";
import Design from "./components/design";
import Storage from "./components/storage";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Design />
      <Storage />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
