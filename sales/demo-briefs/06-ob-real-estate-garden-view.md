# Brief de démonstration — OB Real Estate / Garden View

**Score : 85/100 — Priorité A. Vérifié le 24 juillet 2026.**
**Parmi les 5 prospects les plus accessibles — à traiter en semaine 1.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | OB Real Estate (groupe OB Invest) |
| **Site** | https://obrealestate.ma/ |
| **E-mail publié** | Contact@obrealestate.ma |
| **Bureau** | Florida Centre Park 2, bureau 10, 1ᵉʳ étage, Casablanca-Sidi Maârouf |
| **Projet de démonstration** | **Garden View** — Dar Bouazza |
| **Autres projets** | Kanopi Villas (Bouskoura) ; Les Jardins de la Medina et Jnane L'fekhar (Marrakech) ; Les Oliviers (Berrechid) ; Zohrate L'khayr (Deroua) ; OB Business Center (Casablanca) |

## 2. Faits publics disponibles

**C'est le projet le mieux documenté par la presse de tout le portefeuille** — quatre articles
concordants.

| Fait | Source | Affichable |
|---|---|---|
| Investissement d'environ **600 millions de dirhams** | L'Économiste, LesEco, Le Site Info | ✅ |
| Appartements **F3 et F4 traversants** | icidarbouazza.com | ✅ |
| **Résidence fermée et sécurisée** | L'Économiste / Deco Actuelle | ✅ |
| **Grandes terrasses, peu de vis-à-vis** | L'Économiste / Deco Actuelle | ✅ |
| **6 000 m² d'espaces verts** | L'Économiste / Deco Actuelle | ✅ |
| « Architecture soignée en harmonie avec l'environnement » | L'Économiste | ✅ |
| Proche du Morocco Mall, du quartier Ain Diab et du centre de Casablanca | L'Économiste | ✅ |
| Mitoyen de l'école belge ; à quelques dizaines de mètres d'Aljabr, Léon l'Africain et de l'Académie Georges Washington | L'Économiste | ✅ |
| Le groupe OB Invest est un acteur du BTP et de l'immobilier de la région Safi-Marrakech | L'Économiste | ✅ |

**Inconnu — ne jamais afficher :** nombre de lots, surfaces, prix, nombre de bâtiments et d'étages,
date de livraison.

## 3. Identité visuelle recommandée

Le nom « Garden View » et les 6 000 m² d'espaces verts orientent clairement la direction :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#F7F6F0` | Blanc végétal |
| Accent principal | `#2F4F3A` | Vert jardin profond — cœur du concept |
| Accent secondaire | `#7E9C7E` | Vert feuille |
| Métal | `#B49460` | Laiton chaud |
| Texte | `#1A1C1A` | |

## 4. Titre de hero proposé

> **Garden View**
> *F3 et F4 traversants, grandes terrasses, 6 000 m² de jardins — Dar Bouazza*

Sous-titre :
> Résidence fermée et sécurisée, à quelques minutes du Morocco Mall.

**Chaque élément de ce titre est un fait publié et sourçable.** C'est le hero le plus solide du
portefeuille.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Espaces verts | **6 000 m²** | Publié (presse) |
| Typologies | **F3 · F4 traversants** | Publié |
| Investissement | **~600 MDH** | Publié — à mentionner à l'oral plutôt qu'à l'écran (l'acheteur final s'en moque, le promoteur non) |
| Lots | `— à compléter` | Non publié |
| Bâtiments | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

**Adapter les typologies à leur nomenclature.** Le prototype utilise « 2 chambres / 3 chambres /
4 chambres » ; la presse marocaine et OB Real Estate parlent en **F3 / F4**.

| Prototype | Garden View |
|---|---|
| `2 chambres` | **F3** |
| `3 chambres` | **F4** |
| `4 chambres`, `Penthouse`, `Rez-de-jardin` | À retirer |
| `Duplex` | À retirer sauf information contraire |

Nombre de bâtiments non publié : conserver 2 bâtiments et le signaler comme échantillon.

**Élément différenciant à mettre en valeur : la terrasse.** Le prototype gère déjà
`terraceArea` dans `src/types/index.ts` et l'affiche sur les fiches — c'est un atout direct pour ce
projet dont les grandes terrasses sont l'argument central.

