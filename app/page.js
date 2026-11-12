import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Clients from "../components/Clients";
import Process from "../components/Process";
import StartProject from "../components/StartProject";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Clients />
        <Process />
        <StartProject />
      </main>
      <Footer />
    </>
  );
}