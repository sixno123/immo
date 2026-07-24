# 12 — File d'exécution de la première semaine

Les **7 premiers jours**, heure par heure. Cibles : les **5 prospects les plus accessibles** de
`04-top-15-prospects.md`, choisis sur la recherche vérifiée, pas sur le score seul.

## Les 5 premières entreprises

| Ordre | Entreprise | Projet | Pourquoi en premier | Canal |
|---|---|---|---|---|
| 1 | **Lahlou Alaoui Immobilier** | Résidence Shems2 (Bouskoura) | E-mail commercial direct publié ; Bouskoura = notre démo | E-mail |
| 2 | **Mouden Real Estate** | Résidences Mouden (Tanger) | Petite structure, décideur joignable — **test du message à faible enjeu** | E-mail |
| 3 | **Groupe Mtilak** | Résidence Sky Gardens (Marrakech) | E-mail publié, 285 lots publiés, besoin à moitié formulé | E-mail |
| 4 | **Glorious Groupe** | Glorious Nouaceur | 2 e-mails publiés, 500+ lots, meilleur rapport volume/faiblesse | E-mail |
| 5 | **OB Real Estate** | Garden View (Dar Bouazza) | Lancement récent médiatisé, budget ouvert | E-mail |

**Logique de l'ordre :** Mouden Real Estate (n°2) est un prospect à faible enjeu — on y teste le
message et le format des captures **avant** de les envoyer aux prospects à forte valeur (Mtilak,
Glorious, OB). Si le message doit être corrigé, autant le découvrir sur Mouden.

---

## Règle valable tous les jours

**Avant chaque envoi :** rouvrir le site du prospect le jour même et confirmer que le problème
cité existe toujours (cf. `05-outreach-messages.md`, checklist de vérification). Un défaut corrigé
rend le message faux.

**Aucun envoi sans validation explicite du responsable.** Cette semaine prépare les messages ; le
responsable décide de l'envoi.

---

## Jour 1 (lundi) — Préparation + Lahlou Alaoui

