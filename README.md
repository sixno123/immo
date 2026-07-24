# Résidence Azure Bouskoura — Prototype de bureau de vente digital

> **Prototype de démonstration — programme fictif.**
> Site vitrine premium pour un programme immobilier résidentiel à Bouskoura (Casablanca) :
> présentation du projet, disponibilités filtrables, fiches lots, comparateur, simulateur de
> financement, formulaire de visite et tableau de bord de démonstration.

Stack : **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React + React Router**.
Aucun backend : données mock en TypeScript + persistance `localStorage`, architecture prête à
recevoir une vraie base de données.

---

## 1. Installation

```bash
npm install
```

## 2. Développement

```bash
npm run dev
```

Le site est servi sur `http://localhost:5173`.

## 3. Build de production

```bash
npm run build
```

Le build vérifie le TypeScript (`tsc --noEmit`) puis génère le site statique dans `dist/`.
Pour prévisualiser le build : `npm run preview`.

## 4. Déploiement sur Hostinger

1. Lancer `npm run build`.
2. Ouvrir le **Gestionnaire de fichiers** Hostinger (ou un client FTP).
3. Copier **tout le contenu du dossier `dist/`** (y compris le fichier caché `.htaccess`)
   dans le dossier `public_html/` de l'hébergement.
4. C'est tout — le site est en ligne.

> **Routage** : le site utilise React Router en mode historique. Le fichier
> `public/.htaccess` (copié automatiquement dans `dist/`) redirige toutes les URL vers
> `index.html`, ce qui permet d'accéder directement à `/admin-demo`, `/comparateur`, etc.
> Hostinger utilise Apache : aucun réglage supplémentaire n'est nécessaire. Vérifiez
> simplement que le `.htaccess` a bien été transféré (fichiers cachés visibles dans le
> gestionnaire de fichiers).

## 5. Structure du projet

```
src/
  config/project.ts        ← configuration centrale (nom, WhatsApp, e-mail, navigation…)
  data/apartments.ts       ← les 40 lots (base de données mock)
  data/images.ts           ← registre des visuels (Unsplash + plans locaux)
  data/pois.ts             ← points d'intérêt (localisation)
  data/leads.ts            ← prospects fictifs du tableau de bord
  types/                   ← types TypeScript partagés
  utils/                   ← formatage FR, calcul de crédit, filtres, localStorage, WhatsApp
  hooks/                   ← useApartments (mock + modifications démo), useComparator, useCountUp
  components/
    layout/                ← Navbar, Footer, bouton WhatsApp flottant
    ui/                    ← SmartImage (fallback), badges, titres, animations
    home/                  ← sections de la page d'accueil
    apartment/             ← carte lot, barre du comparateur
  pages/                   ← Accueil, fiche lot, comparateur, brochure, admin démo, 404
public/
  .htaccess                ← réécriture SPA pour Hostinger (Apache)
  images/plans/            ← plans schématiques SVG par typologie
```

## 6. Modifier les données des appartements

Tout est dans **`src/data/apartments.ts`** : le tableau `seeds` contient un objet par lot
(référence, bâtiment, étage, type, surfaces, orientation, prix, statut, parking).
Modifiez ou ajoutez des entrées, le site (filtres, sélecteur, comparateur, brochure,
tableau de bord) se met à jour automatiquement.

Statuts possibles : `Disponible`, `Réservé`, `Vendu`.

> Pour brancher une vraie base de données plus tard : remplacer l'export `apartments`
> par un appel API et adapter `src/utils/storage.ts` (demandes de visite, modifications
> de prix/statut) — le reste de l'application n'a pas besoin de changer.

## 7. Changer le numéro WhatsApp

Dans **`src/config/project.ts`** :

```ts
whatsappNumber: '212600000000', // format international sans « + » ni espaces
phoneDisplay: '+212 6 00 00 00 00',
```

Le numéro actuel est un **numéro de démonstration à remplacer**. Le message pré-rempli
est construit dans `src/utils/whatsapp.ts` (la référence du lot y est ajoutée
automatiquement depuis une fiche appartement).

## 8. Remplacer les images

Les visuels d'ambiance proviennent d'Unsplash et sont listés dans **`src/data/images.ts`**.
Pour utiliser les perspectives réelles du programme :

1. Déposer les fichiers dans `public/images/` (JPEG/WebP optimisés, ~1600 px de large max).
2. Remplacer les URL dans `src/data/images.ts` par `/images/mon-visuel.webp`.
3. Les plans d'étage sont dans `public/images/plans/` (mêmes noms de fichiers à conserver,
   ou mettre à jour `floorPlanImages` dans `src/data/images.ts`).

Chaque image dispose d'un repli élégant automatique si le fichier est introuvable
(`src/components/ui/SmartImage.tsx`).

## 9. Modifier l'identité du projet

**`src/config/project.ts`** centralise : nom, slogan, localisation, e-mail, date de
livraison, prix de départ, navigation et réseaux sociaux.
Les couleurs de marque sont définies dans **`tailwind.config.js`**
(`ivory`, `forest`, `charcoal`, `bronze`) et les polices dans `index.html` +
`tailwind.config.js` (`Cormorant Garamond` pour les titres, `Jost` pour le texte).

## 10. Tableau de bord de démonstration

Accessible sur **`/admin-demo`** (aucune authentification — prototype uniquement) :

- indicateurs (lots totaux / disponibles / réservés / vendus, prospects),
- demandes de visite enregistrées par le formulaire (localStorage),
- lots les plus consultés,
- **édition de démonstration** des prix et statuts, répercutée en direct sur le site
  public et persistée en localStorage (bouton « Rétablir les données d'origine » inclus).

## Limites connues du prototype

- Pas de backend : demandes de visite et modifications démo restent sur l'appareil.
- Visuels d'illustration Unsplash chargés au runtime (avec repli hors-ligne) — à
  remplacer par les vraies perspectives.
- La brochure est une page imprimable (« Imprimer / Enregistrer en PDF ») plutôt qu'un
  PDF maquetté.
- La carte de localisation est une illustration stylisée, pas une carte interactive.
- Mentions légales et politique de confidentialité : emplacements prévus, contenus à fournir.
