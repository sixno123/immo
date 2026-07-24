# 03 — Système de notation des prospects

**Date de définition : 24 juillet 2026.**
S'applique à `sales/leads.csv`. Score sur 100, réparti en 7 critères.

---

## 1. Grille de notation

### Critère 1 — Projet actif (20 points)

Le promoteur a-t-il un programme en commercialisation ou récemment annoncé ?

| Points | Situation | Preuve exigée |
|---|---|---|
| **20** | Programme en commercialisation, confirmé sur le site officiel ou par un article de presse daté de moins de 18 mois | Page projet officielle ou article daté |
| **14** | Programme listé sur le site officiel sans mention de statut ni de date | Page projet officielle |
| **8** | Projets présentés mais tous livrés / vendus | Page officielle |
| **0** | Aucune preuve de projet | — |

> Un promoteur sans programme actif n'a aucune raison d'acheter un bureau de vente. C'est le
> critère le plus discriminant.

### Critère 2 — Taille du programme (15 points)

| Points | Nombre de lots (estimé ou publié) |
|---|---|
| **15** | 150 lots et plus, ou plusieurs programmes simultanés |
| **12** | 60 à 149 lots |
| **9** | 30 à 59 lots |
| **5** | 20 à 29 lots |
| **0** | Moins de 20 lots, ou taille inconnue et non estimable |

> En dessous de 20 lots, l'inventaire interactif n'apporte pas assez de valeur : le tableau
> Excel du commercial suffit.

### Critère 3 — Positionnement premium (15 points)

| Points | Positionnement |
|---|---|
| **15** | Luxe / haut standing affiché, villas ou penthouses, prix > 2 M MAD |
| **11** | Haut standing / premium revendiqué, 1 – 2 M MAD |
| **7** | Moyen standing |
| **3** | Économique / social uniquement |
| **0** | Non identifiable |

> L'économique et le social ne sont pas exclus, mais le budget marketing y est structurellement
> plus faible et l'acheteur moins sensible à l'expérience en ligne.

### Critère 4 — Faiblesse de l'expérience digitale actuelle (20 points)

C'est **le critère qui crée le besoin**. Évalué en visitant le site du prospect.

