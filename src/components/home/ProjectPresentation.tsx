import { Leaf, ShieldCheck, Gem, Users } from 'lucide-react';
import { presentationImages } from '../../data/images';
import { projectConfig } from '../../config/project';
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

const facts = [
  { value: '2', label: 'Bâtiments de 5 niveaux' },
  { value: '40', label: "Appartements d'exception" },
  { value: '75–160', label: 'm² de surface habitable' },
  { value: 'T2 2028', label: 'Livraison prévue' },
];

export const ProjectPresentation = () => (
  <section id="le-projet" className="scroll-mt-24 bg-ivory-100 py-24 md:py-32">
    <div className="container-luxe">
      {/* Composition éditoriale asymétrique */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Colonne titre — étroite, ancrée en haut */}
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal>
            <p className="eyebrow mb-6">La vision</p>
            <h2 className="heading-display text-[2rem] sm:text-4xl md:text-[3rem]">
              Une architecture
              <br />
              qui respire,
              <br />
              <span className="font-light italic text-forest-700">un quotidien qui apaise</span>
            </h2>
            <div className="mt-8 max-w-md space-y-5 text-[0.98rem] leading-relaxed text-charcoal-500">
              <p>
                La Résidence Azure Bouskoura est née d'une conviction : le véritable luxe, aux
                portes d'une métropole comme Casablanca, c'est l'espace, la lumière et le silence.
              </p>
              <p>
                Deux bâtiments de cinq niveaux seulement, quarante appartements, et la part belle
                laissée aux jardins. Les façades alternent pierre claire, enduits minéraux et larges
                loggias filantes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Colonne visuelle — image portrait ancrée + carte de fait superposée */}
        <div className="lg:col-span-7">
          <Reveal delay={0.12} className="relative">
            <SmartImage
              src={presentationImages.architecture}
              alt="Façade contemporaine en pierre claire avec loggias végétalisées"
              aspect="aspect-[4/5] sm:aspect-[16/11]"
              tone
              className="shadow-card"
            />
            {/* Encart chiffre-clé, façon signature éditoriale */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 bg-forest-800 px-6 py-5 text-ivory-50 shadow-card sm:-bottom-8 sm:left-8 md:px-8">
              <span className="font-display text-4xl font-medium leading-none text-bronze-300 tabular-nums md:text-5xl">
                05
              </span>
              <span className="max-w-[9rem] text-[0.72rem] uppercase leading-snug tracking-[0.14em] text-ivory-100/75">
                niveaux seulement, pour préserver l'intimité
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bandeau de faits — chiffres essentiels alignés */}
      <Reveal delay={0.1}>
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-charcoal-700/10 bg-charcoal-700/10 sm:grid-cols-4 md:mt-28">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5 bg-ivory-100 px-5 py-7 md:px-7">
              <dd className="font-display text-2xl font-medium text-forest-700 tabular-nums md:text-3xl">
                {fact.value}
              </dd>
              <dt className="text-[0.66rem] uppercase leading-snug tracking-[0.14em] text-charcoal-400">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Piliers — liste éditoriale numérotée plutôt qu'une grille d'icônes générique */}
      <div className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-28 lg:gap-x-16">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="flex gap-6">
              <span className="shrink-0 font-display text-lg font-medium text-bronze-400/80 tabular-nums">
                0{i + 1}
              </span>
              <div className="border-t border-charcoal-700/10 pt-1">
                <div className="flex items-center gap-3">
                  <pillar.icon className="h-5 w-5 text-bronze-500" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-xl font-semibold text-charcoal-800">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{pillar.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Rappel discret du caractère fictif du programme */}
      <Reveal>
        <p className="mt-16 text-center text-[0.68rem] uppercase tracking-[0.14em] text-charcoal-400/80 md:mt-20">
          {projectConfig.disclaimer}
        </p>
      </Reveal>
    </div>
  </section>
);
