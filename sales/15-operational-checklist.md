# 15 — Checklist légale et opérationnelle (Maroc)

> **Avertissement.** Ce document **ne fournit aucune conclusion juridique, fiscale ou
> réglementaire**. Il liste les points à faire valider par des professionnels marocains qualifiés
> **avant** de vendre et de livrer. Chaque section indique explicitement quel professionnel
> consulter. Ne rien traiter comme un avis définitif.

---

## Qui consulter

| Sujet | Professionnel |
|---|---|
| Statut, contrats, litiges, propriété intellectuelle | **Avocat / conseil juridique marocain** |
| Facturation, TVA, impôts, cotisations | **Expert-comptable marocain** |
| Données personnelles, prospection, cookies | **Spécialiste CNDP / conseil en protection des données** |
| Mentions immobilières, VEFA, publicité des programmes | **Avocat spécialisé en droit immobilier** |

**Ne pas démarrer la commercialisation sans avoir au minimum réglé : le statut d'entreprise, la
facturation, et le cadre de la prospection de données.**

---

## 1. Facturation et statut de l'entreprise

**À valider avec un expert-comptable.**

- [ ] Sous quel statut facturer ? (auto-entrepreneur, SARL, autre) — implications fiscales et
  sociales différentes.
- [ ] Seuils de chiffre d'affaires du statut envisagé.
- [ ] Format de facture conforme (mentions obligatoires : RC, ICE, IF, patente…).
- [ ] Facturation d'un abonnement de maintenance récurrent : quelles règles ?
- [ ] Facturation à des sociétés (B2B) : obligations spécifiques.

> Ne pas émettre de facture avant d'avoir confirmé le statut. Une facturation non conforme est un
> risque à la première vente.

## 2. Contrat de prestation

**À faire rédiger ou relire par un avocat.**

- [ ] Contrat de prestation de développement + abonnement de maintenance.
- [ ] Périmètre, livrables, délais, jalons de paiement.
- [ ] Clause de propriété : code, design, données (voir § 9).
- [ ] Clause de révisions incluses / facturées.
- [ ] Clause de retard de paiement et pénalités (usages marocains).
- [ ] Clause de retard de fourniture des contenus par le client.
- [ ] Clause de résiliation et de réversibilité.
- [ ] Clause de validation tacite après délai.
- [ ] Droit applicable et juridiction compétente.
- [ ] Conditions du tarif pilote (droit de citation, témoignage) — opposables.

> Les modèles de `08-proposal-template.md` sont des **documents commerciaux**, pas des contrats.
> Le contrat doit être rédigé ou validé par un juriste.

## 3. TVA et fiscalité

**À valider avec un expert-comptable.**

- [ ] TVA applicable aux prestations de services numériques au Maroc, et taux.
- [ ] Les prix de `02-offers-and-pricing.md` sont exprimés **hors taxes** : confirmer le traitement
  TVA avant de communiquer un prix TTC.
- [ ] Traitement d'un abonnement mensuel.
- [ ] Cas d'un client facturé depuis l'étranger, ou d'un client MRE.
- [ ] Retenue à la source éventuelle.
- [ ] Obligations déclaratives.

## 4. Protection des données — prospection

**À valider avec un spécialiste CNDP.** Point sensible : **la campagne de prospection elle-même**.

- [ ] La constitution de `leads.csv` (données professionnelles publiques) et son usage pour
  prospecter : conformité à la loi **09-08** et aux exigences de la **CNDP**.
- [ ] Obligation éventuelle de déclaration d'un traitement de prospection auprès de la CNDP.
- [ ] Base légale de la prospection B2B au Maroc.
- [ ] Mentions d'information à porter dans les e-mails de prospection.
- [ ] Droit d'opposition / de désinscription : mécanisme à prévoir dès le premier envoi.
- [ ] Durée de conservation des données de prospection.

> **En attendant validation** (mesures déjà appliquées dans `05-outreach-messages.md`) :
> uniquement des coordonnées professionnelles publiées, une possibilité de désinscription dans
> chaque e-mail, un retrait immédiat sur demande, aucune donnée personnelle privée, aucune adresse
> devinée.

## 5. Protection des données — sites livrés aux clients

**À valider avec un spécialiste CNDP, pour chaque site livré.**

- [ ] Les formulaires de demande de visite collectent des données personnelles (nom, téléphone,
  e-mail) : le **client promoteur** est responsable de traitement.
- [ ] Déclaration CNDP éventuelle à la charge du client.
- [ ] Mention d'information et recueil du consentement sur le formulaire (le prototype a déjà une
  case de consentement — en vérifier la conformité).
