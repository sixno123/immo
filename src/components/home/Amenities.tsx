import {
  Waves,
  Trees,
  Dumbbell,
  CarFront,
  ShieldCheck,
  Baby,
  Gem,
  ConciergeBell,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const amenities = [
  {
    icon: Waves,
    title: 'Piscine',
    text: "Un bassin extérieur bordé de pierre naturelle et de transats, cœur de vie estival de la résidence.",
  },
  {
    icon: Trees,
    title: 'Jardins paysagers',
    text: "Allées ombragées, oliviers et essences méditerranéennes dessinés par un paysagiste.",
  },
  {
    icon: Dumbbell,
    title: 'Salle de sport',
    text: "Un espace fitness équipé et climatisé, réservé aux résidents, accessible toute la journée.",
  },
  {
    icon: CarFront,
    title: 'Parking souterrain',
    text: "Places privatives en sous-sol avec accès direct aux halls, pré-équipement bornes électriques.",
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité 24 h/24',
    text: "Gardiennage permanent, contrôle d'accès, vidéosurveillance et résidence entièrement clôturée.",
  },
  {
    icon: Baby,
    title: 'Aire de jeux',
    text: "Un espace ludique sécurisé au milieu des jardins, à distance des circulations automobiles.",
  },
  {
    icon: Gem,
    title: 'Finitions premium',
    text: "Marbre, parquet, menuiseries à rupture de pont thermique et sanitaires de marques européennes.",
  },
  {
    icon: ConciergeBell,
    title: 'Conciergerie',
    text: "Un service d'accueil et de conciergerie au quotidien : colis, réservations, petits services.",
  },
];

export const Amenities = () => (
  <section className="bg-ivory-50 py-20 md:py-28" aria-label="Prestations de la résidence">
    <div className="container-luxe">
      <SectionHeading
        eyebrow="Prestations"
        title={
          <>
            Tout, pensé pour <span className="font-light italic text-forest-700">votre quotidien</span>
          </>
        }
        description="Des espaces communs dessinés comme ceux d'un hôtel de charme, entretenus et sécurisés toute l'année."
      />
      <div className="grid gap-px overflow-hidden border border-charcoal-700/10 bg-charcoal-700/10 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 0.06} className="h-full">
            <div className="flex h-full flex-col bg-ivory-50 p-7 transition-colors duration-300 hover:bg-ivory-100">
              <item.icon className="h-6 w-6 text-bronze-500" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-800">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
