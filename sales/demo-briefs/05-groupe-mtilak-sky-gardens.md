# Brief de démonstration — Groupe Mtilak / Résidence Sky Gardens

**Score : 88/100 — Priorité A. Vérifié le 24 juillet 2026.**
**Parmi les 5 prospects les plus accessibles — à traiter en semaine 1.**
Méthode générale : [`_00-how-to-personalize.md`](_00-how-to-personalize.md)

---

## ⚠️ Avertissement préalable — homonymie

**Groupe Mtilak exploite une « Résidence Azure » de 52 villas à Marrakech.** Notre prototype de
démonstration s'appelle « Résidence Azure Bouskoura ».

**Règles impératives :**
1. La maquette personnalisée s'appelle **« Sky Gardens »**, jamais « Azure ».
2. Si l'on montre le prototype public (`immo-rho-tan.vercel.app`), dire dans la même phrase :
   *« C'est un programme fictif que j'ai construit pour la démonstration — sans aucun lien avec
   votre Résidence Azure de Marrakech. »*
3. Ne jamais laisser croire que nous avons travaillé sur leur Résidence Azure.

Cette confusion est le principal risque de ce dossier. La traiter en premier.

---

## 1. Entreprise et projet

| | |
|---|---|
| **Entreprise** | Groupe Mtilak — plus de 35 ans dans le BTP ; filiales Imabo, Workfor, Maskane Home, Sagimex |
| **Site** | https://www.groupemtilak.com/ |
| **E-mail publié** | contact@groupemtilak.com |
| **Téléphones publiés** | 05 24 43 10 31 · 06 68 92 76 45 · 06 36 99 74 21 |
| **Adresse** | Imm Ismail, Bd Yaacoub El Mansour, Marrakech |
| **Projet de démonstration** | **Résidence Sky Gardens** — 285 appartements, Marrakech |

## 2. Faits publics disponibles

Volumes publiés sur leur propre site — le portefeuille le plus précisément chiffré du portefeuille
de prospects :

| Projet | Ville | Lots publiés | Typologie |
|---|---|---|---|
| **Résidence Sky Gardens** | Marrakech | **285** | Appartements |
| Résidence Oceano E Verde | Essaouira | **280** | Appartements + commerces |
| Résidence Terrace Beach 2 | Essaouira | **65** | Appartements |
| Résidence Le Pacha | Marrakech | **56** | Studios / duplex |
| Résidence Amyot | Casablanca | **56** | Studios |
| Résidence Symphonie | Marrakech | **55** | Studios / commerces |
| Résidence Azure | Marrakech | **52** | Villas |
| Résidence Taylor | Marrakech | **43** | Studios / commerces |

Total publié sur les opérations listées : **environ 890 unités**.

**Inconnu — ne jamais afficher :** surfaces par lot, prix, nombre de bâtiments et d'étages de Sky
Gardens, orientations, dates de livraison.

## 3. Identité visuelle recommandée

Marrakech, segment moyen-haut de gamme. Palette de principe :

| Rôle | Valeur | Remarque |
|---|---|---|
| Fond clair | `#FBF7F1` | Sable clair |
| Accent principal | `#2E4A3F` | Vert jardin — écho direct à « Sky Gardens » |
| Accent secondaire | `#8CA88F` | Vert doux |
| Métal | `#C08A4E` | Terre cuite / cuivre, registre marrakchi |
| Texte | `#1A1A1D` | |

## 4. Titre de hero proposé

> **Résidence Sky Gardens**
> *285 appartements — voyez lesquels sont encore disponibles*

Sous-titre :
> Marrakech. Filtrez par étage, surface et budget.

Titre volontairement direct : il reprend **leur propre chiffre** et pose immédiatement la question
qu'ils ne peuvent pas traiter aujourd'hui.

## 5. Statistiques du projet à afficher

| Bloc | Valeur affichée | Justification |
|---|---|---|
| Appartements | **285** | Chiffre publié sur leur site |
| Unités au portefeuille | **~890** | Somme de leurs chiffres publiés — à présenter comme telle |
| Années d'expérience | **35+** | Revendiqué sur leur site |
| Bâtiments | `— à compléter` | Non publié |
| Livraison | `— à compléter` | Non publié |
| À partir de | `Prix sur demande` | Non publié |

## 6. Bâtiments et typologies pertinents

285 appartements impliquent probablement plusieurs bâtiments, mais **le nombre n'est pas publié**.
Conserver les 2 bâtiments du prototype en le signalant :

