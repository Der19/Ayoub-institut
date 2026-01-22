import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [formData, setFormData] = useState({
    prenom: '',
    age: '',
    niveau: '',
    cours: '',
    email: '',
    telephone: '',
    message: ''
  });

  const heroStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/image1.jpg)`,
  };

  const heroRightBgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/okkk.png)`,
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAgeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Garder seulement les chiffres
    setFormData({
      ...formData,
      age: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre demande a été envoyée ! Nous vous répondrons sous 24h in sha\'Allah.');
  };

  const handleDownload = (resourceName) => {
    alert(`Téléchargement de ${resourceName}...`);
  };

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="accueil" className="hero" style={heroStyle}>
        <div className="hero-content">
          <h1 className="hero-title">
            Soutenons ensemble l'épanouissement académique et spirituel de vos enfants
          </h1>
          <div className="hero-services">
            <span>Formations en ligne sur mesure</span>
            <span>•</span>
            <span>Aide scolaire</span>
            <span>•</span>
            <span>Langue arabe</span>
            <span>•</span>
            <span>Quran</span>
          </div>
          <p className="hero-motto">
            Avec tendresse et compassion, pour des fondations robustes
          </p>
          <div className="hero-buttons">
            <button onClick={() => handleScrollTo('cours')} className="btn-primary">
              Découvrir nos cours
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary">
              Nous contacter
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-image-right" style={heroRightBgStyle}>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Une expertise approfondie dans le suivi des apprenants</h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">❤️</div>
          <h3>Approche pédagogique bienveillante</h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Réponse sous 24h</h3>
        </div>
      </section>

      {/* Cours Section */}
      <section id="cours" className="cours-section">
        <div className="cours-hero">
          <h1 className="page-title">Nos cours en ligne</h1>
          <p className="page-subtitle">
            Des contenus personnalisés selon chaque profil, pour chaque moment de l'année. 
            Car la formation se poursuit en permanence.
          </p>
        </div>

        <div className="cours-grid">
          <div className="cours-card">
            <div className="cours-icon blue">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h2 className="cours-title">Matières scolaires</h2>
            <p className="cours-description">
              Votre enfant nécessite un soutien en français, mathématiques ou anglais ? 
              Nos leçons individuelles et sessions d'assistance aux devoirs lui offrent la possibilité d'avancer 
              progressivement, selon sa cadence.
            </p>
            <ul className="cours-features">
              <li>
                <span className="checkmark">✓</span>
                Niveaux : CP à 3ème
              </li>
              <li>
                <span className="checkmark">✓</span>
                Cours individuels ou petits groupes
              </li>
              <li>
                <span className="checkmark">✓</span>
                Adaptés aux périodes scolaires
              </li>
            </ul>
            <button onClick={() => handleScrollTo('contact')} className="cours-button">Voir les créneaux</button>
          </div>

          <div className="cours-card featured">
            <div className="popular-badge">Populaire</div>
            <div className="cours-icon brown">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="cours-title">Apprentissage de la langue arabe</h2>
            <p className="cours-description">
              Proposez à votre enfant (ou à vous-même) l'accès au Quran : la langue arabe. 
              Depuis l'alphabet jusqu'aux échanges quotidiens, notre approche graduelle et amusante 
              transforme la formation en expérience naturelle et plaisante.
            </p>
            <ul className="cours-features">
              <li>
                <span className="checkmark">✓</span>
                Tous niveaux : débutant à avancé
              </li>
              <li>
                <span className="checkmark">✓</span>
                Méthode progressive et ludique
              </li>
              <li>
                <span className="checkmark">✓</span>
                Supports inclus (fiches, exercices)
              </li>
            </ul>
            <button onClick={() => handleScrollTo('contact')} className="cours-button">Commencer l'arabe</button>
          </div>

          <div className="cours-card">
            <div className="cours-icon blue">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h2 className="cours-title">Quran</h2>
            <p className="cours-description">
              Introduisez votre enfant à l'apprentissage par cœur du Quran avec tajwid. 
              Nos formations combinent sérieux et compassion.
            </p>
            <ul className="cours-features">
              <li>
                <span className="checkmark">✓</span>
                Mémorisation + Tajwid
              </li>
              <li>
                <span className="checkmark">✓</span>
                Enfants dès 4 ans et adultes
              </li>
              <li>
                <span className="checkmark">✓</span>
                Ambiance bienveillante
              </li>
            </ul>
            <button onClick={() => handleScrollTo('contact')} className="cours-button">Rejoindre les cours</button>
          </div>
        </div>
      </section>

      {/* Gratuit Section */}
      <section id="gratuit" className="gratuit-section">
        <div className="gratuit-hero">
          <h1 className="page-title">📣 Annonce des Assises du Vendredi</h1>
          <p className="page-subtitle">
            Correction de la lecture de Sūrat al-Fātiḥa
          </p>
        </div>

        <div className="gratuit-content">
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
        </div>
      </section>

      {/* A Propos Section */}
      <section id="a-propos" className="apropos-section">
        <div className="apropos-hero">
          <h1 className="page-title">Un institut en ligne conçu pour toute la Oumma Islamique</h1>
          <p className="page-subtitle">
            Nous accompagnons les mamans dans la formation et le développement de leurs enfants 
            avec sérieux, tendresse et compassion. Car chaque enfant mérite d'étudier dans une 
            atmosphère paisible et sécurisante.
          </p>
        </div>

        <div className="values-section">
          <div className="value-card-large">
            <div className="value-icon-large">🛡️</div>
            <h2 className="value-title">Qualité pédagogique</h2>
            <p className="value-description">
              Des cours ajustés à la cadence et aux capacités de chaque apprenant, avec une méthode éducative 
              qui facilite la formation de façon plus naturelle et inspirante. Nous sommes convaincus qu'un enfant éveillé 
              et soutenu avancera spontanément, bi idhnillah.
            </p>
          </div>

          <div className="value-card-large">
            <div className="value-icon-large">🌙</div>
            <h2 className="value-title">Références islamiques</h2>
            <p className="value-description">
              Un enseignement équilibré qui incorpore nos principes, en suivant la voie de nos pieux 
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-hero">
          <h1 className="page-title">Questions fréquentes</h1>
          <p className="page-subtitle">
            Découvrez ici les solutions aux interrogations les plus courantes des familles.
            Si un élément demeure imprécis, contactez-nous sans hésitation : nous serons heureuses de vous assister.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFAQIndex === index ? 'open' : ''}`}
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
                  {openFAQIndex === index ? (
                    <path d="M18 15l-6-6-6 6"/>
                  ) : (
                    <path d="M6 9l6 6 6-6"/>
                  )}
                </svg>
              </div>
              {openFAQIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-hero">
          <h1 className="page-title">Souhaitez-vous commencer cette magnifique aventure ?</h1>
          <p className="page-subtitle">
            N'hésitez pas à nous contacter dès maintenant. Nous vous répondons sous 24h in sha'Allah, 
            et généralement beaucoup plus vite. Vos interrogations, vos aspirations et vos buts nous tiennent à cœur :
            nous restons disponibles pour vous entendre.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-messaging">
            <h2 className="messaging-title">Communication instantanée et simple</h2>
            <p className="messaging-text">
              Pour une réponse immédiate, privilégiez WhatsApp !
            </p>
            <div className="messaging-buttons">
              <a href="https://wa.me/201281627486" className="messaging-btn whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:plateformezidnii@gmail.com?subject=Contact%20Zidnii%20Institut" className="messaging-btn email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="prenom">Prénom de l'élève *</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Ex : Mouhamad"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Âge *</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Ex : 8"
                  value={formData.age}
                  onChange={handleAgeChange}
                  min="1"
                  max="120"
                  required
                  style={{ paddingRight: '40px' }}
                />
                <span style={{ 
                  position: 'absolute', 
                  right: '15px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#666',
                  pointerEvents: 'none'
                }}>
                  ans
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="niveau">Niveau *</label>
              <select
                id="niveau"
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un niveau</option>
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="avance">Avancé</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="cours">Cours souhaité *</label>
              <select
                id="cours"
                name="cours"
                value={formData.cours}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un cours</option>
                <option value="quran">Quran</option>
                <option value="arabe">Apprentissage de la langue arabe</option>
                <option value="aide-devoirs">Matières scolaires</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Votre email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Votre numéro WhatsApp *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="+33 6 XX XX XX XX"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Besoins spécifiques (optionnel)</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-button">
              Envoyer ma demande
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>

            <div className="form-info">
              <p>✓ Réponse rapide ✓ Sans engagement</p>
              <div className="form-info-details">
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Réponse sous 24h garantie
                </span>
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Aucun engagement à cette étape
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
