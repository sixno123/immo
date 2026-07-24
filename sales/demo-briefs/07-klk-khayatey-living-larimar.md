# Brief de démonstration — KLK Khayatey Living / Larimar

**Score : 89/100 — Priorité A. Vérifié le 24 juillet 2026.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | KLK Khayatey Living |
| **Site** | https://klk.ma/ |
| **LinkedIn** | https://www.linkedin.com/company/klk-khayatey-living |
| **Téléphone publié** | +212 80 200 28 28 |
| **Adresse** | 13 Boulevard de Libya, Casablanca 20250 |
| **Projet de démonstration** | **Larimar** (appartements, Casablanca) + **Les Agates** (lots de villas, Dar Bouazza) en second écran |

## 2. Faits publics disponibles

| Projet | Ville | Type |
|---|---|---|
| **Larimar** | Casablanca | Appartements |
| The Exclusive | Dar Bouazza | Villas |
| Les Agates | Dar Bouazza | Lots de villas |
| Alboustane | Dar Bouazza | Lots de villas |
| Abouab Alfalah | Marrakech | Lots de maisons de ville R+2 |
| Chemsi | Casablanca | Lots R+2 avec commerce en rez-de-chaussée |

Autres faits publiés : plus de 20 à 30 ans d'activité selon les pages ; « référence dans l'univers
de la promotion immobilière au Maroc » ; showroom virtuel, brochures téléchargeables, prise de
rendez-vous, WhatsApp.

**Inconnu — ne jamais afficher :** nombre de lots, surfaces, prix, étages, dates de livraison.

## 3. Identité visuelle recommandée

« Larimar » est une pierre bleu clair des Caraïbes — la marque joue sur les noms de pierres
(Larimar, Les Agates). Direction naturelle :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#F4F7F8` | Blanc bleuté |
| Accent principal | `#2A5B6E` | Bleu minéral — écho direct au larimar |
| Accent secondaire | `#7FAFBF` | Bleu clair |
| Métal | `#A9905F` | Laiton doux |
| Texte | `#1A1C1E` | |

## 4. Titre de hero proposé

> **Larimar**
> *Choisissez votre appartement, étage par étage — Casablanca*

Sous-titre :
> Six programmes KLK, un seul parcours de sélection.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Programmes en portefeuille | **6** | Publié (dénombrable sur leur site) |
| Villes | **3** (Casablanca, Dar Bouazza, Marrakech) | Publié |
| Lots Larimar | `— à compléter` | Non publié |
| Étages | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

**Ce dossier sert à démontrer la polyvalence du produit sur deux formats.** C'est sa particularité.

**Écran 1 — Larimar (appartements) :** structure standard du prototype, 2 bâtiments,
RDC + 4 étages, typologies `2 chambres`, `3 chambres`, `4 chambres`, `Duplex`.

**Écran 2 — Les Agates (lots de villas) :** variante **plan de masse**. En 30 minutes, on ne
développe pas une nouvelle vue : réutiliser le sélecteur existant en renommant les niveaux en
**îlots** (Îlot 1 à 5) plutôt qu'en étages, et les typologies en `Lot 300 m²`, `Lot 400 m²`,
`Lot 500 m²`.

**À dire explicitement :** « la vue plan de masse serait dessinée pour de vrai en production ; ici
je réutilise le sélecteur pour montrer que la logique fonctionne aussi sur des lots. »

## 7. Fonctionnalités à mettre en avant

1. **La polyvalence** : le même outil couvre les appartements de Larimar et les lots des Agates.
   C'est l'argument central pour un promoteur au portefeuille mixte.
2. Le sélecteur bâtiment / étage sur Larimar.
3. **Le tableau de bord multi-programmes** : leurs six projets pilotés depuis une interface.
4. Le comparateur.
5. La fiche lot avec bouton WhatsApp — ils utilisent déjà WhatsApp intensivement.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet avec images, showroom virtuel, brochures, prise de rendez-vous, WhatsApp,
  formulaires.
- **Aucune recherche de lot avec statut, aucun filtre de disponibilité, aucun plan d'étage
  interactif.**
- Adresse e-mail présente sur le site mais non relevable automatiquement — à relever manuellement
  avant tout envoi.

**Conséquence commerciale :** six projets présentés côte à côte et un acheteur qui ne peut voir
aucun lot disponible ni comparer deux appartements. Le showroom virtuel montre l'ambiance, jamais
le stock.

**Point de vigilance :** le « showroom virtuel » peut leur donner le sentiment d'être déjà
équipés. Ne pas le dénigrer — positionner notre produit comme l'étape suivante.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Larimar'`, `tagline`, `location: 'Casablanca — Maroc'`, `stats` avec 6 programmes / 3 villes, reste en « à compléter » |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Larimar — KLK (maquette de démonstration)</title>` |
| `src/components/home/BuildingSelector.tsx` | Écran 1 inchangé ; écran 2 avec libellés « Îlot 1 à 5 » |
| `src/data/apartments.ts` | Deux jeux : `LAR-…` (appartements) et `AGA-…` (lots, surfaces 300-500 m²) |
| `src/pages/AdminDemoPage.tsx` | **Section clé** — argument multi-programmes |
| `src/utils/whatsapp.ts` | Vérifier le message pré-rempli ; ils utilisent WhatsApp intensivement |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–3 min | Rouvrir klk.ma. **Relever manuellement l'adresse e-mail** affichée sur la page contact |
| 3–8 min | `project.ts` : nom Larimar, Casablanca, 6 programmes, disclaimer, notre numéro WhatsApp |
| 8–12 min | `tailwind.config.js` : bleu minéral. `index.html` : titre |
| 12–18 min | Écran 1 : captures Larimar (hero, sélecteur d'étage, fiche lot) |
| 18–25 min | Écran 2 : renommer temporairement les niveaux en « Îlot » et les typologies en « Lot xxx m² », capturer Les Agates |
| 25–30 min | Annoter les captures : « même outil, deux formats » |

## 11. Avertissement

> **Ne présenter aucun fait inventé.** Nombre de lots, surfaces, prix, étages et dates de livraison
> ne sont publics pour aucun des six programmes.
>
> **La vue « plan de masse » pour Les Agates est une simulation par renommage, pas une vraie vue
> cartographique.** Le dire explicitement : promettre une vue plan de masse dessinée qui n'existe
> pas encore serait une promesse non tenue. Elle est réalisable, mais elle se chiffre en option
> (cf. `02-offers-and-pricing.md`).
>
> **Ne pas dénigrer leur showroom virtuel.**
>
> **L'adresse e-mail doit être relevée manuellement** — elle n'a pas pu être vérifiée
> automatiquement le 24/07/2026. Ne jamais deviner une adresse.
>
> **Le bandeau de démonstration reste visible en permanence.**
