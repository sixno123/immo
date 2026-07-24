import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { projectConfig } from '../../config/project';
import { heroImage } from '../../data/images';
import { formatPrice } from '../../utils/format';
import { SmartImage } from '../ui/SmartImage';

const keyFacts = [
  { value: '40', label: 'Appartements' },
  { value: '2', label: 'Bâtiments' },
  { value: '2028', label: 'Livraison' },
  { value: formatPrice(projectConfig.startingPrice), label: 'À partir de' },
];

export const Hero = () => {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-900">
      {/* Visuel d'arrière-plan avec léger mouvement cinématique (Ken Burns) */}
      <motion.div
        className="absolute inset-0"
        initial={reducedMotion ? undefined : { scale: 1.09 }}
        animate={reducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <SmartImage
          src={heroImage}
          alt="Perspective architecturale de la Résidence Azure Bouskoura au crépuscule"
          aspect="aspect-auto"
          className="!absolute inset-0 h-full w-full"
          eager
          sizes="100vw"
        />
      </motion.div>

      {/* Étagement des voiles : lisibilité du texte sans écraser le visuel */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/45 to-charcoal-900/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(130%_100%_at_15%_100%,rgba(24,47,33,0.55),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-luxe relative z-10 pb-12 pt-32 md:pb-20">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-medium uppercase tracking-luxe text-bronze-300"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {projectConfig.location}
          </span>
          <span className="hidden h-3 w-px bg-bronze-300/40 sm:block" aria-hidden="true" />
          <span className="hidden text-ivory-100/60 sm:inline">{projectConfig.deliveryLabel}</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.22)}
          className="heading-display max-w-4xl text-[2.75rem] !leading-[0.98] !text-ivory-50 sm:text-6xl md:text-[5rem]"
        >
          Résidence Azure
          <span className="mt-1 block font-light italic text-bronze-300">Bouskoura</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-7 max-w-xl border-l border-bronze-300/40 pl-5 text-[0.98rem] leading-relaxed text-ivory-100/80"
        >
          Une résidence fermée de quarante appartements d'exception, posée entre la forêt de
          Bouskoura et Casablanca. Architecture contemporaine, jardins paysagers, prestations
          signées.
        </motion.p>

        <motion.div {...fadeUp(0.54)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/#residences" className="btn-bronze group w-full sm:w-auto">
            Découvrir les résidences
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link to="/#contact" className="btn-outline-light w-full sm:w-auto">
            Réserver une visite privée
          </Link>
        </motion.div>

        <motion.dl
          {...fadeUp(0.68)}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory-50/15 pt-8 sm:grid-cols-4"
        >
          {keyFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dd className="order-1 font-display text-[1.7rem] font-medium leading-none text-ivory-50 tabular-nums md:text-[2rem]">
                {fact.value}
              </dd>
              <dt className="order-2 mt-2.5 text-[0.62rem] uppercase tracking-[0.18em] text-ivory-100/55">
                {fact.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Indice de défilement discret, masqué si l'utilisateur réduit les animations */}
      {!reducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-5 z-10 hidden justify-center md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.span
            className="h-10 w-px bg-gradient-to-b from-bronze-300/80 to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      )}
    </section>
  );
};
