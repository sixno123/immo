import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Compass, Ruler } from 'lucide-react';
import type { Apartment } from '../../types';
import { formatArea, formatPrice } from '../../utils/format';
import { floorLabel } from '../../data/apartments';
import { SmartImage } from '../ui/SmartImage';
import { StatusBadge } from '../ui/StatusBadge';

export const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  const inactive = apartment.status !== 'Disponible';

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-charcoal-700/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative">
        <SmartImage
          src={apartment.mainImage}
          alt={`${apartment.type} — lot ${apartment.reference}`}
          aspect="aspect-[16/10]"
          tone
          imgClassName={`transition-transform duration-700 group-hover:scale-[1.03] ${
            inactive ? 'saturate-[0.7]' : ''
          }`}
        />
        {/* Voile discret sur les lots non disponibles, sans couleur agressive */}
        {inactive && (
          <div className="absolute inset-0 bg-charcoal-900/25" aria-hidden="true" />
        )}
        <div className="absolute left-3 top-3 z-10">
          <StatusBadge status={apartment.status} />
        </div>
        <span className="absolute bottom-0 right-0 z-10 bg-charcoal-900/75 px-3 py-1.5 font-display text-base font-semibold tracking-wide text-ivory-50 backdrop-blur-sm">
          {apartment.reference}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-charcoal-800">{apartment.type}</h3>
            <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.1em] text-charcoal-400">
              Bâtiment {apartment.building} · {floorLabel(apartment.floor)}
            </p>
          </div>
        </div>

        {/* Prix — point d'ancrage visuel principal */}
        <p className="mt-4 font-display text-2xl font-semibold text-forest-700 tabular-nums">
          {formatPrice(apartment.price)}
        </p>

        {/* Caractéristiques essentielles */}
        <ul className="mt-4 grid grid-cols-3 gap-2 border-y border-charcoal-700/10 py-3.5 text-charcoal-600">
          <li className="flex flex-col gap-1">
            <Ruler className="h-4 w-4 text-bronze-500" aria-hidden="true" />
            <span className="text-[0.82rem] font-medium tabular-nums">{formatArea(apartment.totalArea)}</span>
          </li>
          <li className="flex flex-col gap-1">
            <BedDouble className="h-4 w-4 text-bronze-500" aria-hidden="true" />
            <span className="text-[0.82rem] font-medium tabular-nums">
              {apartment.bedrooms} ch.
            </span>
          </li>
          <li className="flex flex-col gap-1">
            <Compass className="h-4 w-4 text-bronze-500" aria-hidden="true" />
            <span className="text-[0.82rem] font-medium">{apartment.orientation}</span>
          </li>
        </ul>

        <Link
          to={`/appartements/${apartment.id}`}
          className="mt-auto inline-flex min-h-[44px] items-center justify-between gap-2 pt-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-forest-700 transition-colors hover:text-bronze-600"
        >
          Voir le lot {apartment.reference}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
};
