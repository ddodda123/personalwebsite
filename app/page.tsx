import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Contact from './components/Contact';
import StickyBar from './components/StickyBar';

export default function Home() {
  return (
    <div>
      {/* Sticky Bar at the top */}
      <StickyBar />

      {/* Main Content */}
      <main className="pt-20"> {/* Add padding to prevent content overlap */}
        <section id="hero">
          <HeroSection />
        </section>
        <section id="experiences">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
