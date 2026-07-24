import type {
  Apartment,
  ApartmentStatus,
  ApartmentType,
  BuildingId,
  Orientation,
} from '../types';
import { apartmentImages, floorPlanImages } from './images';

/**
 * Base de données fictive des 40 lots de la résidence.
 * Ce fichier a vocation à être remplacé par une vraie base de données :
 * l'application ne consomme que le tableau `apartments` exporté en bas de fichier.
 */

interface ApartmentSeed {
  reference: string;
  building: BuildingId;
  floor: number;
  type: ApartmentType;
  bedrooms: number;
  bathrooms: number;
  interiorArea: number;
  terraceArea: number;
  orientation: Orientation;
  price: number;
  status: ApartmentStatus;
  parkingSpaces: number;
}

export const floorLabel = (floor: number): string =>
  floor === 0 ? 'Rez-de-chaussée' : floor === 1 ? '1er étage' : `${floor}e étage`;

const typeDescriptions: Record<ApartmentType, { short: string; long: string; features: string[] }> = {
  '2 chambres': {
    short:
      'Appartement de deux chambres aux volumes optimisés, idéal pour un premier achat ou un investissement patrimonial.',
    long:
      "Pensé pour la vie quotidienne comme pour l'investissement, cet appartement de deux chambres conjugue un séjour traversant baigné de lumière, une cuisine équipée ouverte ou fermée selon les plans, et une suite principale avec salle d'eau attenante. Les prestations retenues — sols en grès cérame grand format, menuiseries aluminium à rupture de pont thermique, climatisation gainable pré-installée — assurent un confort durable au sein d'une résidence sécurisée et paysagée.",
    features: [
      'Cuisine équipée haut de gamme',
      'Suite principale avec salle d’eau',
      'Menuiseries aluminium double vitrage',
      'Pré-installation climatisation gainable',
      'Porte blindée et visiophone',
      'Fibre optique',
    ],
  },
  '3 chambres': {
    short:
      'Trois chambres familiales avec double exposition, séjour généreux et terrasse orientée sur les jardins.',
    long:
      "Cet appartement familial de trois chambres offre une organisation claire des espaces : un vaste séjour prolongé par une terrasse, une cuisine indépendante avec cellier, et un espace nuit préservé comprenant une suite parentale complète. La double exposition garantit une lumière naturelle du matin au soir, tandis que les finitions premium — parquet contrecollé dans les chambres, marbre dans les pièces de réception, sanitaires de marques européennes — signent le standing de la résidence.",
    features: [
      'Suite parentale avec dressing',
      'Cuisine indépendante avec cellier',
      'Double exposition',
      'Parquet contrecollé dans les chambres',
      'Marbre dans les pièces de réception',
      'Volets roulants électriques',
      'Fibre optique',
    ],
  },
  '4 chambres': {
    short:
      'Grand quatre chambres d’angle, réception double et prestations signature pour les grandes familles.',
    long:
      "Positionné en angle de bâtiment, ce quatre chambres déploie une double réception de plus de 40 m² ouverte sur une large terrasse. L'espace nuit distribue quatre chambres dont deux suites, un dressing et une salle de bains familiale. Chambre de service avec accès indépendant, cuisine double (marocaine et internationale) et hauteur sous plafond de 2,90 m complètent des prestations pensées pour les grandes familles exigeantes.",
    features: [
      'Double réception de plus de 40 m²',
      'Deux suites avec salles de bains privatives',
      'Cuisine double avec office',
      'Chambre de service indépendante',
      'Hauteur sous plafond 2,90 m',
      'Dressing aménagé',
      'Volets roulants électriques',
    ],
  },
  Duplex: {
    short:
      'Duplex d’exception réparti sur deux niveaux, réception en double hauteur et vaste terrasse panoramique.',
    long:
      "Véritable maison posée au sommet de la résidence, ce duplex organise la vie de réception au premier niveau — salon en double hauteur, salle à manger, cuisine ouverte avec îlot — et l'espace nuit à l'étage, desservi par un escalier sculptural en pierre et laiton. La terrasse panoramique, orientée plein sud, domine les jardins et la forêt de Bouskoura. Une adresse rare pour une famille en quête d'espace et de caractère.",
    features: [
      'Salon en double hauteur',
      'Escalier design pierre et laiton',
      'Terrasse panoramique plein sud',
      'Cuisine ouverte avec îlot central',
      'Suite parentale avec salle de bains en marbre',
      'Domotique pré-installée',
      'Deux places de parking en sous-sol',
    ],
  },
  'Rez-de-jardin': {
    short:
      'Rez-de-jardin avec jardin privatif engazonné, l’esprit villa au sein d’une résidence sécurisée.',
    long:
      "Réservés aux amoureux de plein air, les rez-de-jardin de la résidence prolongent les pièces de vie par une terrasse couverte et un jardin privatif engazonné, clôturé et arboré. Le séjour s'ouvre en grand sur l'extérieur grâce à des baies coulissantes toute hauteur. L'esprit d'une villa, avec les services, la sécurité 24 h/24 et la vie de résidence en plus.",
    features: [
      'Jardin privatif engazonné et clôturé',
      'Terrasse couverte',
      'Baies coulissantes toute hauteur',
      'Arrosage automatique',
      'Suite parentale avec dressing',
      'Cuisine équipée haut de gamme',
      'Porte blindée et visiophone',
    ],
  },
  Penthouse: {
    short:
      'Penthouse signature en dernier étage, terrasse-solarium privative et vues dégagées sur la forêt.',
    long:
      "Au sommet du bâtiment, le penthouse incarne l'art de vivre Azure Bouskoura : plateaux de réception traversants, baies toute hauteur, et une terrasse-solarium privative avec cuisine d'été et pergola bioclimatique. Les quatre chambres, dont deux suites majestueuses, profitent de vues dégagées sur la forêt de Bouskoura. Prestations sur mesure, ascenseur privatif à l'étude et double box en sous-sol : une pièce unique du programme.",
    features: [
      'Terrasse-solarium avec cuisine d’été',
      'Pergola bioclimatique',
      'Baies vitrées toute hauteur',
      'Deux suites majestueuses',
      'Domotique complète',
      'Cave privative',
      'Deux places de parking en sous-sol',
    ],
  },
};

