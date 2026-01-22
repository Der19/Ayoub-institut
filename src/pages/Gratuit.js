import React from 'react';
import './Gratuit.css';

const Gratuit = () => {
  return (
    <div className="gratuit-page">
      <section className="gratuit-hero">
        <h1 className="page-title">📣 Annonce des Assises du Vendredi</h1>
        <p className="page-subtitle">
          Correction de la lecture de Sūrat al-Fātiḥa
        </p>
      </section>

      <section className="gratuit-content">
        <div className="gratuit-card">
          <p className="gratuit-text">
            <strong>Alḥamdulillāh</strong>, nous ouvrons chaque vendredi à 20h (heure de France) une assise dédiée à la correction de la lecture de <strong>Sūrat al-Fātiḥa</strong>, ouverte à tous : hommes, femmes et enfants.
          </p>

          <h3 className="gratuit-subtitle">🎯 Objectif :</h3>
          <p className="gratuit-text">
            Améliorer ta récitation, corriger tes erreurs, et perfectionner ta lecture.
          </p>

          <h3 className="gratuit-subtitle">📖 Pourquoi participer ?</h3>
          <ul className="gratuit-list">
            <li>La Fātiḥa est la mère du Qur'ān, la sourate la plus importante</li>
            <li>Sa bonne lecture est une obligation dans chaque prière</li>
            <li>Une correction régulière garantit une récitation conforme et apaisée</li>
          </ul>

          <p className="gratuit-text">
            🕊️ Séance ouverte à tous les niveaux, dans une ambiance sérieuse, bienveillante et motivante.
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
