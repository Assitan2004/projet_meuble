# Pallet Ross — Immobilier d'Exception & Mobilier d'Art

Un projet front-end de site vitrine haut de gamme qui fusionne l'immobilier de prestige et le design de mobilier d'art. Pallet Ross se positionne comme un curateur de biens rares : de la villa d'architecte au mobilier signé, le site propose une expérience visuelle ultra-soignée et entièrement responsive.

👉 **[Voir le site en ligne](https://assitan2004.github.io/projet_meuble/)**

---

## L'arborescence du projet

Le projet est structuré de manière claire et modulaire pour séparer les vues et les styles de chaque section :
* **Accueil (`index.html`)** : Présentation du concept de curateur de biens rares, collections phares et FAQ.
* **Boutique (`produits.html`)** : Catalogue complet du mobilier d'art avec filtres et modes d'affichage avancés.
* **Fiche Produit (`detail_produit.html`)** : Zoom complet sur une pièce avec gestion dynamique des caractéristiques.
* **Studio Architecture (`architect.html`)** : Présentation des réalisations, des services et des chiffres clés de l'agence.
* **Contact (`contact.html`)** : Formulaire de demande de projet et coordonnées du showroom parisien.
* **Espace Client (`connexion.html` / `inscription.html`)** : Formulaires minimalistes pour l'accès membre.
* **Mes Favoris (`favoris.html`)** : Liste de sauvegarde des coups de cœur de l'utilisateur.
* **Mon Panier (`panier.html`)** : Récapitulatif et calcul de commande avant validation.

---

## Présentation des pages & Fonctionnalités

### L'Accueil (`index.html`)
* Bannière d'impact épurée avec une typographie élégante et un carrousel de cartes en éventail interactives représentant des propriétés d'exception.
* Section de filtres circulaires dynamiques pour explorer les collections d'art (Canapés, Lits, Tables...).
* Grille de Best Sellers avec un effet d'overlay blanc flouté (`backdrop-filter`) moderne au survol.
* Assistant virtuel interactif flottant et section FAQ sous forme d'accordéons repliables.

<img src="https://github.com/user-attachments/assets/f065e394-e937-420c-b649-493942646f7c" width="600" alt="Page d'accueil" />

---

### La Boutique & Catalogue (`produits.html`)
* **Recherche & Filtres Avancés :** Système de filtrage dynamique codé en JavaScript permettant de trier les pièces par catégorie (Maison, Musique, Tech), d'ajuster le prix maximum via un slider en temps réel, et de rechercher par mot-clé.
* **Toggle d'Affichage Flexible :** Un contrôleur de vue permettant à l'utilisateur de basculer instantanément d'un affichage en Grille (`grid-view`) moderne à une Liste (`list-view`) épurée.
* **Fonctionnalités E-commerce :** Ajout direct au panier avec un systeme de badge qui s'incrémente dynamiquement, gestion des favoris au clic et alertes Toast élégantes de confirmation ("Ajouté aux favoris", "Produit ajouté au panier").

<img src="https://github.com/user-attachments/assets/1708dc94-e3ab-4824-9e9a-1c86c6e06f68" width="600" alt="Boutique et catalogue" />

---

### La Fiche Produit Dynamique (`detail_produit.html`)
* **Dynamic Rendering :** Le script récupère l'identifiant du produit via l'URL pour injecter dynamiquement les textes, prix originaux, calculs de remises et spécifications correspondantes depuis une base de données locale (`PRODUCTS`).
* **Galerie d'images & Lightbox immersive :** Navigation fluide entre différents angles de vue (face, profil, détails) via des vignettes tactiles et visionneuse plein écran (**Lightbox**) gérant la navigation au clavier (touches fléchées et Échap).
* **Micro-interactions :** Sélecteurs d'options personnalisés (pastilles de couleurs interactives, choix des matériaux), sélecteur de quantité ($+$ / $-$) et bouton "Ajouter au panier" qui change d'état ("Ajouté ! ✓") pendant 2 secondes pour valider l'action.

<img src="https://github.com/user-attachments/assets/4a3002a9-eaf5-4ec7-8db5-efb60a021e1d" width="600" alt="Fiche produit dynamique" />

---

### Le Studio d'Architecture (`architect.html`)
* **Hero Slider Interactif :** Un carrousel plein écran géré en JavaScript avec barre de progression temporelle animée en CSS/JS et compteur de slides (`01 / 03`).
* **Scroll Reveal :** Utilisation de l'API moderne `IntersectionObserver` en JavaScript pour détecter le défilement et déclencher des transitions d'affichage élégantes (`reveal`) sur les sections.
* **Compteurs statistiques animés (Count-Up) :** Les chiffres clés de l'agence (nombre de projets, récompenses) s'animent de manière progressive et fluide dès qu'ils entrent dans le champ de vision de l'utilisateur.

<img src="https://github.com/user-attachments/assets/c656de6b-9624-4105-a4bd-dd3230e1817f" width="600" alt="Studio architecture" />

---

### La Page Contact & Services (`contact.html`)
* **Formulaire de projet complet :** Champs structurés comprenant des sélections d'objets (devis, suivi, aménagement) et des données optionnelles (date de projet, précisions de quantité) pour qualifier au mieux les demandes clients.
* **Micro-interactions à la soumission :** Gestion asynchrone de l'événement `submit` modifiant visuellement l'état du bouton, affichant un bloc de succès persistant et déclenchant une notification Toast temporaire.
* **Barre d'engagements premium (Info Strip) :** Un bandeau de réassurance mettant en valeur les prestations de luxe (conception 3D, fabrication sur mesure sous 8 semaines, visites privées).

<img src="https://github.com/user-attachments/assets/34d41914-21f1-4178-803b-dc5a2e4cd3ff" width="600" alt="Page contact" />

---

### Le Panier & Récapitulatif (`panier.html`)
* **Gestion des commandes :** Table listant proprement les articles sélectionnés (vignette, titre, description, quantité et prix) avec gestion du volume par article ($+$ / $-$) et suppression rapide par icône de corbeille.
* **Module de facturation calculé :** Volet financier simulant l'application de codes promotionnels, la déduction automatique d'un pourcentage de remise (10 %), l'ajout des frais de port fixes et le calcul en temps réel du montant total net.
* **Suggestions de Cross-Selling :** Une galerie de recommandations d'ameublement ciblées en fin de page ("Suggestions pour votre intérieur") pour inciter à compléter le panier.

<img src="https://github.com/user-attachments/assets/57d655e8-c8e1-4f33-b06a-528e76929cf0" width="600" alt="Panier et récapitulatif" />

---

### L'Espace Membre (`connexion.html` / `inscription.html`)
* Interfaces d'authentification minimalistes et soignées de style luxe (coins très arrondis, lignes fines, boutons épurés).
* Transition rapide entre la création de compte et la connexion via des passerelles intégrées dans les pieds de formulaires.

<img src="https://github.com/user-attachments/assets/f30bf42d-2bee-40fe-bde9-6d61a2e12097" width="600" alt="Espace membre" />

---

## Technologies utilisées

* **HTML5** : Structuration sémantique de l'ensemble des pages.
* **CSS3** : Design responsive, grilles de mise en page (CSS Grid & Flexbox), variables globales (`:root`), typographies premium et animations fluides de transition ou d'overlay au survol.
* **JavaScript Vanilla** : Moteur dynamique du site (gestion du menu mobile burger, du chatbot interactif, du carrousel de l'accueil, du slider d'architecture, des compteurs Count-Up, des filtres en temps réel, de la lightbox, du panier et du rendu dynamique via paramètres d'URL).
* **Google Fonts & Material Symbols / FontAwesome** : Pour la typographie épurée (`Plus Jakarta Sans`) et le set d'icônes vectorielles.
