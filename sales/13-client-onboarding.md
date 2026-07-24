# 13 — Intégration client (onboarding)

À utiliser **après** la signature. Objectif : réunir tout ce qui est nécessaire pour livrer le
bureau de vente digital, sans allers-retours interminables.

---

## 1. Informations contractuelles

- [ ] Contrat signé et daté par les deux parties.
- [ ] Acompte de démarrage encaissé (rien ne commence avant).
- [ ] Interlocuteur unique désigné côté client (nom, fonction, téléphone, e-mail).
- [ ] Décideur final identifié (peut différer de l'interlocuteur).
- [ ] Circuit de validation convenu (qui valide quoi, en combien de jours).
- [ ] Offre retenue (1, 2 ou 3) et options confirmées.

## 2. Informations sur l'entreprise

- [ ] Dénomination sociale exacte et forme juridique.
- [ ] Numéro RC et ICE (pour la facturation).
- [ ] Adresse du siège.
- [ ] Coordonnées officielles à afficher sur le site (téléphone, e-mail, adresse du bureau de vente).
- [ ] Régime de TVA applicable (à confirmer avec leur comptable).

## 3. Informations sur le programme

- [ ] Nom commercial exact du programme.
- [ ] Slogan / accroche s'il existe.
- [ ] Localisation précise (adresse, quartier, ville) et point sur carte.
- [ ] Nombre de bâtiments, d'étages, de lots.
- [ ] Date de livraison prévue.
- [ ] Statut de commercialisation.
- [ ] Autorisations : le programme peut-il être présenté publiquement en ligne ? (permis, VEFA…)

## 4. Marque et identité visuelle

- [ ] Logo en vectoriel (SVG ou AI) + versions PNG fond transparent.
- [ ] Charte graphique ou, à défaut, couleurs exactes (codes hexadécimaux).
- [ ] Polices de la marque (fichiers ou noms + licence).
- [ ] Ton et style rédactionnel souhaités.
- [ ] Exemples de supports existants (brochure, plaquette) pour cohérence.

## 5. Rendus et visuels architecturaux

- [ ] Perspectives 3D extérieures (haute définition).
- [ ] Perspectives intérieures / ambiances.
- [ ] Vue aérienne ou plan de masse.
- [ ] Photos de chantier ou de biens livrés, si disponibles.
- [ ] **Droits d'usage confirmés par écrit** pour chaque visuel (qui l'a produit, cession des
  droits ?). Point à ne pas négliger — cf. `15-operational-checklist.md`.

## 6. Inventaire des lots

Le cœur du projet. Idéalement fourni en tableur, une ligne par lot :

| Champ | Obligatoire | Exemple |
|---|---|---|
| Référence | ✅ | A-302 |
| Bâtiment | ✅ | A |
| Étage | ✅ | 3 |
| Typologie | ✅ | 3 chambres / F4 |
| Surface intérieure (m²) | ✅ | 96 |
| Surface terrasse (m²) | | 12 |
| Orientation | | Sud-Ouest |
| Nombre de chambres | ✅ | 3 |
| Salles de bain | | 2 |
| Parkings | | 1 |
| Prix (MAD) | ✅ | 1 450 000 |
| Statut | ✅ | Disponible / Réservé / Vendu |

- [ ] Fichier d'inventaire reçu (Excel, CSV ou Google Sheets).
- [ ] Cohérence vérifiée (pas de doublon de référence, prix numériques, statuts normalisés).
- [ ] **Politique d'affichage des prix décidée** : prix visibles, « sur demande », ou derrière un
  formulaire ? (cf. objection concurrence, `07-objection-handling.md`).

## 7. Plans

- [ ] Plans d'étage par typologie (PDF ou image haute définition).
- [ ] Plan de masse (pour un programme de villas / lots).
- [ ] Autorisation d'afficher les plans en ligne.

## 8. Mentions légales et disclaimers

- [ ] Mentions légales (éditeur, hébergeur, RC, ICE).
- [ ] Politique de confidentialité (traitement des demandes de visite — cf. CNDP,
  `15-operational-checklist.md`).
- [ ] Politique cookies si mesure d'audience.
- [ ] Disclaimer sur les visuels (« illustrations non contractuelles »).
- [ ] Disclaimer sur le simulateur de financement (« indicatif et non contractuel »).
- [ ] Disclaimer sur les prix (« susceptibles de modification »).
- [ ] **Contenus juridiques validés par leur conseil**, pas rédigés par nous.

## 9. Coordonnées de contact du site

- [ ] Numéro WhatsApp professionnel du bureau de vente (format international).
- [ ] E-mail de réception des demandes de visite.
- [ ] Téléphone(s) à afficher.
- [ ] Adresse et horaires du bureau de vente.
- [ ] Comptes réseaux sociaux officiels (URL exactes).

## 10. Hébergement et domaine

