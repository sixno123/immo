import { useCountUp } from '../../hooks/useCountUp';
import { Reveal } from '../ui/Reveal';

const AnimatedNumber = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const { ref, value } = useCountUp(target);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

export const Stats = () => (
  <section className="bg-forest-800 py-16 text-ivory-50 md:py-20" aria-label="Chiffres clés du programme">
    <div className="container-luxe">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-5">
        <Reveal className="flex flex-col">
          <dd className="order-1 font-display text-4xl font-medium text-bronze-300 md:text-5xl">
            <AnimatedNumber target={40} />
          </dd>
          <dt className="order-2 mt-2 text-[0.68rem] uppercase tracking-luxe text-ivory-100/60">
            Appartements
          </dt>
        </Reveal>
        <Reveal delay={0.06} className="flex flex-col">
          <dd className="order-1 font-display text-4xl font-medium text-bronze-300 md:text-5xl">
            <AnimatedNumber target={2} />
          </dd>
          <dt className="order-2 mt-2 text-[0.68rem] uppercase tracking-luxe text-ivory-100/60">
            Bâtiments
          </dt>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col">
          <dd className="order-1 font-display text-4xl font-medium text-bronze-300 md:text-5xl">
            <AnimatedNumber target={5} />
          </dd>
          <dt className="order-2 mt-2 text-[0.68rem] uppercase tracking-luxe text-ivory-100/60">
            Niveaux
          </dt>
        </Reveal>
        <Reveal delay={0.18} className="flex flex-col">
          <dd className="order-1 font-display text-4xl font-medium text-bronze-300 md:text-5xl">
            <AnimatedNumber target={75} />
            <span className="text-2xl md:text-3xl"> à </span>
            <AnimatedNumber target={160} />
            <span className="text-2xl md:text-3xl"> m²</span>
          </dd>
          <dt className="order-2 mt-2 text-[0.68rem] uppercase tracking-luxe text-ivory-100/60">
            Surfaces
          </dt>
        </Reveal>
        <Reveal delay={0.24} className="col-span-2 flex flex-col md:col-span-1">
          <dd className="order-1 font-display text-4xl font-medium text-bronze-300 md:text-5xl">
            T2 2028
          </dd>
          <dt className="order-2 mt-2 text-[0.68rem] uppercase tracking-luxe text-ivory-100/60">
            Livraison prévue
          </dt>
        </Reveal>
      </dl>
    </div>
  </section>
);
