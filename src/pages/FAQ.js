import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "À quels publics s’adressent vos cours ?",
      answer:
        "Nous accompagnons les élèves du CP jusqu’à la 3ᵉ pour le soutien scolaire, aussi bien en primaire qu’au collège. Concernant l’apprentissage de l’arabe et du Qur’an, nous accueillons tous les profils : enfants à partir de 6 ans, adolescents et adultes, qu’ils soient débutants ou avancés. Chaque parcours est personnalisé selon le niveau et les objectifs de l’élève. En cas d’hésitation, notre équipe reste disponible pour vous orienter."
    },
    {
      question: "Quel est le format des cours ?",
      answer:
        "Les séances se déroulent entièrement en ligne, en visioconférence, via Zoom ou Google Meet selon votre préférence. Avant chaque cours, un lien sécurisé vous est envoyé par WhatsApp. Un simple ordinateur, une tablette ou un téléphone avec une connexion internet suffit. Aucune compétence technique particulière n’est requise : nous vous accompagnons pas à pas."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Les prix dépendent du type de cours (individuel ou en petit groupe) ainsi que de la discipline choisie. Nous proposons des formules mensuelles ainsi que des forfaits flexibles. Pour obtenir un devis précis, nous vous invitons à nous contacter. Des solutions de paiement adaptées peuvent être envisagées selon votre situation."
    },
    {
      question: "Existe-t-il une séance de découverte ?",
      answer:
        "Oui, une séance d’essai est proposée afin de vous permettre de découvrir notre méthode pédagogique et de vérifier que le format correspond à vos attentes. Il vous suffit de nous contacter pour planifier cette première séance."
    },
    {
      question: "Comment s’effectue l’inscription ?",
      answer:
        "L’inscription est rapide et simple. Il vous suffit de nous joindre via le formulaire du site, WhatsApp ou Telegram. Nous échangeons ensuite pour comprendre vos besoins, le niveau de l’élève et vos disponibilités. Un planning personnalisé vous est proposé, puis toutes les informations nécessaires vous sont envoyées par email. La procédure ne prend que quelques minutes."
    },
    {
      question: "Proposez-vous des cours pour les adultes ?",
      answer:
        "Absolument. Des cours d’arabe et de Qur’an sont également destinés aux adultes. Que vous débutiez ou que vous souhaitiez approfondir vos connaissances, les contenus sont adaptés à votre niveau et à vos objectifs personnels."
    },
    {
      question: "Quelle est votre orientation religieuse ?",
      answer:
        "Notre enseignement s’inscrit dans la voie des pieux prédécesseurs (salaf salih), avec sagesse, douceur et bienveillance. Les valeurs islamiques sont intégrées naturellement dans l’apprentissage, sans excès ni contrainte. Nous rappelons que toute réussite provient d’Allah et que la recherche du savoir est un acte d’adoration."
    },
    {
      question: "Est-il possible de reporter ou d’annuler une séance ?",
      answer:
        "Oui, cela est possible sous certaines conditions. Nous demandons un délai de prévenance d’au moins 24 heures pour toute annulation ou report, sauf cas exceptionnel. Les séances annulées dans ce délai peuvent être reprogrammées. Nous faisons preuve de compréhension face aux imprévus familiaux tels que la maladie ou les urgences. Les modalités complètes sont précisées dans nos conditions générales."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1 className="page-title">Foire aux questions</h1>
        <p className="page-subtitle">
          Retrouvez ici les réponses aux questions les plus fréquemment posées par les familles.
          Si un point reste flou, n’hésitez pas à nous contacter : nous serons ravies de vous aider.
        </p>
      </section>

      <section className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <svg
                className="faq-chevron"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {openIndex === index ? (
                  <path d="M18 15l-6-6-6 6" />
                ) : (
                  <path d="M6 9l6 6 6-6" />
                )}
              </svg>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