**Matin — mise en place (2 h)**
- [ ] Créer une copie de travail du dépôt, brancher `demo/lahlou-alaoui`.
- [ ] `npm install`, `npm run dev` : confirmer que le prototype tourne.
- [ ] Préparer un numéro WhatsApp professionnel (ou décider d'utiliser le nôtre) pour toutes les
  démos.
- [ ] Ouvrir `outreach-tracker.csv` et l'outil `tools/lead-tracker/`.

**Après-midi — Lahlou Alaoui / Shems2 (2 h)**
- [ ] Suivre `sales/demo-briefs/09-lahlou-alaoui-shems2.md`.
- [ ] Télécharger la brochure Shems2 publique ; en extraire typologies/surfaces si présentes.
- [ ] Personnaliser : nom, Bouskoura, `startingPrice: 790_000`, recalibrage des prix, palette.
- [ ] Produire 4 captures annotées.
- [ ] Rédiger le message (message 15 de `05-outreach-messages.md`), destinataire
  `commercial@lahloualaoui.ma`.
- [ ] **Soumettre le message + les captures au responsable pour validation.**
- [ ] Tracker : `L015` → « Contacted » (après validation et envoi), date, prochaine action J+3.

**Métrique du jour :** 1 démonstration produite, 1 message prêt.

---

## Jour 2 (mardi) — Mouden (test) + Groupe Mtilak

**Matin — Mouden Real Estate (1 h 30)**
- [ ] Rouvrir moudenrealestate.com ; confirmer l'e-mail (graphie mouchef/moudchef à lever).
- [ ] Démonstration légère (niveau 1 : captures uniquement) sur Résidences Mouden.
- [ ] Rédiger le message (e-mail à froid générique adapté).
- [ ] **C'est le test :** ce message et ces captures valident le format avant les gros prospects.
- [ ] Soumettre pour validation.

**Après-midi — Groupe Mtilak / Sky Gardens (2 h)**
- [ ] Suivre `sales/demo-briefs/05-groupe-mtilak-sky-gardens.md`.
- [ ] **Traiter l'homonymie « Résidence Azure »** dans le disclaimer et le message.
- [ ] Personnaliser : Sky Gardens, 285 lots, palette vert jardin.
- [ ] 4 captures annotées.
- [ ] Message 8 de `05-outreach-messages.md`, destinataire `contact@groupemtilak.com`.
- [ ] Soumettre pour validation.
- [ ] Tracker : `L008` → prochaine action.

**Métrique du jour :** 2 démonstrations, 2 messages prêts.

---

## Jour 3 (mercredi) — Glorious Groupe

**Matin — Glorious Nouaceur (2 h)**
- [ ] Suivre `sales/demo-briefs/04-glorious-groupe-nouaceur.md`.
- [ ] Rouvrir gloriousgroupe.ma ; **relever la formulation exacte des volumes** (500+, 400+…).
- [ ] Personnaliser : Nouaceur, « 500+ appartements », palette bleu profond.
- [ ] 4 captures : hero, filtre avant/après, sélecteur par étage, lots les plus consultés.
- [ ] Message 7 de `05-outreach-messages.md`, destinataire `contact@gloriousgroupe.ma`.
- [ ] Soumettre pour validation.

**Après-midi — relances + revue mi-semaine**
- [ ] Relance J+3 de Lahlou Alaoui **si** validée et envoyée à J1 (relance n°1 avec captures).
- [ ] Mettre le tracker à jour.
- [ ] Vérifier : le message testé sur Mouden (J2) a-t-il eu une réponse ou une ouverture ?
  Ajuster si besoin avant les envois suivants.

**Métrique du jour :** 1 démonstration, 1 message prêt, 1 relance.

---

## Jour 4 (jeudi) — OB Real Estate

**Matin — Garden View (2 h)**
- [ ] Suivre `sales/demo-briefs/06-ob-real-estate-garden-view.md`.
- [ ] **Rouvrir obrealestate.ma : le numéro `06 00 00 00 00` est-il toujours là ?** Capture
  horodatée si oui ; retirer la remarque du message si non.
- [ ] Personnaliser : Garden View, F3/F4, 6 000 m² d'espaces verts, écoles publiées, palette vert
  jardin. **Notre numéro WhatsApp, jamais `212600000000`.**
- [ ] 4 captures : hero factuel, fiche F4 traversant avec terrasse, localisation avec écoles,
  tableau de bord.
- [ ] Message 13 de `05-outreach-messages.md`, destinataire `Contact@obrealestate.ma`.
- [ ] Soumettre pour validation.

**Après-midi**
- [ ] Relance J+3 de Mouden et Mtilak (si envoyés à J2).
- [ ] Tracker à jour.

**Métrique du jour :** 1 démonstration, 1 message prêt, relances à jour.

---

## Jour 5 (vendredi) — Revue de la semaine

**Matin — rattrapage**
- [ ] Terminer toute démonstration en retard.
- [ ] Vérifier que les 5 messages ont bien un statut dans le tracker.

**Après-midi — bilan (obligatoire)**
- [ ] Remplir le tableau de métriques de la semaine 1 (`11-30-day-action-plan.md`).
- [ ] Compter : démonstrations produites (cible 5), messages prêts/envoyés (cible 5), réponses.
- [ ] **Décision :** le message fonctionne-t-il ? Si une réponse est arrivée, préparer le rendez-vous.
  Si aucune ouverture après le test Mouden, réexaminer l'objet des e-mails avant la semaine 2.
- [ ] Planifier les relances J+7 de la semaine prochaine.

**Métrique de la semaine :** 5 démonstrations, 5 premiers messages, tracker à jour, 0 relance
manquée.

---

## Jours 6 et 7 (week-end) — léger ou repos

Le week-end est un bon moment pour que **les prospects** consultent, mais un mauvais moment pour
**envoyer** (un e-mail B2B envoyé le dimanche est lu le lundi, noyé dans la pile).

**Si travail :**
- [ ] Préparer les démonstrations de la semaine 2 (Anfa Realties, Saham) — sans envoyer.
- [ ] Lire les réponses éventuelles, **sans répondre le dimanche soir** : programmer la réponse
  pour lundi 9 h.

**Sinon : repos.** Le rythme de 5 démonstrations/semaine ne tient pas sans pauses.

---

## Récapitulatif de la première semaine

| Jour | Prospect | Démo | Message | Relance |
|---|---|---|---|---|
| J1 | Lahlou Alaoui | Shems2 | E-mail commercial | — |
| J2 | Mouden (test) + Mtilak | 2 démos | 2 e-mails | — |
| J3 | Glorious | Nouaceur | E-mail | J+3 Lahlou |
| J4 | OB Real Estate | Garden View | E-mail | J+3 Mouden, Mtilak |
| J5 | Revue | rattrapage | — | bilan |
| J6-7 | Préparation S2 | Anfa, Saham (sans envoi) | — | — |

**Cible de fin de semaine :** 5 démonstrations personnalisées, 5 premiers messages soumis à
validation, tracker complet, aucune relance oubliée, et une décision claire sur la qualité du
message avant d'attaquer les prospects à forte valeur.

## Rappels de sécurité

- **Aucun message envoyé sans validation du responsable.**
- **Revérifier chaque site le jour de l'envoi.**
- **Jamais `212600000000` dans une démonstration.**
- **Jamais présenter Azure Bouskoura comme un client réel.**
- **Homonymie « Résidence Azure » à traiter pour Groupe Mtilak.**
- **Ne jamais deviner une adresse e-mail** — n'utiliser que les adresses publiées.