## 7. Fonctionnalités à mettre en avant

1. **La fiche lot avec surface de terrasse et orientation traversante.** C'est leur promesse
   commerciale ; notre fiche la rend vérifiable lot par lot.
2. Le sélecteur d'étage (peu de vis-à-vis = l'étage compte).
3. Le comparateur : un F3 contre un F4.
4. Le bouton WhatsApp pré-rempli avec la référence du lot.
5. Le tableau de bord.

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages vitrines de projets avec descriptions et images, formulaire de contact.
- **Aucune recherche de disponibilité, aucun filtre, aucun plan d'étage.**
- **Le téléphone affiché sur le site est `06 00 00 00 00`** — une valeur de remplissage
  manifestement non remplacée.

**Conséquence commerciale :** un projet de 600 MDH avec une couverture presse nationale renvoie
vers un site où l'on ne peut voir aucun appartement et où le numéro de téléphone n'a jamais été
renseigné. L'écart entre l'investissement média et l'outil de conversion est maximal.

**⚠️ À revérifier le jour de l'envoi.** Si le numéro a été corrigé, retirer cette remarque du
message — sinon nous perdons toute crédibilité en une ligne.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Garden View'`, `tagline`, `location: 'Dar Bouazza, Casablanca'`, `stats` avec 6 000 m² d'espaces verts, reste en « à compléter », **`whatsappNumber` : notre numéro — ne surtout pas laisser `212600000000`** |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Garden View — maquette de démonstration</title>` |
| `src/types/index.ts` | Renommer les libellés de typologie en F3 / F4 |
| `src/data/apartments.ts` | Références `GV-A-…` / `GV-B-…` ; ne conserver que F3 et F4 ; **augmenter `terraceArea`** pour refléter les « grandes terrasses » |
| `src/pages/ApartmentPage.tsx` | **Section clé** — vérifier que terrasse et orientation sont bien mises en avant |
| `src/components/home/Amenities.tsx` | Résidence fermée et sécurisée, 6 000 m² d'espaces verts, peu de vis-à-vis |
| `src/components/home/LocationSection.tsx` + `src/data/pois.ts` | **Section clé** — écoles publiées (école belge, Aljabr, Léon l'Africain, Académie Georges Washington), Morocco Mall, Ain Diab |
| `src/components/layout/Footer.tsx` | Un téléphone réel et cliquable — contraste direct avec leur `06 00 00 00 00` |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–4 min | Rouvrir obrealestate.ma. **Vérifier si le numéro `06 00 00 00 00` est toujours affiché.** Capture d'écran horodatée si oui |
| 4–9 min | `project.ts` : nom Garden View, Dar Bouazza, 6 000 m², disclaimer, **notre numéro WhatsApp** |
| 9–13 min | `tailwind.config.js` : vert jardin. `index.html` : titre |
| 13–19 min | `pois.ts` : les écoles et commerces publiés. C'est un différenciateur fort et 100 % sourçable |
| 19–25 min | `apartments.ts` : F3 / F4 uniquement, terrasses généreuses, références `GV-…` |
| 25–30 min | 4 captures : (1) hero avec les faits publiés, (2) fiche lot F4 traversant avec terrasse, (3) section localisation avec les écoles, (4) tableau de bord |

## 11. Avertissement

> **Ne présenter aucun fait inventé sur Garden View.** Le nombre de lots, les surfaces exactes, les
> prix, le nombre de bâtiments et la date de livraison ne sont pas publics.
>
> **Les 600 MDH sont un chiffre de presse, pas une donnée officielle de l'entreprise.** Le formuler
> ainsi : « d'après la couverture presse du lancement ».
>
> **Le numéro `06 00 00 00 00` doit être revérifié le jour de l'envoi.** Signaler un défaut corrigé
> détruit la crédibilité du message entier.
>
> **Formuler cette remarque avec tact.** Écrire « le numéro affiché est encore un numéro
> d'exemple », pas « vous avez oublié de remplir votre numéro ».
>
> **Notre propre maquette ne doit jamais afficher `212600000000`** — ce serait exactement le défaut
> que nous signalons.
>
> **Le bandeau de démonstration reste visible en permanence.**
