import React from 'react';
import './APropos.css';

const APropos = () => {
  return (
    <div className="apropos-page">
      <section className="apropos-hero">
        <h1 className="page-title">Un institut en ligne pensé pour votre famille</h1>
        <p className="page-subtitle">
          Depuis 2023, nous accompagnons les mamans dans l'éducation de leurs enfants avec sérieux, 
          patience et amour. Parce que chaque enfant mérite d'apprendre dans la joie et la confiance.
        </p>
      </section>

      <section className="values-section">
        <div className="value-card-large">
          <div className="value-icon-large">🛡️</div>
          <h2 className="value-title">Excellence pédagogique</h2>
          <p className="value-description">
            Des enseignements personnalisés selon les capacités de chaque élève, avec une méthode qui facilite 
            l'acquisition des connaissances de manière agréable. Nous sommes convaincus qu'un élève passionné 
            par l'apprentissage excellera naturellement, bi idhnillah.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">🌙</div>
          <h2 className="value-title">Valeurs islamiques</h2>
          <p className="value-description">
            Un enseignement qui incorpore harmonieusement nos principes, en honorant et en suivant l'exemple 
            de nos pieux ancêtres, sans contrainte ni propagande. Nous enseignons avec bienveillance que 
            le succès provient d'Allah et que la connaissance constitue un acte de dévotion.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">👨‍👩‍👧‍👦</div>
          <h2 className="value-title">Proximité familiale</h2>
          <p className="value-description">
            Un accompagnement sur mesure, une attention bienveillante et une accessibilité permanente pour 
            vous guider étape par étape. Vous n'êtes pas isolées dans cette démarche : nous restons à vos 
            côtés pour vous soutenir, à l'image d'une famille unie.
          </p>
        </div>
      </section>
    </div>
  );
};

export default APropos;

