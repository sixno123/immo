# Brief de démonstration — Saham Immobilier / Hamilton

**Score : 95/100 — Priorité A. Vérifié le 24 juillet 2026.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Saham Immobilier — filiale immobilière du groupe Saham |
| **Site** | https://sahamimmobilier.com/ |
| **LinkedIn** | https://www.linkedin.com/company/sahamimmobilier |
| **Téléphone publié** | 05 20 88 44 22 |
| **Projet de démonstration** | **Hamilton** — entre Sidi Maârouf et Bouskoura |
| **Page projet** | https://sahamimmobilier.com/projet/hamilton |
| **Autres projets** | Le 25 (Bouskoura / Sidi Maârouf) ; Vert Marine (Dar Bouazza) ; Almaz (Casablanca) |

## 2. Faits publics disponibles

| Fait | Source | Affichable |
|---|---|---|
| Hamilton relie « le dynamisme de Casablanca à la qualité de vie de la zone résidentielle de Bouskoura » | Page projet Hamilton | ✅ |
| Hamilton comprend **trois résidences fermées et sécurisées** : une résidence de duplex, une résidence de villas, une résidence d'appartements | Page projet Hamilton | ✅ — **c'est le fait le plus précieux** |
| Le 25 est situé entre Bouskoura et Sidi Maarouf, à 4 minutes de Casa Nearshore ; allée commerçante animée d'1 km ; centre d'affaires | Page projet Le 25 | ✅ |
| Vert Marine est un complexe résidentiel à Dar Bouazza | Site | ✅ |
| Almaz est un quartier résidentiel à Casablanca | Site | ✅ |
| Le site propose des visites virtuelles à 360° et des brochures téléchargeables | Vérification directe | ✅ |

**Inconnu — ne jamais afficher :** nombre de lots par résidence, surfaces, prix, nombre d'étages,
date de livraison, typologies détaillées.

## 3. Identité visuelle recommandée

Le nom « Vert Marine » et le positionnement Saham suggèrent une palette maritime sobre. Palette de
principe, à valider :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#F4F6F5` | Gris-vert très clair |
| Accent principal | `#123B36` | Vert profond — proche de l'univers Bouskoura / forêt |
| Accent secondaire | `#8FA6A0` | Vert-de-gris doux |
| Métal | `#A8875C` | Laiton mat discret |
| Texte | `#1A1C1B` | |

**Polices :** conserver Cormorant Garamond + Jost.

## 4. Titre de hero proposé

> **Hamilton**
> *Trois résidences, une adresse — entre Sidi Maârouf et Bouskoura*

Sous-titre :
> Duplex, villas, appartements. Choisissez votre résidence, puis votre lot.

Ce titre est fort parce qu'il **reprend leur propre structure** (trois résidences) et l'annonce
immédiatement comme un parcours de choix.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Résidences | **3** | Fait publié |
| Types de biens | **Duplex · Villas · Appartements** | Fait publié |
| Lots | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

**C'est l'adaptation la plus intéressante de tout le portefeuille de prospects.**

Le prototype utilise deux bâtiments A et B. Ici, remplacer le premier niveau de sélection par les
**trois résidences** :

| Prototype | Hamilton |
|---|---|
| Bâtiment A | **Résidence Duplex** |
| Bâtiment B | **Résidence Appartements** |
| *(à ajouter)* | **Résidence Villas** — plan de masse plutôt que coupe d'immeuble |

**Version 30 minutes :** ne faire que les deux premières (Duplex et Appartements) via
`BuildingId = 'A' | 'B'` renommé à l'affichage, et **mentionner à l'oral** que la résidence de
villas se traite en plan de masse. Ajouter un troisième bâtiment demande une modification de type
TypeScript — hors périmètre d'une maquette de 30 minutes.

Typologies à conserver dans `apartments.ts` : `2 chambres`, `3 chambres`, `4 chambres`, `Duplex`,
`Rez-de-jardin`. Retirer `Penthouse` (non évoqué par le prospect).

## 7. Fonctionnalités à mettre en avant

