import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApartments } from '../../hooks/useApartments';
import { BUILDINGS, FLOORS, floorLabel } from '../../data/apartments';
import type { BuildingId } from '../../types';
import { ApartmentCard } from '../apartment/ApartmentCard';
import { SectionHeading } from '../ui/SectionHeading';

/** Représentation schématique d'un bâtiment : niveaux cliquables, lecture façade. */
const BuildingFigure = ({
  building,
  activeFloor,
  onSelectFloor,
  availableByFloor,
  totalByFloor,
}: {
  building: BuildingId;
  activeFloor: number;
  onSelectFloor: (floor: number) => void;
  availableByFloor: Record<number, number>;
  totalByFloor: Record<number, number>;
}) => (
  <div className="mx-auto w-full max-w-sm">
    {/* Corniche / toiture */}
    <div className="mx-auto h-2 w-[96%] bg-charcoal-800" aria-hidden="true" />
    <div className="mx-auto h-1.5 w-[88%] bg-forest-800" aria-hidden="true" />

    <div className="overflow-hidden border border-forest-800/25 bg-white shadow-card">
      {[...FLOORS].reverse().map((floor) => {
        const active = activeFloor === floor;
        const availableCount = availableByFloor[floor] ?? 0;
        const totalCount = totalByFloor[floor] ?? 0;
        const soldOut = availableCount === 0;
        const isGround = floor === 0;
        return (
          <button
            key={floor}
            type="button"
            onClick={() => onSelectFloor(floor)}
            aria-pressed={active}
            aria-label={`${floorLabel(floor)} du bâtiment ${building} — ${availableCount} lot(s) disponible(s) sur ${totalCount}`}
            className={`group relative flex min-h-[58px] w-full items-center justify-between border-t border-forest-800/12 px-4 py-3 text-left transition-colors first:border-t-0 ${
              active
                ? 'bg-forest-700 text-ivory-50'
                : 'bg-white text-charcoal-600 hover:bg-forest-50'
            }`}
          >
            {/* Liseré d'accent sur le niveau actif */}
            <span
              className={`absolute inset-y-0 left-0 w-1 transition-colors ${
                active ? 'bg-bronze-400' : 'bg-transparent group-hover:bg-forest-300'
              }`}
              aria-hidden="true"
            />
            <span className="flex items-center gap-3">
              {/* Fenêtres stylisées — plus larges au rez-de-chaussée (accès/hall) */}
              <span className="flex items-end gap-1" aria-hidden="true">
                {(isGround ? [0, 1, 2] : [0, 1, 2, 3]).map((w) => (
                  <span
                    key={w}
                    className={`${isGround ? 'h-5 w-3' : 'h-4 w-2'} ${
                      active ? 'bg-bronze-300' : soldOut ? 'bg-charcoal-700/15' : 'bg-forest-200'
                    }`}
                  />
                ))}
              </span>
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.08em]">
                {floorLabel(floor)}
              </span>
            </span>

            {/* Disponibilité : pastille + compte */}
            <span className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  soldOut ? 'bg-charcoal-400/50' : active ? 'bg-bronze-200' : 'bg-forest-500'
                }`}
                aria-hidden="true"
              />
              <span
                className={`text-[0.68rem] font-medium uppercase tracking-[0.06em] tabular-nums ${
                  active ? 'text-bronze-100' : soldOut ? 'text-charcoal-400' : 'text-forest-600'
                }`}
              >
                {soldOut ? 'Complet' : `${availableCount} dispo`}
              </span>
            </span>
          </button>
        );
      })}
    </div>

    {/* Socle / entrée */}
    <div className="mx-auto flex h-6 w-full items-center justify-center bg-charcoal-800" aria-hidden="true">
      <span className="h-3 w-10 bg-bronze-500/70" />
    </div>
    <p className="mt-4 text-center text-[0.68rem] uppercase tracking-luxe text-charcoal-400">
      Bâtiment {building} · sélectionnez un niveau
    </p>
  </div>
);

export const BuildingSelector = () => {
  const apartments = useApartments();
  const [building, setBuilding] = useState<BuildingId>('A');
  const [floor, setFloor] = useState<number>(0);

  const { availableByFloor, totalByFloor, availableTotal, unitsTotal } = useMemo(() => {
    const available: Record<number, number> = {};
    const total: Record<number, number> = {};
    for (const f of FLOORS) {
      const onFloor = apartments.filter((a) => a.building === building && a.floor === f);
      total[f] = onFloor.length;
      available[f] = onFloor.filter((a) => a.status === 'Disponible').length;
    }
    const buildingUnits = apartments.filter((a) => a.building === building);
    return {
      availableByFloor: available,
      totalByFloor: total,
      availableTotal: buildingUnits.filter((a) => a.status === 'Disponible').length,
      unitsTotal: buildingUnits.length,
    };
  }, [apartments, building]);

  const floorApartments = useMemo(
    () => apartments.filter((a) => a.building === building && a.floor === floor),
    [apartments, building, floor]
  );

  return (
    <section id="residences" className="scroll-mt-24 bg-ivory-50 py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Les résidences"
          title={
            <>
              Explorez les bâtiments,
              <br />
              <span className="font-light italic text-forest-700">niveau par niveau</span>
            </>
          }
          description="Choisissez un bâtiment puis un étage pour découvrir les appartements correspondants et leur disponibilité en temps réel."
        />

        {/* Choix du bâtiment */}
        <div
          className="mx-auto mb-12 flex max-w-md overflow-hidden border border-forest-800/25"
          role="group"
          aria-label="Choix du bâtiment"
        >
          {BUILDINGS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBuilding(b)}
              aria-pressed={building === b}
              className={`min-h-[52px] flex-1 text-[0.82rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                building === b
                  ? 'bg-forest-700 text-ivory-50'
                  : 'bg-white text-charcoal-600 hover:bg-forest-50'
              }`}
            >
              Bâtiment {b}
            </button>
          ))}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <div>
            <BuildingFigure
              building={building}
              activeFloor={floor}
              onSelectFloor={setFloor}
              availableByFloor={availableByFloor}
              totalByFloor={totalByFloor}
            />
            {/* Synthèse disponibilité du bâtiment */}
            <div className="mx-auto mt-8 flex max-w-sm items-center justify-between border-t border-charcoal-700/10 pt-5">
              <div>
                <p className="font-display text-3xl font-medium text-forest-700 tabular-nums">
                  {availableTotal}
                  <span className="text-lg text-charcoal-400"> / {unitsTotal}</span>
                </p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-charcoal-400">
                  Lots disponibles · Bât. {building}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-[0.66rem] uppercase tracking-[0.1em] text-charcoal-400">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-500" aria-hidden="true" />
                  Disponible
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-charcoal-400/50" aria-hidden="true" />
                  Complet
                </span>
              </div>
            </div>
          </div>

          <div aria-live="polite">
            <div className="mb-6 flex items-baseline justify-between border-b border-charcoal-700/10 pb-4">
              <h3 className="font-display text-2xl font-semibold text-charcoal-800">
                {floorLabel(floor)}
                <span className="ml-2 text-base font-normal text-charcoal-400">· Bâtiment {building}</span>
              </h3>
              <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.12em] text-charcoal-400 tabular-nums">
                {floorApartments.length} lot{floorApartments.length > 1 ? 's' : ''}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${building}-${floor}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {floorApartments.map((apartment) => (
                  <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
