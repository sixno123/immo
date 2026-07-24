import { useMemo, useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { computeFinancing, FINANCING_DISCLAIMER } from '../../utils/financing';
import { formatPrice } from '../../utils/format';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

interface SimulatorProps {
  initialPrice?: number;
  embedded?: boolean;
}

export const FinancingSimulator = ({ initialPrice = 1_850_000, embedded = false }: SimulatorProps) => {
  const [price, setPrice] = useState(initialPrice);
  const [downPayment, setDownPayment] = useState(Math.round(initialPrice * 0.2));
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(4.5);

  const result = useMemo(
    () => computeFinancing({ price, downPayment, years, annualRate: rate }),
    [price, downPayment, years, rate]
  );

  const form = (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-price" className="field-label !mb-0">
              Prix du bien
            </label>
            <span className="font-display text-lg font-semibold text-forest-700">
              {formatPrice(price)}
            </span>
          </div>
          <input
            id="sim-price"
            type="range"
            min={1_000_000}
            max={4_000_000}
            step={50_000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3 w-full accent-forest-700"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-down" className="field-label !mb-0">
              Apport personnel
            </label>
            <span className="font-display text-lg font-semibold text-forest-700">
              {formatPrice(downPayment)}
            </span>
          </div>
          <input
            id="sim-down"
            type="range"
            min={0}
            max={price}
            step={50_000}
            value={Math.min(downPayment, price)}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="mt-3 w-full accent-forest-700"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-years" className="field-label !mb-0">
              Durée du crédit
            </label>
            <span className="font-display text-lg font-semibold text-forest-700">{years} ans</span>
          </div>
          <input
            id="sim-years"
            type="range"
            min={5}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-3 w-full accent-forest-700"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-rate" className="field-label !mb-0">
              Taux d'intérêt annuel
            </label>
            <span className="font-display text-lg font-semibold text-forest-700">
              {rate.toLocaleString('fr-FR', { minimumFractionDigits: 1 })} %
            </span>
          </div>
          <input
            id="sim-rate"
            type="range"
            min={2}
            max={8}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-3 w-full accent-forest-700"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-forest-800 p-7 text-ivory-50 md:p-8">
        <div>
          <p className="eyebrow !text-bronze-300">Votre mensualité estimée</p>
          <p className="mt-3 font-display text-4xl font-medium text-bronze-300 md:text-5xl" aria-live="polite">
            {formatPrice(result.monthlyPayment)}
            <span className="text-lg text-ivory-100/60"> / mois</span>
          </p>
        </div>
        <dl className="mt-8 space-y-4 border-t border-ivory-50/15 pt-6 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ivory-100/70">Montant financé</dt>
            <dd className="font-medium">{formatPrice(result.amountFinanced)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ivory-100/70">Coût total estimé du crédit</dt>
            <dd className="font-medium">{formatPrice(result.totalCreditCost)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ivory-100/70">Remboursement total estimé</dt>
            <dd className="font-medium">{formatPrice(result.totalRepayment)}</dd>
          </div>
        </dl>
        <p className="mt-6 flex gap-2 text-[0.72rem] leading-relaxed text-ivory-100/55">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {FINANCING_DISCLAIMER}
        </p>
      </div>
    </div>
  );

  if (embedded) {
    return <div className="border border-charcoal-700/10 bg-white p-5 shadow-card md:p-8">{form}</div>;
  }

  return (
    <section id="financement" className="scroll-mt-24 bg-ivory-50 py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Financement"
          title={
            <>
              Estimez votre <span className="font-light italic text-forest-700">mensualité</span>
            </>
          }
          description={
            <span className="inline-flex items-center gap-2">
              <Calculator className="h-4 w-4 text-bronze-500" aria-hidden="true" />
              Un ordre de grandeur immédiat pour préparer votre projet en toute sérénité.
            </span>
          }
        />
        <Reveal className="border border-charcoal-700/10 bg-white p-5 shadow-card md:p-10">
          {form}
        </Reveal>
      </div>
    </section>
  );
};
