import type { ApartmentStatus } from '../../types';

const styles: Record<ApartmentStatus, string> = {
  Disponible: 'bg-forest-50 text-forest-700 border-forest-300/50',
  Réservé: 'bg-bronze-100 text-bronze-700 border-bronze-300/60',
  Vendu: 'bg-charcoal-700/5 text-charcoal-500 border-charcoal-500/20',
};

const dots: Record<ApartmentStatus, string> = {
  Disponible: 'bg-forest-500',
  Réservé: 'bg-bronze-500',
  Vendu: 'bg-charcoal-400',
};

export const StatusBadge = ({ status }: { status: ApartmentStatus }) => (
  <span
    className={`inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] ${styles[status]}`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${dots[status]}`} aria-hidden="true" />
    {status}
  </span>
);
