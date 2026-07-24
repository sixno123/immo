# Brief de démonstration — Groupe Mfadel / Sohaus

**Score : 89/100 — Priorité A. Vérifié le 24 juillet 2026.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Groupe Mfadel — groupe diversifié (immobilier, hôtellerie Novotel / Ibis, enseignement) |
| **Site** | https://groupemfadel.com/ |
| **LinkedIn** | https://ma.linkedin.com/company/mk-groupe-mfadel |
| **Téléphones publiés** | +212 523 305 306 · +212 529 000 300 |
| **Siège** | Résidence Kamal Park Center, angle Bd Zerktouni et Bd de Fès, Imm A, 8ᵉ étage, Mohammedia |
| **Projet de démonstration** | **Sohaus** — Domaine d'Anfa, Casablanca |
| **Autres projets** | Uptown (Casa Anfa) ; WeLive et M Tower (Casa Finance City) ; Novotel et Ibis Mohammedia ; Business Center Mohammedia ; Groupe scolaire Kamal Mfadel |

## 2. Faits publics disponibles

| Fait | Source | Affichable |
|---|---|---|
| Sohaus est situé au Domaine d'Anfa | Site officiel | ✅ |
| Uptown est situé à Casa Anfa | Site officiel | ✅ |
| WeLive et M Tower sont à Casablanca Finance City | Site officiel | ✅ |
| « Promoteur immobilier de premier plan » | Site officiel | ✅ |
| Groupe créé en 1985, spécialisé dans le haut de gamme (résidences balnéaires et centre-ville) | Profil LinkedIn | ✅ |
| Assistant conversationnel WhatsApp « FADELIA » | Vérification directe | ✅ |

**Inconnu — ne jamais afficher :** nombre de lots, typologies, surfaces, prix, étages, livraison.

## 3. Identité visuelle recommandée

