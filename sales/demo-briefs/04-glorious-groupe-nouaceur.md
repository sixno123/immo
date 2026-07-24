# Brief de démonstration — Glorious Groupe / Glorious Nouaceur

**Score : 88/100 — Priorité A. Vérifié le 24 juillet 2026.**
**Parmi les 5 prospects les plus accessibles — à traiter en semaine 1.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Glorious Groupe — fondé en 1970 à Tanger |
| **Site** | https://gloriousgroupe.ma/ |
| **E-mails publiés** | contact@gloriousgroupe.ma · info@gloriousgroupe.ma |
| **Téléphones publiés** | +212 5 22 99 17 33 · +212 6 62 20 50 65 |
| **Siège** | Belgi Center, 17 rue Ibn Khalikane, 3ᵉ étage, Palmier V, Casablanca |
| **Projet de démonstration** | **Glorious Nouaceur** — 500+ appartements de standing, région de Casablanca |

## 2. Faits publics disponibles

**C'est le prospect le mieux documenté publiquement de tout le portefeuille.** Volumes annoncés sur
leur propre site :

| Projet | Ville / zone | Volume annoncé | Statut |
|---|---|---|---|
| **Glorious Nouaceur** | Nouaceur, Casablanca | **500+ appartements de standing** | En cours |
| Glorious Park | Tanger, près d'Atacadao | **400+ unités** | En cours |
| Glorious Mansoria | Zone de Mohammedia | **300 appartements** | En cours |
| Glorious Gueznaia | Route Sidi Kacem, Tanger | **210 appartements** | En cours |
| Glorious Harmony | Casabarata, route de Tanger | **200+ unités + bureaux** | En cours |
| Glorious Zenata | Zenata, Casablanca | **150+ unités de standing** | En cours |
| Glorious Achakar | Achakar, Tanger | **77 villas de luxe** | Livré |
| Glorious Garden | Tanger, près du stade Ibn Batouta | **120 unités** | Livré |

Autres faits : plus de 50 ans d'expérience revendiqués ; appartements modernes dans les quartiers
de Malabata, Iberia et centre-ville de Tanger ; accompagnement personnalisé à l'acquisition.

**Inconnu — ne jamais afficher :** surfaces, prix, nombre d'étages par bâtiment, typologies
précises, dates de livraison.

**Précaution de formulation :** les volumes sont écrits « 500+ », « 400+ » sur leur site. **Toujours
reprendre leur propre notation**, jamais « 500 exactement ».

## 3. Identité visuelle recommandée

Segment moyen-haut de gamme, marque déclinée sur 8 projets. Palette de principe :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#F7F5F1` | |
| Accent principal | `#1D3557` | Bleu profond — sobre, cohérent avec un groupe multi-projets |
| Accent secondaire | `#457B9D` | Bleu moyen |
| Métal | `#B9975B` | Laiton |
| Texte | `#1A1A1D` | |

## 4. Titre de hero proposé

> **Glorious Nouaceur**
> *500+ appartements de standing — trouvez le vôtre en trois clics*

Sous-titre :
> Nouaceur, Grand Casablanca. Filtrez par étage, surface et budget.

Ce titre reprend **leur propre chiffre** et le transforme immédiatement en promesse d'usage. C'est
le meilleur hero du portefeuille parce qu'il n'invente rien.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Appartements | **500+** | Chiffre publié sur leur site |
| Unités en cours (groupe) | **1 800+** | Somme de leurs propres chiffres publiés — à présenter comme « d'après vos chiffres » |
| Années d'expérience | **50+** | Revendiqué sur leur site |
| Bâtiments | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

Le nombre de bâtiments n'est pas publié. **Conserver la structure du prototype (2 bâtiments,
RDC + 4 étages) et l'annoncer comme un échantillon**, en disant explicitement :

> « La maquette montre 2 bâtiments sur 5 niveaux pour l'exemple. Sur 500 lots, la structure réelle
> se cale sur votre plan de vente. »

Typologies à conserver : `2 chambres`, `3 chambres`, `4 chambres`, `Duplex`. Retirer `Penthouse` et
`Rez-de-jardin` (non évoqués).

