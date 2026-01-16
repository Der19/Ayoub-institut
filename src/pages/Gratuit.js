import React from 'react';
import './Gratuit.css';

const Gratuit = () => {
  return (
    <div className="gratuit-page">
      <section className="gratuit-hero">
        <h1 className="page-title">📣 Assises du vendredi</h1>
        <p className="page-subtitle">
          Correction de la lecture de Sūrat al-Fātiḥa
        </p>
      </section>

      <section className="gratuit-content">
        <div className="gratuit-card">
          <h2 className="gratuit-title">
            Assise hebdomadaire – chaque vendredi à 20h (heure de France)
          </h2>

          <p className="gratuit-text">
            <strong>Alḥamdulillāh</strong>, nous organisons chaque vendredi une assise dédiée à la
            correction de la lecture de <strong>Sūrat al-Fātiḥa</strong>.
            Cette assise est ouverte à <strong>tous</strong> : hommes, femmes et enfants.
          </p>

          <h3 className="gratuit-subtitle">🎯 Objectif</h3>
          <p className="gratuit-text">
            Améliorer ta récitation, corriger tes erreurs et perfectionner ta lecture
            de manière progressive et encadrée.
          </p>

          <h3 className="gratuit-subtitle">📖 Pourquoi participer ?</h3>
          <ul className="gratuit-list">
            <li>La Fātiḥa est la mère du Qur’ān et la sourate la plus importante</li>
            <li>Sa récitation correcte est une obligation dans chaque prière</li>
            <li>Une correction régulière permet une lecture juste, fluide et apaisée</li>
          </ul>

          <p className="gratuit-text">
            🕊️ Les séances sont ouvertes à <strong>tous les niveaux</strong>, dans une ambiance
            sérieuse, bienveillante et motivante.
          </p>

          <a
            href="https://t.me/zidniicours"
            target="_blank"
            rel="noopener noreferrer"
            className="gratuit-button"
          >
            Rejoindre via Telegram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gratuit;
