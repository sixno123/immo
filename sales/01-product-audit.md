# 01 — Audit du produit : Résidence Azure Bouskoura

**Date d'audit : 24 juillet 2026**
**Dépôt audité : `sixno123/immo`, branche `main` (commit `53c92f1`)**
**Démo publique : https://immo-rho-tan.vercel.app/**

---

## 1. Positionnement (phrase unique)

> **Nous transformons le site d'un programme immobilier en véritable bureau de vente digital
> interactif : votre acheteur choisit son lot en ligne, votre équipe voit qui l'a regardé.**

### Pourquoi cette formulation plutôt que la version courte

La proposition de départ — *« Nous transformons le site d'un programme immobilier en véritable
bureau de vente digital interactif »* — est bonne mais s'arrête au bénéfice acheteur. Or la
recherche marché montre que le promoteur marocain n'achète pas « une meilleure expérience
visiteur » : il achète **des rendez-vous qualifiés** et **du temps commercial récupéré**. Les
concurrents locaux (MY iMMOTECH, Studio 81, Arlynk, Realiz3D) vendent tous du *visuel*
(maquette 3D, visite 360°). Personne ne vend explicitement le **retour d'information vers
l'équipe de vente**. La seconde moitié de la phrase est donc notre différenciateur.

**Variantes selon le canal :**

| Contexte | Formulation |
|---|---|
| E-mail / LinkedIn (courte) | « Nous transformons le site d'un programme immobilier en bureau de vente digital interactif. » |
| Appel / réunion (complète) | Version longue ci-dessus. |
| Une phrase de crédibilité | « Vos acheteurs choisissent leur lot en ligne — bâtiment, étage, orientation, prix — au lieu d'appeler pour demander ce qui reste. » |

---

## 2. Ce que le prototype démontre réellement

Vérifié en lisant le code source, pas la page marketing.

### 2.1 Fonctionnalités présentes et complètes

| Fonction | Où c'est implémenté | Ce que ça fait vraiment |
|---|---|---|
| Présentation premium du programme | `src/components/home/Hero.tsx`, `ProjectPresentation.tsx`, `Gallery.tsx`, `Amenities.tsx` | Direction artistique cohérente : Cormorant Garamond + Jost, palette ivoire/forêt/bronze définie dans `tailwind.config.js`, animations Framer Motion. |
| Sélecteur bâtiment + étage | `src/components/home/BuildingSelector.tsx` | Coupe schématique du bâtiment, niveaux cliquables, compteur de lots disponibles par étage, badge « complet » si 0 disponible. |
| Inventaire des lots | `src/data/apartments.ts` (40 lots générés depuis `seeds`) | Référence, bâtiment, étage, typologie, chambres, SDB, surface intérieure, terrasse, orientation, prix, statut, parking. |
| Statuts Disponible / Réservé / Vendu | `src/types/index.ts` (`ApartmentStatus`), `src/components/ui/StatusBadge.tsx` | Trois états, propagés dans les filtres, le sélecteur, les fiches et le tableau de bord. |
| Filtres de recherche | `src/components/home/Availability.tsx` + `src/utils/filters.ts` | Bâtiment, étage, chambres, prix min/max, surface min, statut. Pagination « voir plus » par 9. |
| Fiches lot détaillées | `src/pages/ApartmentPage.tsx` | Descriptions longues par typologie, prestations, plan, mensualité indicative, CTA WhatsApp pré-rempli avec la référence du lot. |
| Plans d'étage | `public/images/plans/*.svg` (6 typologies) | Plans schématiques SVG servis en local — pas de dépendance externe. |
| Comparateur | `src/hooks/useComparator.tsx`, `src/pages/ComparatorPage.tsx`, `ComparatorBar.tsx` | Sélection multi-lots persistée, barre flottante, page de comparaison côte à côte. |
| Simulateur de financement | `src/utils/financing.ts` + `FinancingSimulator.tsx` | Vrai calcul d'annuité constante `M = C×t/(1−(1+t)^−n)`. Mensualité indicative par lot à 20 % d'apport / 25 ans / 4,5 %. Disclaimer non contractuel inclus. |
| Formulaire de visite | `src/components/home/BookingForm.tsx` | 9 champs + case de consentement, validation côté client (nom, téléphone, e-mail, date). |
| WhatsApp | `src/utils/whatsapp.ts` + `WhatsAppFloat.tsx` | Lien `wa.me` avec message FR pré-rempli, enrichi de la référence du lot depuis une fiche. |
| Brochure | `src/pages/BrochurePage.tsx` | Page imprimable (Imprimer / Enregistrer en PDF), mise en page dédiée sans navbar ni footer. |
| Tableau de bord | `src/pages/AdminDemoPage.tsx` (`/admin-demo`) | KPIs (total / disponibles / réservés / vendus / prospects), demandes de visite reçues, lots les plus consultés, **édition en direct des prix et statuts** avec bouton de réinitialisation. |
| Suivi des consultations | `src/utils/storage.ts` (`recordApartmentView`) | Compteur de vues par lot, alimente le classement « lots les plus consultés ». |
| Collecte de leads | `saveBooking()` + `src/data/leads.ts` | Les demandes du formulaire apparaissent dans le tableau de bord. |

