import { useMemo, useState } from 'react';
import { RotateCcw, SearchX, SlidersHorizontal } from 'lucide-react';
import { useApartments } from '../../hooks/useApartments';
import { FLOORS, floorLabel } from '../../data/apartments';
import type { ApartmentFilters, ApartmentStatus, BuildingId } from '../../types';
import { defaultFilters, filterApartments, isDefaultFilters } from '../../utils/filters';
import { ApartmentCard } from '../apartment/ApartmentCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const priceOptions = [1_250_000, 1_500_000, 1_750_000, 2_000_000, 2_500_000, 3_000_000, 3_500_000];
const areaOptions = [80, 100, 120, 140, 160, 180];

const priceLabel = (v: number) => `${(v / 1_000_000).toLocaleString('fr-FR')} M DH`;

export const Availability = () => {
  const apartments = useApartments();
  const [filters, setFilters] = useState<ApartmentFilters>(defaultFilters);
  const [visibleCount, setVisibleCount] = useState(9);

  const results = useMemo(() => filterApartments(apartments, filters), [apartments, filters]);
  const isPristine = isDefaultFilters(filters);

  const set = <K extends keyof ApartmentFilters>(key: K, value: ApartmentFilters[K]) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setVisibleCount(9);
  };

  const reset = () => {
    setFilters(defaultFilters);
    setVisibleCount(9);
  };

  return (
    <section id="disponibilites" className="scroll-mt-24 bg-ivory-100 py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Disponibilités"
          title={
            <>
              Trouvez <span className="font-light italic text-forest-700">votre appartement</span>
            </>
          }
          description="Affinez votre recherche par bâtiment, étage, budget et surface pour découvrir les lots qui vous correspondent."
        />

        {/* Filtres */}
        <Reveal className="mb-8 border border-charcoal-700/10 bg-white p-5 shadow-card md:p-6">
          <div className="mb-4 flex items-center gap-2 text-charcoal-500">
            <SlidersHorizontal className="h-4 w-4 text-bronze-500" aria-hidden="true" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em]">
              Affiner la recherche
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-4">
            <div>
              <label htmlFor="f-building" className="field-label">
                Bâtiment
              </label>
              <select
                id="f-building"
                className="field-input"
                value={filters.building}
                onChange={(e) => set('building', e.target.value as BuildingId | 'all')}
              >
                <option value="all">Tous</option>
                <option value="A">Bâtiment A</option>
                <option value="B">Bâtiment B</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-floor" className="field-label">
                Étage
              </label>
              <select
                id="f-floor"
                className="field-input"
                value={filters.floor === 'all' ? 'all' : String(filters.floor)}
                onChange={(e) =>
                  set('floor', e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
              >
                <option value="all">Tous</option>
                {FLOORS.map((f) => (
                  <option key={f} value={f}>
                    {floorLabel(f)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-bedrooms" className="field-label">
                Chambres
              </label>
              <select
                id="f-bedrooms"
                className="field-input"
                value={filters.bedrooms === 'all' ? 'all' : String(filters.bedrooms)}
                onChange={(e) =>
                  set('bedrooms', e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
              >
                <option value="all">Toutes</option>
                <option value="2">2 chambres</option>
                <option value="3">3 chambres</option>
                <option value="4">4 chambres</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-min-price" className="field-label">
                Prix min.
              </label>
              <select
                id="f-min-price"
                className="field-input"
                value={filters.minPrice === null ? '' : String(filters.minPrice)}
                onChange={(e) => set('minPrice', e.target.value === '' ? null : Number(e.target.value))}
              >
                <option value="">Aucun</option>
                {priceOptions.map((p) => (
                  <option key={p} value={p}>
                    {priceLabel(p)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-max-price" className="field-label">
                Prix max.
              </label>
              <select
                id="f-max-price"
                className="field-input"
                value={filters.maxPrice === null ? '' : String(filters.maxPrice)}
                onChange={(e) => set('maxPrice', e.target.value === '' ? null : Number(e.target.value))}
              >
                <option value="">Aucun</option>
                {priceOptions.map((p) => (
                  <option key={p} value={p}>
                    {priceLabel(p)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-min-area" className="field-label">
                Surface min.
              </label>
              <select
                id="f-min-area"
                className="field-input"
                value={filters.minArea === null ? '' : String(filters.minArea)}
                onChange={(e) => set('minArea', e.target.value === '' ? null : Number(e.target.value))}
              >
                <option value="">Aucune</option>
                {areaOptions.map((a) => (
                  <option key={a} value={a}>
                    {a} m²
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-status" className="field-label">
                Disponibilité
              </label>
              <select
                id="f-status"
                className="field-input"
                value={filters.status}
                onChange={(e) => set('status', e.target.value as ApartmentStatus | 'all')}
              >
                <option value="all">Tous les lots</option>
                <option value="Disponible">Disponible</option>
                <option value="Réservé">Réservé</option>
                <option value="Vendu">Vendu</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal-700/10 pt-4">
            <p className="text-sm text-charcoal-500" aria-live="polite">
              <strong className="font-display text-lg text-forest-700">{results.length}</strong>{' '}
              appartement{results.length > 1 ? 's' : ''} correspond
              {results.length > 1 ? 'ent' : ''} à votre recherche
            </p>
            <button
              type="button"
              onClick={reset}
              disabled={isPristine}
              className="inline-flex min-h-[44px] items-center gap-2 px-3 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-charcoal-500 transition-colors hover:text-forest-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Réinitialiser les filtres
            </button>
          </div>
        </Reveal>

        {/* Résultats */}
        {results.length === 0 ? (
          <div className="flex flex-col items-center gap-4 border border-dashed border-charcoal-700/20 bg-white/60 px-6 py-16 text-center">
            <SearchX className="h-8 w-8 text-bronze-500" aria-hidden="true" />
            <p className="font-display text-xl text-charcoal-700">
              Aucun appartement ne correspond à ces critères
            </p>
            <p className="max-w-md text-sm text-charcoal-500">
              Élargissez votre budget ou votre surface minimale, ou réinitialisez les filtres pour
              afficher l'ensemble des lots du programme.
            </p>
            <button type="button" onClick={reset} className="btn-outline mt-2">
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {results.slice(0, visibleCount).map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
            {results.length > visibleCount && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + 9)}
                  className="btn-outline"
                >
                  Afficher plus de lots ({results.length - visibleCount} restants)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
