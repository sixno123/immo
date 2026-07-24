# Brief de démonstration — Lahlou Alaoui Immobilier / Résidence Shems2

**Score : 76/100 — Priorité A par accessibilité.**
**PROSPECT N°1 DE LA SEMAINE 1 — le plus actionnable de toute la base.**
Vérifié le 24 juillet 2026. Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Lahlou Alaoui Immobilier — plus de 30 ans d'expertise revendiqués |
| **Site** | https://lahloualaoui.ma/ |
| **E-mail publié** | **commercial@lahloualaoui.ma** ← adresse commerciale directe |
| **Téléphone publié** | +212 6 08 90 09 01 |
| **Adresse** | Maarif, Bloc A, Bd Mohammed Zerktouni, Casablanca |
| **Projet de démonstration** | **Résidence Shems2** — Bouskoura |
| **Autres projets** | Perla (Dar Bouazza) ; Villa Palmas (Bouskoura) ; Résidence Shems1 (Hay Laymoune) ; Portes d'Oulfa (Oulfa) ; Al Miftah (bureaux et commerces) |

## 2. Pourquoi c'est le prospect n°1

Cinq raisons cumulées, uniques dans la base :

1. **Adresse e-mail commerciale directe** — `commercial@lahloualaoui.ma`. Pas un `info@`, pas un
   formulaire : un service dont le métier est de répondre.
2. **Shems2 est à Bouskoura** — la ville même de notre démonstration. Aucun autre prospect n'a
   cette coïncidence.
3. **Une brochure Shems2 est déjà téléchargeable publiquement** : le contenu à structurer existe.
4. **Un prix de départ est affiché** (« à partir de 790 000 DHS ») : ils communiquent déjà sur le
   prix, donc sur le lot.
5. **Structure de taille moyenne** : le décideur est joignable en un saut.

## 3. Faits publics disponibles

| Projet | Ville | Type | Prix publié |
|---|---|---|---|
| **Résidence Shems2** | Bouskoura | Appartements | **À partir de 790 000 DHS** |
| Résidence Shems1 | Casablanca (Hay Laymoune) | Appartements | — |
| Perla | Dar Bouazza | Appartements modernes | — |
| Villa Palmas | Bouskoura | Villa, **4 chambres, 300 m²** | — |
| Résidence Portes d'Oulfa | Casablanca (Oulfa) | Appartements | — |
| Al Miftah | Casablanca | Bureaux, commerces | — |

Autres faits : plus de 30 ans d'expertise ; brochure Shems2 téléchargeable ; boutons WhatsApp et
appel présents.

**Inconnu — ne jamais afficher :** nombre de lots de Shems2, surfaces, typologies détaillées,
nombre de bâtiments et d'étages, date de livraison.

**À faire avant la personnalisation :** télécharger la brochure Shems2 publique et en extraire les
typologies et surfaces si elles y figurent. **Ces données changeraient complètement la qualité de
la maquette.** Si la brochure contient des plans et un tableau de lots, la démonstration devient
quasi réelle — et c'est alors l'argument le plus fort possible : « voici votre brochure, devenue
interactive ».

## 4. Identité visuelle recommandée

« Shems » signifie « soleil ». Bouskoura : forêt, familles, calme. Palette de principe :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#FCF8F0` | Ivoire solaire |
| Accent principal | `#2C4A34` | Vert forêt — Bouskoura |
| Accent secondaire | `#D9A441` | Ambre solaire — écho à « Shems » |
| Métal | `#B08D57` | Laiton |
| Texte | `#1A1A1D` | |

**Cette palette est très proche de celle du prototype** (ivoire / forêt / bronze) : la
personnalisation visuelle est donc rapide, ce qui laisse du temps pour le contenu.

## 5. Titre de hero proposé

> **Résidence Shems2**
> *Bouskoura — voyez quels appartements sont encore disponibles*

Sous-titre :
> À partir de 790 000 DHS. Filtrez par étage, surface et budget.

Le prix est un fait publié : le reprendre renforce la crédibilité immédiate.

## 6. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| À partir de | **790 000 DHS** | Publié sur leur site |
| Localisation | **Bouskoura** | Publié |
| Expérience | **30+ ans** | Revendiqué |
| Lots | `— à compléter` | Non publié (ou repris de la brochure si elle le donne) |
| Bâtiments | `— à compléter` | Idem |
| Livraison | `— à compléter` | Idem |

## 7. Bâtiments et typologies pertinents

Conserver la structure du prototype (2 bâtiments, RDC + 4 étages) — **elle correspond bien à une
résidence de Bouskoura de ce niveau de prix.**

Typologies à conserver : `2 chambres`, `3 chambres`, `Rez-de-jardin`. Retirer `4 chambres`,
`Duplex` et `Penthouse` — incohérents avec un prix d'entrée à 790 000 DHS, sauf si la brochure
indique le contraire.

