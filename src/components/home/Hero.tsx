import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-800">
      {/* Visuel d'arrière-plan avec léger mouvement cinématique */}
      <motion.div
        className="absolute inset-0"
        initial={reducedMotion ? undefined : { scale: 1.08 }}
        animate={reducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
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
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/35 to-charcoal-900/30"
        aria-hidden="true"
      />

      <div className="container-luxe relative z-10 pb-10 pt-32 md:pb-16">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-5 flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-luxe text-bronze-300"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {projectConfig.location}
        </motion.p>

        <motion.h1
          {...fadeUp(0.22)}
          className="heading-display max-w-3xl text-[2.6rem] !text-ivory-50 sm:text-6xl md:text-[4.4rem]"
        >
          Résidence Azure
          <span className="block text-bronze-300">Bouskoura</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.34)}
          className="mt-5 font-display text-xl italic text-ivory-100/90 md:text-2xl"
        >
          {projectConfig.tagline}
        </motion.p>

        <motion.p {...fadeUp(0.44)} className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ivory-100/75">
          Une résidence fermée et sécurisée de 40 appartements d'exception, posée entre la forêt de
          Bouskoura et l'effervescence de Casablanca. Architecture contemporaine, jardins
          paysagers, prestations signées.
        </motion.p>

        <motion.div {...fadeUp(0.56)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/#residences" className="btn-bronze">
            Découvrir les résidences
          </Link>
          <Link to="/#disponibilites" className="btn-outline-light">
            Voir les disponibilités
          </Link>
          <Link to="/#contact" className="btn-outline-light">
            Réserver une visite
          </Link>
        </motion.div>

        <motion.dl
          {...fadeUp(0.7)}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ivory-50/15 pt-7 sm:grid-cols-4"
        >
          {keyFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dd className="order-1 font-display text-2xl font-medium text-ivory-50 md:text-[1.7rem]">
                {fact.value}
              </dd>
              <dt className="order-2 mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-ivory-100/60">
                {fact.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