> « La maquette montre 2 bâtiments pour l'exemple. Sur 285 lots, nous reprendrons votre découpage
> réel — nous supportons autant de bâtiments que nécessaire. »

Typologies à conserver : `2 chambres`, `3 chambres`, `4 chambres`, `Duplex`. Retirer `Penthouse` et
`Rez-de-jardin` sauf indication contraire de leur part.

## 7. Fonctionnalités à mettre en avant

**Angle propre à ce prospect : ils ont déjà la donnée, il ne manque que l'interface.** C'est la
vente la plus courte à argumenter.

1. **Le filtre sur volume**, avec compteur de résultats — 285 lots réduits à 4 en trois clics.
2. **Le compteur de lots disponibles par étage** dans le sélecteur.
3. **Le tableau de bord** avec édition du statut en direct : leurs équipes mettent à jour
   elles-mêmes.
4. La fiche lot avec mensualité indicative (segment où le financement compte).
5. Le comparateur.

**Phrase d'argumentation :**
> « Vous publiez déjà 285 sur Sky Gardens et 280 sur Oceano E Verde : vous pensez en lots. Il
> manque juste l'écran qui permet à l'acheteur de les voir. »

## 8. Faiblesse digitale à corriger

**Constat vérifié le 24 juillet 2026 :**
- Pages projet avec surface et nombre de lots ; contact par formulaire, WhatsApp, e-mail,
  téléphone.
- **Aucune recherche de disponibilité, aucun statut par lot, aucun plan d'étage interactif.**
- Aucun prix par lot.

**Conséquence commerciale :** le visiteur voit « 285 appartements » sans savoir combien restent.
Le chiffre total, sans le statut, crée même un effet négatif : il suggère un grand programme sans
rassurer sur ce qui est encore accessible.

## 9. Sections du prototype à personnaliser

| Section / fichier | Action |
|---|---|
| `src/config/project.ts` | `name: 'Résidence Sky Gardens'`, `tagline`, `location: 'Marrakech — Maroc'`, `stats.apartments: 285`, reste en « à compléter », **disclaimer mentionnant explicitement l'absence de lien avec leur Résidence Azure** |
| `tailwind.config.js` | Palette du § 3 |
| `index.html` | `<title>Sky Gardens — maquette de démonstration</title>` |
| `src/components/home/Availability.tsx` | **Section clé** — filtres et compteur de résultats sur 285 lots |
| `src/pages/AdminDemoPage.tsx` | **Section clé** — édition des statuts en direct |
| `src/data/apartments.ts` | Références `SG-A-…` / `SG-B-…` ; générer un volume proche de 285 pour que le compteur soit crédible ; retirer `Penthouse` et `Rez-de-jardin` |
| `src/components/home/Stats.tsx` | 285 appartements · 35+ ans |

## 10. Plan de 30 minutes

| Temps | Action |
|---|---|
| 0–3 min | Rouvrir groupemtilak.com. Confirmer les 285 lots de Sky Gardens et **relever la formulation exacte** |
| 3–9 min | `project.ts` : nom Sky Gardens, 285 lots, disclaimer renforcé avec la mention anti-confusion, notre numéro WhatsApp |
| 9–14 min | `tailwind.config.js` : vert jardin / cuivre. `index.html` : titre |
| 14–22 min | `apartments.ts` : augmenter le volume généré pour approcher 285 lots (ajuster les `seeds`), références `SG-…` |
| 22–26 min | Vérifier en local que le filtre et le compteur se comportent bien sur ce volume |
| 26–30 min | 4 captures : (1) hero « 285 appartements », (2) filtre avec compteur passant de 285 à quelques résultats, (3) fiche lot, (4) tableau de bord avec statut modifié en direct |

## 11. Avertissement

> **L'homonymie « Résidence Azure » est le risque n°1 de ce dossier.** Le traiter dans la première
> phrase de tout message et de toute démonstration.
>
> **Ne présenter aucun fait inventé sur Sky Gardens.** Surfaces, prix, orientations, nombre de
> bâtiments et date de livraison ne sont pas publics.
>
> **Le total « ~890 unités » est notre propre addition** de leurs chiffres publiés. Le présenter
> comme tel, jamais comme une donnée qu'ils auraient communiquée.
>
> **Si l'on génère 285 lots dans la maquette, chaque lot est fictif.** Le bandeau de démonstration
> doit être visible sur l'écran de la liste comme sur celui de la fiche lot.
>
> **Le bandeau de démonstration reste visible en permanence.**
