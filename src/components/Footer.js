import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import './Footer.css';

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">
              <span className="logo-ayoub">AYOUB</span>
            </span>
          </div>
          <p className="footer-description">
            Un institut en ligne dédié à l'éducation bienveillante et à l'excellence académique, 
            ancré dans les valeurs islamiques authentiques. Nous accompagnons les familles dans 
            l'épanouissement scolaire et spirituel de leurs enfants.
          </p>
          <p className="footer-tagline">Apprendre et grandir ensemble</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li><button onClick={() => handleScrollTo('accueil')}>Accueil</button></li>
            <li><button onClick={() => handleScrollTo('cours')}>Nos cours</button></li>
            <li><button onClick={() => handleScrollTo('gratuit')}>Supports gratuits</button></li>
            <li><button onClick={() => handleScrollTo('a-propos')}>Méthode pédagogique</button></li>
            <li><button onClick={() => handleScrollTo('faq')}>FAQ</button></li>
            <li><button onClick={() => handleScrollTo('contact')}>Contact</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Restez connecté(e)</h3>
          <p className="footer-social-text">
            Suivez-nous pour des astuces pédagogiques, des rappels islamiques et les actualités de l'institut !
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
            </a>
          </div>
          <div className="footer-email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:contactinstitutenjoy@yahoo.com">contactinstitutenjoy@yahoo.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Ayoub Institut. Tous droits réservés.</p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;

