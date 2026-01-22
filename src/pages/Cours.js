import React from 'react';
import './Cours.css';

const Cours = () => {
  return (
    <div className="cours-page">
      <section className="cours-hero">
        <h1 className="page-title">Nos formations en ligne</h1>
        <p className="page-subtitle">
          Des contenus personnalisés selon chaque profil, pour chaque moment de l'année. 
          Car la formation se poursuit en permanence.
        </p>
      </section>

      <section className="cours-grid">
        <div className="cours-card">
          <div className="cours-icon blue">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <h2 className="cours-title">Aide aux devoirs & cours particuliers</h2>
          <p className="cours-description">
            Votre enfant nécessite un soutien en français, mathématiques ou anglais ? 
            Nos leçons individuelles et sessions d'assistance aux devoirs lui offrent la possibilité d'avancer 
            progressivement, selon sa cadence.
          </p>
          <ul className="cours-features">
            <li>
              <span className="checkmark">✓</span>
              Niveaux : CP à 3ème
            </li>
            <li>
              <span className="checkmark">✓</span>
              Cours individuels ou petits groupes
            </li>
            <li>
              <span className="checkmark">✓</span>
              Adaptés aux périodes scolaires
            </li>
          </ul>
          <button className="cours-button">Voir les créneaux</button>
        </div>

        <div className="cours-card featured">
          <div className="popular-badge">Populaire</div>
          <div className="cours-icon brown">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className="cours-title">Apprentissage de la langue arabe</h2>
          <p className="cours-description">
            Proposez à votre enfant (ou à vous-même) l'accès au Quran : la langue arabe. 
            Depuis l'alphabet jusqu'aux échanges quotidiens, notre approche graduelle et amusante 
            transforme la formation en expérience naturelle et plaisante.
          </p>
          <ul className="cours-features">
            <li>
              <span className="checkmark">✓</span>
              Tous niveaux : débutant à avancé
            </li>
            <li>
              <span className="checkmark">✓</span>
              Méthode progressive et ludique
            </li>
            <li>
              <span className="checkmark">✓</span>
              Supports inclus (fiches, exercices)
            </li>
          </ul>
          <button className="cours-button">Commencer l'arabe</button>
        </div>

        <div className="cours-card">
          <div className="cours-icon blue">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h2 className="cours-title">Quran</h2>
          <p className="cours-description">
            Introduisez votre enfant à l'apprentissage par cœur du Quran avec tajwid. 
            Nos formations combinent sérieux et compassion.
          </p>
          <ul className="cours-features">
            <li>
              <span className="checkmark">✓</span>
              Mémorisation + Tajwid
            </li>
            <li>
              <span className="checkmark">✓</span>
              Enfants dès 4 ans et adultes
            </li>
            <li>
              <span className="checkmark">✓</span>
              Ambiance bienveillante
            </li>
          </ul>
          <button className="cours-button">Rejoindre les cours</button>
        </div>
      </section>
    </div>
  );
};

export default Cours;