const seeds: ApartmentSeed[] = [
  // ——— Bâtiment A — Rez-de-chaussée ———
  { reference: 'A01', building: 'A', floor: 0, type: 'Rez-de-jardin', bedrooms: 3, bathrooms: 2, interiorArea: 112, terraceArea: 74, orientation: 'Sud-Ouest', price: 2_390_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A02', building: 'A', floor: 0, type: 'Rez-de-jardin', bedrooms: 3, bathrooms: 2, interiorArea: 105, terraceArea: 62, orientation: 'Sud-Est', price: 2_240_000, status: 'Réservé', parkingSpaces: 1 },
  { reference: 'A03', building: 'A', floor: 0, type: '2 chambres', bedrooms: 2, bathrooms: 1, interiorArea: 75, terraceArea: 12, orientation: 'Nord-Est', price: 1_250_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A04', building: 'A', floor: 0, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 98, terraceArea: 14, orientation: 'Nord-Ouest', price: 1_620_000, status: 'Vendu', parkingSpaces: 1 },
  // ——— Bâtiment A — 1er étage ———
  { reference: 'A11', building: 'A', floor: 1, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 104, terraceArea: 16, orientation: 'Sud-Ouest', price: 1_790_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A12', building: 'A', floor: 1, type: '2 chambres', bedrooms: 2, bathrooms: 1, interiorArea: 78, terraceArea: 10, orientation: 'Sud-Est', price: 1_340_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A13', building: 'A', floor: 1, type: '2 chambres', bedrooms: 2, bathrooms: 2, interiorArea: 84, terraceArea: 11, orientation: 'Nord-Est', price: 1_420_000, status: 'Vendu', parkingSpaces: 1 },
  { reference: 'A14', building: 'A', floor: 1, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 126, terraceArea: 18, orientation: 'Nord-Ouest', price: 2_180_000, status: 'Disponible', parkingSpaces: 2 },
  // ——— Bâtiment A — 2e étage ———
  { reference: 'A21', building: 'A', floor: 2, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 104, terraceArea: 16, orientation: 'Sud-Ouest', price: 1_840_000, status: 'Réservé', parkingSpaces: 1 },
  { reference: 'A22', building: 'A', floor: 2, type: '2 chambres', bedrooms: 2, bathrooms: 1, interiorArea: 78, terraceArea: 10, orientation: 'Sud-Est', price: 1_380_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A23', building: 'A', floor: 2, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 110, terraceArea: 15, orientation: 'Nord-Est', price: 1_930_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A24', building: 'A', floor: 2, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 126, terraceArea: 18, orientation: 'Nord-Ouest', price: 2_240_000, status: 'Disponible', parkingSpaces: 2 },
  // ——— Bâtiment A — 3e étage ———
  { reference: 'A31', building: 'A', floor: 3, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 104, terraceArea: 16, orientation: 'Sud-Ouest', price: 1_890_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A32', building: 'A', floor: 3, type: '2 chambres', bedrooms: 2, bathrooms: 2, interiorArea: 86, terraceArea: 12, orientation: 'Sud-Est', price: 1_520_000, status: 'Vendu', parkingSpaces: 1 },
  { reference: 'A33', building: 'A', floor: 3, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 110, terraceArea: 15, orientation: 'Nord-Est', price: 1_980_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A34', building: 'A', floor: 3, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 132, terraceArea: 20, orientation: 'Nord-Ouest', price: 2_390_000, status: 'Réservé', parkingSpaces: 2 },
  // ——— Bâtiment A — 4e étage ———
  { reference: 'A41', building: 'A', floor: 4, type: 'Penthouse', bedrooms: 4, bathrooms: 4, interiorArea: 160, terraceArea: 58, orientation: 'Sud-Ouest', price: 3_500_000, status: 'Disponible', parkingSpaces: 2 },
  { reference: 'A42', building: 'A', floor: 4, type: 'Duplex', bedrooms: 4, bathrooms: 3, interiorArea: 142, terraceArea: 36, orientation: 'Sud-Est', price: 2_980_000, status: 'Réservé', parkingSpaces: 2 },
  { reference: 'A43', building: 'A', floor: 4, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 112, terraceArea: 17, orientation: 'Nord-Est', price: 2_060_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'A44', building: 'A', floor: 4, type: 'Duplex', bedrooms: 4, bathrooms: 3, interiorArea: 138, terraceArea: 32, orientation: 'Nord-Ouest', price: 2_890_000, status: 'Vendu', parkingSpaces: 2 },
  // ——— Bâtiment B — Rez-de-chaussée ———
  { reference: 'B01', building: 'B', floor: 0, type: 'Rez-de-jardin', bedrooms: 3, bathrooms: 2, interiorArea: 118, terraceArea: 82, orientation: 'Sud', price: 2_540_000, status: 'Disponible', parkingSpaces: 2 },
  { reference: 'B02', building: 'B', floor: 0, type: 'Rez-de-jardin', bedrooms: 2, bathrooms: 2, interiorArea: 96, terraceArea: 55, orientation: 'Sud-Est', price: 1_980_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B03', building: 'B', floor: 0, type: '2 chambres', bedrooms: 2, bathrooms: 1, interiorArea: 76, terraceArea: 12, orientation: 'Nord', price: 1_270_000, status: 'Réservé', parkingSpaces: 1 },
  { reference: 'B04', building: 'B', floor: 0, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 100, terraceArea: 14, orientation: 'Nord-Ouest', price: 1_650_000, status: 'Disponible', parkingSpaces: 1 },
  // ——— Bâtiment B — 1er étage ———
  { reference: 'B11', building: 'B', floor: 1, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 106, terraceArea: 16, orientation: 'Sud', price: 1_830_000, status: 'Vendu', parkingSpaces: 1 },
  { reference: 'B12', building: 'B', floor: 1, type: '2 chambres', bedrooms: 2, bathrooms: 1, interiorArea: 80, terraceArea: 10, orientation: 'Sud-Est', price: 1_370_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B13', building: 'B', floor: 1, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 108, terraceArea: 15, orientation: 'Nord', price: 1_860_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B14', building: 'B', floor: 1, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 128, terraceArea: 18, orientation: 'Ouest', price: 2_210_000, status: 'Disponible', parkingSpaces: 2 },
  // ——— Bâtiment B — 2e étage ———
  { reference: 'B21', building: 'B', floor: 2, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 106, terraceArea: 16, orientation: 'Sud', price: 1_880_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B22', building: 'B', floor: 2, type: '2 chambres', bedrooms: 2, bathrooms: 2, interiorArea: 88, terraceArea: 12, orientation: 'Sud-Est', price: 1_560_000, status: 'Réservé', parkingSpaces: 1 },
  { reference: 'B23', building: 'B', floor: 2, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 108, terraceArea: 15, orientation: 'Nord', price: 1_910_000, status: 'Vendu', parkingSpaces: 1 },
  { reference: 'B24', building: 'B', floor: 2, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 128, terraceArea: 18, orientation: 'Ouest', price: 2_270_000, status: 'Disponible', parkingSpaces: 2 },
  // ——— Bâtiment B — 3e étage ———
  { reference: 'B31', building: 'B', floor: 3, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 106, terraceArea: 16, orientation: 'Sud', price: 1_940_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B32', building: 'B', floor: 3, type: '2 chambres', bedrooms: 2, bathrooms: 2, interiorArea: 88, terraceArea: 12, orientation: 'Sud-Est', price: 1_610_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B33', building: 'B', floor: 3, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 114, terraceArea: 17, orientation: 'Nord', price: 2_040_000, status: 'Vendu', parkingSpaces: 1 },
  { reference: 'B34', building: 'B', floor: 3, type: '4 chambres', bedrooms: 4, bathrooms: 3, interiorArea: 134, terraceArea: 20, orientation: 'Ouest', price: 2_450_000, status: 'Disponible', parkingSpaces: 2 },
  // ——— Bâtiment B — 4e étage ———
  { reference: 'B41', building: 'B', floor: 4, type: 'Penthouse', bedrooms: 4, bathrooms: 4, interiorArea: 154, terraceArea: 52, orientation: 'Sud', price: 3_380_000, status: 'Réservé', parkingSpaces: 2 },
  { reference: 'B42', building: 'B', floor: 4, type: 'Duplex', bedrooms: 4, bathrooms: 3, interiorArea: 145, terraceArea: 38, orientation: 'Sud-Est', price: 3_040_000, status: 'Disponible', parkingSpaces: 2 },
  { reference: 'B43', building: 'B', floor: 4, type: '3 chambres', bedrooms: 3, bathrooms: 2, interiorArea: 114, terraceArea: 17, orientation: 'Nord', price: 2_090_000, status: 'Disponible', parkingSpaces: 1 },
  { reference: 'B44', building: 'B', floor: 4, type: 'Duplex', bedrooms: 4, bathrooms: 3, interiorArea: 140, terraceArea: 34, orientation: 'Ouest', price: 2_940_000, status: 'Vendu', parkingSpaces: 2 },
];

const buildApartment = (seed: ApartmentSeed): Apartment => {
  const copy = typeDescriptions[seed.type];
  return {
    id: seed.reference.toLowerCase(),
    reference: seed.reference,
    building: seed.building,
    floor: seed.floor,
    type: seed.type,
    bedrooms: seed.bedrooms,
    bathrooms: seed.bathrooms,
    interiorArea: seed.interiorArea,
    terraceArea: seed.terraceArea,
    totalArea: seed.interiorArea + seed.terraceArea,
    orientation: seed.orientation,
    price: seed.price,
    status: seed.status,
    shortDescription: copy.short,
    longDescription: copy.long,
    features: copy.features,
    floorPlanImage: floorPlanImages[seed.type],
    mainImage: apartmentImages[seed.type],
    parkingSpaces: seed.parkingSpaces,
    available: seed.status === 'Disponible',
  };
};

export const apartments: Apartment[] = seeds.map(buildApartment);

export const BUILDINGS: BuildingId[] = ['A', 'B'];
export const FLOORS = [0, 1, 2, 3, 4];
