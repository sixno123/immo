import {
  Building2,
  GraduationCap,
  MapPin,
  Plane,
  Route,
  ShoppingBag,
  Trees,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
import { pointsOfInterest } from '../../data/pois';
import { projectConfig } from '../../config/project';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  Trees,
  ShoppingBag,
  UtensilsCrossed,
  Route,
  Building2,
  Plane,
};

/** Carte stylisée (placeholder) : à remplacer par une carte interactive dans la version finale. */
const MapPlaceholder = () => (
  <div
    className="relative overflow-hidden border border-forest-700/20 bg-forest-50"
    role="img"
    aria-label="Carte stylisée situant la résidence à Bouskoura, entre la forêt, Casablanca et l'aéroport Mohammed V"
  >
    <svg viewBox="0 0 600 460" className="h-auto w-full" aria-hidden="true">
      <rect width="600" height="460" fill="#EEF3EF" />
      {/* Forêt */}
      <ellipse cx="120" cy="330" rx="150" ry="120" fill="#D8E3DA" />
      <ellipse cx="90" cy="360" rx="90" ry="70" fill="#AFC6B4" opacity="0.55" />
      {/* Routes */}
      <path d="M0 130 C 180 110, 420 150, 600 100" stroke="#C9C2B2" strokeWidth="14" fill="none" />
      <path d="M300 460 C 320 300, 280 180, 340 0" stroke="#C9C2B2" strokeWidth="10" fill="none" />
      <path d="M0 250 C 200 240, 380 260, 600 230" stroke="#DDD6C5" strokeWidth="7" fill="none" />
      {/* Étiquettes de zones */}
      <text x="70" y="320" fill="#365B44" fontSize="15" fontFamily="Georgia, serif" fontStyle="italic">
        Forêt de Bouskoura
      </text>
      <text x="440" y="70" fill="#4A4A4F" fontSize="15" fontFamily="Georgia, serif" fontStyle="italic">
        Casablanca
      </text>
      <text x="430" y="420" fill="#4A4A4F" fontSize="14" fontFamily="Georgia, serif" fontStyle="italic">
        Aéroport Mohammed V
      </text>
      <circle cx="500" cy="60" r="7" fill="#4A4A4F" opacity="0.5" />
      <circle cx="500" cy="400" r="7" fill="#4A4A4F" opacity="0.5" />
      {/* Résidence */}
      <g transform="translate(300, 240)">
        <circle r="34" fill="#1F3D2B" opacity="0.12">
          <animate attributeName="r" values="26;40;26" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle r="13" fill="#1F3D2B" />
        <path d="M-5 4v-6l5-4 5 4v6h-3v-4h-4v4z" fill="#C2A566" />
      </g>
      <text x="300" y="300" textAnchor="middle" fill="#1F3D2B" fontSize="16" fontWeight="600" fontFamily="Georgia, serif">
        Résidence Azure Bouskoura
      </text>
    </svg>
    <p className="absolute bottom-3 right-3 bg-white/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.12em] text-charcoal-500 backdrop-blur-sm">
      Carte illustrative non contractuelle
    </p>
  </div>
);

export const LocationSection = () => (
  <section id="localisation" className="scroll-mt-24 bg-ivory-100 py-20 md:py-28">
    <div className="container-luxe">
      <SectionHeading
        eyebrow="Localisation"
        title={
          <>
            Bouskoura, <span className="font-light italic text-forest-700">l'adresse qui monte</span>
          </>
        }
        description={
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-bronze-500" aria-hidden="true" />
            {projectConfig.address}
          </span>
        }
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <MapPlaceholder />
        </Reveal>

        <div>
          <ul className="divide-y divide-charcoal-700/10">
            {pointsOfInterest.map((poi, i) => {
              const Icon = icons[poi.icon] ?? MapPin;
              return (
                <Reveal key={poi.category} delay={i * 0.05}>
                  <li className="flex gap-4 py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-bronze-300/50 bg-bronze-100/50">
                      <Icon className="h-5 w-5 text-bronze-600" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.66rem] font-medium uppercase tracking-[0.14em] text-bronze-600">
                        {poi.category}
                      </p>
                      <h3 className="mt-0.5 font-display text-lg font-semibold text-charcoal-800">
                        {poi.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-500">{poi.detail}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
