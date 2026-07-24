import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  CalendarCheck,
  Car,
  Check,
  Compass,
  Layers,
  Mail,
  MessageCircle,
  Ruler,
  Scale,
  Sun,
} from 'lucide-react';
import { useApartment } from '../hooks/useApartments';
import { useComparator } from '../hooks/useComparator';
import { floorLabel } from '../data/apartments';
import { estimateMonthlyPayment, FINANCING_DISCLAIMER } from '../utils/financing';
import { formatArea, formatPrice } from '../utils/format';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { recordApartmentView } from '../utils/storage';
import { SmartImage } from '../components/ui/SmartImage';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Reveal } from '../components/ui/Reveal';

const ApartmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = useApartment(id);
  const { isSelected, toggle, isFull } = useComparator();
  const navigate = useNavigate();

  useEffect(() => {
    if (apartment) recordApartmentView(apartment.id);
    // Une consultation par visite de page suffit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apartment?.id]);

  if (!apartment) {
    return (
      <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center gap-5 pt-24 text-center">
        <p className="font-display text-3xl text-charcoal-700">Lot introuvable</p>
        <p className="max-w-md text-sm text-charcoal-500">
          Ce lot n'existe pas ou n'est plus proposé. Consultez la liste des disponibilités pour
          découvrir les appartements du programme.
        </p>
        <Link to="/#disponibilites" className="btn-primary">
          Voir les disponibilités
        </Link>
      </div>
    );
  }

  const inComparator = isSelected(apartment.id);
  const monthly = estimateMonthlyPayment(apartment.price);

  const specs = [
    { icon: Building2, label: 'Bâtiment', value: `Bâtiment ${apartment.building}` },
    { icon: Layers, label: 'Étage', value: floorLabel(apartment.floor) },
    { icon: Ruler, label: 'Surface totale', value: formatArea(apartment.totalArea) },
    { icon: Ruler, label: 'Surface intérieure', value: formatArea(apartment.interiorArea) },
    { icon: Sun, label: 'Terrasse / jardin', value: formatArea(apartment.terraceArea) },
    { icon: BedDouble, label: 'Chambres', value: String(apartment.bedrooms) },
    { icon: Bath, label: 'Salles de bains', value: String(apartment.bathrooms) },
    { icon: Compass, label: 'Orientation', value: apartment.orientation },
    {
      icon: Car,
      label: 'Parking',
      value: `${apartment.parkingSpaces} place${apartment.parkingSpaces > 1 ? 's' : ''} en sous-sol`,
    },
  ];

  return (
    <div className="bg-ivory-100 pb-20 pt-[68px] md:pt-20">
      {/* Fil d'ariane */}
      <div className="container-luxe py-5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex min-h-[44px] items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-charcoal-500 transition-colors hover:text-forest-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour
        </button>
      </div>

      <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        {/* Visuels */}
        <div className="space-y-5">
          <Reveal>
            <SmartImage
              src={apartment.mainImage}
              alt={`Visuel d'ambiance — ${apartment.type}, lot ${apartment.reference}`}
              aspect="aspect-[4/3]"
              eager
            />
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="border border-charcoal-700/10 bg-white p-4">
              <SmartImage
                src={apartment.floorPlanImage}
                alt={`Plan schématique du lot ${apartment.reference} (${apartment.type})`}
                aspect="aspect-[4/3]"
                className="!bg-white"
                imgClassName="!object-contain"
              />
              <figcaption className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.12em] text-charcoal-400">
                Plan schématique non contractuel
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Informations */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={apartment.status} />
              <span className="text-[0.7rem] uppercase tracking-[0.12em] text-charcoal-400">
                Réf. {apartment.reference}
              </span>
            </div>
            <h1 className="heading-display mt-4 text-3xl sm:text-4xl">
              {apartment.type}
              <span className="mt-1 block font-sans text-[0.85rem] font-normal uppercase tracking-[0.14em] text-charcoal-400">
                Bâtiment {apartment.building} · {floorLabel(apartment.floor)}
              </span>
            </h1>
            <p className="mt-5 font-display text-3xl font-semibold text-forest-700 md:text-4xl">
              {formatPrice(apartment.price)}
            </p>
            <p className="mt-1.5 text-sm text-charcoal-500">
              soit une mensualité estimée de{' '}
              <strong className="text-forest-700">{formatPrice(monthly)}</strong> / mois
              <span className="block text-xs text-charcoal-400">
                (20 % d'apport, 25 ans, 4,5 % — {FINANCING_DISCLAIMER.toLowerCase()})
              </span>
            </p>

            <p className="mt-6 text-[0.95rem] leading-relaxed text-charcoal-500">
              {apartment.longDescription}
            </p>
          </Reveal>

          {/* Caractéristiques */}
          <Reveal delay={0.08}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-charcoal-700/10 bg-charcoal-700/10 sm:grid-cols-3">
              {specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1 bg-white p-4">
                  <dt className="flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.1em] text-charcoal-400">
                    <spec.icon className="h-3.5 w-3.5 text-bronze-500" aria-hidden="true" />
                    {spec.label}
                  </dt>
                  <dd className="text-sm font-medium text-charcoal-700">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Prestations */}
          <Reveal delay={0.12}>
            <h2 className="mt-8 font-display text-xl font-semibold text-charcoal-800">
              Prestations du lot
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {apartment.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Actions */}
          <Reveal delay={0.16}>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <Link to={`/?lot=${apartment.reference}#contact`} className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Demander des informations
              </Link>
              <Link to={`/?lot=${apartment.reference}#contact`} className="btn-bronze">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Réserver une visite
              </Link>
              <a
                href={buildWhatsAppLink(apartment.reference)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contacter sur WhatsApp
              </a>
              <button
                type="button"
                onClick={() => toggle(apartment.id)}
                disabled={!inComparator && isFull}
                className={`btn ${
                  inComparator
                    ? 'bg-forest-50 text-forest-700 ring-1 ring-forest-600'
                    : 'border border-charcoal-700/25 text-charcoal-700 hover:border-forest-700 hover:text-forest-700 disabled:cursor-not-allowed disabled:opacity-40'
                }`}
              >
                <Scale className="h-4 w-4" aria-hidden="true" />
                {inComparator ? 'Retirer du comparateur' : 'Ajouter au comparateur'}
              </button>
            </div>
            {!inComparator && isFull && (
              <p className="mt-2 text-xs text-charcoal-400">
                Le comparateur est limité à trois lots : retirez-en un pour ajouter celui-ci.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage;
