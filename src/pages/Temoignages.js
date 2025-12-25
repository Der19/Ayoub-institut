import React from 'react';
import './Temoignages.css';

const Temoignages = () => {
  const temoignages = [
    {
      quote: "Barak Allah ofiki ma sœur pour ces 10 jours d'apprentissage avec toi. Tu m'as beaucoup aidé, c'est la première fois que je prenais des cours. Tu m'as donné encore plus l'envie de m'améliorer. Jazakillahu kheyran.",
      name: "Oum Leyla",
      service: "Stage de lecture arabe intensif"
    },
    {
      quote: "Merci beaucoup Maryam pour les cours de lecture avec les jumeaux. Tu as été très douce et patiente avec eux, et ils ont beaucoup aimé lire avec toi. Grâce à ton approche bienveillante, ils se sont sentis en confiance et motivés. Ils sont prêt pour la rentrée.",
      name: "Oum Youssouf",
      service: "Aide à la lecture français - Vacances scolaire"
    },
    {
      quote: "BaarakAllahu fiiki pour tes cours, pour ta patience et ta manière d'enseigner, qu'Allah te préserve oukhty et t'augmente en bienfaits",
      name: "Oum Taymiyah",
      service: "Formation - Créer un flyer"
    }
  ];

  return (
    <div className="temoignages-page">
      <section className="temoignages-hero">
        <h1 className="page-title">Ce que disent les mamans qui nous font confiance</h1>
      </section>

      <section className="temoignages-grid">
        {temoignages.map((temoignage, index) => (
          <div key={index} className="temoignage-card">
            <div className="quote-icon">💬</div>
            <p className="temoignage-quote">"{temoignage.quote}"</p>
            <div className="temoignage-author">
              <p className="temoignage-name">{temoignage.name}</p>
              <p className="temoignage-service">{temoignage.service}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Temoignages;

