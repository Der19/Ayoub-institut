import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détecter la section active
      const sections = ['accueil', 'cours', 'gratuit', 'a-propos', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <button onClick={() => handleScrollTo('accueil')} className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/image2.png`} alt="Ayoub Institut Logo" className="logo-image" />
          <span className="logo-text">
            <span className="logo-ayoub">AYOUB</span>
          </span>
        </button>
        <nav className="nav">
          <button 
            onClick={() => handleScrollTo('a-propos')} 
            className={activeSection === 'a-propos' ? 'active' : ''}
          >
            À propos
          </button>
          <button 
            onClick={() => handleScrollTo('cours')} 
            className={activeSection === 'cours' ? 'active' : ''}
          >
            Cours
          </button>
          <button 
            onClick={() => handleScrollTo('gratuit')} 
            className={activeSection === 'gratuit' ? 'active' : ''}
          >
            Gratuit
          </button>
          <button 
            onClick={() => handleScrollTo('faq')} 
            className={activeSection === 'faq' ? 'active' : ''}
          >
            FAQ
          </button>
          <button 
            onClick={() => handleScrollTo('contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </nav>
        <button onClick={() => handleScrollTo('contact')} className="btn-register">
          S'inscrire
        </button>
      </div>
    </header>
  );
};

export default Header;

