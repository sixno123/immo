import type { FinancingInput, FinancingResult } from '../types';

/**
 * Calcul d'un crédit amortissable classique (mensualités constantes).
 * M = C × t / (1 − (1 + t)^−n)  avec t = taux mensuel, n = nombre de mensualités.
 * Simulation indicative et non contractuelle.
 */
export const computeFinancing = ({
  price,
  downPayment,
  years,
  annualRate,
}: FinancingInput): FinancingResult => {
  const amountFinanced = Math.max(0, price - downPayment);
  const months = Math.max(1, Math.round(years * 12));
  const monthlyRate = annualRate / 100 / 12;

  const monthlyPayment =
    monthlyRate === 0
      ? amountFinanced / months
      : (amountFinanced * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  const totalRepayment = monthlyPayment * months;
  const totalCreditCost = totalRepayment - amountFinanced;

  return {
    amountFinanced,
    monthlyPayment,
    totalCreditCost,
    totalRepayment,
  };
};

/** Mensualité indicative affichée sur les fiches (20 % d'apport, 25 ans, 4,5 %). */
export const estimateMonthlyPayment = (price: number): number =>
  computeFinancing({
    price,
    downPayment: Math.round(price * 0.2),
    years: 25,
    annualRate: 4.5,
  }).monthlyPayment;

export const FINANCING_DISCLAIMER =
  "Simulation indicative et non contractuelle. Les conditions définitives dépendent de l'établissement bancaire et du profil de l'acquéreur.";
