import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building tools that remove friction.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('arsenal-categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h1 className="title-gradient">
        {text}
        <span className="typing-cursor">&nbsp;</span>
      </h1>
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
