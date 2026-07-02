# CASA VOGUE — Site vitrine

Site vitrine d'une **maison de tissus & ameublement** : tissus au mètre, rideaux &
voilages, tringles & accessoires, mobilier et coussins. Conseil, confection sur-mesure
et pose.

> Premier rendu — 100 % statique (HTML / CSS / JS), sans dépendance ni build.
> Les visuels « tissus » sont des **swatches SVG/CSS** (nuancier d'atelier) : aucun
> risque d'image cassée. Ils sont pensés pour être remplacés par vos vraies photos produit.

## ✨ Aperçu

- **Direction artistique** : éditoriale, à la française — ivoire chaud, encre espresso,
  accents terracotta & olive. Typographie *Fraunces* (titres) + *Jost* (texte).
- **Pages**
  - `index.html` — accueil : hero, collections, sélection, savoir-faire, services,
    réalisations, avis clients, newsletter.
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
├── index.html            # Accueil
├── collections.html      # Catalogue filtrable
├── contact.html          # Contact / rendez-vous
├── assets/
│   ├── css/styles.css     # Design system complet
│   ├── js/main.js         # Nav, menu, reveal, formulaires
│   ├── js/products.js     # Données catalogue + rendu/filtre
│   └── img/favicon.svg    # Monogramme CV
├── .gitignore
└── README.md
```

## 🎨 Personnaliser

- **Couleurs & typo** : variables CSS en haut de `assets/css/styles.css` (`:root`).
- **Catalogue** : tableau `PRODUCTS` dans `assets/js/products.js` (nom, catégorie,
  matière, prix, palette `p-*`, tissage `w-*`).
- **Swatches** : palettes `.p-*` et tissages `.w-lin / .w-velours / .w-rayures /
  .w-carreaux / .w-chevron / .w-damas / .w-pois` dans le CSS.
- **Vraies photos** : remplacez un bloc `<div class="swatch ..."></div>` par
  `<img src="assets/img/mon-tissu.jpg" alt="…" style="width:100%;height:100%;object-fit:cover">`.

## 🌐 Mise en ligne (GitHub Pages)

Le dépôt est prêt pour GitHub Pages (branche `main`, dossier racine). Une fois activé,
le site est servi tel quel — aucune étape de build.

## ⚠️ Notes

- Coordonnées, adresse et références produits sont **fictives** — à remplacer par les
  vôtres.
- Les formulaires sont en démonstration (validation front uniquement). Branchez-les à
  votre service d'envoi (Formspree, Netlify Forms, votre API…) le moment venu.
