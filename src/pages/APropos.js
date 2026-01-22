import React from 'react';
import './APropos.css';

const APropos = () => {
  return (
    <div className="apropos-page">
      <section className="apropos-hero">
        <h1 className="page-title">Un institut en ligne pensé pour toute la Oumma Islamique</h1>
        <p className="page-subtitle">
           Nous accompagnons les mamans dans la formation et le développement de leurs enfants 
          avec sérieux, tendresse et compassion. Car chaque enfant mérite d'étudier dans une 
          atmosphère paisible et sécurisante.
        </p>
      </section>

      <section className="values-section">
        <div className="value-card-large">
          <div className="value-icon-large">🛡️</div>
          <h2 className="value-title">Qualité pédagogique</h2>
          <p className="value-description">
            Des formations ajustées à la cadence et aux capacités de chaque apprenant, avec une méthode éducative 
            qui facilite la formation de façon plus naturelle et inspirante. Nous sommes convaincus qu'un enfant éveillé 
            et soutenu avancera spontanément, bi idhnillah.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">🌙</div>
          <h2 className="value-title">Références islamiques</h2>
          <p className="value-description">
            Une instruction harmonieuse qui incorpore nos principes, en suivant la voie de nos pieux 
            ancêtres, sans stress ni message forcé. Nous enseignons avec intelligence que chaque 
            succès provient d'Allah et que la recherche de la connaissance représente un acte de dévotion.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">👨‍👩‍👧‍👦</div>
          <h2 className="value-title">Esprit familial</h2>
          <p className="value-description">
            Un accompagnement sur mesure, une attention bienveillante et une accessibilité permanente pour vous 
            guider à chaque moment. Vous n'êtes pas isolées dans cette démarche : nous progressons 
            collectivement, dans une dynamique d'entraide et de sérénité.
          </p>
        </div>
      </section>
    </div>
  );
};

export default APropos;