| Points | Constat |
|---|---|
| **20** | Aucun site, site en panne, ou site manifestement à l'abandon (coordonnées factices, contenu de démonstration WordPress non modifié) |
| **17** | Site présent mais purement vitrine : pages projet + formulaire, aucune disponibilité, brochure PDF seulement |
| **12** | Filtres au niveau du **projet** (ville, type, budget) mais aucune information au niveau du **lot** |
| **7** | Une amorce d'inventaire (liste de biens avec prix) mais sans statut Disponible/Réservé/Vendu ni sélecteur d'étage |
| **3** | Recherche de biens avec filtres avancés déjà en place |
| **0** | Bureau de vente digital déjà en place (sélecteur d'étage + statuts en direct) → **retirer le prospect** |

### Critère 5 — Route d'accès à un décideur (10 points)

| Points | Situation |
|---|---|
| **10** | E-mail professionnel nominatif ou de service publié **et** page LinkedIn d'entreprise active |
| **8** | E-mail professionnel générique publié (contact@, commercial@) |
| **6** | Téléphone professionnel + WhatsApp business publiés, sans e-mail |
| **4** | Formulaire de contact uniquement, ou réseaux sociaux uniquement |
| **0** | Aucune route de contact publique vérifiable |

> **Aucun point n'est accordé pour un contact deviné.** Les schémas d'adresse e-mail (prenom.nom@)
> ne sont jamais utilisés.

### Critère 6 — Budget apparent (10 points)

| Points | Indices |
|---|---|
| **10** | Groupe diversifié, société cotée, ou programmes à plusieurs centaines de millions de MAD |
| **7** | Promoteur établi, plusieurs programmes livrés, communication soignée |
| **4** | Promoteur régional, 1 à 3 programmes |
| **2** | Structure très petite ou récente |
| **0** | Aucun indice |

### Critère 7 — Adéquation à l'inventaire interactif (10 points)

| Points | Configuration du programme |
|---|---|
| **10** | Plusieurs bâtiments **et** plusieurs étages **et** plusieurs typologies — cas d'usage parfait |
| **7** | Un seul bâtiment mais plusieurs étages et typologies, ou plusieurs types de biens |
| **5** | Villas ou lots de terrain en résidence fermée (plan de masse plutôt que coupe d'immeuble — adaptation nécessaire) |
| **2** | Produit unique et homogène |
| **0** | Non résidentiel (bureaux seuls, commerces seuls, hôtellerie) |

---

## 2. Niveaux de priorité

| Priorité | Score | Traitement |
|---|---|---|
| **A** | 75 – 100 | Démonstration personnalisée **avant** le premier contact. Approche individuelle, multi-canal. |
| **B** | 55 – 74 | Message personnalisé sans démonstration préalable. Démonstration produite s'il y a une réponse. |
| **C** | < 55 | Réserve. Contacter uniquement quand les A et B sont épuisés, ou si un signal apparaît (lancement de programme, recrutement commercial). |

---

## 3. Règles de qualité appliquées à `leads.csv`

1. **Chaque prospect a au moins une source publique vérifiable.** Les prospects de priorité A
   en ont au moins deux.
2. **Aucun contact inventé.** Si un champ n'a pas été vu publié, il reste vide et la colonne
   `notes` porte la mention « Non vérifié ».
3. **Aucun schéma d'e-mail deviné.**
4. **Aucune personne physique n'est listée** sauf si son nom et sa fonction sont publiés à des
   fins professionnelles par l'entreprise elle-même. Aucune donnée personnelle privée.
5. **Promoteur ≠ agence ≠ courtier.** Les agences immobilières et portails ont été écartés
   (exemple : Prestige Living, identifié comme agence de luxe et non promoteur, a été retiré).
6. **Dédoublonnage** par société et par projet. Les filiales sont rattachées à leur maison mère
   quand la marque commerciale diffère (exemple : Prestigia est la marque premium du Groupe
   Addoha — traitée comme une entrée distincte car son site, ses projets et son positionnement
   sont autonomes).
7. **Vérification effectuée le 24 juillet 2026**, portée dans `last_verified_date`. Le marché
   bouge : au-delà de 90 jours, revérifier avant tout contact.
8. **Retraits explicites après vérification :**
   - *Bouygues Immobilier Maroc* — a cessé son activité au Maroc après la commercialisation des
     Faubourgs d'Anfa ([source FNPI](https://fnpimaroc.net/bouygues-immobilier-quitte-le-maroc/)).
   - *Eagle Hills / Bab Al Bahr* — informations disponibles datées de 2015, non actualisables.
   - *Estya (Agadir)* — le domaine `estya.ma` ne résout plus (DNS inexistant au 24/07/2026).
   - *Prestige Living (Marrakech)* — agence, pas promoteur.

---

## 4. Ce que le score ne mesure pas

Le score classe l'**opportunité produit**, pas la **facilité d'accès**. Un groupe coté obtient
un score élevé et reste très difficile à joindre.

C'est pourquoi `04-top-15-prospects.md` propose deux classements :
- le **top 15 par score** (valeur de l'opportunité) ;
- les **5 plus faciles à approcher en premier** (probabilité d'obtenir une réponse).

**Le premier client viendra probablement de la seconde liste.**

---

## 5. Signaux de requalification

Remonter un prospect de priorité si l'un de ces signaux apparaît :

| Signal | Où le voir | Effet |
|---|---|---|
| Annonce d'un nouveau programme | Presse économique (Médias24, LesEco, L'Économiste), Instagram, LinkedIn | **+10** sur le critère 1 |
| Recrutement d'un directeur commercial ou marketing | Rekrute, LinkedIn, Indeed | **+5** sur le critère 5 (une équipe existe) |
| Participation à SMAP Immo ou à un salon | FNPI, presse | **+5** (budget de commercialisation actif) |
| Refonte de site en cours | Site du prospect | **Suspendre** — mauvais timing |
| Programme annoncé « bientôt sold out » | Site, réseaux sociaux | **−15** sur le critère 1 |

**Signal d'arrêt :** un prospect qui a déployé un bureau de vente digital (sélecteur d'étage +
statuts en direct) sort de la base. Le noter dans `outreach-tracker.csv` avec le statut
« Non pertinent » et la raison.