Segment le plus premium du portefeuille (Domaine d'Anfa, Casa Anfa, CFC). Palette de principe :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#F8F7F4` | Blanc architectural |
| Accent principal | `#1C1C20` | Anthracite — registre contemporain, cohérent avec Casa Anfa |
| Accent secondaire | `#5B6670` | Gris acier |
| Métal | `#C6A664` | Or discret |
| Texte | `#131316` | |

**Note :** le nom « Sohaus » évoque le Bauhaus — une direction plus contemporaine et géométrique
que l'univers classique du prototype. Le mentionner comme piste, sans refondre le design en
30 minutes.

## 4. Titre de hero proposé

> **Sohaus**
> *Domaine d'Anfa — l'étage et l'orientation font le prix. Choisissez les vôtres.*

Sous-titre :
> Sélection par niveau, orientation et vue.

Ce titre vise directement le critère de décision de ce segment. Sur Casa Anfa, l'écart de prix
entre deux appartements identiques tient à l'étage et à l'orientation — c'est exactement ce que
leur site ne montre pas.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Adresses | **Domaine d'Anfa · Casa Anfa · CFC** | Publié |
| Groupe depuis | **1985** | Publié (LinkedIn) |
| Lots | `— à compléter` | Non publié |
| Étages | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

Non publiés. Conserver la structure du prototype en l'annonçant comme échantillon, mais
**augmenter le nombre d'étages à l'affichage** : sur Casa Anfa, les immeubles sont plus hauts que
les 5 niveaux du prototype. Passer à 8 ou 10 niveaux rend la démonstration plus crédible **et met
mieux en valeur le sélecteur** (plus il y a d'étages, plus l'outil est utile).

Typologies à conserver : `2 chambres`, `3 chambres`, `4 chambres`, `Penthouse`.
Retirer `Rez-de-jardin` (peu probable sur ce type d'opération).

**L'orientation est le champ le plus important de ce dossier.** `Orientation` est déjà géré dans
`src/types/index.ts` avec 8 valeurs — s'assurer qu'elle est visible dans le filtre et sur la fiche.

## 7. Fonctionnalités à mettre en avant

1. **Le filtre par orientation et par étage.** C'est le cœur de la valeur pour ce segment.
2. La fiche lot avec orientation, terrasse, étage et mensualité indicative.
3. **Le comparateur** : deux appartements du même étage, orientations différentes — la
   démonstration la plus parlante sur Casa Anfa.
4. Le tableau de bord avec les lots les plus consultés : quelle orientation attire le plus.
5. **Le contraste avec FADELIA** : leur assistant WhatsApp ne peut pas répondre « quels lots sont
   disponibles au 6ᵉ étage en orientation sud-ouest ». Notre outil, oui — et il peut alimenter
   l'assistant.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet avec descriptions et galeries d'images, liens « En savoir plus », assistant
  conversationnel WhatsApp FADELIA, formulaire de contact.
- **Aucune recherche de lot, aucun filtre, aucun plan, aucun prix affiché.**
- Aucune adresse e-mail publiée sur la page d'accueil.

**Conséquence commerciale :** l'écart entre le positionnement et l'outil de vente est le plus
important de la base. Un acheteur qui envisage un appartement au Domaine d'Anfa veut connaître
l'étage, la vue et l'orientation **avant** de se déplacer — et n'obtient rien.

**Angle FADELIA :** ils ont déjà investi dans un assistant WhatsApp. Un assistant sans données
d'inventaire ne peut répondre qu'à des généralités. Notre inventaire lui donnerait quelque chose
à dire. À formuler comme un complément, jamais comme une critique.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Sohaus'`, `tagline`, `location: "Domaine d'Anfa, Casablanca"`, stats du § 5 |
| `tailwind.config.js` | Palette anthracite / or du § 3 |
| `index.html` | `<title>Sohaus — Groupe Mfadel (maquette de démonstration)</title>` |
| `src/data/apartments.ts` | **Passer `FLOORS` à 8 ou 10 niveaux** ; références `SOH-…` ; retirer `Rez-de-jardin` ; varier fortement les orientations |
| `src/components/home/Availability.tsx` | **Section clé** — vérifier que le filtre par orientation est visible et utilisable |
| `src/pages/ApartmentPage.tsx` | Mettre orientation et étage en tête de fiche |
| `src/pages/ComparatorPage.tsx` | **Section clé** — comparaison de deux orientations au même étage |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–3 min | Rouvrir groupemfadel.com. Confirmer l'absence de prix et de disponibilité sur Sohaus. Tester FADELIA sur une question de disponibilité et **noter sa réponse** — elle sera l'argument central |
| 3–8 min | `project.ts` : nom Sohaus, Domaine d'Anfa, disclaimer, notre numéro WhatsApp |
| 8–12 min | `tailwind.config.js` : anthracite / or. `index.html` : titre |
| 12–20 min | `apartments.ts` : porter les étages à 8-10, varier les orientations, références `SOH-…` |
| 20–25 min | Vérifier en local le filtre par orientation et la page comparateur |
| 25–30 min | 4 captures : (1) hero Sohaus, (2) filtre orientation + étage, (3) comparateur de deux orientations, (4) tableau de bord des lots les plus consultés |

## 11. Avertissement

> **Ne présenter aucun fait inventé sur Sohaus.** Nombre de lots, typologies, surfaces, prix,
> nombre d'étages et date de livraison ne sont pas publics. **Le passage à 8-10 étages est un choix
> de maquette**, pas une information sur leur immeuble : le préciser en légende de capture.
>
> **Ne jamais dénigrer FADELIA.** Formuler : « votre assistant pourrait s'appuyer sur cet
> inventaire », jamais « votre assistant ne sert à rien ».
>
> **Ne pas confondre les projets résidentiels et tertiaires.** M Tower et WeLive sont des
> opérations de bureaux — notre produit est résidentiel. Cadrer le périmètre sur Sohaus et Uptown.
>
> **Le bandeau de démonstration reste visible en permanence.**
