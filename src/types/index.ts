export type BuildingId = 'A' | 'B';

export type ApartmentStatus = 'Disponible' | 'Réservé' | 'Vendu';

export type ApartmentType =
  | '2 chambres'
  | '3 chambres'
  | '4 chambres'
  | 'Duplex'
  | 'Rez-de-jardin'
  | 'Penthouse';

export type Orientation =
  | 'Sud'
  | 'Nord'
  | 'Est'
  | 'Ouest'
  | 'Sud-Est'
  | 'Sud-Ouest'
  | 'Nord-Est'
  | 'Nord-Ouest';

export interface Apartment {
  id: string;
  reference: string;
  building: BuildingId;
  /** 0 = rez-de-chaussée, 1 à 4 = étages */
  floor: number;
  type: ApartmentType;
  bedrooms: number;
  bathrooms: number;
  interiorArea: number;
  terraceArea: number;
  totalArea: number;
  orientation: Orientation;
  price: number;
  status: ApartmentStatus;
  shortDescription: string;
  longDescription: string;
  features: string[];
  floorPlanImage: string;
  mainImage: string;
  parkingSpaces: number;
  available: boolean;
}

/** Modifications appliquées en mode démonstration (persistées en localStorage). */
export interface ApartmentOverride {
  price?: number;
  status?: ApartmentStatus;
}

export type ApartmentOverrides = Record<string, ApartmentOverride>;

export interface ApartmentFilters {
  building: BuildingId | 'all';
  floor: number | 'all';
  bedrooms: number | 'all';
  minPrice: number | null;
  maxPrice: number | null;
  minArea: number | null;
  status: ApartmentStatus | 'all';
}

export interface BookingRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  budget: string;
  bedrooms: string;
  preferredApartment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  source: string;
  interest: string;
  date: string;
}

export interface FinancingInput {
  price: number;
  downPayment: number;
  years: number;
  annualRate: number;
}

export interface FinancingResult {
  amountFinanced: number;
  monthlyPayment: number;
  totalCreditCost: number;
  totalRepayment: number;
}

export interface PointOfInterest {
  category: string;
  name: string;
  detail: string;
  icon: string;
}