## 7. Fonctionnalités à mettre en avant

**Pour ce prospect, l'argument est le volume et le temps commercial, pas l'esthétique.**

1. **Les filtres** : étage + surface + budget sur 500 lots. Montrer combien de résultats
   disparaissent à chaque filtre — c'est le travail que le commercial fait aujourd'hui à la voix.
2. **Le compteur de lots disponibles par étage** dans le sélecteur : lecture instantanée de ce qui
   reste.
3. **Le tableau de bord**, en particulier les lots les plus consultés — sur 500 lots, savoir
   lesquels attirent permet d'ajuster les prix.
4. La fiche lot avec bouton WhatsApp pré-rempli.
5. Le comparateur.

**Calcul à faire à l'oral** (sans le présenter comme une garantie) :
> « Si un commercial passe 3 minutes par appel à expliquer ce qui reste, et qu'il reçoit 20 appels
> par jour, cela fait une heure par jour et par commercial. Sur un programme de 500 lots
> commercialisé sur 18 mois, l'ordre de grandeur parle de lui-même. »

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet descriptives avec équipements, formulaire de contact avec sélection du projet,
  boutons d'appel, section blog.
- **Aucun outil en libre-service : aucune disponibilité, aucun filtre, aucun plan d'étage.**
- Aucun prix affiché.

**Conséquence commerciale :** ils publient des volumes importants — donc ils savent parler
inventaire — et pourtant un acheteur ne peut pas voir un seul lot. Sur un programme de 500
appartements, le coût en temps commercial est directement mesurable.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Glorious Nouaceur'`, `tagline`, `location: 'Nouaceur, Grand Casablanca'`, `stats.apartments: 500` avec libellé « 500+ », reste en « à compléter » |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Glorious Nouaceur — maquette de démonstration</title>` |
| `src/components/home/Availability.tsx` | **Section clé.** Les filtres sont l'argument principal. Vérifier que le compteur de résultats est bien visible |
| `src/components/home/BuildingSelector.tsx` | Conserver, avec mention « échantillon » |
| `src/pages/AdminDemoPage.tsx` | **Section clé.** Les « lots les plus consultés » sont l'argument n°2 |
| `src/data/apartments.ts` | Références `GN-A-…` / `GN-B-…` ; retirer `Penthouse` et `Rez-de-jardin` |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–3 min | Rouvrir gloriousgroupe.ma. Confirmer les volumes affichés (500+, 400+, 300…) — **noter leur formulation exacte** |
| 3–8 min | `project.ts` : nom, slogan, localisation Nouaceur, 500+ en statistique, disclaimer, notre numéro WhatsApp |
| 8–13 min | `tailwind.config.js` : bleu profond / laiton. `index.html` : titre |
| 13–18 min | `apartments.ts` : références `GN-…`, retirer les deux typologies non pertinentes |
| 18–23 min | Parcourir le filtre en local : vérifier que le compteur de résultats se met bien à jour, préparer la séquence à capturer |
| 23–30 min | 4 captures : (1) hero « 500+ appartements », (2) filtre avant/après avec compteur de résultats, (3) sélecteur avec lots disponibles par étage, (4) tableau de bord « lots les plus consultés » |

## 11. Avertissement

> **Ne présenter aucun fait inventé.** Les surfaces, prix, typologies exactes, nombre de bâtiments
> et dates de livraison de Glorious Nouaceur ne sont pas publics.
>
> **Reprendre leur notation exacte : « 500+ », pas « 500 ».** Un chiffre transformé en valeur
> précise devient une affirmation que nous ne pouvons pas soutenir.
>
> **Le total « 1 800+ unités en cours » est une somme que nous effectuons nous-mêmes** à partir de
> leurs chiffres publiés. Le présenter comme tel : « d'après les volumes annoncés sur votre site ».
> Ne jamais l'attribuer à une déclaration de l'entreprise.
>
> **Le calcul du temps commercial est une illustration, pas une promesse de résultat.** Ne jamais
> l'énoncer comme un gain garanti.
>
> **Le bandeau de démonstration reste visible en permanence.**
