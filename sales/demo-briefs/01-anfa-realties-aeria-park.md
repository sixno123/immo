# Brief de démonstration — Anfa Realties / Aeria Park

**Score : 96/100 — Priorité A. Vérifié le 24 juillet 2026.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Anfa Realties |
| **Site** | https://www.anfarealties.com/ |
| **LinkedIn** | https://ma.linkedin.com/company/anfa-realties |
| **Projet de démonstration** | **Aeria Park** (Casablanca) |
| **Autres projets** | Anfa Heaven (extension Ain Diab, à côté du Morocco Mall) ; Utopia (quartier Californie) ; Verdana (entre Californie et Bouskoura Ville) ; Les Villas d'Anfa Marrakech |

## 2. Faits publics disponibles

| Fait | Source | Utilisable à l'affichage |
|---|---|---|
| Aeria Park est un « projet immobilier haut standing » | anfarealties.com/aeria-park/ | ✅ |
| Anfa Heaven est situé dans l'extension Ain Diab, à côté du Morocco Mall | Recherche web, page projet | ✅ |
| Utopia est le premier complexe résidentiel du quartier Californie | Recherche web | ✅ |
| Verdana est situé entre Californie et Bouskoura Ville | Recherche web | ✅ |
| Les Villas d'Anfa Marrakech : domaine sécurisé de 14,5 ha, à quelques minutes du boulevard Mohammed VI, terrains de padel et de football, près de 8 000 m² d'espaces verts, présenté le 10 avril 2026 | https://www.lebrief.ma/anfa-realties-lance-les-villas-danfa-marrakech-100148075/ | ✅ |
| Groupe actif à Casablanca depuis 2006, plus de 250 unités livrées revendiquées | Profil LinkedIn | ✅ (en citant « revendiqué ») |

**Inconnu — ne jamais afficher :** nombre de lots d'Aeria Park, typologies, surfaces, prix,
nombre de bâtiments, nombre d'étages, date de livraison.

## 3. Identité visuelle recommandée

Le site actuel ne restitue pas ses styles de façon lisible : **ne pas prétendre reproduire leur
charte**. Adopter une palette premium neutre et le dire explicitement (« palette de principe, à
remplacer par votre charte »).

| Rôle | Valeur proposée | Remarque |
|---|---|---|
| Fond clair | `#F6F4F1` | Blanc cassé chaud, lisible |
| Accent principal | `#0E2A3A` | Bleu nuit — évoque « Anfa », l'océan, sans copier |
| Accent secondaire | `#B08D57` | Laiton discret, codes du haut standing casablancais |
| Texte | `#1B1B1E` | |

**Polices :** conserver le couple du prototype (Cormorant Garamond pour les titres, Jost pour le
texte) — il fonctionne sur le segment premium. Le remplacement par leur charte sera fait au
cadrage.

## 4. Titre de hero proposé

> **Aeria Park**
> *Le haut standing casablancais, quartier par quartier*

Sous-titre :
> Casablanca — projet haut standing. Maquette de démonstration.

**Variante prudente** si l'on veut éviter toute affirmation :
> **Aeria Park** — Casablanca
> *Ce que pourrait être votre bureau de vente digital*

## 5. Statistiques du projet à afficher

**Aucun chiffre réel n'est public sur Aeria Park.** Utiliser des libellés explicitement neutres :

| Bloc | Valeur affichée |
|---|---|
| Lots | `— à compléter` |
| Bâtiments | `— à compléter` |
| Typologies | `— à compléter` |
| Livraison | `— à compléter` |
| À partir de | `Prix sur demande` |

**Alternative recommandée :** basculer la démonstration sur **Les Villas d'Anfa Marrakech**, seul
projet du portefeuille avec des chiffres publiés et sourçables :

| Bloc | Valeur | Source |
|---|---|---|
| Domaine sécurisé | 14,5 ha | Le Brief, 10/04/2026 |
| Espaces verts | ~8 000 m² | Le Brief |
| Équipements | Padel, football | Le Brief |
| Lots | `— à compléter` | — |

## 6. Bâtiments et typologies pertinents

Non publiés. Conserver la configuration du prototype (**2 bâtiments A et B, RDC + 4 étages**) et
l'annoncer comme structure d'exemple.

