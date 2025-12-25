import React from 'react';
import './Formations.css';

const Formations = () => {
  const formations = [
    {
      badge: "Prochainement",
      icon: "🎨",
      title: "Design & Créativité",
      description: "Découverte de la conception graphique et réalisations artistiques pour adolescents et adultes. Maîtrisez la création d'images pour vos initiatives individuelles."
    },
    {
      badge: "En préparation",
      icon: "💚",
      title: "Bien-être & Hygiène de vie",
      description: "Formation sur l'aménagement du domicile, compréhension familiale, maîtrise des tensions et épanouissement individuel islamique. Nous soutenons aussi les mères dont les enfants présentent un TDAH ou d'autres nécessités spécifiques, avec des recommandations personnalisées et attentionnées. Pour des mères accomplies et assurées, bi idhnillâh."
    },
    {
      badge: "Bientôt",
      icon: "👭",
      title: "Masterclass pour sœurs",
      description: "Échanges à thème entre sœurs : administration du domicile, parentalité éveillée, foi au quotidien. Des instants d'échange et de solidarité féminine."
    }
  ];

  return (
    <div className="formations-page">
      <section className="formations-hero">
        <h1 className="page-title">Bientôt disponibles : nouvelles formations</h1>
        <p className="page-subtitle">
          Nous préparons des contenus pour toute la famille, in cha Allah. 
          Restez connectées pour découvrir nos futures formations et masterclass.
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

