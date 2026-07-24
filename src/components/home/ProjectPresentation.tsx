import { Leaf, ShieldCheck, Gem, Users } from 'lucide-react';
import { presentationImages } from '../../data/images';
import { Reveal } from '../ui/Reveal';
import { SmartImage } from '../ui/SmartImage';

const pillars = [
  {
    icon: Leaf,
    title: 'La nature comme horizon',
    text: "Adossée à la forêt de Bouskoura, la résidence cultive un dialogue permanent entre architecture contemporaine et paysage : patios plantés, essences méditerranéennes et perspectives vertes depuis chaque appartement.",
  },
  {
    icon: ShieldCheck,
    title: 'Une sérénité absolue',
    text: "Résidence entièrement clôturée, contrôle d'accès, vidéosurveillance et gardiennage 24 h/24 : vos proches évoluent en toute liberté dans un domaine privé pensé pour la tranquillité.",
  },
  {
    icon: Users,
    title: "L'art de vivre en famille",
    text: "Piscine, aire de jeux, salle de sport et jardins partagés rythment le quotidien. Les écoles internationales et les commerces de la Ville Verte sont à quelques minutes.",
  },
  {
    icon: Gem,
    title: 'Des prestations signées',
    text: "Marbre et parquet, menuiseries à rupture de pont thermique, domotique pré-installée, ascenseurs silencieux : chaque détail est traité avec l'exigence des plus belles adresses.",
  },
];

export const ProjectPresentation = () => (
  <section id="le-projet" className="scroll-mt-24 bg-ivory-100 py-20 md:py-28">
    <div className="container-luxe">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">La vision</p>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-[2.75rem]">
            Une architecture qui respire,
            <br />
            <span className="italic text-forest-700">un quotidien qui apaise</span>
          </h2>
          <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-charcoal-500">
            <p>
              La Résidence Azure Bouskoura est née d'une conviction : le véritable luxe, aux portes
              d'une métropole comme Casablanca, c'est l'espace, la lumière et le silence. Deux
              bâtiments de cinq niveaux seulement, quarante appartements, et la part belle laissée
              aux jardins.
            </p>
            <p>
              Les façades alternent pierre claire, enduits minéraux et larges loggias filantes.
              À l'intérieur, les plans privilégient les doubles orientations, les pièces de vie
              traversantes et l'intimité de l'espace nuit — pour que chaque famille compose
              librement son art de vivre.
            </p>
            <p>
              Ici, les enfants grandissent entre la piscine et l'aire de jeux, les matins
              commencent par une marche en forêt, et la ville reste à portée de main, sans jamais
              s'imposer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <SmartImage
            src={presentationImages.architecture}
            alt="Façade contemporaine en pierre claire avec loggias végétalisées"
            aspect="aspect-[3/4]"
            className="w-[82%]"
          />
          <div className="absolute -bottom-10 right-0 w-[52%] border-[6px] border-ivory-100 shadow-card">
            <SmartImage
              src={presentationImages.nature}
              alt="Séjour lumineux ouvert sur la végétation environnante"
              aspect="aspect-square"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <pillar.icon className="h-6 w-6 text-bronze-500" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold text-charcoal-800">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{pillar.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
