import React from 'react';
import './Formations.css';

const Formations = () => {
  const formations = [
    {
      badge: "Prochainement",
      icon: "🎨",
      title: "Design & Créativité",
      description: "Exploration de la création graphique et productions artistiques pour adolescents et adultes. Apprenez la réalisation d'images pour vos projets personnels."
    },
    {
      badge: "En préparation",
      icon: "💚",
      title: "Bien-être & Hygiène de vie",
      description: "Programme sur l'organisation du foyer, harmonie familiale, gestion des conflits et développement personnel islamique. Nous accompagnons également les mères dont les enfants présentent un TDAH ou d'autres besoins particuliers, avec des conseils sur mesure et bienveillants. Pour des mères épanouies et confiantes, bi idhnillâh."
    },
    {
      badge: "Bientôt",
      icon: "👭",
      title: "Masterclass pour sœurs",
      description: "Discussions thématiques entre sœurs : gestion du foyer, éducation consciente, spiritualité quotidienne. Des moments de partage et d'entraide féminine."
    }
  ];

  return (
    <div className="formations-page">
      <section className="formations-hero">
        <h1 className="page-title">Prochainement disponibles : nouvelles formations</h1>
        <p className="page-subtitle">
          Nous élaborons des programmes pour toute la famille, in cha Allah. 
          Restez à l'écoute pour explorer nos prochaines formations et masterclass.
        </p>
      </section>

      <section className="formations-grid">
        {formations.map((formation, index) => (
          <div key={index} className="formation-card">
            <div className="formation-badge">{formation.badge}</div>
            <div className="formation-icon">{formation.icon}</div>
            <h2 className="formation-title">{formation.title}</h2>
            <p className="formation-description">{formation.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Formations;