### 2.2 Qualité technique constatée

- **Stack :** Vite 5 + React 18 + TypeScript 5.6 + Tailwind 3.4 + Framer Motion 11 + React Router 6.
- **Build strict :** `npm run build` exécute `tsc --noEmit` avant `vite build` — pas de code
  TypeScript cassé qui passe en production.
- **Code splitting :** toutes les pages sauf l'accueil sont en `lazy()` (`src/App.tsx`).
- **Architecture prête au backend :** `src/utils/storage.ts` est une couche d'abstraction unique.
  Les 7 fonctions (`getBookings`, `saveBooking`, `getOverrides`, `saveOverrides`,
  `clearOverrides`, `getComparatorIds`, `saveComparatorIds`, `getViewCounts`,
  `recordApartmentView`) ont des signatures que l'on peut réimplémenter en appels API sans
  toucher aux composants. **C'est un vrai argument de vente technique**, pas un slogan.
- **Configuration centralisée :** `src/config/project.ts` regroupe nom, slogan, localisation,
  WhatsApp, e-mail, livraison, prix de départ, stats, couleurs, navigation, réseaux sociaux.
- **Accessibilité correcte :** `aria-pressed`, `aria-hidden`, `role="status"`, cibles tactiles
  `min-h-[44px]`.
- **Repli images :** `SmartImage.tsx` gère l'échec de chargement — le site ne casse pas si une
  image Unsplash tombe.

---

## 3. Points forts commerciaux (ce qu'on met en avant)

1. **La démo est en ligne et cliquable en 5 secondes.** Aucun concurrent local ne met une
   démonstration complète et publique à disposition avant le premier rendez-vous. C'est notre
   principal levier d'ouverture.
2. **Le sélecteur bâtiment/étage est immédiatement compréhensible** par un directeur commercial :
   il reconnaît son propre plan de vente mural, en version cliquable.
3. **La démonstration du tableau de bord est spectaculaire en réunion.** Changer un statut en
   « Vendu » sur `/admin-demo` et voir le site public se mettre à jour en direct est l'argument
   le plus fort du rendez-vous. Il répond à l'objection n°1 du secteur : *« nos disponibilités
   changent tous les jours »*.
4. **Le simulateur de financement est un vrai calcul**, pas une maquette. Sur un marché où
   l'accessibilité au crédit conditionne la vente, c'est crédible.
5. **WhatsApp est traité comme un canal de première classe**, pas comme un bouton posé en bas
   de page. Le message est pré-rempli avec la référence du lot — le commercial sait de quoi
   parle le prospect avant de répondre.
6. **Le code est propre et lisible.** Si le prospect fait auditer notre travail par sa DSI ou
   son agence, ça tient.

---

## 4. Points faibles qu'un prospect peut remarquer

À connaître **avant** le rendez-vous. Ne jamais les cacher : les annoncer nous-mêmes nous
crédibilise.

| Faiblesse | Réalité technique | Réponse honnête |
|---|---|---|
| **Aucun backend** | `src/utils/storage.ts` écrit dans `localStorage`. Une demande de visite reste sur l'appareil du visiteur, le promoteur ne la reçoit jamais. | « C'est une démo. La version payante inclut une vraie base de données et une notification e-mail/WhatsApp à chaque demande. C'est l'objet de l'offre 3. » |
| **Tableau de bord sans authentification** | `/admin-demo` est publiquement accessible, aucun login. | « Volontairement ouvert pour que vous puissiez le tester sans compte. En production : accès protégé par mot de passe et comptes nominatifs. » |
| **Visuels Unsplash** | `src/data/images.ts` pointe vers des URL Unsplash. | « Illustrations temporaires — nous intégrons vos perspectives 3D réelles. » |
| **Programme fictif** | `projectConfig.disclaimer` le dit explicitement. | À dire spontanément, dès la première phrase de la démo. |
| **Pas de rendu serveur (SEO faible)** | Vérifié : une requête HTTP sur la démo ne renvoie que le `<title>` — tout le contenu est injecté par JavaScript. Google indexe, mais les aperçus de partage WhatsApp/Facebook/LinkedIn sont pauvres. | **Point le plus sérieux.** À traiter en prestation : balises Open Graph + méta par lot via pré-rendu. À chiffrer en option, pas à promettre inclus. |
| **Numéro WhatsApp factice** | `projectConfig.whatsappNumber = '212600000000'`. | Ne jamais faire une démo sans avoir remplacé ce numéro par celui du prospect ou par un numéro neutre. |
| **Brochure = page imprimable** | `BrochurePage.tsx`, pas de générateur PDF. | « PDF maquetté = option chiffrée séparément. » |
| **Carte de localisation illustrative** | `LocationSection.tsx` + `src/data/pois.ts`, pas de carte interactive. | Google Maps intégré = petite option. |
| **Mentions légales absentes** | Emplacements prévus, contenus vides. | À produire avec le client (voir `15-operational-checklist.md`). |
| **2 bâtiments / 5 étages / 40 lots en dur** | `BuildingId = 'A' | 'B'`, `FLOORS` figé. | Un programme à 6 bâtiments demande une adaptation du type — 1 à 2 jours. À ne pas sous-estimer dans le chiffrage. |
| **Pas de version arabe** | Interface 100 % française. | Réel sur certains segments (économique, MRE du Golfe). Option à chiffrer. |
| **Pas de tests automatisés** | Aucun fichier de test dans le dépôt. | Ne pas en parler spontanément. Si la question vient : « recette manuelle documentée, tests automatisés possibles en option ». |