- [ ] Décision : hébergement chez le client (Hostinger, autre) ou géré par nous (Vercel) ?
- [ ] Nom de domaine : existant à réutiliser, ou à réserver ? (sous-domaine dédié possible :
  `programme.promoteur.ma`).
- [ ] Accès DNS (pour pointer le domaine) — **à obtenir sans partager de mots de passe en clair**.
- [ ] Certificat HTTPS (automatique sur Vercel ; à vérifier sur hébergement Apache).

## 11. Analytique

- [ ] Compte de mesure d'audience souhaité ? (respect CNDP + politique cookies).
- [ ] Objectifs de suivi (consultations de lots, demandes, sources).
- [ ] Décision : analytique interne (tableau de bord) suffisante, ou outil externe en plus ?

## 12. Comptes utilisateurs (offre 3)

- [ ] Liste des utilisateurs du tableau de bord (nom, e-mail, rôle).
- [ ] Rôles définis : lecture seule (commerciaux) / édition (responsable).
- [ ] **Aucun mot de passe transmis par e-mail ou message.** Chaque utilisateur définit le sien à
  la première connexion.

## 13. Processus de validation

- [ ] Étapes de validation convenues (prototype, recette, mise en ligne).
- [ ] Délai de validation par étape (contractuel).
- [ ] Format des retours (document unique groupé, pas de demandes au fil de l'eau).

## 14. Formation

- [ ] Nombre de sessions (selon l'offre).
- [ ] Participants (commerciaux, responsable).
- [ ] Format (sur site à Casablanca / visioconférence).
- [ ] Documentation utilisateur en français fournie.

## 15. Maintenance

- [ ] Modalités de maintenance rappelées (périmètre, canal, délai).
- [ ] Facturation de la maintenance planifiée (mensuelle / trimestrielle / annuelle).
- [ ] Procédure de demande d'évolution (chiffrage séparé).

---

# Questionnaire client (à envoyer dès la signature)

*À copier tel quel et à envoyer à l'interlocuteur.*

> Bonjour [Prénom],
>
> Merci pour votre confiance. Pour démarrer, voici les informations dont j'ai besoin. Pas besoin
> de tout envoyer d'un coup — commençons par ce qui est prêt.
>
> **Votre programme**
> 1. Nom exact du programme et slogan ?
> 2. Adresse précise et localisation ?
> 3. Combien de bâtiments, d'étages, de lots ?
> 4. Date de livraison prévue ?
> 5. Où en êtes-vous dans la commercialisation ?
>
> **Votre marque**
> 6. Logo en vectoriel (SVG/AI) ?
> 7. Vos couleurs (codes) et vos polices ?
> 8. Un support existant (brochure) pour caler le style ?
>
> **Vos lots** — le plus important
> 9. Votre liste de lots en Excel (référence, bâtiment, étage, typologie, surface, orientation,
>    prix, statut). Même un fichier interne imparfait me suffit pour démarrer.
> 10. Affichez-vous les prix publiquement, ou « sur demande » ?
>
> **Vos visuels**
> 11. Perspectives 3D, plans d'étage, vue de masse — et qui les a produits (pour les droits) ?
>
> **Vos contacts**
> 12. Numéro WhatsApp du bureau de vente, e-mail de réception des demandes, adresse et horaires ?
> 13. Vos comptes Instagram / Facebook / LinkedIn officiels ?
>
> **Aspects légaux**
> 14. Vos mentions légales et votre politique de confidentialité, ou le contact de votre conseil
>     juridique pour les préparer ?
>
> Je m'occupe du reste. Dès que j'ai les points 1 à 9, je commence.

---

# Checklist de livraison des fichiers

Tableau de contrôle interne. Ne pas démarrer une étape tant que ses entrées ne sont pas ✅.

| Élément | Requis pour | Reçu | Vérifié | Droits OK |
|---|---|---|---|---|
| Logo vectoriel | Personnalisation | ☐ | ☐ | ☐ |
| Couleurs + polices | Personnalisation | ☐ | ☐ | — |
| Nom + infos programme | Personnalisation | ☐ | ☐ | — |
| Inventaire des lots | Intégration | ☐ | ☐ | — |
| Politique de prix | Intégration | ☐ | ☐ | — |
| Perspectives 3D | Design | ☐ | ☐ | ☐ |
| Plans d'étage | Design | ☐ | ☐ | ☐ |
| WhatsApp + e-mail réception | Mise en ligne | ☐ | ☐ | — |
| Mentions légales | Mise en ligne | ☐ | ☐ | — |
| Politique de confidentialité | Mise en ligne | ☐ | ☐ | — |
| Domaine + accès DNS | Mise en ligne | ☐ | ☐ | — |
| Liste utilisateurs (offre 3) | Formation | ☐ | ☐ | — |

**Règle d'or :** ne jamais mettre en ligne sans les mentions légales, la politique de
confidentialité, un vrai numéro WhatsApp et les droits confirmés sur les visuels.
