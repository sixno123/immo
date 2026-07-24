/**
 * Registre central des visuels du prototype.
 * Les images proviennent d'Unsplash (visuels d'illustration).
 * Pour la version finale : remplacer ces URL par les perspectives 3D réelles
 * du programme (déposées dans /public/images par exemple).
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const heroImage = unsplash('1600596542815-ffad4c1539a9', 2000);

export const presentationImages = {
  architecture: unsplash('1600585154340-be6161a56a0c'),
  nature: unsplash('1600607687939-ce8a6c25118c'),
};

export const galleryImages = [
  {
    src: unsplash('1545324418-cc1a3fa10c00'),
    alt: 'Architecture extérieure contemporaine de la résidence au crépuscule',
    label: 'Architecture extérieure',
  },
  {
    src: unsplash('1558904541-efa843a96f01'),
    alt: 'Jardins paysagers et allées végétalisées de la résidence',
    label: 'Jardins paysagers',
  },
  {
    src: unsplash('1571939228382-b2f2b585ce15'),
    alt: 'Piscine extérieure bordée de transats au sein de la résidence',
    label: 'Piscine',
  },
  {
    src: unsplash('1616486338812-3dadae4b4ace'),
    alt: "Intérieur d'appartement aux finitions premium, tons naturels",
    label: 'Intérieur appartement',
  },
  {
    src: unsplash('1618221195710-dd6b41faaea6'),
    alt: 'Séjour lumineux avec grandes baies vitrées et mobilier élégant',
    label: 'Séjour',
  },
  {
    src: unsplash('1616594039964-ae9021a400a0'),
    alt: 'Chambre principale apaisante aux matériaux nobles',
    label: 'Chambre',
  },
  {
    src: unsplash('1600210491892-03d54c0aaf87'),
    alt: 'Terrasse privative avec vue dégagée sur les espaces verts',
    label: 'Terrasse',
  },
  {
    src: unsplash('1534438327276-14e5300c3a48'),
    alt: 'Salle de sport équipée réservée aux résidents',
    label: 'Espace fitness',
  },
];

/** Visuels principaux par typologie d'appartement. */
export const apartmentImages: Record<string, string> = {
  '2 chambres': unsplash('1522708323590-d24dbb6b0267', 1200),
  '3 chambres': unsplash('1600607687920-4e2a09cf159d', 1200),
  '4 chambres': unsplash('1600566753190-17f0baa2a6c3', 1200),
  Duplex: unsplash('1600585154526-990dced4db0d', 1200),
  'Rez-de-jardin': unsplash('1600566753086-00f18fb6b3ea', 1200),
  Penthouse: unsplash('1512917774080-9991f1c4c750', 1200),
};

/** Plans d'étage schématiques (fichiers locaux, remplaçables par les vrais plans). */
export const floorPlanImages: Record<string, string> = {
  '2 chambres': '/images/plans/plan-2ch.svg',
  '3 chambres': '/images/plans/plan-3ch.svg',
  '4 chambres': '/images/plans/plan-4ch.svg',
  Duplex: '/images/plans/plan-duplex.svg',
  'Rez-de-jardin': '/images/plans/plan-rdj.svg',
  Penthouse: '/images/plans/plan-penthouse.svg',
};

export const locationImage = unsplash('1449824913935-59a10b8d2000');
