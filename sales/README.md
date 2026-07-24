# Bureau de vente digital pour programmes immobiliers — Système d'acquisition client

**Rapport exécutif et document de navigation.**
**Date de recherche : 24 juillet 2026.** Marché : Maroc. Devise : MAD (dirham), montants hors taxes.

Ce dossier `sales/` contient le système commercial complet pour acquérir le premier promoteur
immobilier marocain payant, à partir du prototype **Résidence Azure Bouskoura**
(démo : https://immo-rho-tan.vercel.app/ — programme **fictif**).

---

## 1. Positionnement

> **Nous transformons le site d'un programme immobilier en véritable bureau de vente digital
> interactif : votre acheteur choisit son lot en ligne, votre équipe voit qui l'a regardé.**

Ce n'est pas un site web. C'est un outil de commercialisation : inventaire vivant par bâtiment et
étage, statuts Disponible / Réservé / Vendu, comparateur, simulateur de financement, et un tableau
de bord où le promoteur pilote son stock et voit ce qui attire. Détail et justification :
[`01-product-audit.md`](01-product-audit.md).

## 2. Offre finale

Trois formules (détail : [`02-offers-and-pricing.md`](02-offers-and-pricing.md)) :

| Formule | Mise en place HT | Maintenance/mois | Cible |
|---|---|---|---|
| 1 — Lancement | 35 000 MAD | 1 200 MAD | Petit programme, budget serré |
| **2 — Interactif** | **65 000 MAD** | **2 200 MAD** | **La plupart des programmes (par défaut)** |
| 3 — Bureau de vente digital | 110 000 MAD | 3 800 MAD | Grand volume / multi-programmes |

## 3. Tarification recommandée

- **Prix cible offre 2 :** 55 000 – 65 000 MAD. **Offre 3 :** 85 000 – 110 000 MAD.
- **Premier contrat (pilote, 2 clients max) :** offre 2 à **45 000 MAD**, offre 3 à **75 000 MAD**,
  maintenance à plein tarif, en échange du droit de citation.
- **Planchers absolus** (ne jamais descendre en dessous) : offre 1 = 25 000, offre 2 = 38 000,
  offre 3 = 65 000 MAD.
- **Ancrage :** sur un programme de 40 lots à 1,5 M MAD (60 M MAD de CA), 95 000 MAD = **0,16 %**.
  Souvent moins qu'une maquette physique.

## 4. Leads vérifiés

**68 prospects** recensés dans [`leads.csv`](leads.csv), tous avec au moins une source publique,
vérifiés le 24 juillet 2026 :

- **27 priorité A** (score 75-100) — opportunité forte.
- **12 priorité B** (55-74).
- **29 priorité C** (< 55) — dont beaucoup marqués « Non vérifié » (source unique, à qualifier).

Système de notation : [`03-lead-scoring.md`](03-lead-scoring.md).
Sélection commentée des 15 meilleurs : [`04-top-15-prospects.md`](04-top-15-prospects.md).

> Sur les 68, environ **35 sont pleinement vérifiés** (site officiel inspecté, projet et
> coordonnées confirmés). Les autres sont marqués « Non vérifié » avec la raison, et ne doivent
> pas être contactés en l'état.

## 5. Cinq meilleurs prospects (par score)

| # | Prospect | Score | Projet | Faiblesse vérifiée |
|---|---|---|---|---|
| 1 | **Anfa Realties** | 96 | Aeria Park (Casablanca) | Site ne montre pas les projets ; liens de contact vides (`tel:null`, `mailto:null`) |
| 2 | **Saham Immobilier** | 95 | Hamilton (Sidi Maârouf/Bouskoura) | 360° mais aucune disponibilité de lot |
| 3 | **Yasmine Immobilier** | 93 | Yasmine Signature (Casablanca) | 5 adresses luxe, aucune comparaison en ligne ; recrute un directeur commercial |
| 4 | **Alliances Développement Immobilier** | 91 | 3 marques | Section « projets en cours » en erreur de chargement |
| 5 | **KLK Khayatey Living** | 89 | Larimar (Casablanca) | 6 programmes, aucun lot consultable |

## 6. Meilleur premier prospect

**Lahlou Alaoui Immobilier — Résidence Shems2 (Bouskoura).** Score 76, mais **le plus actionnable
de toute la base** :
- adresse e-mail **commerciale** directe publiée (`commercial@lahloualaoui.ma`) ;
- Shems2 est à **Bouskoura**, la ville de notre démonstration → personnalisation la plus rapide ;
- brochure Shems2 publique disponible ; prix de départ affiché (790 000 DHS) ;
- structure de taille moyenne, décideur joignable.

Brief prêt : [`demo-briefs/09-lahlou-alaoui-shems2.md`](demo-briefs/09-lahlou-alaoui-shems2.md).
C'est le **premier envoi** de la campagne ([`12-first-week-queue.md`](12-first-week-queue.md)).

## 7. Meilleure opportunité de démonstration personnalisée

**Prestigia Luxury Homes — Bouskoura Golf City.** Notre démonstration existante est **déjà** à
Bouskoura, sur le même segment premium : le lien https://immo-rho-tan.vercel.app/ est pertinent
tel quel, sans personnalisation. (Réserve : décision centralisée chez Addoha, cycle long — bon pour
une démonstration, moins pour une signature rapide.) Brief :
[`demo-briefs/10-prestigia-bouskoura-golf-city.md`](demo-briefs/10-prestigia-bouskoura-golf-city.md).

Pour un premier client **rapide**, l'opportunité de démonstration à privilégier reste **Lahlou
Alaoui / Shems2** (même ville, accès direct).

## 8. Action immédiate

1. **Réviser ce dossier** et valider positionnement, offre et prix.
2. **Régler les préalables légaux minimaux** ([`15-operational-checklist.md`](15-operational-checklist.md)) :
   statut/facturation et cadre de prospection CNDP.
3. **Approuver le premier message** (Lahlou Alaoui, message 15 de
   [`05-outreach-messages.md`](05-outreach-messages.md)).
4. **Produire la démonstration Shems2** (brief 09) et l'envoyer — après revérification du site le
   jour même.

**Aucun message n'a été envoyé. Tout est prêt pour votre approbation.**

---

## 9. Tous les fichiers créés

### Stratégie et produit
- [`01-product-audit.md`](01-product-audit.md) — audit du prototype, forces, faiblesses, démo vs production.
- [`02-offers-and-pricing.md`](02-offers-and-pricing.md) — 3 offres, prix, planchers, pilote, négociation.
- [`03-lead-scoring.md`](03-lead-scoring.md) — système de notation sur 100.

### Prospects
- [`leads.csv`](leads.csv) — **68 prospects vérifiés**, 25 colonnes.
- [`04-top-15-prospects.md`](04-top-15-prospects.md) — 15 meilleurs + 5 plus accessibles.
- [`demo-briefs/`](demo-briefs/) — 10 briefs de personnalisation + [méthode commune](demo-briefs/_00-how-to-personalize.md).

### Prospection et vente
- [`05-outreach-messages.md`](05-outreach-messages.md) — 10 modèles + 15 messages personnalisés.
- [`06-sales-call-script.md`](06-sales-call-script.md) — script d'entretien de 30 min.
- [`07-objection-handling.md`](07-objection-handling.md) — 12 objections + variantes marché.
- [`08-proposal-template.md`](08-proposal-template.md) — proposition (pilote / standard / premium).

### Supports
- [`09-one-page-sales-sheet.md`](09-one-page-sales-sheet.md) — fiche commerciale A4.
- [`10-demo-presentation-outline.md`](10-demo-presentation-outline.md) — 7 diapositives, texte complet.

### Exécution
- [`11-30-day-action-plan.md`](11-30-day-action-plan.md) — plan d'acquisition sur 30 jours.
- [`12-first-week-queue.md`](12-first-week-queue.md) — les 7 premiers jours, heure par heure.
- [`outreach-tracker.csv`](outreach-tracker.csv) — CRM prérempli des 15 prospects (non contactés).
- [`../tools/lead-tracker/`](../tools/lead-tracker/) — outil de suivi local, privé, hors-ligne.

### Livraison et cadre
- [`13-client-onboarding.md`](13-client-onboarding.md) — onboarding, questionnaire, checklist fichiers.
- [`14-delivery-process.md`](14-delivery-process.md) — processus de livraison en 10 étapes.
- [`15-operational-checklist.md`](15-operational-checklist.md) — points légaux/fiscaux/CNDP à faire valider.

---

## 10. Informations restant à vérifier

**À revérifier le jour de chaque contact** (les défauts de site se corrigent) :
- Anfa Realties — liens de contact vides et section projets défaillante.
- Alliances — erreur de chargement de la section projets.
- OB Real Estate — numéro `06 00 00 00 00` sur le site.
- Groupe Borj — erreur de certificat TLS (constatée en lecture automatisée).
- Yasmine Immobilier — annonce de recrutement du directeur commercial (encore ouverte ?).

**Données non vérifiées, à qualifier avant tout contact :** les prospects de priorité C marqués
« Non vérifié » dans `leads.csv` (source unique, pas de site officiel, ou contenu non lisible) —
notamment AAFER, RBAHI, Salma Développement, Taboug, et les entrées issues d'un seul annuaire.

**Chiffres de presse à reconfirmer auprès du promoteur** (jamais à afficher comme certains) :
volumes Prestigia/Palmeraie, 600 MDH d'OB Real Estate, 550 villas / 400 appartements de California
Golf Resort, volumes « 500+ » de Glorious.

**Contacts non trouvés (jamais devinés) :** adresses e-mail d'Anfa Realties, Saham, Yasmine,
Prestigia, Palmeraie, Next House, entre autres — laissées vides, à obtenir légitimement.

## 11. Limites de la recherche

- Recherche menée à partir de **sources publiques uniquement** ; aucune connexion à un compte
  privé, aucun contournement de protection, aucun scraping en violation de conditions d'usage.
- **Aucune donnée personnelle privée** collectée ; les seules personnes nommées le sont lorsque
  l'entreprise publie elle-même le nom et la fonction à des fins professionnelles.
- **Aucun contact, projet ou coordonnée inventé.** Les champs non vérifiés sont vides et signalés.
- Le marché évolue : au-delà de **90 jours**, revérifier avant d'utiliser `leads.csv`.
- Les estimations de volumes de lots sont des ordres de grandeur, souvent issus de la presse.
- Ce dossier **ne fournit aucun avis juridique, fiscal ou CNDP** — voir `15-operational-checklist.md`.
- La démonstration **Résidence Azure Bouskoura est fictive** et n'est jamais présentée comme une
  référence client.

## 12. Actions nécessitant votre approbation

- ✋ **Envoi de tout message** (e-mail, WhatsApp, LinkedIn, Instagram, formulaire) — rien n'a été
  envoyé.
- ✋ **Validation des préalables légaux** avant la première prospection et la première facture.
- ✋ **Choix du numéro WhatsApp** à utiliser dans les démonstrations personnalisées.
- ✋ **Décision sur le prix pilote** au cas par cas.

---

## 13. État Git

- **Branche de travail :** `sales/client-acquisition-morocco` (jamais fusionnée dans `main`).
- **Application inchangée :** aucun fichier de `src/`, `public/`, ni configuration de build modifié.
- **Ajouts uniquement :** dossiers `sales/` et `tools/lead-tracker/`.
- L'outil de suivi n'est pas inclus dans le build Vercel (`tools/` n'est pas importé par Vite).

> **Prochaine étape après votre revue :** approuver le premier message (Lahlou Alaoui / Shems2),
> puis lancer la file d'exécution de la première semaine.
