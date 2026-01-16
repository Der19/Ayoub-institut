import React from 'react';
import './APropos.css';

const APropos = () => {
  return (
    <div className="apropos-page">
      <section className="apropos-hero">
        <h1 className="page-title">Un institut en ligne conçu pour toute la Oumma Islamique</h1>
        <p className="page-subtitle">
           Nous soutenons les mamans dans l’apprentissage et l’épanouissement de leurs enfants 
          avec rigueur, douceur et bienveillance. Parce que chaque enfant a le droit d’apprendre dans un 
          climat serein et rassurant.
        </p>
      </section>

      <section className="values-section">
        <div className="value-card-large">
          <div className="value-icon-large">🛡️</div>
          <h2 className="value-title">Qualité pédagogique</h2>
          <p className="value-description">
            Des cours adaptés au rythme et aux aptitudes de chaque élève, avec une approche pédagogique 
            qui rend l’apprentissage plus fluide et motivant. Nous croyons fermement qu’un enfant stimulé 
            et encouragé progressera naturellement, bi idhnillah.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">🌙</div>
          <h2 className="value-title">Références islamiques</h2>
          <p className="value-description">
            Un enseignement équilibré qui intègre nos valeurs, en s’inspirant du chemin de nos pieux 
            prédécesseurs, sans pression ni discours imposé. Nous transmettons avec sagesse que toute 
            réussite vient d’Allah et que la quête du savoir est une forme d’adoration.
          </p>
        </div>

        <div className="value-card-large">
          <div className="value-icon-large">👨‍👩‍👧‍👦</div>
          <h2 className="value-title">Esprit familial</h2>
          <p className="value-description">
            Un suivi personnalisé, une écoute attentive et une disponibilité constante pour vous 
            accompagner à chaque étape. Vous n’êtes jamais seules dans ce parcours : nous avançons 
            ensemble, dans un esprit de solidarité et de confiance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default APropos;
