# Enjoy Institut - Site Web

Site web pour Enjoy Institut, une plateforme d'éducation en ligne dédiée à l'accompagnement scolaire et spirituel.

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.js      # En-tête avec navigation
│   ├── Footer.js      # Pied de page
│   ├── ChatButton.js  # Bouton de chat WhatsApp
│   └── ScrollToTopButton.js  # Bouton retour en haut
├── pages/             # Pages de l'application
│   ├── Home.js        # Page d'accueil
│   ├── Cours.js       # Page des cours
│   ├── APropos.js     # Page À propos
│   ├── Gratuit.js     # Page ressources gratuites
│   ├── Temoignages.js # Page témoignages
│   ├── InformationsPratiques.js  # Page informations pratiques
│   ├── Formations.js  # Page formations à venir
│   ├── FAQ.js         # Page FAQ
│   └── Contact.js     # Page contact
└── App.js             # Composant principal avec routing
```

## 🎨 Fonctionnalités

- ✅ Navigation entre les pages
- ✅ Design responsive
- ✅ Formulaire de contact
- ✅ FAQ avec accordéon interactif
- ✅ Bouton de chat WhatsApp
- ✅ Bouton retour en haut
- ✅ Animations et transitions

## 🛠️ Technologies utilisées

- React 18
- React Router DOM
- CSS3

## 📝 Notes

- Les liens WhatsApp et Telegram doivent être mis à jour avec les vrais numéros/identifiants
- Les fonctionnalités de téléchargement PDF sont simulées (à connecter avec un backend)
- Le formulaire de contact nécessite une intégration backend pour l'envoi d'emails

