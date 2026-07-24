import type { PointOfInterest } from '../types';

/**
 * Points d'intérêt autour de Bouskoura.
 * Les durées sont volontairement indicatives (« ~ ») : à affiner avec le client.
 */
export const pointsOfInterest: PointOfInterest[] = [
  {
    category: 'Écoles internationales',
    name: 'Écoles & groupes scolaires internationaux',
    detail: 'Plusieurs établissements de renom à proximité immédiate de Bouskoura Ville Verte.',
    icon: 'GraduationCap',
  },
  {
    category: 'Forêt de Bouskoura',
    name: 'Forêt de Bouskoura',
    detail: "3 000 hectares d'eucalyptus pour courir, marcher et respirer, aux portes de la résidence.",
    icon: 'Trees',
  },
  {
    category: 'Commerces',
    name: 'Commerces & services du quotidien',
    detail: 'Supermarchés, pharmacies et services à quelques minutes en voiture (durée indicative).',
    icon: 'ShoppingBag',
  },
  {
    category: 'Restaurants',
    name: 'Restaurants & cafés',
    detail: 'Une scène gourmande en plein essor entre Bouskoura Golf City et la Ville Verte.',
    icon: 'UtensilsCrossed',
  },
  {
    category: 'Accès autoroutier',
    name: 'Accès autoroutier direct',
    detail: "Connexion rapide à l'autoroute urbaine de Casablanca et à la rocade sud-ouest.",
    icon: 'Route',
  },
  {
    category: 'Casablanca',
    name: 'Casablanca centre',
    detail: "Le cœur économique du Royaume, accessible en environ 25 minutes (durée indicative).",
    icon: 'Building2',
  },
  {
    category: 'Aéroport Mohammed V',
    name: 'Aéroport international Mohammed V',
    detail: "L'aéroport à environ 20 minutes en voiture (durée indicative, hors trafic).",
    icon: 'Plane',
  },
];
