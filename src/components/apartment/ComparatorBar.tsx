import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Scale, X } from 'lucide-react';
import { useComparator } from '../../hooks/useComparator';
import { useApartments } from '../../hooks/useApartments';

/** Barre fixe récapitulant les lots sélectionnés pour comparaison. */
export const ComparatorBar = () => {
  const { ids, remove, clear } = useComparator();
  const apartments = useApartments();
  const { pathname } = useLocation();

  const selected = apartments.filter((a) => ids.includes(a.id));
  const visible = selected.length > 0 && pathname !== '/comparateur';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-bronze-300/40 bg-charcoal-900/95 pb-[env(safe-area-inset-bottom)] text-ivory-50 backdrop-blur-md"
          role="region"
          aria-label="Lots sélectionnés pour comparaison"
        >
          <div className="container-luxe flex items-center gap-3 py-3">
            <Scale className="hidden h-5 w-5 shrink-0 text-bronze-300 sm:block" aria-hidden="true" />
            <div className="flex flex-1 items-center gap-2 overflow-x-auto">
              {selected.map((apt) => (
                <span
                  key={apt.id}
                  className="flex shrink-0 items-center gap-1.5 border border-ivory-50/20 px-2.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.08em]"
                >
                  {apt.reference}
                  <button
                    type="button"
                    onClick={() => remove(apt.id)}
                    aria-label={`Retirer le lot ${apt.reference} du comparateur`}
                    className="text-ivory-50/60 hover:text-ivory-50"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={clear}
              className="hidden shrink-0 text-[0.68rem] uppercase tracking-[0.1em] text-ivory-50/60 hover:text-ivory-50 sm:block"
            >
              Tout effacer
            </button>
            <Link
              to="/comparateur"
              className="shrink-0 bg-bronze-500 px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-bronze-600"
            >
              Comparer ({selected.length})
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
