# 02 — Offre commerciale et tarification (Maroc)

**Date : 24 juillet 2026. Devise : MAD (dirham marocain). Prix hors taxes.**
La TVA applicable et le régime fiscal doivent être confirmés par un comptable marocain
(cf. `15-operational-checklist.md`). Les montants ci-dessous sont **hors TVA**.

---

## 1. Références de prix du marché marocain (sources vérifiées)

### 1.1 Prestation web au Maroc — juillet 2026

Source : [Prix création site web Maroc 2026 — Clarodigi](https://clarodigi.com/blog/prix-creation-site-web-maroc-guide-complet/)
et [WebRex](https://webrex.ma/prix-creation-site-web-maroc-2026/).

| Prestation | Freelance | Agence mid-market | Agence premium |
|---|---|---|---|
| Site vitrine standard | 5 000 – 12 000 | 10 000 – 25 000 | 25 000 – 60 000 |
| Site vitrine premium (10+ pages, sur mesure, animations, multilingue) | — | — | 25 000 – 50 000 |
| Plateforme sur mesure à fonctionnalités avancées | — | — | jusqu'à 200 000+ |
| Taux horaire | 150 – 400 MAD/h | 400 – 800 MAD/h | 800 – 1 500 MAD/h |

**Lecture :** notre produit n'est pas un site vitrine. Il se situe dans la catégorie
« plateforme sur mesure », mais avec un coût de production réduit parce que le socle existe
déjà. **C'est notre marge.**

### 1.2 Concurrence directe et adjacente au Maroc

| Acteur | Modèle | Prix publics |
|---|---|---|
| [MY iMMOTECH](https://www.myimmotech.ma/produit/interactive-3d) | Maquette 3D interactive, mini-site programme, visites 360°, CRM immobilier | Non publiés |
| [Yakeey — offre promoteur](https://yakeey.com/fr-ma/promoteur-immobilier) | Commercialisation complète, force de vente dédiée, agents IA | **Commission sur ventes, zéro frais fixe** |
| [Studio 81](https://studio81-3d.com/), [Arlynk](https://arlynk.com/), [Realiz3D](https://www.realiz3d.ma/realviz3d/), [Manueva](https://www.manueva.com/) | Production 3D, maquettes, visuels | Non publiés |

**Conclusion tarifaire :** personne ne publie ses prix sur ce segment. Nous avons donc une
liberté réelle. Ne pas se caler sur le prix d'un site vitrine — se caler sur le **budget de
commercialisation du programme**.

### 1.3 Ancrage de valeur — le calcul à faire en rendez-vous

| Taille du programme | CA du programme (ordre de grandeur) | Notre prix « Bureau de vente » | Poids |
|---|---|---|---|
| 40 lots × 1,5 M MAD | 60 M MAD | 95 000 MAD | **0,16 %** |
| 100 lots × 1,2 M MAD | 120 M MAD | 110 000 MAD | **0,09 %** |
| 250 lots × 900 k MAD | 225 M MAD | 130 000 MAD | **0,06 %** |

À comparer avec ce que le promoteur dépense déjà : une maquette physique, un stand SMAP Immo,
une campagne d'affichage, un jeu de brochures imprimées.

> **Phrase à utiliser :** « Une maquette physique coûte souvent plus cher que ça, et elle ne
> vous dit pas qui l'a regardée. »

---

## 2. Les trois offres

### Vue d'ensemble

| | **1. Lancement** | **2. Interactif** | **3. Bureau de vente digital** |
|---|---|---|---|
| **Mise en place (HT)** | **35 000 MAD** | **65 000 MAD** | **110 000 MAD** |
| **Maintenance mensuelle** | 1 200 MAD/mois | 2 200 MAD/mois | 3 800 MAD/mois |
| **Délai indicatif** | 2 – 3 semaines | 4 – 5 semaines | 7 – 9 semaines |
| **Backend / base de données** | Non | Non | **Oui** |
| **Tableau de bord promoteur** | Non | Non | **Oui, authentifié** |
| **Cible** | Petit programme, budget serré, test | Programme 30 – 150 lots | Programme 80+ lots ou promoteur multi-projets |

---

### Offre 1 — **Lancement**

**35 000 MAD HT + 1 200 MAD/mois**

Le programme existe en ligne, proprement, avec ses lots visibles.

**Inclus :**
- Présentation premium du programme (hero, description, prestations, galerie, localisation).
- Identité visuelle adaptée à la charte du promoteur (couleurs, typographies, logo).
- Catalogue complet des lots avec référence, typologie, surface, orientation, prix.
- Affichage des statuts Disponible / Réservé / Vendu.
- Filtres de recherche (typologie, budget, surface).
- Fiches lot individuelles avec plan.
- Bouton WhatsApp avec message pré-rempli incluant la référence du lot.
- Formulaire de demande de visite (envoi vers une boîte e-mail via service tiers).
- Page brochure imprimable.
- Responsive mobile.
- Mise en ligne sur hébergement du client ou Vercel/Hostinger.
- Mentions légales et politique de confidentialité (structure fournie, contenus validés par le
  client — cf. `15-operational-checklist.md`).
- 1 session de formation (1 h, à distance).

**Non inclus :** sélecteur bâtiment/étage, comparateur, simulateur, tableau de bord, base de
données, mise à jour des statuts par le client.

**Mise à jour de l'inventaire :** par nous, sur demande, incluse dans la maintenance
(2 mises à jour/mois maximum ; au-delà, facturées à l'unité).

---

### Offre 2 — **Interactif**

**65 000 MAD HT + 2 200 MAD/mois** — *offre recommandée par défaut*

Le prospect choisit son lot tout seul.

**Tout ce qui est dans Lancement, plus :**
- **Sélecteur bâtiment et étage** : coupe schématique cliquable, compteur de lots disponibles
  par niveau, marquage « complet ».
- Fiches lot enrichies : descriptions détaillées par typologie, liste de prestations,
  orientation, terrasse, parking, mensualité indicative.
- **Comparateur de lots** (jusqu'à 3 ou 4 lots côte à côte).
- **Simulateur de financement** : apport, durée, taux → mensualité, coût total du crédit.
  Disclaimer non contractuel obligatoire.
- Brochure PDF maquettée (design dédié, pas seulement une page imprimable).
- Formulaire de visite connecté à l'outil de suivi du client (Google Sheets, e-mail, ou
  webhook vers un CRM existant si l'API est documentée).
- Optimisation SEO de base + balises Open Graph pour le partage WhatsApp / réseaux sociaux.
- 2 sessions de formation.

**Non inclus :** base de données, tableau de bord, mise à jour autonome des statuts.

**Pourquoi c'est l'offre par défaut :** c'est celle qui produit l'effet « waouh » commercial
avec un budget que la plupart des promoteurs de taille moyenne acceptent sans passer par un
comité d'investissement.

---

### Offre 3 — **Bureau de vente digital**

**110 000 MAD HT + 3 800 MAD/mois**

Le promoteur pilote son inventaire lui-même et voit ce qui se passe.

**Tout ce qui est dans Interactif, plus :**
- **Base de données réelle** (PostgreSQL managé ou équivalent) : plus de données figées dans le
  code.
- **Tableau de bord administrateur sécurisé** : authentification, comptes nominatifs par
  utilisateur, rôles (lecture seule / édition).
- **Mise à jour de l'inventaire par le client** : changer un statut ou un prix, en direct, sans
  nous appeler. Répercuté immédiatement sur le site public.
- **Centralisation des leads** : toutes les demandes de visite dans une seule interface,
  avec export CSV.
- **Notifications** : e-mail à chaque nouvelle demande (et/ou WhatsApp Business, en option,
  cf. §4).
- **Analytique** : lots les plus consultés, typologies les plus demandées, évolution des
  demandes dans le temps, sources de trafic.
- Sauvegardes automatiques quotidiennes.
- Environnement de recette séparé.
- Maintenance et support prioritaires (délai de réponse ouvré indiqué au contrat).
- 3 sessions de formation + documentation utilisateur en français.

**Argument de vente :** c'est la seule offre qui répond à *« nos disponibilités changent tous
les jours »*.

---

## 3. Séparation claire : démo / production / sur mesure

| Fonction | Démo actuelle | Offre 1 | Offre 2 | Offre 3 | Sur mesure |
|---|---|---|---|---|---|
| Présentation premium | ✅ | ✅ | ✅ | ✅ | — |
| Catalogue des lots | ✅ | ✅ | ✅ | ✅ | — |
| Statuts D/R/V | ✅ | ✅ | ✅ | ✅ | — |
| Filtres | ✅ | ✅ | ✅ | ✅ | — |
| Fiches lot + plans | ✅ | ✅ | ✅ | ✅ | — |
| WhatsApp pré-rempli | ✅ | ✅ | ✅ | ✅ | — |
| Formulaire de visite | ✅ (local) | ✅ (e-mail) | ✅ (connecté) | ✅ (base) | — |
| Sélecteur bâtiment/étage | ✅ | ❌ | ✅ | ✅ | — |
| Comparateur | ✅ | ❌ | ✅ | ✅ | — |
| Simulateur de financement | ✅ | ❌ | ✅ | ✅ | — |
| Brochure PDF maquettée | ❌ (page imprimable) | ❌ | ✅ | ✅ | — |
| Base de données réelle | ❌ | ❌ | ❌ | ✅ | — |
| Tableau de bord authentifié | ❌ (ouvert, local) | ❌ | ❌ | ✅ | — |
| Mise à jour par le client | ❌ (locale) | ❌ | ❌ | ✅ | — |
| Notifications | ❌ | ❌ | ❌ | ✅ | — |
| Analytique | ❌ (local) | ❌ | ❌ | ✅ | — |
| Maquette 3D interactive | ❌ | ❌ | ❌ | ❌ | ✅ |
| Visite virtuelle 360° | ❌ | ❌ | ❌ | ❌ | ✅ |
| Version arabe | ❌ | ❌ | ❌ | ❌ | ✅ |
| Rendu serveur / SEO avancé | ❌ | ❌ | ❌ | ❌ | ✅ |
| Intégration CRM propriétaire | ❌ | ❌ | ❌ | ❌ | ✅ |
| Application mobile | ❌ | ❌ | ❌ | ❌ | ✅ |

**Règle absolue :** tout ce qui est en colonne « Sur mesure » se chiffre séparément, après
audit. Ne jamais l'inclure dans un prix annoncé oralement.

---

## 4. Options et services additionnels

| Option | Prix indicatif HT | Conditions |
|---|---|---|
| Bâtiment supplémentaire au-delà de 2 | 4 000 MAD / bâtiment | Adaptation du sélecteur et des types |
| Typologie supplémentaire au-delà de 6 | 1 500 MAD / typologie | Descriptions + plan |
| Lots au-delà de 120 | 6 000 MAD / tranche de 100 | Saisie et contrôle qualité |
| Version arabe (interface + contenus) | 18 000 MAD | Traductions fournies par le client |
| Version anglaise | 12 000 MAD | Idem |
| Rendu serveur / SEO avancé + Open Graph par lot | 15 000 MAD | Recommandé si acquisition organique visée |
| Intégration WhatsApp Business API (notifications) | 9 000 MAD + coûts opérateur | Compte WhatsApp Business vérifié à la charge du client |
| Intégration CRM tiers | à partir de 12 000 MAD | **Après audit de l'API. Ne jamais chiffrer avant.** |
| Carte interactive (Google Maps / Mapbox) | 4 500 MAD | Clé API à la charge du client |
| Intégration maquette 3D / visite 360° d'un prestataire tiers | 8 000 MAD (intégration seule) | La production 3D n'est **pas** de notre ressort |
| Séance photo / retouche de perspectives | Non fourni | Orienter vers un prestataire |
| Programme supplémentaire pour un client existant | **−30 % sur la mise en place** | Le socle est déjà déployé |
| Formation supplémentaire | 1 500 MAD / session de 2 h | Sur site à Casablanca ; déplacement hors Casablanca facturé |
| Reprise après période de gel du projet (> 60 j) | 15 % du solde restant | Clause à inscrire au contrat |

---

## 5. Échéancier de paiement

### Offres 1 et 2

| Étape | % | Déclencheur |
|---|---|---|
| Acompte de démarrage | **40 %** | Signature du devis |
| Livraison de la recette | **40 %** | Mise à disposition de l'environnement de recette |
| Solde | **20 %** | Mise en ligne |

### Offre 3

| Étape | % | Déclencheur |
|---|---|---|
| Acompte de démarrage | **35 %** | Signature |
| Prototype validé | **25 %** | Validation de la direction artistique et de la structure |
| Recette | **25 %** | Environnement de recette avec inventaire réel intégré |
| Solde | **15 %** | Mise en ligne et formation effectuée |

**Maintenance :** facturée mensuellement à terme échu, ou trimestriellement d'avance avec
**−5 %**, ou annuellement d'avance avec **−12 %** (à privilégier pour la trésorerie).

**Règles fermes :**
- Aucun développement ne commence avant encaissement de l'acompte.
- La mise en ligne n'a lieu qu'après règlement du solde.
- Retard de paiement : pénalités selon les usages commerciaux marocains — **la clause exacte
  doit être rédigée par un juriste marocain**.

---

## 6. Offre pilote (premier client)

Nous n'avons **aucune référence client**. C'est le seul obstacle réel à la première vente. Le
pilote existe pour l'acheter, pas pour brader.

### Conditions du pilote

**Réservé aux 2 premiers clients uniquement.** À annoncer explicitement comme tel, et à tenir.

| | Prix catalogue | Prix pilote | Remise |
|---|---|---|---|
| Offre 2 — Interactif | 65 000 | **45 000** | −31 % |
| Offre 3 — Bureau de vente | 110 000 | **75 000** | −32 % |

**Contreparties exigées, écrites au contrat :**
1. Droit de citer le nom du promoteur et du programme comme référence.
2. Droit d'utiliser des captures d'écran du projet livré dans nos supports commerciaux.
3. Un témoignage écrit court (3 à 5 lignes) après 60 jours d'exploitation.
4. Un appel de référence par trimestre, pendant 12 mois, avec un prospect que nous
   présélectionnons (maximum 4 appels).
5. Délai de validation des contenus par le client réduit à 5 jours ouvrés par étape.

**Ce que le pilote ne réduit jamais :**
- La maintenance mensuelle (prix plein — c'est notre récurrent).
- Le périmètre livré.
- Les options.

> **Formulation en rendez-vous :** « Je cherche deux références au Maroc. Vous obtenez le prix
> pilote, j'obtiens le droit de citer votre programme. C'est un échange, pas une remise. »

---

## 7. Limites de négociation

### 7.1 Prix plancher absolu

| Offre | Catalogue | Pilote | **Plancher absolu** | Sous le plancher |
|---|---|---|---|---|
| 1 — Lancement | 35 000 | 28 000 | **25 000** | Refuser |
| 2 — Interactif | 65 000 | 45 000 | **38 000** | Refuser |
| 3 — Bureau de vente | 110 000 | 75 000 | **65 000** | Refuser |
| Maintenance offre 1 | 1 200/mois | — | **900/mois** | Refuser |
| Maintenance offre 2 | 2 200/mois | — | **1 600/mois** | Refuser |
| Maintenance offre 3 | 3 800/mois | — | **2 800/mois** | Refuser |

**Justification du plancher de l'offre 2 (38 000 MAD) :** environ 15 jours de travail effectif
(personnalisation, intégration de l'inventaire, recette, corrections, mise en ligne,
formation). À 38 000 MAD, cela représente ~2 500 MAD/jour, soit le bas de la fourchette
« agence mid-market » marocaine. En dessous, nous travaillons à perte une fois les allers-retours
client comptés.

### 7.2 Prix cible

- **Cible offre 2 : 55 000 – 65 000 MAD.**
- **Cible offre 3 : 85 000 – 110 000 MAD.**
- **Objectif du premier contrat : 45 000 – 75 000 MAD** (pilote), maintenance à plein tarif.

### 7.3 Concessions autorisées, par ordre de préférence

Toujours donner du **périmètre** ou du **délai** avant de donner du **prix**.

1. Échéancier plus favorable (30/40/30 au lieu de 40/40/20).
2. Une session de formation offerte.
3. Une option à faible coût offerte (carte interactive, une typologie supplémentaire).
4. 3 mois de maintenance offerts — **jamais une réduction du tarif de maintenance**.
5. Descendre d'une offre (3 → 2) plutôt que casser le prix de l'offre 3.
6. En dernier recours seulement : le prix pilote.

### 7.4 Refus explicites

- Ne jamais accepter un paiement 100 % à la livraison.
- Ne jamais démarrer sans acompte.
- Ne jamais accepter une rémunération à la commission sur les ventes de lots (c'est le modèle
  Yakeey, nous n'avons ni leur force de vente ni leur trésorerie).
- Ne jamais offrir la maintenance à vie.
- Ne jamais céder le code source complet sans une facturation de rachat spécifique (à chiffrer
  au cas par cas, jamais moins de 2× le prix de la mise en place).
- Ne jamais accepter des révisions illimitées (cf. `14-delivery-process.md` : 2 tours inclus).

---

## 8. Rentabilité

Hypothèses de charge de travail (jours-homme, incluant les allers-retours client) :

| Offre | Mise en place | Chiffre d'affaires | MAD / jour |
|---|---|---|---|
| 1 — Lancement | ~8 j | 35 000 | 4 375 |
| 2 — Interactif | ~15 j | 65 000 | 4 333 |
| 2 — au prix pilote | ~15 j | 45 000 | 3 000 |
| 3 — Bureau de vente | ~28 j | 110 000 | 3 928 |
| 3 — au prix pilote | ~28 j | 75 000 | 2 679 |

Le taux journalier reste au-dessus du plancher « mid-market » marocain (400–800 MAD/h, soit
3 200–6 400 MAD/jour) sauf pour l'offre 3 au prix pilote — **acceptable une seule fois**, pour
acheter la première référence.

**Le vrai enjeu économique est la maintenance.** 10 clients en offre 2 = 22 000 MAD/mois de
récurrent, soit 264 000 MAD/an sans nouvelle vente. C'est cela qu'il faut protéger en
négociation, pas le prix de mise en place.

---

## 9. Ce qu'il ne faut pas faire

- **Ne pas annoncer un prix au premier message.** Le prix vient après la démonstration
  personnalisée.
- **Ne pas s'aligner sur un devis d'agence web.** Si le prospect compare avec un site vitrine à
  25 000 MAD, c'est que le positionnement a échoué — revenir au calcul du § 1.3.
- **Ne pas choisir le prix le plus bas pour décrocher le premier client.** Un premier client à
  25 000 MAD fixe un plafond pour tous les suivants et attire le mauvais profil de client.
- **Ne pas vendre l'offre 3 à un promoteur qui n'a qu'un seul programme de 20 lots.** Il n'en a
  pas besoin, il sera déçu, il ne deviendra pas une bonne référence.
