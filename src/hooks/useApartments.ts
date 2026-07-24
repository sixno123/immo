import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { apartments as baseApartments } from '../data/apartments';
import type { Apartment, ApartmentOverride, ApartmentOverrides } from '../types';
import { getOverrides, saveOverrides, clearOverrides } from '../utils/storage';

/**
 * Fournit la liste des lots en fusionnant les données mock avec les
 * modifications faites depuis le tableau de bord de démonstration.
 * Un petit store maison notifie tous les composants abonnés.
 */

let currentOverrides: ApartmentOverrides = getOverrides();
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((l) => l());

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => currentOverrides;

export const applyOverride = (id: string, override: ApartmentOverride): void => {
  const existing = currentOverrides[id] ?? {};
  currentOverrides = { ...currentOverrides, [id]: { ...existing, ...override } };
  saveOverrides(currentOverrides);
  notify();
};

export const resetOverrides = (): void => {
  currentOverrides = {};
  clearOverrides();
  notify();
};

const mergeApartment = (apt: Apartment, override?: ApartmentOverride): Apartment => {
  if (!override) return apt;
  const status = override.status ?? apt.status;
  return {
    ...apt,
    price: override.price ?? apt.price,
    status,
    available: status === 'Disponible',
  };
};

export const useApartments = (): Apartment[] => {
  const overrides = useSyncExternalStore(subscribe, getSnapshot);
  return useMemo(
    () => baseApartments.map((apt) => mergeApartment(apt, overrides[apt.id])),
    [overrides]
  );
};

export const useApartment = (id: string | undefined): Apartment | undefined => {
  const all = useApartments();
  return useMemo(() => all.find((a) => a.id === id), [all, id]);
};

export const useHasOverrides = (): boolean => {
  const overrides = useSyncExternalStore(subscribe, getSnapshot);
  return Object.keys(overrides).length > 0;
};

export const useApartmentActions = () => ({
  applyOverride: useCallback(applyOverride, []),
  resetOverrides: useCallback(resetOverrides, []),
});
