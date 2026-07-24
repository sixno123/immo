import type { Lead } from '../types';

/** Prospects fictifs affichés dans le tableau de bord de démonstration. */
export const mockLeads: Lead[] = [
  { id: 'l1', name: 'Yasmine El Amrani', phone: '+212 6 61 00 00 01', source: 'Site web', interest: 'Appartement 3 chambres — Bâtiment A', date: '2026-07-21' },
  { id: 'l2', name: 'Karim Benjelloun', phone: '+212 6 62 00 00 02', source: 'WhatsApp', interest: 'Penthouse A41', date: '2026-07-20' },
  { id: 'l3', name: 'Salma Chraibi', phone: '+212 6 63 00 00 03', source: 'Salon immobilier', interest: 'Rez-de-jardin B01', date: '2026-07-19' },
  { id: 'l4', name: 'Mehdi Tazi', phone: '+212 6 64 00 00 04', source: 'Site web', interest: '2 chambres — budget 1,4 M DH', date: '2026-07-18' },
  { id: 'l5', name: 'Nadia Berrada', phone: '+212 6 65 00 00 05', source: 'Recommandation', interest: 'Duplex B42', date: '2026-07-17' },
  { id: 'l6', name: 'Omar Sqalli', phone: '+212 6 66 00 00 06', source: 'Instagram', interest: '4 chambres — Bâtiment B', date: '2026-07-16' },
  { id: 'l7', name: 'Imane Fassi', phone: '+212 6 67 00 00 07', source: 'Site web', interest: 'Visite du bureau de vente', date: '2026-07-15' },
];