---

## 5. Démo vs production : la frontière à ne jamais franchir en promesse

### 5.1 À présenter explicitement comme **démonstration**

- Le programme Azure Bouskoura lui-même (fictif — le dire à voix haute).
- Toutes les données : 40 lots, prix, surfaces, orientations.
- Les demandes de visite (jamais transmises).
- L'édition prix/statut (locale à l'appareil).
- Le compteur de consultations (local).
- Les prospects du tableau de bord (`src/data/leads.ts` : données fictives).
- Les visuels Unsplash.

### 5.2 Ce qui exige un vrai backend pour un client payant

| Besoin | Implication technique |
|---|---|
| Les demandes de visite arrivent chez le promoteur | Base de données + API + envoi e-mail/WhatsApp |
| Plusieurs commerciaux voient le même inventaire | Base partagée, pas de `localStorage` |
| Mise à jour des statuts par le client | Interface d'administration authentifiée |
| Historique et export des leads | Stockage persistant + export CSV |
| Statistiques de consultation réelles | Compteurs côté serveur ou outil analytique |
| Notifications | Service transactionnel e-mail et/ou API WhatsApp Business |
| Sauvegardes | Politique de sauvegarde de la base |

### 5.3 Livrable rapide (1 à 3 semaines, sans backend)

Personnalisation identité + contenus, inventaire réel injecté dans `apartments.ts`, plans du
client, vrais visuels, WhatsApp réel, formulaire branché sur un service tiers (Formspree,
Google Forms, e-mail), mise en ligne, mentions légales. **C'est l'offre 1 — vendable seule.**

### 5.4 Ce qu'il ne faut **pas** promettre au premier rendez-vous

- Une garantie de ventes ou de leads (voir `07-objection-handling.md`).
- Une intégration CRM sans avoir vu le CRM.
- Un import automatique depuis leur logiciel de gestion sans audit préalable.
- Une application mobile native.
- Une visite virtuelle 360° ou une maquette 3D (nous ne les produisons pas — partenariat ou
  sous-traitance, à chiffrer, cf. concurrents identifiés en §7).
- Une refonte du site corporate du groupe.
- Un référencement en première position Google.
- Un délai inférieur à 2 semaines si le client n'a pas ses contenus prêts.

---

## 6. Le résultat business pour le promoteur

**Le problème réel :** au Maroc, sur un programme neuf de 40 à 300 lots, la disponibilité n'est
lisible nulle part en ligne. L'acheteur voit une brochure PDF, appelle, laisse un message
WhatsApp, et attend qu'un commercial lui dise ce qui reste. Cela produit quatre coûts :

1. **Perte de prospects hors horaires.** Une part importante des recherches immobilières se
   fait le soir et le week-end. Sans réponse immédiate, le prospect passe au programme suivant.
2. **Temps commercial gaspillé.** Les commerciaux répondent en boucle à « il reste quoi en 3
   chambres ? » au lieu de qualifier et de closer.
3. **Leads non qualifiés.** Un lead WhatsApp sans budget ni typologie ni étage vaut beaucoup
   moins qu'un lead qui a consulté trois lots précis.
4. **Aucune donnée.** Le promoteur ne sait pas quelle typologie attire, quel étage bloque, quel
   prix fait fuir. Il ajuste ses prix à l'aveugle.

**Ce que le bureau de vente digital change :**

- Le prospect se qualifie tout seul avant d'appeler (bâtiment, étage, budget, typologie).
- Le commercial reçoit une demande avec le lot déjà identifié.
- Le promoteur voit les lots les plus consultés et arbitre ses prix sur des données.
- La disponibilité est à jour sans réimprimer une brochure.

