import { ArrowDown } from 'lucide-react';
import TypingHeading from './TypingHeading';

const Hero = () => {
  const fullText = "Building tools that remove friction.";

  const handleScroll = () => {
    const section = document.getElementById('arsenal-categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <TypingHeading
        Element="h1"
        text={fullText}
        className="title-gradient"
      />
      <p>
        Welcome to my digital armory. I am passionate about crafting seamless, aesthetic, and
        highly functional utilities. Whether you need an extension to focus, a customized script
        for Google Workspace, or a dark-mode theme to soothe your eyes, you have found the right place.
      </p>
      <button className="btn-primary" onClick={handleScroll} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto' }}>
        Explore the Arsenal <ArrowDown size={18} />
      </button>
    </section>
  );
};

export default Hero;
