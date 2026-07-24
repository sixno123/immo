import { Link } from 'react-router-dom';
import { FileText, CalendarCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const BrochureCTA = () => (
  <section className="bg-ivory-50 py-16 md:py-20" aria-label="Brochure et visite">
    <div className="container-luxe">
      <Reveal className="flex flex-col items-center gap-6 border border-bronze-300/40 bg-gradient-to-br from-ivory-50 to-bronze-100/40 px-6 py-12 text-center md:py-16">
        <p className="eyebrow">Documentation</p>
        <h2 className="heading-display max-w-xl text-3xl sm:text-4xl">
          Emportez la résidence <span className="font-light italic text-forest-700">avec vous</span>
        </h2>
        <p className="max-w-lg text-[0.95rem] leading-relaxed text-charcoal-500">
          Retrouvez l'essentiel du programme — plans, prestations, disponibilités et contacts —
          dans une brochure claire et élégante, à consulter ou à imprimer.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/brochure" className="btn-primary">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Télécharger la brochure
          </Link>
          <Link to="/#contact" className="btn-outline">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Réserver une visite
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
