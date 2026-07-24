import type { Apartment, ApartmentFilters } from '../types';

export const defaultFilters: ApartmentFilters = {
  building: 'all',
  floor: 'all',
  bedrooms: 'all',
  minPrice: null,
  maxPrice: null,
  minArea: null,
  status: 'all',
};

export const isDefaultFilters = (f: ApartmentFilters): boolean =>
  f.building === 'all' &&
  f.floor === 'all' &&
  f.bedrooms === 'all' &&
  f.minPrice === null &&
  f.maxPrice === null &&
  f.minArea === null &&
  f.status === 'all';

export const filterApartments = (
  apartments: Apartment[],
  filters: ApartmentFilters
): Apartment[] =>
  apartments.filter((apt) => {
    if (filters.building !== 'all' && apt.building !== filters.building) return false;
    if (filters.floor !== 'all' && apt.floor !== filters.floor) return false;
    if (filters.bedrooms !== 'all' && apt.bedrooms !== filters.bedrooms) return false;
    if (filters.minPrice !== null && apt.price < filters.minPrice) return false;
    if (filters.maxPrice !== null && apt.price > filters.maxPrice) return false;
    if (filters.minArea !== null && apt.totalArea < filters.minArea) return false;
    if (filters.status !== 'all' && apt.status !== filters.status) return false;
    return true;
  });