- [ ] Durée de conservation des demandes.
- [ ] Sécurité des données (chiffrement, accès restreint) — surtout offre 3 avec base de données.
- [ ] Contrat de sous-traitance de données entre nous (sous-traitant) et le client (responsable),
  si nous hébergeons leurs leads.

## 6. Mentions légales du site

**À valider avec un avocat ; contenus fournis par le client.**

- [ ] Éditeur du site (le promoteur).
- [ ] Hébergeur (nom, adresse).
- [ ] RC, ICE, forme juridique du promoteur.
- [ ] Directeur de publication.
- [ ] Emplacements déjà prévus dans le prototype — contenus à remplir avec le client.

## 7. Politique de confidentialité

**À valider avec un spécialiste CNDP ; contenus fournis par le client.**

- [ ] Données collectées, finalité, base légale.
- [ ] Destinataires (le bureau de vente du promoteur).
- [ ] Durée de conservation.
- [ ] Droits des personnes (accès, rectification, opposition) et modalités d'exercice.
- [ ] Coordonnées du responsable de traitement.

## 8. Cookies et mesure d'audience

**À valider avec un spécialiste CNDP.**

- [ ] Le prototype utilise `localStorage` (comparateur, demandes, compteurs) : qualification au
  regard de la réglementation cookies à confirmer.
- [ ] Si un outil de mesure d'audience externe est ajouté (offre 3) : bandeau de consentement.
- [ ] Politique cookies dédiée si nécessaire.

## 9. Droits sur les images et contenus

**À valider avec un avocat.**

- [ ] Droits d'usage des perspectives 3D fournies par le client (qui les a produites ? cession ?).
- [ ] Droits des visuels d'ambiance : le prototype utilise des images **Unsplash** (licence
  Unsplash) — vérifier la licence et privilégier, en production, les visuels réels du client.
- [ ] Droits des plans d'étage (architecte).
- [ ] Droit à l'image si des personnes figurent sur des photos.
- [ ] **Ne jamais réutiliser les rendus 3D d'un prospect** dans une démonstration sans
  autorisation écrite (rappelé dans chaque brief de `sales/demo-briefs/`).

## 10. Informations immobilières et publicité des programmes

**À valider avec un avocat spécialisé en droit immobilier.**

- [ ] Un programme peut-il être commercialisé/présenté publiquement en ligne à ce stade (permis de
  construire, autorisations, VEFA) ?
- [ ] Mentions obligatoires sur la publicité d'un programme immobilier neuf au Maroc.
- [ ] Caractère contractuel ou non des informations affichées (prix, surfaces, plans, livraison).
- [ ] Disclaimers nécessaires : « illustrations non contractuelles », « prix susceptibles de
  modification », « surfaces indicatives ».
- [ ] Simulateur de financement : caractère strictement indicatif et non contractuel (déjà
  mentionné dans le prototype — à faire valider).

## 11. Responsabilité de l'hébergement

**À clarifier au contrat (avocat).**

- [ ] Qui héberge : nous ou le client ? Responsabilités associées.
- [ ] Engagement de disponibilité : **ne jamais promettre 100 %** (dépend de l'hébergeur). Indiquer
  une cible réaliste.
- [ ] Responsabilité en cas d'indisponibilité, de perte de données, de faille.
- [ ] Sauvegardes : fréquence, conservation, responsabilité de restauration.

## 12. Responsabilité du traitement des données

**À clarifier au contrat (avocat + CNDP).**

- [ ] Répartition claire : le promoteur est **responsable de traitement** des leads ; nous sommes
  **sous-traitant** si nous hébergeons ces données.
- [ ] Obligations du sous-traitant (sécurité, confidentialité, notification d'incident).
- [ ] Sort des données en fin de contrat : restitution puis suppression.

---

## Récapitulatif — à régler avant quoi

| Avant… | Régler impérativement |
|---|---|
| Le **premier e-mail de prospection** | § 4 (prospection / CNDP), a minima les mesures conservatoires |
| La **première facture** | § 1 (statut, facturation), § 3 (TVA) |
| Le **premier contrat signé** | § 2 (contrat), § 9 (droits images), § 11-12 (responsabilités) |
| La **première mise en ligne** | § 5-8 (données, mentions, confidentialité, cookies), § 10 (mentions immobilières) |

## Ce que ce document n'est pas

- Ce n'est pas un avis juridique.
- Ce n'est pas un avis fiscal.
- Ce n'est pas une validation CNDP.
- Ce n'est pas exhaustif.

**Chaque point marqué « à valider » exige l'intervention d'un professionnel marocain qualifié
avant d'agir.** Le budget de ces consultations est un coût de démarrage à intégrer, pas une option.