1. **Le sélecteur à deux niveaux** : résidence → étage → lot. C'est le miroir exact de leur
   organisation.
2. **La complémentarité avec la 360°.** Argument central : « votre visite virtuelle fait rêver,
   l'inventaire fait décider ». Ne jamais opposer les deux.
3. Le comparateur : un duplex contre un appartement, côte à côte.
4. La fiche lot avec bouton WhatsApp pré-rempli — ils utilisent déjà le téléphone comme canal
   principal.
5. Le tableau de bord promoteur.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet avec brochures téléchargeables et visites virtuelles 360°.
- **Aucune recherche de lot, aucun filtre de disponibilité, aucun plan d'étage interactif.**
- Aucune adresse e-mail publiée : le seul chemin est le 05 20 88 44 22.
- Aucun prix affiché.

**Conséquence commerciale :** ils ont investi dans l'émotion (360°) mais pas dans la décision. Un
prospect séduit par la visite virtuelle de Hamilton doit ensuite appeler pour savoir si un duplex
est encore disponible. Chaque appel de ce type consomme du temps commercial qui ne qualifie rien.

**Formulation à utiliser :** « Votre 360° donne envie de venir. Il manque l'étape entre l'envie
et le rendez-vous. »

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Hamilton'`, `tagline: 'Trois résidences, une adresse'`, `location: 'Sidi Maârouf – Bouskoura, Casablanca'`, `stats.buildings: 3`, autres stats en « à compléter » |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Hamilton — Saham Immobilier (maquette de démonstration)</title>` |
| `src/components/home/BuildingSelector.tsx` | **Section clé.** Renommer les libellés « Bâtiment A / B » en « Résidence Duplex / Résidence Appartements » |
| `src/components/home/Hero.tsx` | Titre du § 4 |
| `src/components/home/Stats.tsx` | 3 résidences · 3 types de biens · reste en « à compléter » |
| `src/components/home/Amenities.tsx` | Mettre en avant « résidences fermées et sécurisées » (fait publié) |
| `src/data/apartments.ts` | Références `HAM-D-…` (duplex) et `HAM-A-…` (appartements) ; retirer le type `Penthouse` |
| `src/components/home/LocationSection.tsx` | Sidi Maârouf, Bouskoura, Casa Nearshore (faits publiés sur Le 25, adjacents) |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–3 min | Rouvrir sahamimmobilier.com/projet/hamilton. Confirmer les trois résidences. Vérifier qu'aucune disponibilité n'a été ajoutée depuis. |
| 3–8 min | `project.ts` : nom, slogan, localisation, 3 résidences, disclaimer, notre numéro WhatsApp |
| 8–13 min | `tailwind.config.js` : palette vert profond / laiton. `index.html` : titre |
| 13–20 min | `BuildingSelector.tsx` : libellés « Résidence Duplex » / « Résidence Appartements ». C'est le cœur de la maquette — y consacrer le temps nécessaire |
| 20–25 min | `apartments.ts` : renommer les références en `HAM-…`, retirer `Penthouse` |
| 25–30 min | 4 captures : (1) hero Hamilton, (2) sélecteur des deux résidences avec compteur de lots par étage, (3) fiche lot duplex, (4) tableau de bord avec un statut passé en « Réservé » |

## 11. Avertissement

> **Ne présenter aucun fait inventé sur Hamilton.** Le nombre de lots, les surfaces, les prix, le
> nombre d'étages et la date de livraison ne sont pas publics. Les seuls faits utilisables sont :
> trois résidences (duplex, villas, appartements), fermées et sécurisées, entre Sidi Maârouf et
> Bouskoura.
>
> **Le bandeau de démonstration reste visible en permanence.**
>
> **Ne jamais dénigrer leur visite virtuelle 360°.** Ils ont payé pour cela ; la critiquer ferme
> la porte. Positionner systématiquement notre produit comme la **suite** de leur investissement.
>
> **Ne pas reproduire leurs rendus 3D ni leurs visites 360°** dans la maquette.
