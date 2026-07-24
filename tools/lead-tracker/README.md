# Suivi des prospects — outil local

Outil privé, hors-ligne, pour travailler la liste `sales/leads.csv` : filtrer, noter, suivre
l'avancement et exporter. **Il n'est pas publié sur le site Vercel** et ne doit jamais l'être.

---

## Ce que c'est

Un seul fichier HTML (`index.html`), sans dépendance, sans build, sans serveur, sans compte.
Il s'ouvre dans n'importe quel navigateur et fonctionne entièrement en local.

**Il permet de :**
- importer `sales/leads.csv` ;
- filtrer par **priorité**, **ville** et **statut de suivi** ;
- rechercher par nom d'entreprise, projet ou ville ;
- trier par score, priorité, entreprise, ville, canal ou statut ;
- enregistrer, pour chaque prospect, un **statut**, une **note**, une **prochaine action** et une
  **date d'action**, conservés dans le navigateur ;
- exporter un CSV enrichi de ces informations.

## Ce que ce n'est pas

- Pas de backend, pas de base de données, pas d'API.
- Aucun identifiant, aucune clé, aucun secret (rien à protéger, rien à fuiter).
- Aucune connexion réseau : les données ne quittent jamais l'appareil tant que vous n'exportez
  pas volontairement.

---

## Installation

Aucune. Le fichier est autonome.

## Utilisation

1. **Ouvrir** `tools/lead-tracker/index.html` par double-clic, ou depuis un navigateur
   (`Ctrl+O`). Aucune connexion internet n'est nécessaire.
2. **Importer** `sales/leads.csv` : bouton « Importer leads.csv », ou glisser-déposer le fichier.
3. **Travailler** : filtrer, puis pour chaque prospect choisir un statut, écrire une note et une
   prochaine action. Tout est enregistré automatiquement (mention « enregistré »).
4. **Exporter** : « Exporter le suivi » télécharge `suivi-prospects-AAAAMMJJ.csv`, contenant
   toutes les colonnes d'origine plus quatre colonnes de suivi
   (`_suivi_statut`, `_suivi_note`, `_suivi_prochaine_action`, `_suivi_date_action`).

Au rechargement de la page, le dernier fichier importé et vos notes sont automatiquement
restaurés (via le `localStorage` du navigateur).

### Statuts disponibles

Alignés sur `sales/outreach-tracker.csv` :

`To research`, `Ready to contact`, `Contacted`, `Follow-up 1`, `Follow-up 2`, `Replied`,
`Meeting scheduled`, `Demo completed`, `Proposal sent`, `Negotiation`, `Won`, `Lost`,
`Not relevant`.

---

## Où sont stockées les données

- Le **CSV importé** et **vos notes** sont dans le `localStorage` du navigateur, sous les clés
  `bvd-tracker:csv:v1` et `bvd-tracker:overlay:v1`.
- Elles sont **propres à ce navigateur et à cet appareil**. Elles ne sont pas synchronisées.
- « Effacer les données locales » supprime uniquement vos statuts et notes ; le fichier
  `leads.csv` d'origine n'est jamais modifié par l'outil.

> **Sauvegarde :** vos notes ne vivent que dans le navigateur. Exportez régulièrement le CSV de
> suivi et conservez-le en lieu sûr. Vider le cache du navigateur efface les notes non exportées.

---

## Pourquoi ce n'est pas sur le site public

Le site Vercel est construit par Vite à partir de la racine `index.html` et du dossier `src/`.
Le dossier `tools/` **n'est jamais importé** par l'application : il n'entre donc pas dans le build
`dist/` et n'est pas déployé. Cet outil reste un utilitaire de dépôt, invisible pour les
visiteurs du site.

**Ne jamais** importer un fichier de `tools/` depuis `src/`, ni copier `tools/` dans `public/` :
cela le rendrait public.

Le fichier porte par ailleurs une balise `<meta name="robots" content="noindex, nofollow">` par
précaution, au cas où il serait hébergé ailleurs.

---

## Confidentialité et données

- L'outil ne traite que des **informations professionnelles publiques** déjà présentes dans
  `leads.csv`.
- Le CSV exporté peut contenir vos notes de prospection : **le conserver hors du dépôt public**
  (il est ignoré par Git, voir ci-dessous) et le traiter comme un document interne.
- Les considérations de protection des données (loi 09-08 / CNDP) figurent dans
  `sales/15-operational-checklist.md`.

## Git

Le fichier `.gitignore` de ce dossier exclut les CSV exportés (`suivi-prospects-*.csv`) pour
éviter de committer par erreur des notes de prospection. Seuls `index.html`, `README.md` et
`.gitignore` sont suivis.

## Test rapide

L'analyse et l'export CSV ont été validés sur les 68 lignes réelles de `sales/leads.csv`
(round-trip sans perte, y compris champs contenant des guillemets et des sauts de ligne). Pour
revérifier après une modification : ouvrir l'outil, importer `leads.csv`, exporter, et confirmer
que le nombre de lignes et de colonnes est cohérent (68 lignes de données ; 25 colonnes d'origine
+ 4 colonnes de suivi = 29).
