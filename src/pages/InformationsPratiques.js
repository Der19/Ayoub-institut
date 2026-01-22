import React from 'react';
import { Link } from 'react-router-dom';
import './InformationsPratiques.css';

const InformationsPratiques = () => {
  return (
    <div className="infos-page">
      <section className="infos-hero">
        <h1 className="page-title">Informations pratiques</h1>
        <p className="page-subtitle">
          Des horaires ajustés aux obligations familiales, avec souplesse et structuration. 
          Car nous comprenons que concilier école, loisirs et vie familiale n'est pas toujours évident.
        </p>
      </section>

      <section className="infos-content">
        <div className="infos-box">
          <div className="info-item">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Créneaux horaires</h3>
              <p className="info-text">
                Nous offrons les horaires à la demande, selon les disponibilités de notre équipe éducative.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 7l-7 5 7 5V7z"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Plateforme de cours</h3>
              <p className="info-text">
                Zoom ou Google Meet (selon votre choix) • Lien protégé transmis par Whatsapp
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Formats disponibles</h3>
              <p className="info-text">
                Formations individuelles (100% sur mesure) • Petits groupes de 3 à 5 apprenants maximum
              </p>
            </div>
          </div>
        </div>

        <div className="infos-cta">
          <p>
            Besoin d'un créneau sur mesure ? <Link to="/contact">Contactez-nous →</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default InformationsPratiques;

