/**
 * Configuration centrale du projet.
 * Modifier ce fichier suffit pour personnaliser le prototype
 * (nom, coordonnées, numéro WhatsApp, navigation, réseaux sociaux…).
 */
export const projectConfig = {
  name: 'Résidence Azure Bouskoura',
  shortName: 'Azure Bouskoura',
  tagline: "L'élégance au cœur de la nature",
  location: 'Bouskoura, Casablanca — Maroc',
  address: 'Route de la Forêt, Bouskoura, Grand Casablanca',

  /**
   * NUMÉRO DE DÉMONSTRATION — à remplacer par le numéro réel du bureau de vente.
   * Format international sans "+" ni espaces (exigé par WhatsApp).
   */
  whatsappNumber: '212600000000',
  phoneDisplay: '+212 6 00 00 00 00',
  email: 'contact@azure-bouskoura.ma',

  delivery: 'T2 2028',
  deliveryLabel: 'Livraison prévue au 2ᵉ trimestre 2028',
  startingPrice: 1_250_000,

  stats: {
    apartments: 40,
    buildings: 2,
    floors: 5,
    minArea: 75,
    maxArea: 160,
  },

  brandColors: {
    ivory: '#F7F4EC',
    forest: '#1F3D2B',
    charcoal: '#1A1A1D',
    bronze: '#C2A566',
  },

  navigation: [
    { label: 'Le projet', href: '/#le-projet' },
    { label: 'Résidences', href: '/#residences' },
    { label: 'Disponibilités', href: '/#disponibilites' },
    { label: 'Localisation', href: '/#localisation' },
    { label: 'Contact', href: '/#contact' },
  ],

  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'Facebook', url: 'https://facebook.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
  ],

  disclaimer:
    'Prototype de démonstration — programme fictif. Les visuels, prix et informations présentés sont fournis à titre illustratif uniquement.',
} as const;

export type ProjectConfig = typeof projectConfig;
