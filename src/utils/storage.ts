import type { ApartmentOverrides, BookingRequest } from '../types';

/**
 * Couche de persistance locale du prototype.
 * Toutes les lectures/écritures localStorage passent par ce module :
 * pour brancher un vrai backend, il suffira de remplacer ces fonctions
 * par des appels API en conservant les mêmes signatures.
 */

const KEYS = {
  bookings: 'azure-bouskoura:bookings',
  overrides: 'azure-bouskoura:apartment-overrides',
  comparator: 'azure-bouskoura:comparator',
  views: 'azure-bouskoura:apartment-views',
} as const;

/**
 * Vérifie que la valeur lue a la même « forme » que la valeur de repli
 * (tableau vs objet vs primitif, et jamais null). Indispensable pour éviter
 * qu'un JSON valide mais inattendu (ex. « null », un tableau à la place d'un
 * objet, une chaîne) ne fasse planter l'application.
 */
const matchesShape = (value: unknown, fallback: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (Array.isArray(fallback)) return Array.isArray(value);
  if (typeof fallback === 'object') return typeof value === 'object' && !Array.isArray(value);
  return typeof value === typeof fallback;
};

const safeRead = <T>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as unknown;
    return matchesShape(parsed, fallback) ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
};

const safeWrite = (key: string, value: unknown): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Stockage indisponible (navigation privée…) : le prototype reste fonctionnel.
  }
};

// ——— Demandes de visite ———

export const getBookings = (): BookingRequest[] => safeRead<BookingRequest[]>(KEYS.bookings, []);

export const saveBooking = (booking: BookingRequest): void => {
  safeWrite(KEYS.bookings, [booking, ...getBookings()]);
};

// ——— Modifications démo (prix / statut) ———

export const getOverrides = (): ApartmentOverrides =>
  safeRead<ApartmentOverrides>(KEYS.overrides, {});

export const saveOverrides = (overrides: ApartmentOverrides): void => {
  safeWrite(KEYS.overrides, overrides);
};

export const clearOverrides = (): void => {
  safeWrite(KEYS.overrides, {});
};

// ——— Comparateur ———

export const getComparatorIds = (): string[] => safeRead<string[]>(KEYS.comparator, []);

export const saveComparatorIds = (ids: string[]): void => {
  safeWrite(KEYS.comparator, ids);
};

// ——— Compteur de consultations (lots les plus vus) ———

export const getViewCounts = (): Record<string, number> =>
  safeRead<Record<string, number>>(KEYS.views, {});

export const recordApartmentView = (id: string): void => {
  const counts = getViewCounts();
  counts[id] = (counts[id] ?? 0) + 1;
  safeWrite(KEYS.views, counts);
};
