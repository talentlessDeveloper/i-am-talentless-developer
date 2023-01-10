import { motion } from "framer-motion";

import Header from "./header/Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./contact/Contact";
import { onLoadVariant } from "../utility/variant";

const Home = () => {
  return (
    <section className='min-h-screen bg-zinc-900'>
      <a
        href='#main'
        className='sr-only focus:not-sr-only text-zinc-50 text-lg'
      >
        Skip Link
      </a>
      <motion.div variants={onLoadVariant} initial='hidden' animate='show'>
        <Header />
        <Hero />
      </motion.div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
