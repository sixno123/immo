const nf = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });

/** 1250000 → "1 250 000" (espaces insécables fines, format français). */
export const formatNumber = (value: number): string => nf.format(Math.round(value));

/** 1250000 → "1 250 000 DH" */
export const formatPrice = (value: number): string => `${formatNumber(value)} DH`;

/** 112 → "112 m²" */
export const formatArea = (value: number): string => `${formatNumber(value)} m²`;

/** "2026-07-21" → "21 juillet 2026" */
export const formatDate = (iso: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
};

/** Horodatage complet pour le tableau de bord. */
export const formatDateTime = (iso: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
