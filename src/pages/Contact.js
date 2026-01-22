import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    age: '',
    niveau: '',
    cours: '',
    email: '',
    telephone: '',
    message: ''
  });

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
    alert("Votre message a bien été transmis ! Nous vous recontactons sous 48h in sha'Allah.");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="page-title">Souhaitez-vous commencer cette magnifique aventure ?</h1>
        <p className="page-subtitle">
          N'hésitez pas à nous contacter dès maintenant. Nous vous répondons sous 48h in sha'Allah, 
          et généralement beaucoup plus vite. Vos interrogations, vos aspirations et vos buts nous tiennent à cœur :
          nous restons disponibles pour vous entendre.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-messaging">
          <h2 className="messaging-title">Communication instantanée et simple</h2>
          <p className="messaging-text">
            Pour une discussion rapide, nous vous recommandons WhatsApp ou Telegram.
            Nous sommes accessibles du lundi au samedi, de 9h à 18h.
          </p>

          <div className="messaging-buttons">
            <a href="https://wa.me/201281627486" className="messaging-btn whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>

            <a href="https://t.me/zidniicours" className="messaging-btn telegram" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>

            <a href="mailto:plateformezidnii@gmail.com" className="messaging-btn email">
              Email
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="prenom">Prénom de l’élève *</label>
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
            <label htmlFor="cours">Cours recherché *</label>
            <select
              id="cours"
              name="cours"
              value={formData.cours}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez un cours</option>
              <option value="quran">Qur'an</option>
              <option value="arabe">Apprentissage de l'arabe</option>
              <option value="aide-devoirs">Matières scolaires</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Numéro de contact (WhatsApp ou Telegram) *</label>
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
            <label htmlFor="message">Message / Informations complémentaires (optionnel)</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Décrivez-nous votre situation, vos attentes ou les besoins spécifiques de l’élève…"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Envoyer la demande
          </button>

          <div className="form-info">
            <p>✓ Réponse rapide ✓ Sans engagement</p>
            <div className="form-info-details">
              <span>Réponse garantie sous 48h</span>
              <span>Aucun engagement à ce stade</span>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