Pour Les Villas d'Anfa Marrakech, basculer sur un **plan de masse** de villas plutôt qu'une coupe
d'immeuble — c'est une adaptation à mentionner comme faisable, pas à produire en 30 minutes.

## 7. Fonctionnalités à mettre en avant

Par ordre de priorité pour ce prospect précis :

1. **Le pied de page fonctionnel.** Leur site a `tel:null` et `mailto:null`. La première chose à
   montrer est un site où l'on peut joindre l'entreprise.
2. **La liste des projets qui s'affiche.** Leur section projets ne charge pas. Montrer une grille
   de projets qui fonctionne (Aeria Park, Anfa Heaven, Utopia, Verdana, Villas d'Anfa).
3. Le sélecteur bâtiment / étage.
4. La fiche lot avec plan et mensualité indicative.
5. Le tableau de bord promoteur.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- La section « Projets en-cours » / « Projets livrés » ne restitue aucun projet.
- Le pied de page contient `[](tel:null)` et `[](mailto:null)` : les liens de contact sont vides.
- Le champ adresse existe mais ne contient aucune donnée.
- Aucune disponibilité, aucun filtre, aucun plan d'étage.
- Deux formulaires subsistent (brochure, visite) avec une liste déroulante « Choisissez un
  projet » — les projets existent donc en base mais ne s'affichent pas.

**Conséquence commerciale :** un visiteur ne peut ni voir les programmes, ni contacter
l'entreprise. Tout l'investissement de notoriété (lancement Marrakech, presse) se perd.

**⚠️ À revérifier le jour de l'envoi.** Si le site est réparé, l'accroche change complètement :
passer sur « votre site présente les projets mais aucun lot n'est consultable ».

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Aeria Park'`, `shortName: 'Aeria Park'`, `tagline`, `location: 'Casablanca — Maroc'`, `whatsappNumber` (notre numéro), `email`, `stats` → libellés « à compléter », `disclaimer` renforcé |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Aeria Park — Anfa Realties (maquette de démonstration)</title>` |
| `src/components/layout/Footer.tsx` | **Section clé** : afficher un téléphone et un e-mail réels et cliquables. C'est le contraste central. |
| `src/components/home/Hero.tsx` | Titre du § 4 |
| `src/components/home/Stats.tsx` | Libellés « à compléter » |
| `src/components/home/BuildingSelector.tsx` | Inchangé (structure d'exemple) |
| `src/data/apartments.ts` | Inchangé, mais références renommées `AP-A-101` etc. |
| `src/data/images.ts` | Visuels d'ambiance premium casablancais |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–4 min | Rouvrir anfarealties.com. Confirmer que la section projets et les liens du pied de page sont toujours défaillants. **Capture d'écran horodatée du défaut** — ce sera la pièce n°1. |
| 4–9 min | `project.ts` : nom Aeria Park, localisation Casablanca, statistiques en « à compléter », disclaimer renforcé, notre numéro WhatsApp |
| 9–15 min | `tailwind.config.js` : palette bleu nuit / laiton. `index.html` : titre |
| 15–20 min | `Footer.tsx` : téléphone et e-mail cliquables et visibles |
| 20–24 min | Renommer les références de lots en `AP-…` dans `apartments.ts` |
| 24–30 min | 4 captures : (1) leur pied de page avec `mailto:null`, (2) notre hero Aeria Park, (3) le sélecteur d'étage, (4) le tableau de bord. Une phrase d'annotation par capture. |

## 11. Avertissement

> **Ne présenter aucun fait inventé sur Aeria Park.** Le nombre de lots, les typologies, les
> surfaces, les prix et la date de livraison ne sont pas publics. Toute valeur affichée doit être
> soit un fait sourçable, soit un libellé explicitement vide (« à compléter »).
>
> **Le bandeau de démonstration reste visible en permanence.**
>
> **Ton du message :** signaler un défaut technique à une entreprise doit se faire sans
> condescendance. Formuler comme un constat factuel accompagné d'une solution, jamais comme un
> reproche. Éviter « votre site est cassé » ; préférer « les liens de contact du pied de page
> renvoient une valeur vide ».
>
> **Ne pas reproduire les rendus 3D d'Anfa Realties** dans la maquette.
