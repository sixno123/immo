import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Building2, Compass, Ruler } from 'lucide-react';
import type { Apartment } from '../../types';
import { formatArea, formatPrice } from '../../utils/format';
import { floorLabel } from '../../data/apartments';
import { SmartImage } from '../ui/SmartImage';
import { StatusBadge } from '../ui/StatusBadge';

export const ApartmentCard = ({ apartment }: { apartment: Apartment }) => (
  <article className="group flex h-full flex-col overflow-hidden border border-charcoal-700/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
    <div className="relative">
      <SmartImage
        src={apartment.mainImage}
        alt={`${apartment.type} — lot ${apartment.reference}`}
        aspect="aspect-[16/10]"
        imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute left-3 top-3">
        <StatusBadge status={apartment.status} />
      </div>
      <span className="absolute bottom-3 right-3 bg-charcoal-900/70 px-2.5 py-1 font-display text-lg font-semibold text-ivory-50 backdrop-blur-sm">
        {apartment.reference}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-charcoal-800">{apartment.type}</h3>
          <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.1em] text-charcoal-400">
            Bâtiment {apartment.building} · {floorLabel(apartment.floor)}
          </p>
        </div>
        <p className="whitespace-nowrap text-right font-display text-lg font-semibold text-forest-700">
          {formatPrice(apartment.price)}
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.8rem] text-charcoal-500">
        <li className="flex items-center gap-2">
          <BedDouble className="h-4 w-4 text-bronze-500" aria-hidden="true" />
          {apartment.bedrooms} chambres
        </li>
        <li className="flex items-center gap-2">
          <Ruler className="h-4 w-4 text-bronze-500" aria-hidden="true" />
          {formatArea(apartment.totalArea)}
        </li>
        <li className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-bronze-500" aria-hidden="true" />
          {apartment.orientation}
        </li>
        <li className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-bronze-500" aria-hidden="true" />
          Bât. {apartment.building}
        </li>
      </ul>

      <Link
        to={`/appartements/${apartment.id}`}
        className="mt-5 inline-flex min-h-[44px] items-center gap-2 border-t border-charcoal-700/10 pt-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-forest-700 transition-colors hover:text-bronze-600"
      >
        Voir le lot
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  </article>
);
