import Header from './components/Header';
import Hero from './components/Hero';
import IndustryProjects from './components/IndustryProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <IndustryProjects />
      <Projects/>
      {/* <Resume /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  );
}
