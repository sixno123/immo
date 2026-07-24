import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Trash2, X } from 'lucide-react';
import { useComparator } from '../hooks/useComparator';
import { useApartments } from '../hooks/useApartments';
import { floorLabel } from '../data/apartments';
import { formatArea, formatPrice } from '../utils/format';
import type { Apartment } from '../types';
import { SmartImage } from '../components/ui/SmartImage';
import { StatusBadge } from '../components/ui/StatusBadge';

const rows: { label: string; render: (a: Apartment) => React.ReactNode }[] = [
  { label: 'Prix', render: (a) => <strong className="text-forest-700">{formatPrice(a.price)}</strong> },
  { label: 'Surface totale', render: (a) => formatArea(a.totalArea) },
  { label: 'Surface intérieure', render: (a) => formatArea(a.interiorArea) },
  { label: 'Terrasse / jardin', render: (a) => formatArea(a.terraceArea) },
  { label: 'Chambres', render: (a) => a.bedrooms },
  { label: 'Salles de bains', render: (a) => a.bathrooms },
  { label: 'Étage', render: (a) => floorLabel(a.floor) },
  { label: 'Orientation', render: (a) => a.orientation },
  {
    label: 'Parking',
    render: (a) => `${a.parkingSpaces} place${a.parkingSpaces > 1 ? 's' : ''}`,
  },
  { label: 'Statut', render: (a) => <StatusBadge status={a.status} /> },
];

const ComparatorPage = () => {
  const { ids, remove, clear } = useComparator();
  const apartments = useApartments();
  const selected = apartments.filter((a) => ids.includes(a.id));

  return (
    <div className="container-luxe min-h-[70vh] pb-20 pt-[100px] md:pt-32">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Comparateur</p>
          <h1 className="heading-display text-3xl sm:text-4xl">
            Comparez vos <span className="italic text-forest-700">lots favoris</span>
          </h1>
        </div>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={clear}
            className="inline-flex min-h-[44px] items-center gap-2 px-3 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-charcoal-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Vider le comparateur
          </button>
        )}
      </div>

      {selected.length === 0 ? (
        <div className="flex flex-col items-center gap-5 border border-dashed border-charcoal-700/20 bg-white/60 px-6 py-20 text-center">
          <Scale className="h-9 w-9 text-bronze-500" aria-hidden="true" />
          <p className="font-display text-2xl text-charcoal-700">Votre comparateur est vide</p>
          <p className="max-w-md text-sm leading-relaxed text-charcoal-500">
            Parcourez les disponibilités et ajoutez jusqu'à trois appartements au comparateur
            depuis leur fiche détaillée.
          </p>
          <Link to="/#disponibilites" className="btn-primary mt-2">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voir les disponibilités
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto pb-4">
          <table className="w-full min-w-[640px] border-collapse bg-white shadow-card">
            <caption className="sr-only">
              Tableau comparatif des lots sélectionnés : prix, surfaces, chambres et statut.
            </caption>
            <thead>
              <tr>
                <th className="w-40 border border-charcoal-700/10 bg-ivory-100 p-4 text-left align-bottom text-[0.68rem] font-medium uppercase tracking-[0.12em] text-charcoal-400">
                  Caractéristiques
                </th>
                {selected.map((apt) => (
                  <th
                    key={apt.id}
                    scope="col"
                    className="border border-charcoal-700/10 p-4 text-left align-top"
                  >
                    <div className="relative">
                      <SmartImage
                        src={apt.mainImage}
                        alt={`${apt.type} — lot ${apt.reference}`}
                        aspect="aspect-[16/10]"
                      />
                      <button
                        type="button"
                        onClick={() => remove(apt.id)}
                        aria-label={`Retirer le lot ${apt.reference} du comparateur`}
                        className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center bg-charcoal-900/70 text-ivory-50 transition-colors hover:bg-charcoal-900"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="mt-3 font-display text-xl font-semibold text-charcoal-800">
                      Lot {apt.reference}
                    </p>
                    <p className="text-[0.7rem] font-normal uppercase tracking-[0.1em] text-charcoal-400">
                      {apt.type} · Bâtiment {apt.building}
                    </p>
                    <Link
                      to={`/appartements/${apt.id}`}
                      className="mt-2 inline-block text-[0.72rem] font-medium uppercase tracking-[0.1em] text-forest-700 hover:text-bronze-600"
                    >
                      Voir le lot →
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="odd:bg-ivory-50/60">
                  <th
                    scope="row"
                    className="border border-charcoal-700/10 p-4 text-left text-[0.7rem] font-medium uppercase tracking-[0.1em] text-charcoal-500"
                  >
                    {row.label}
                  </th>
                  {selected.map((apt) => (
                    <td key={apt.id} className="border border-charcoal-700/10 p-4 text-sm text-charcoal-700">
                      {row.render(apt)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-charcoal-400">
        Faites défiler horizontalement pour voir l'ensemble des lots comparés.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparatorPage;