**Formulation à utiliser en rendez-vous :**

> « Aujourd'hui vos commerciaux passent leur journée à répondre à “il reste quoi ?”. Demain,
> le prospect a déjà la réponse et vous appelle pour réserver un lot précis. »

**Précaution :** ne jamais chiffrer un gain de conversion. Nous n'avons pas de référence client.
Voir `07-objection-handling.md`.

---

## 7. Pourquoi c'est plus qu'un « site web »

### 7.1 Différence de nature

| Site vitrine classique | Bureau de vente digital |
|---|---|
| Présente le projet | Fait choisir un lot précis |
| Brochure PDF figée | Inventaire vivant avec statuts |
| Formulaire générique | Demande rattachée à une référence de lot |
| Aucune donnée en retour | Lots les plus consultés, demandes centralisées |
| Mis à jour par l'agence, quand elle peut | Mis à jour par le promoteur, en direct |
| Coût de communication | Outil de l'équipe de vente |

### 7.2 Différence de budget mental

Un site vitrine sort du **budget communication** (comparé à 15 000 – 30 000 MAD). Un bureau de
vente digital sort du **budget commercialisation du programme** — le même que celui de la
maquette physique, du stand SMAP Immo ou des flyers. Sur un programme à 40 lots × 1,5 M MAD,
soit 60 M MAD de chiffre d'affaires, un budget de 60 000 MAD représente **0,1 %**. Cette
comparaison est le pivot de tout l'argumentaire prix (cf. `02-offers-and-pricing.md`).

### 7.3 Position face aux acteurs déjà présents au Maroc

Vérifié le 24 juillet 2026 :

| Acteur | Ce qu'il vend | Notre écart |
|---|---|---|
| **MY iMMOTECH** (myimmotech.ma) | Maquette 3D orbitale interactive, site immobilier, plans 2D interactifs, visites 360°, CRM immobilier. Prix non publics. | Le concurrent le plus proche. Ils sont plus forts sur la 3D ; nous sommes plus forts sur l'inventaire structuré, le comparateur, le simulateur et le tableau de bord promoteur. **Ne pas les attaquer frontalement sur la 3D.** |
| **Studio 81, Arlynk, Realiz3D, Manueva** | 3D, maquettes physiques et numériques, visuels. | Ils produisent des images. Nous produisons un outil de vente. Complémentaires — sources de partenariat possibles. |
| **Yakeey** (offre promoteurs) | Commercialisation complète avec force de vente dédiée, agents IA WhatsApp/voix. **Rémunération à la commission sur ventes réalisées, sans frais fixes.** | Modèle très différent : ils prennent la vente, nous livrons un outil que le promoteur garde. Argument : *« vous restez propriétaire de vos leads et de votre outil »*. Attention : leur « zéro frais fixe » est un vrai concurrent de budget. |
| **Agences web marocaines** | Site vitrine 25 000 – 60 000 MAD en premium ; plateforme sur mesure jusqu'à 200 000 MAD. | Nous arrivons avec le produit déjà construit et démontrable. Notre coût de production est plus bas, notre valeur perçue plus haute. |

**Conséquence stratégique :** notre angle n'est ni le visuel (MY iMMOTECH gagne) ni le prix
(Yakeey gagne). C'est **« l'inventaire vivant + le retour d'information vers votre équipe, et
vous en restez propriétaire »**.

---

## 8. Checklist avant toute démonstration client

- [ ] Remplacer `whatsappNumber` (`212600000000`) par un numéro réel ou neutre.
- [ ] Vérifier que la mention « prototype / programme fictif » est visible.
- [ ] Ouvrir `/admin-demo` en amont et réinitialiser les données.
- [ ] Tester le parcours complet sur mobile (majorité du trafic immobilier au Maroc).
- [ ] Préparer la version personnalisée du prospect (cf. `sales/demo-briefs/`).
- [ ] Ne jamais présenter des faits inventés sur le programme du prospect.

---

## 9. Synthèse en une page (à relire avant chaque rendez-vous)

- **Ce que c'est :** un bureau de vente digital — présentation premium + inventaire interactif +
  tableau de bord promoteur.
- **Ce que ça n'est pas :** un site vitrine, une maquette 3D, un CRM complet, une agence de
  commercialisation.
- **Force n°1 :** démo publique cliquable immédiatement.
- **Force n°2 :** édition des statuts en direct devant le client.
- **Faiblesse n°1 :** pas de backend — c'est l'objet de l'offre 3, pas un défaut caché.
- **Faiblesse n°2 :** SEO faible sans rendu serveur — à traiter en option chiffrée.
- **Phrase pivot :** « 0,1 % du chiffre d'affaires du programme. »
- **Ce qu'on ne promet jamais :** des ventes.
