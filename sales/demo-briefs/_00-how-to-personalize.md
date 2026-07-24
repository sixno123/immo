# Méthode commune de personnalisation d'une démonstration

**À lire une fois, puis suivre pour chaque fiche prospect de ce dossier.**

## Règle absolue : aucun fait inventé

Une démonstration personnalisée sert à montrer **notre outil**, pas à simuler le programme du
prospect. Le risque est réel : si nous affichons « 84 lots, à partir de 1 450 000 DH » sur un
programme dont nous ne connaissons ni le nombre de lots ni le prix, le prospect le verra
immédiatement et nous perdrons toute crédibilité — parfois avant même d'avoir répondu.

**Trois catégories de données :**

| Catégorie | Exemple | Usage autorisé |
|---|---|---|
| **Fait publié** | « F3 et F4 traversants », « 6 000 m² d'espaces verts », « 285 appartements » | Affichable tel quel, avec la source notée dans la fiche |
| **Fait déduit** | Nombre d'étages estimé depuis une photo de façade | **Interdit à l'affichage.** Utilisable seulement pour dimensionner la maquette |
| **Fait inconnu** | Prix par lot, orientation, surface exacte de terrasse | Remplacer par un libellé explicite : `— à compléter`, `Prix sur demande`, `Surface à confirmer` |

## Bandeau obligatoire sur toute démonstration personnalisée

À placer en haut de page, visible sans défilement, et à **ne jamais retirer** :

```
Maquette de démonstration — structure et fonctionnalités uniquement.
Les lots, prix et surfaces affichés sont des exemples et ne représentent
pas l'offre réelle de [Entreprise].
```

Techniquement : réutiliser `projectConfig.disclaimer` dans `src/config/project.ts` et
l'afficher via le composant existant du prototype.

## Préparation technique (une fois pour toutes)

```bash
# Depuis une copie de travail du dépôt, jamais sur la branche principale
git checkout -b demo/<nom-prospect>
npm install
npm run dev     # http://localhost:5173
```

Les cinq fichiers à modifier, et rien d'autre :

| Fichier | Ce qu'on y change |
|---|---|
| `src/config/project.ts` | `name`, `shortName`, `tagline`, `location`, `address`, `whatsappNumber`, `email`, `delivery`, `startingPrice`, `stats`, `disclaimer` |
| `tailwind.config.js` | Les 4 familles de couleurs (`ivory`, `forest`, `charcoal`, `bronze`) remplacées par la charte du prospect |
| `index.html` | Les deux polices Google Fonts, et le `<title>` |
| `src/data/apartments.ts` | Le tableau `seeds` : références, bâtiments, étages, typologies, surfaces, statuts |
| `src/data/images.ts` | Les URL des visuels |

**Ne pas toucher :** les composants, les hooks, les utilitaires, les pages. La personnalisation
est de la donnée et du style, pas du code.

## Visuels

- **Ne jamais copier les rendus 3D du prospect depuis son site** sans autorisation écrite : ce
  sont des œuvres protégées, et le prospect le remarquera.
- Utiliser des visuels d'ambiance libres de droits (Unsplash, comme le prototype) et le dire.
- Formuler ainsi : *« Les visuels sont des images d'ambiance ; nous intégrerons vos perspectives
  réelles. »*
- Alternative si le prospect a publié une brochure PDF téléchargeable publiquement : citer les
  **données** (typologies, surfaces) sans reproduire les images.

## Numéro WhatsApp

`projectConfig.whatsappNumber` vaut `212600000000` — un numéro factice. Deux options :
1. Notre propre numéro professionnel (recommandé : le prospect peut tester le parcours).
2. Le numéro **publié** du prospect — uniquement si l'on assume qu'un message d'essai puisse leur
   arriver.

**Ne jamais laisser `212600000000`** : c'est exactement le défaut que nous reprochons à
OB Real Estate.

## Livrables d'une démonstration personnalisée

Par ordre d'effort croissant. **Commencer par le niveau 1.**

| Niveau | Livrable | Temps | Quand |
|---|---|---|---|
| **1** | 3 à 4 captures d'écran annotées, en pièce jointe ou dans le corps de l'e-mail | 30 min | Premier contact — **par défaut** |
| **2** | Déploiement Vercel privé, lien envoyé au prospect | +45 min | Après une réponse positive |
| **3** | Inventaire réel intégré (si le prospect fournit sa liste de lots) | +2 h | Avant le rendez-vous de closing |

**Ne pas déployer publiquement une maquette au nom d'un prospect qui ne l'a pas demandée.** Un
déploiement Vercel indexable portant le nom d'un promoteur qui n'est pas client est un risque
juridique et réputationnel inutile. Utiliser un déploiement de prévisualisation avec URL non
diffusée, et le supprimer si le prospect ne donne pas suite.

## Plan de 30 minutes (structure commune)

| Temps | Action |
|---|---|
| 0–5 min | Relire la fiche prospect. Revérifier le site du prospect : le défaut signalé existe-t-il encore ? |
| 5–10 min | `project.ts` : nom, slogan, localisation, livraison, statistiques, disclaimer |
| 10–17 min | `tailwind.config.js` + `index.html` : couleurs et polices de la charte du prospect |
| 17–25 min | `apartments.ts` : ajuster bâtiments, étages et typologies à la configuration réelle publiée |
| 25–30 min | Captures : (1) hero, (2) sélecteur bâtiment/étage, (3) fiche lot, (4) tableau de bord. Annoter chaque capture d'une phrase |

**Si la personnalisation dépasse 45 minutes, s'arrêter.** Un prospect ne mérite pas plus de 45
minutes avant sa première réponse.

## Ordre de démonstration en rendez-vous

Toujours le même, il est optimisé :

1. **Le hero** — 10 secondes, pour l'effet.
2. **Le sélecteur bâtiment / étage** — le moment où le prospect reconnaît son plan de vente mural.
3. **Une fiche lot** — surface, orientation, prix, mensualité, plan, bouton WhatsApp.
4. **Le comparateur** — deux lots côte à côte.
5. **Le tableau de bord** — passer un lot en « Vendu », revenir sur le site public, montrer la
   mise à jour. **C'est le moment qui vend.**
6. **Les demandes de visite** dans le tableau de bord.

Puis se taire et laisser le prospect parler.

## Ce qu'il ne faut jamais faire pendant une démonstration

- Présenter Azure Bouskoura comme un client réel. C'est un programme **fictif** — le dire dans les
  30 premières secondes.
- Prétendre travailler déjà avec un promoteur marocain.
- Promettre une augmentation des ventes.
- Improviser un prix. Le prix se dit après avoir entendu la taille du programme.
- Laisser le prospect découvrir seul que les demandes de visite ne partent nulle part. Le dire
  avant lui.
