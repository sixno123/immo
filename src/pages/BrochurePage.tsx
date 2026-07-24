import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { projectConfig } from '../config/project';
import { useApartments } from '../hooks/useApartments';
import { formatArea, formatPrice } from '../utils/format';
import { floorLabel } from '../data/apartments';

/**
 * Brochure imprimable : le bouton « Imprimer / Enregistrer en PDF » ouvre le
 * dialogue d'impression du navigateur, qui permet d'enregistrer un PDF.
 */
const BrochurePage = () => {
  const apartments = useApartments();
  const available = apartments.filter((a) => a.status === 'Disponible');

  return (
    <div className="min-h-screen bg-white text-charcoal-800">
      {/* Barre d'actions (masquée à l'impression) */}
      <div className="no-print sticky top-0 z-10 border-b border-charcoal-700/10 bg-ivory-50/95 backdrop-blur">
        <div className="container-luxe flex items-center justify-between py-4">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-charcoal-500 hover:text-forest-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour au site
          </Link>
          <button type="button" onClick={() => window.print()} className="btn-primary !min-h-[44px] !py-2.5">
            <Printer className="h-4 w-4" aria-hidden="true" />
            Imprimer / Enregistrer en PDF
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Couverture */}
        <header className="print-page border-b-4 border-bronze-500 pb-10 text-center">
          <p className="eyebrow">{projectConfig.location}</p>
          <h1 className="heading-display mt-4 text-4xl md:text-5xl">{projectConfig.name}</h1>
          <p className="mt-3 font-display text-xl italic text-forest-700">{projectConfig.tagline}</p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal-500">
            Une résidence fermée et sécurisée de {projectConfig.stats.apartments} appartements
            d'exception répartis sur {projectConfig.stats.buildings} bâtiments de{' '}
            {projectConfig.stats.floors} niveaux, entre la forêt de Bouskoura et Casablanca.
            Surfaces de {projectConfig.stats.minArea} à {projectConfig.stats.maxArea} m². À partir
            de {formatPrice(projectConfig.startingPrice)}. {projectConfig.deliveryLabel}.
          </p>
        </header>

        {/* Prestations */}
        <section className="print-page mt-10">
          <h2 className="font-display text-2xl font-semibold text-forest-700">Les prestations</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-charcoal-600">
            <li>Piscine extérieure</li>
            <li>Jardins paysagers</li>
            <li>Salle de sport</li>
            <li>Parking souterrain</li>
            <li>Sécurité 24 h/24</li>
            <li>Aire de jeux pour enfants</li>
            <li>Finitions premium</li>
            <li>Conciergerie</li>
          </ul>
        </section>

        {/* Lots disponibles */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-forest-700">
            Lots disponibles ({available.length})
          </h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-forest-700 text-left">
                <th className="py-2 pr-3 font-medium uppercase tracking-[0.08em] text-[0.68rem] text-charcoal-500">Réf.</th>
                <th className="py-2 pr-3 font-medium uppercase tracking-[0.08em] text-[0.68rem] text-charcoal-500">Type</th>
                <th className="py-2 pr-3 font-medium uppercase tracking-[0.08em] text-[0.68rem] text-charcoal-500">Étage</th>
                <th className="py-2 pr-3 font-medium uppercase tracking-[0.08em] text-[0.68rem] text-charcoal-500">Surface</th>
                <th className="py-2 text-right font-medium uppercase tracking-[0.08em] text-[0.68rem] text-charcoal-500">Prix</th>
              </tr>
            </thead>
            <tbody>
              {available.map((apt) => (
                <tr key={apt.id} className="border-b border-charcoal-700/10">
                  <td className="py-2.5 pr-3 font-semibold text-forest-700">{apt.reference}</td>
                  <td className="py-2.5 pr-3">{apt.type}</td>
                  <td className="py-2.5 pr-3">
                    Bât. {apt.building} · {floorLabel(apt.floor)}
                  </td>
                  <td className="py-2.5 pr-3">{formatArea(apt.totalArea)}</td>
                  <td className="py-2.5 text-right font-medium">{formatPrice(apt.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Contact */}
        <footer className="print-page mt-10 border-t-2 border-bronze-500 pt-8 text-center text-sm text-charcoal-600">
          <p className="font-display text-lg font-semibold text-charcoal-800">Bureau de vente</p>
          <p className="mt-2">{projectConfig.address}</p>
          <p className="mt-1">
            {projectConfig.phoneDisplay} · {projectConfig.email}
          </p>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.12em] text-bronze-600">
            Prototype de démonstration — programme fictif
          </p>
          <p className="mt-2 text-xs text-charcoal-400">
            Document non contractuel. Visuels, prix et surfaces à titre indicatif.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BrochurePage;
