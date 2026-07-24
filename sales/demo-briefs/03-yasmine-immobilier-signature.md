# Brief de démonstration — Yasmine Immobilier / Yasmine Signature

**Score : 93/100 — Priorité A. Vérifié le 24 juillet 2026.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Yasmine Immobilier (marque premium : Yasmine Signature) |
| **Site** | https://yasmine-immobilier.com/ — page groupe : https://yasmine-immobilier.com/groupe/ |
| **Téléphone publié** | +212 (0)5 22 39 90 90 |
| **Horaires publiés** | Lundi – samedi, 9h – 19h |
| **Projet de démonstration** | **La gamme Yasmine Signature** — comparateur entre deux adresses casablancaises |
| **Autres projets** | Les Tours Végétales ; Les Pavillons Anfa Club ; résidence à Saïdia ; Kenzi Deroua / Oujda / Settat (économique) ; parcs industriels Tawfik ; Tour Jasmin (bureaux) |

## 2. Faits publics disponibles

| Fait | Source | Affichable |
|---|---|---|
| Yasmine Signature est présente à Majorelle, Ghandi, Ain Diab, Racine et Maarif (Casablanca) | Site officiel | ✅ |
| Positionnement résidentiel de luxe | Site officiel | ✅ |
| Plus de 20 ans d'activité en projets résidentiels, principalement en haut standing | Annonce Rekrute | ✅ |
| Lancement de la Tour Jasmin, immobilier de bureau haut de gamme | https://fnh.ma/article/actualite-entreprises/yasmine-signature-se-lance-dans-l-immobilier-de-bureau-haut-de-gamme | ✅ |
| **Recrutement en cours d'un Directeur Commercial Immobilier (Casablanca et Marrakech)** | https://www.rekrute.com/offre-emploi-directeur-commercial-immobilier-recrutement-yasmine-immobilier-casablanca-marrakech-14460.html | ✅ — **signal de timing, à revérifier** |
| Le site propose « Parler à notre agent », newsletter, liens WhatsApp | Vérification directe | ✅ |

**Inconnu — ne jamais afficher :** nombre de lots par adresse, surfaces, prix, étages, livraison.

## 3. Identité visuelle recommandée

Segment luxe casablancais. Palette de principe :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#FAF8F4` | Ivoire chaud |
| Accent principal | `#22322C` | Vert sombre — écho au nom « Yasmine » et aux Tours Végétales |
| Accent secondaire | `#C9A227` | Or mat, codes du luxe |
| Texte | `#17181A` | |

**Polices :** conserver Cormorant Garamond + Jost.

## 4. Titre de hero proposé

> **Yasmine Signature**
> *Racine, Ain Diab, Majorelle, Ghandi, Maarif — comparez avant de vous déplacer*

Sous-titre :
> Cinq adresses casablancaises, un seul parcours de choix.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Adresses Signature | **5** | Fait publié (Majorelle, Ghandi, Ain Diab, Racine, Maarif) |
| Années d'expérience | **20+** | Fait publié (annonce Rekrute) |
| Lots | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

**Adaptation structurelle particulière : ici le premier niveau de sélection est l'adresse, pas le
bâtiment.**

| Prototype | Yasmine Signature |
|---|---|
| Bâtiment A | **Signature Racine** |
| Bâtiment B | **Signature Ain Diab** |

Typologies à conserver : `2 chambres`, `3 chambres`, `4 chambres`, `Penthouse` — cohérentes avec
un segment luxe urbain. Retirer `Rez-de-jardin` (peu probable en immeuble de centre-ville).

## 7. Fonctionnalités à mettre en avant

**Le comparateur passe en premier pour ce prospect** — c'est le seul du portefeuille où l'arbitrage
inter-adresses est le vrai enjeu.

1. **Le comparateur** : un appartement Racine contre un Ain Diab — surface, étage, orientation,
   prix, mensualité indicative, côte à côte.
2. Le sélecteur d'adresse puis d'étage.
3. La fiche lot avec mensualité indicative (le simulateur compte sur ce niveau de prix).
4. **Le tableau de bord** — argument dédié au futur Directeur Commercial : « votre nouveau
   directeur verra dès son arrivée quels lots sont les plus consultés ».
5. Les demandes de visite centralisées.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet illustrées, formulaire de contact, newsletter, option « Parler à notre agent »,
  liens WhatsApp.
- **Aucune recherche de lot, aucun filtre, aucune disponibilité, aucun plan d'étage.**
- Aucune adresse e-mail publiée.
- Aucun prix affiché.

**Conséquence commerciale :** cinq adresses luxe à Casablanca et **aucun moyen de les comparer**.
Sur ce segment, l'acheteur n'hésite pas entre deux promoteurs mais entre deux quartiers — Racine
ou Ain Diab. C'est exactement l'arbitrage que leur site ne permet pas, et que leur commercial doit
donc gérer au téléphone, adresse par adresse.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Yasmine Signature'`, `tagline`, `location: 'Casablanca — Maroc'`, `stats.buildings: 2` (deux adresses en maquette), autres en « à compléter » |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Yasmine Signature — comparateur (maquette de démonstration)</title>` |
| `src/components/home/BuildingSelector.tsx` | Libellés « Signature Racine » / « Signature Ain Diab » |
| `src/pages/ComparatorPage.tsx` + `src/components/apartment/ComparatorBar.tsx` | **Sections clés** — vérifier que la comparaison affiche bien l'adresse de chaque lot |
| `src/components/home/FinancingSimulator.tsx` | Ajuster les valeurs par défaut à un budget luxe |
| `src/data/apartments.ts` | Références `YS-RAC-…` et `YS-AID-…` ; retirer `Rez-de-jardin` |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–4 min | **Revérifier l'annonce Rekrute** : le poste est-il toujours ouvert ? Si clôturé, adapter l'accroche. Rouvrir yasmine-immobilier.com |
| 4–9 min | `project.ts` : nom, slogan, 5 adresses en statistique, disclaimer, notre numéro WhatsApp |
| 9–14 min | `tailwind.config.js` : vert sombre / or. `index.html` : titre |
| 14–19 min | `BuildingSelector.tsx` : libellés des deux adresses |
| 19–24 min | `apartments.ts` : références `YS-RAC-…` / `YS-AID-…`, retirer `Rez-de-jardin`, ajuster les prix à un ordre de grandeur luxe **avec la mention « exemple »** |
| 24–30 min | 3 captures dont **une du comparateur en pleine page** (c'est la pièce maîtresse) + une du tableau de bord |

## 11. Avertissement

> **Ne présenter aucun fait inventé.** Les surfaces, prix, étages et volumes de chaque adresse
> Signature ne sont pas publics. Les prix affichés dans la maquette doivent être signalés comme
> des exemples, dans le bandeau **et** dans la légende de la capture.
>
> **Le signal de recrutement doit être vérifié le jour de l'envoi.** Citer une annonce clôturée
> décrédibilise immédiatement. Si le poste est pourvu et l'information publique, l'accroche
> devient : « vous venez de renforcer votre direction commerciale ». Si l'information n'est pas
> publique, **ne pas la mentionner du tout**.
>
> **Ne pas nommer de personne physique** dans le message tant que son nom et sa fonction n'ont pas
> été publiés par l'entreprise elle-même.
>
> **Le bandeau de démonstration reste visible en permanence.**
