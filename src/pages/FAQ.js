import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quels sont les niveaux acceptés ?",
      answer: "Nous accueillons les élèves du CP à la 3ème (primaire et collège) pour le soutien scolaire. Pour l'arabe et le Quran, tous les niveaux sont acceptés : enfants dès 6 ans, ados et adultes, débutants ou confirmés. Chaque programme est adapté au profil de l'élève. Si vous avez un doute, contactez-nous pour un conseil personnalisé."
    },
    {
      question: "Comment se déroulent les cours ?",
      answer: "Tous nos cours ont lieu en visioconférence via Zoom ou Google Meet (selon votre préférence). Vous recevez un lien sécurisé par Whatsapp avant chaque séance. Il suffit d'un ordinateur, d'une tablette ou d'un smartphone avec connexion internet. Pas besoin de compétences techniques particulières : nous vous guidons à chaque étape."
    },
    {
      question: "Combien coûtent les cours ?",
      answer: "Les tarifs varient selon le format (cours individuel ou petit groupe) et la matière enseignée. Nous proposons des forfaits mensuels ou à la carte. Pour connaître nos prix détaillés, contactez-nous. Des facilités de paiement sont possibles selon votre situation."
    },
    {
      question: "Puis-je essayer un cours avant de m'inscrire ?",
      answer: "Oui, nous proposons une séance d'essai pour vous permettre de découvrir notre approche et de vérifier que le format vous convient. Contactez-nous pour organiser cette première rencontre."
    },
    {
      question: "Comment se passe l'inscription ?",
      answer: "C'est très simple ! Contactez-nous via le formulaire du site, WhatsApp ou Telegram. Nous échangeons pour comprendre vos besoins, le profil de l'élève et vos disponibilités. Ensuite, nous vous proposons un planning personnalisé. Une fois validé, vous recevez toutes les infos pratiques par email. L'inscription ne prend que quelques minutes !"
    },
    {
      question: "Proposez-vous des cours pour adultes ?",
      answer: "Oui, nous proposons des cours d'arabe et de Quran pour les adultes. Que vous soyez débutant ou que vous souhaitiez approfondir vos connaissances, nos programmes s'adaptent à votre niveau et à vos objectifs."
    },
    {
      question: "Quelle est votre approche religieuse ?",
      answer: "Nous suivons la méthodologie des pieux prédécesseurs (salaf salih) avec douceur et bienveillance. Notre approche intègre naturellement les valeurs islamiques dans l'éducation, sans prosélytisme ni lourdeur. Nous rappelons que la réussite vient d'Allah et que l'apprentissage est une forme d'adoration."
    },
    {
      question: "Puis-je annuler ou modifier un cours ?",
      answer: "Oui, sous certaines conditions. Nous demandons un préavis de 24h minimum pour annuler ou reporter un cours (sauf urgence). Les cours annulés avec préavis peuvent être reportés. Nous sommes flexibles et compréhensives face aux imprévus familiaux (maladie, imprévu, etc.). Les modalités exactes sont précisées dans nos conditions générales."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1 className="page-title">Questions fréquentes</h1>
        <p className="page-subtitle">
          Nous avons rassemblé ici les questions les plus courantes de nos familles. 
          Si vous ne trouvez pas la réponse, n'hésitez pas à nous contacter directement !
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
                  <path d="M18 15l-6-6-6 6"/>
                ) : (
                  <path d="M6 9l6 6 6-6"/>
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

