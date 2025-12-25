import React from 'react';
import './Gratuit.css';

const Gratuit = () => {
  const handleDownload = (resourceName) => {
    // Simuler un téléchargement
    alert(`Téléchargement de ${resourceName}...`);
  };

  return (
    <div className="gratuit-page">
      <section className="gratuit-hero">
        <h1 className="page-title">Ressources gratuites pour bien démarrer</h1>
        <p className="page-subtitle">
          Téléchargez nos supports pédagogiques et découvrez notre approche. 
          Aucune inscription requise, juste un petit geste pour vous aider dès maintenant.
        </p>
      </section>

      <section className="resources-grid">
        <div className="resource-card">
          <div className="resource-icon blue">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h2 className="resource-title">Guide de méthodologie pour les devoirs</h2>
          <p className="resource-description">
            Conseils pratiques et bienveillants pour aider votre enfant à s'organiser, 
            réviser efficacement et gagner en autonomie.
          </p>
          <button 
            className="resource-button"
            onClick={() => handleDownload('Guide de méthodologie')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger (PDF)
          </button>
        </div>

        <div className="resource-card">
          <div className="resource-icon brown">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h2 className="resource-title">Poster alphabet arabe illustré</h2>
          <p className="resource-description">
            Un support visuel coloré et ludique pour apprendre les 28 lettres arabes en s'amusant. 
            Parfait à afficher dans la chambre.
          </p>
          <button 
            className="resource-button"
            onClick={() => handleDownload('Poster alphabet arabe')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger (PDF)
          </button>
        </div>

        <div className="resource-card">
          <div className="resource-icon blue">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h2 className="resource-title">Planning de révision imprimable</h2>
          <p className="resource-description">
            Organisez la semaine de votre enfant avec ce planning coloré et motivant. 
            Révisions, loisirs, Quran : tout trouve sa place.
          </p>
          <button 
            className="resource-button"
            onClick={() => handleDownload('Planning de révision')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gratuit;

