# CASA VOGUE — Site vitrine

Site vitrine d'une **maison de rideaux & tissus** : tissus au mètre, rideaux &
voilages, tringles & accessoires, mobilier et coussins. Conseil, confection sur-mesure
et pose.

> 100 % statique (HTML / CSS / JS), sans dépendance ni build. Logo et réalisations
> (photos + vidéos) sont ceux fournis par la maison ; le catalogue démo utilise des
> **swatches SVG/CSS** (nuancier d'atelier) là où aucune photo produit n'existe encore.

## ✨ Aperçu

- **Direction artistique** : esprit « rideau de scène » — ivoire chaud, marine profond,
  accent or, sur la base du logo de la maison. Typographie *Cinzel* (capitales) +
  *Cormorant Garamond* (titres) + *Jost* (texte).
- **Pages**
  - `index.html` — accueil : hero, collections, sélection, savoir-faire, services,
    réalisations (photos + vidéos), avis clients, newsletter.
  - `collections.html` — catalogue filtrable par univers.
  - `contact.html` — formulaire de rendez-vous + infos showroom.
- **Interactions** : navigation collante, menu mobile, révélations au scroll,
  filtres de catalogue, formulaires (démo, sans back-end), respect de
  `prefers-reduced-motion`.

## 🚀 Lancer en local

Aucune installation requise. Ouvrez simplement `index.html` dans un navigateur,
ou servez le dossier :

```bash
# Python
python -m http.server 8000
# ou Node
npx serve .
```

Puis rendez-vous sur http://localhost:8000.

## 🗂️ Structure

```
casa-vogue/
├── index.html                    # Accueil
├── collections.html              # Catalogue filtrable
├── contact.html                  # Contact / rendez-vous
├── assets/
│   ├── css/styles.css             # Design system complet
│   ├── js/main.js                 # Nav, menu, reveal, formulaires
│   ├── js/products.js             # Données catalogue + rendu/filtre
│   ├── img/logo.jpg               # Logo officiel (favicon + nav + footer)
│   ├── img/realisations/*.jpg     # Photos réelles de chantiers
│   └── video/*.mp4                # Vidéos réelles de réalisations
├── .gitignore
└── README.md
```

## 🎨 Personnaliser

- **Couleurs & typo** : variables CSS en haut de `assets/css/styles.css` (`:root`).
- **Catalogue** : tableau `PRODUCTS` dans `assets/js/products.js` (nom, catégorie,
  matière, prix, palette `p-*`, tissage `w-*`).
- **Swatches** : palettes `.p-*` (dont `p-marine` / `p-dore`, aux couleurs de la
  maison) et tissages `.w-lin / .w-velours / .w-rayures / .w-carreaux / .w-chevron /
  .w-damas / .w-pois` dans le CSS.
- **Vraies photos** : un bloc `<div class="swatch"><img src="..." alt="…"></div>`
  affiche une photo réelle (au lieu d'un swatch synthétique) grâce à la règle
  `.swatch > img` — déjà utilisée pour le hero, les réalisations et le savoir-faire.

## 🌐 Mise en ligne (GitHub Pages)

Le dépôt est prêt pour GitHub Pages (branche `main`, dossier racine). Une fois activé,
le site est servi tel quel — aucune étape de build.

## ⚠️ Notes

- Coordonnées et adresse du showroom sont **fictives** — à remplacer par les vôtres.
  Le logo, les photos et vidéos de réalisations sont en revanche les vôtres.
- Le catalogue (`assets/js/products.js`) reste une démo de mise en page : remplacez
  progressivement les swatches par vos vraies photos produit au fil de vos prises de vue.
- Les formulaires sont en démonstration (validation front uniquement). Branchez-les à
  votre service d'envoi (Formspree, Netlify Forms, votre API…) le moment venu.
- Les vidéos ne sont pas compressées (jusqu'à ~6 Mo) : envisagez de les optimiser
  (H.264, ~720p, bitrate réduit) si le temps de chargement devient sensible.
