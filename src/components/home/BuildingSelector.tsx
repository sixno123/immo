import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApartments } from '../../hooks/useApartments';
import { BUILDINGS, FLOORS, floorLabel } from '../../data/apartments';
import type { BuildingId } from '../../types';
import { ApartmentCard } from '../apartment/ApartmentCard';
import { SectionHeading } from '../ui/SectionHeading';

/** Représentation schématique d'un bâtiment : 5 niveaux cliquables. */
const BuildingFigure = ({
  building,
  activeFloor,
  onSelectFloor,
  availableByFloor,
}: {
  building: BuildingId;
  activeFloor: number;
  onSelectFloor: (floor: number) => void;
  availableByFloor: Record<number, number>;
}) => (
  <div className="mx-auto w-full max-w-sm">
    {/* Toit */}
    <div className="mx-auto h-3 w-[92%] bg-forest-700" aria-hidden="true" />
    <div className="flex flex-col-reverse border border-forest-700/30 bg-white shadow-card">
      {FLOORS.map((floor) => {
        const active = activeFloor === floor;
        const availableCount = availableByFloor[floor] ?? 0;
        return (
          <button
            key={floor}
            type="button"
            onClick={() => onSelectFloor(floor)}
            aria-pressed={active}
            aria-label={`${floorLabel(floor)} du bâtiment ${building} — ${availableCount} lot(s) disponible(s)`}
            className={`flex min-h-[56px] items-center justify-between border-t border-forest-700/15 px-4 py-3 text-left transition-colors first:border-t-0 ${
              active ? 'bg-forest-700 text-ivory-50' : 'bg-white text-charcoal-600 hover:bg-forest-50'
            }`}
          >
            <span className="flex items-center gap-3">
              {/* Fenêtres stylisées */}
              <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3].map((w) => (
                  <span
                    key={w}
                    className={`h-4 w-2.5 ${active ? 'bg-bronze-300' : 'bg-forest-200'}`}
                  />
                ))}
              </span>
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em]">
                {floorLabel(floor)}
              </span>
            </span>
            <span
              className={`text-[0.68rem] uppercase tracking-[0.08em] ${
                active ? 'text-bronze-200' : 'text-charcoal-400'
              }`}
            >
              {availableCount} dispo.
            </span>
          </button>
        );
      })}
    </div>
    {/* Socle */}
    <div className="mx-auto h-4 w-full bg-charcoal-800" aria-hidden="true" />
    <p className="mt-3 text-center text-[0.7rem] uppercase tracking-luxe text-charcoal-400">
      Bâtiment {building} — sélectionnez un niveau
    </p>
  </div>
);

export const BuildingSelector = () => {
  const apartments = useApartments();
  const [building, setBuilding] = useState<BuildingId>('A');
  const [floor, setFloor] = useState<number>(0);

  const availableByFloor = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const f of FLOORS) {
      counts[f] = apartments.filter(
        (a) => a.building === building && a.floor === f && a.status === 'Disponible'
      ).length;
    }
    return counts;
  }, [apartments, building]);

  const floorApartments = useMemo(
    () => apartments.filter((a) => a.building === building && a.floor === floor),
    [apartments, building, floor]
  );

  return (
    <section id="residences" className="scroll-mt-24 bg-ivory-50 py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Les résidences"
          title={
            <>
              Explorez les bâtiments,
              <br />
              <span className="italic text-forest-700">niveau par niveau</span>
            </>
          }
          description="Choisissez un bâtiment puis un étage pour découvrir les appartements correspondants."
        />

        {/* Choix du bâtiment */}
        <div
          className="mx-auto mb-10 flex max-w-md overflow-hidden border border-forest-700/30"
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

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
          <BuildingFigure
            building={building}
            activeFloor={floor}
            onSelectFloor={setFloor}
            availableByFloor={availableByFloor}
          />

          <div aria-live="polite">
            <h3 className="mb-5 font-display text-2xl font-semibold text-charcoal-800">
              {floorLabel(floor)} — Bâtiment {building}
              <span className="ml-3 align-middle text-[0.7rem] font-normal uppercase tracking-[0.12em] text-charcoal-400">
                {floorApartments.length} lots
              </span>
            </h3>
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