**Ajuster l'échelle de prix.** Le prototype démarre à 1 250 000 DH ; ici il faut partir de
790 000 DHS pour que la démonstration soit crédible. Modifier :
- `projectConfig.startingPrice` → `790_000`
- les prix des `seeds` dans `apartments.ts` → fourchette 790 000 – 1 600 000
- les paliers de `priceOptions` dans `Availability.tsx` → `[790_000, 900_000, 1_000_000, 1_200_000, 1_400_000, 1_600_000]`
- les valeurs par défaut du simulateur de financement

**C'est le point le plus important de ce dossier.** Une démonstration à 1,25 M DH sur un programme
à 790 000 DHS décrédibilise tout le reste.

## 8. Fonctionnalités à mettre en avant

1. **La transformation de la brochure PDF en inventaire interactif.** C'est l'accroche du message
   et le fil conducteur de la démonstration.
2. Le filtre par étage et budget.
3. **Le simulateur de financement** — décisif sur ce segment de prix, où l'acheteur raisonne en
   mensualité et non en prix total.
4. La fiche lot avec bouton WhatsApp pré-rempli.
5. Le tableau de bord (mais **viser l'offre 1 ou 2**, pas l'offre 3 : le budget est plus contraint
   sur ce segment).

## 9. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet, brochure Shems2 téléchargeable, formulaire de contact, boutons WhatsApp et appel.
- **Aucune recherche de disponibilité, aucun filtre, aucun plan d'étage.**
- Le prix de départ est affiché, mais aucun lot.

**Conséquence commerciale :** « à partir de 790 000 DHS » attire des prospects qui veulent tous le
lot le moins cher. Sans inventaire visible, le commercial doit expliquer à chaque appel pourquoi
tel appartement coûte 1,2 M DH plutôt que 790 000. C'est une conversation qu'un tableau de lots
avec surfaces et étages règle toute seule.

**Formulation forte :**
> « Votre prix d'appel fait son travail : il attire. Mais il attire aussi des gens qui pensent que
> tous vos appartements sont à 790 000. Un inventaire visible explique l'écart avant l'appel. »

## 10. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Résidence Shems2'`, `tagline`, `location: 'Bouskoura, Casablanca'`, **`startingPrice: 790_000`**, `stats` du § 6 |
| `tailwind.config.js` | Palette du § 4 — très proche de l'existante, ajustement rapide |
| `index.html` | `<title>Résidence Shems2 — maquette de démonstration</title>` |
| `src/data/apartments.ts` | **Section clé** — recalibrer toute la grille de prix sur 790 000 – 1 600 000 ; références `SH2-A-…` / `SH2-B-…` ; retirer `4 chambres`, `Duplex`, `Penthouse` |
| `src/components/home/Availability.tsx` | Recalibrer `priceOptions` et `areaOptions` |
| `src/components/home/FinancingSimulator.tsx` | **Section clé** — valeurs par défaut cohérentes avec 790 000 DHS |
| `src/components/home/BrochureCTA.tsx` + `src/pages/BrochurePage.tsx` | Angle « votre brochure, en interactif » |

## 11. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–5 min | Rouvrir lahloualaoui.ma. **Télécharger la brochure Shems2.** Vérifier que le projet est toujours en commercialisation et que le prix de 790 000 DHS est toujours affiché |
| 5–10 min | `project.ts` : nom, Bouskoura, `startingPrice: 790_000`, disclaimer, notre numéro WhatsApp |
| 10–13 min | `tailwind.config.js` : ajustement de la palette (rapide, elle est déjà proche). `index.html` : titre |
| 13–23 min | **`apartments.ts` : recalibrage complet des prix.** C'est le poste de temps principal — si les prix ne sont pas cohérents, la démonstration ne convainc pas |
| 23–26 min | `Availability.tsx` et `FinancingSimulator.tsx` : paliers et valeurs par défaut |
| 26–30 min | 4 captures : (1) hero avec « à partir de 790 000 DHS », (2) filtre par étage et budget, (3) fiche lot avec mensualité indicative, (4) leur brochure PDF à côté de notre écran d'inventaire |

## 12. Avertissement

> **Ne présenter aucun fait inventé sur Shems2.** Nombre de lots, surfaces, typologies, nombre
> d'étages et date de livraison ne sont pas publics — sauf s'ils figurent dans la brochure
> téléchargeable, auquel cas ils sont utilisables **en citant la brochure**.
>
> **Le prix de 790 000 DHS est le seul chiffre certain.** Tous les autres prix affichés dans la
> maquette sont des exemples : le bandeau doit le dire, et la légende de capture aussi.
>
> **Ne pas confondre avec Groupe Lahlou Immobilier** (`groupelahlou-immo.com`) — société distincte.
> Vérifier le nom exact avant tout envoi.
>
> **Vérifier que Shems2 est toujours commercialisé.** Un programme en fin de commercialisation
> rend toute la démonstration sans objet — poser la question dès le premier échange.
>
> **Segment de prix moyen : ne pas proposer l'offre 3 d'emblée.** Viser l'offre 1 ou 2. Une
> proposition à 110 000 MAD sur un programme à 790 000 DHS l'unité ferme la conversation.
>
> **Le bandeau de démonstration reste visible en permanence.**
