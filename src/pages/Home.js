import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [formData, setFormData] = useState({
    prenom: '',
    age: '',
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre demande a été envoyée ! Nous vous répondrons sous 48h in sha\'Allah.');
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
            Accompagnons ensemble la réussite scolaire et spirituelle de vos enfants
          </h1>
          <div className="hero-services">
            <span>Cours en ligne personnalisés</span>
            <span>•</span>
            <span>Soutien scolaire</span>
            <span>•</span>
            <span>Langue arabe</span>
            <span>•</span>
            <span>Quran</span>
          </div>
          <p className="hero-motto">
            Dans la douceur et la bienveillance, pour des bases solides
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
          <h3>Une expérience solide dans l'accompagnement des élèves</h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">❤️</div>
          <h3>Pédagogie bienveillante</h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Réponse sous 48h</h3>
        </div>
      </section>

      {/* Cours Section */}
      <section id="cours" className="cours-section">
        <div className="cours-hero">
          <h1 className="page-title">Nos cours en ligne</h1>
          <p className="page-subtitle">
            Des programmes adaptés à chaque besoin, pour chaque période de l'année. 
            Parce que l'apprentissage ne s'arrête jamais.
          </p>
        </div>

        <div className="cours-grid">
          <div className="cours-card">
            <div className="cours-icon blue">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h2 className="cours-title">Aide aux devoirs & cours particuliers</h2>
            <p className="cours-description">
              Votre enfant a besoin d'un coup de pouce en français, mathématiques ou anglais ? 
              Nos cours particuliers et séances d'aide aux devoirs lui permettent de progresser 
              en douceur, à son rythme.
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
              Offrez à votre enfant (ou à vous-même) la clé du Quran : la langue arabe. 
              De l'alphabet aux conversations courantes, notre méthode progressive et ludique 
              rend l'apprentissage fluide et agréable.
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
              Initiez votre enfant à la mémorisation du Quran avec tajwid. 
              Nos cours allient rigueur et bienveillance.
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
          <h1 className="page-title">Ressources gratuites pour bien démarrer</h1>
          <p className="page-subtitle">
            Téléchargez nos supports pédagogiques et découvrez notre approche. 
            Aucune inscription requise, juste un petit geste pour vous aider dès maintenant.
          </p>
        </div>

        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon blue">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h2 className="resource-title">Guide de méthodologie pour les devoirs</h2>
            <p className="resource-description">
              Conseils pratiques et bienveillants pour aider votre enfant à s'organiser, 
              réviser efficacement et gagner en autonomie.
            </p>
            <button 
              className="resource-button"
              onClick={() => handleDownload('Guide de méthodologie')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger (PDF)
            </button>
          </div>

          <div className="resource-card">
            <div className="resource-icon brown">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h2 className="resource-title">Poster alphabet arabe illustré</h2>
            <p className="resource-description">
              Un support visuel coloré et ludique pour apprendre les 28 lettres arabes en s'amusant. 
              Parfait à afficher dans la chambre.
            </p>
            <button 
              className="resource-button"
              onClick={() => handleDownload('Poster alphabet arabe')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger (PDF)
            </button>
          </div>

          <div className="resource-card">
            <div className="resource-icon blue">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h2 className="resource-title">Planning de révision imprimable</h2>
            <p className="resource-description">
              Organisez la semaine de votre enfant avec ce planning coloré et motivant. 
              Révisions, loisirs, Quran : tout trouve sa place.
            </p>
            <button 
              className="resource-button"
              onClick={() => handleDownload('Planning de révision')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* A Propos Section */}
      <section id="a-propos" className="apropos-section">
        <div className="apropos-hero">
          <h1 className="page-title">Un institut en ligne pensé pour votre famille</h1>
          <p className="page-subtitle">
            Depuis 2023, nous accompagnons les mamans dans l'éducation de leurs enfants avec sérieux, 
            patience et amour. Parce que chaque enfant mérite d'apprendre dans la joie et la confiance.
          </p>
        </div>

        <div className="values-section">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-hero">
          <h1 className="page-title">Questions fréquentes</h1>
          <p className="page-subtitle">
            Nous avons rassemblé ici les questions les plus courantes de nos familles. 
            Si vous ne trouvez pas la réponse, n'hésitez pas à nous contacter directement !
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
          <h1 className="page-title">Prêt(e) à commencer l'aventure ?</h1>
          <p className="page-subtitle">
            Contactez-nous dès maintenant. Nous vous répondons sous 48h in sha'Allah, et souvent bien plus vite ! 
            Posez vos questions, partagez vos besoins : nous sommes là pour vous écouter.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-messaging">
            <h2 className="messaging-title">Envoyez-nous un message instantané</h2>
            <p className="messaging-text">
              Pour une réponse immédiate, privilégiez WhatsApp ou Telegram ! 
              Nous sommes disponibles du lundi au samedi, de 9h à 18h.
            </p>
            <div className="messaging-buttons">
              <a href="https://whatsapp.com/channel/0029VbAXGec9MF96jWWMJi1w" className="messaging-btn whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://t.me/zidniicours" className="messaging-btn telegram" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
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
                placeholder="Ex : Maryam"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Âge / Niveau scolaire *</label>
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Ex : 8 ans - CE2 ou Adulte"
                value={formData.age}
                onChange={handleChange}
                required
              />
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
                <option value="aide-devoirs">Aide aux devoirs & cours particuliers</option>
                <option value="arabe">Apprentissage de la langue arabe</option>
                <option value="quran">Quran</option>
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
              <label htmlFor="telephone">Votre numéro (WhatsApp ou Telegram) *</label>
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
                placeholder="Parlez-nous de votre enfant, de ses besoins, de vos attentes..."
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
                  Réponse sous 48h garantie
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
