import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BadgeCheck,
  Building,
  CalendarClock,
  Eye,
  KeyRound,
  RotateCcw,
  Users,
} from 'lucide-react';
import { useApartments, useApartmentActions, useHasOverrides } from '../hooks/useApartments';
import { mockLeads } from '../data/leads';
import { getBookings, getViewCounts } from '../utils/storage';
import { formatDateTime, formatPrice } from '../utils/format';
import { floorLabel } from '../data/apartments';
import type { ApartmentStatus } from '../types';
import { StatusBadge } from '../components/ui/StatusBadge';

const statCard =
  'relative flex flex-col gap-1 overflow-hidden border border-charcoal-700/10 bg-white p-5 shadow-card before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-bronze-400/70';

const AdminDemoPage = () => {
  const apartments = useApartments();
  const { applyOverride, resetOverrides } = useApartmentActions();
  const hasOverrides = useHasOverrides();

  // Lus une fois à l'affichage : suffisant pour un tableau de bord de démonstration.
  const [bookings] = useState(getBookings);
  const [viewCounts] = useState(getViewCounts);

  const [priceDrafts, setPriceDrafts] = useState<Record<string, string>>({});

  const counts = useMemo(
    () => ({
      total: apartments.length,
      available: apartments.filter((a) => a.status === 'Disponible').length,
      reserved: apartments.filter((a) => a.status === 'Réservé').length,
      sold: apartments.filter((a) => a.status === 'Vendu').length,
    }),
    [apartments]
  );

  const mostViewed = useMemo(
    () =>
      apartments
        .map((a) => ({ apartment: a, views: viewCounts[a.id] ?? 0 }))
        .filter((v) => v.views > 0)
        .sort((a, b) => b.views - a.views)
        .slice(0, 5),
    [apartments, viewCounts]
  );

  const commitPrice = (id: string) => {
    const draft = priceDrafts[id];
    if (draft === undefined) return;
    const value = Number(draft.replace(/[^\d]/g, ''));
    if (Number.isFinite(value) && value > 0) {
      applyOverride(id, { price: value });
    }
    setPriceDrafts((d) => {
      const next = { ...d };
      delete next[id];
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-ivory-100 pb-20 pt-[92px] md:pt-28">
      <div className="container-luxe">
        {/* En-tête */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="heading-display text-3xl">Tableau de bord</h1>
              <span className="border border-bronze-400 bg-bronze-100 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-bronze-700">
                Mode démonstration
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-charcoal-500">
              Aperçu illustratif du futur espace promoteur. Les modifications de prix et de statut
              sont enregistrées localement sur cet appareil uniquement — aucune donnée n'est
              transmise à un serveur.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {hasOverrides && (
              <button
                type="button"
                onClick={resetOverrides}
                className="inline-flex min-h-[44px] items-center gap-2 border border-charcoal-700/20 px-4 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-charcoal-500 hover:border-forest-700 hover:text-forest-700"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Rétablir les données d'origine
              </button>
            )}
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center gap-2 px-2 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-charcoal-500 hover:text-forest-700"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour au site
            </Link>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div className={statCard}>
            <Building className="h-5 w-5 text-bronze-500" aria-hidden="true" />
            <p className="font-display text-4xl font-semibold tabular-nums text-charcoal-800">{counts.total}</p>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-charcoal-400">Lots au total</p>
          </div>
          <div className={statCard}>
            <BadgeCheck className="h-5 w-5 text-forest-600" aria-hidden="true" />
            <p className="font-display text-4xl font-semibold tabular-nums text-forest-700">{counts.available}</p>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-charcoal-400">Disponibles</p>
          </div>
          <div className={statCard}>
            <KeyRound className="h-5 w-5 text-bronze-500" aria-hidden="true" />
            <p className="font-display text-4xl font-semibold tabular-nums text-bronze-600">{counts.reserved}</p>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-charcoal-400">Réservés</p>
          </div>
          <div className={statCard}>
            <KeyRound className="h-5 w-5 text-charcoal-400" aria-hidden="true" />
            <p className="font-display text-4xl font-semibold tabular-nums text-charcoal-500">{counts.sold}</p>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-charcoal-400">Vendus</p>
          </div>
          <div className={`${statCard} col-span-2 md:col-span-1`}>
            <Users className="h-5 w-5 text-bronze-500" aria-hidden="true" />
            <p className="font-display text-4xl font-semibold tabular-nums text-charcoal-800">
              {mockLeads.length + bookings.length}
            </p>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-charcoal-400">
              Prospects (démo)
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Demandes de visite */}
          <section className="border border-charcoal-700/10 bg-white p-6 shadow-card">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-charcoal-800">
              <CalendarClock className="h-5 w-5 text-bronze-500" aria-hidden="true" />
              Demandes de visite récentes
            </h2>
            {bookings.length === 0 ? (
              <p className="mt-4 text-sm text-charcoal-500">
                Aucune demande enregistrée pour le moment. Remplissez le formulaire « Réserver une
                visite » sur le site pour voir apparaître les demandes ici.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-charcoal-700/10">
                {bookings.slice(0, 6).map((b) => (
                  <li key={b.id} className="py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-charcoal-700">{b.fullName}</p>
                      <p className="shrink-0 text-xs text-charcoal-400">{formatDateTime(b.createdAt)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-charcoal-500">
                      {b.phone} · {b.preferredDate} ({b.preferredTime})
                      {b.preferredApartment && ` · Lot ${b.preferredApartment}`}
                      {b.budget && ` · Budget : ${b.budget}`}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Lots les plus consultés + prospects fictifs */}
          <section className="border border-charcoal-700/10 bg-white p-6 shadow-card">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-charcoal-800">
              <Eye className="h-5 w-5 text-bronze-500" aria-hidden="true" />
              Lots les plus consultés
            </h2>
            {mostViewed.length === 0 ? (
              <p className="mt-4 text-sm text-charcoal-500">
                Les consultations de fiches seront comptabilisées ici au fil de la navigation.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-charcoal-700/10">
                {mostViewed.map(({ apartment, views }) => (
                  <li key={apartment.id} className="flex items-center justify-between gap-3 py-3">
                    <Link
                      to={`/appartements/${apartment.id}`}
                      className="font-medium text-forest-700 hover:text-bronze-600"
                    >
                      Lot {apartment.reference} — {apartment.type}
                    </Link>
                    <span className="shrink-0 text-sm text-charcoal-500">
                      {views} vue{views > 1 ? 's' : ''}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <h2 className="mt-8 flex items-center gap-2 font-display text-xl font-semibold text-charcoal-800">
              <Users className="h-5 w-5 text-bronze-500" aria-hidden="true" />
              Prospects (données fictives)
            </h2>
            <ul className="mt-4 divide-y divide-charcoal-700/10">
              {mockLeads.slice(0, 5).map((lead) => (
                <li key={lead.id} className="py-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium text-charcoal-700">{lead.name}</p>
                    <p className="shrink-0 text-xs text-charcoal-400">{lead.source}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-charcoal-500">{lead.interest}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Gestion des lots */}
        <section className="mt-8 border border-charcoal-700/10 bg-white p-6 shadow-card">
          <h2 className="font-display text-xl font-semibold text-charcoal-800">
            Gestion des lots (édition de démonstration)
          </h2>
          <p className="mt-1 text-sm text-charcoal-500">
            Modifiez un prix (validez avec Entrée ou en quittant le champ) ou un statut : le site
            public reflète immédiatement les changements.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-forest-700 text-left">
                  <th className="py-2.5 pr-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Réf.</th>
                  <th className="py-2.5 pr-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Type</th>
                  <th className="py-2.5 pr-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Emplacement</th>
                  <th className="py-2.5 pr-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Prix (DH)</th>
                  <th className="py-2.5 pr-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Statut</th>
                  <th className="py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-charcoal-500">Aperçu</th>
                </tr>
              </thead>
              <tbody>
                {apartments.map((apt) => (
                  <tr key={apt.id} className="border-b border-charcoal-700/10">
                    <td className="py-2.5 pr-3 font-semibold text-forest-700">{apt.reference}</td>
                    <td className="py-2.5 pr-3">{apt.type}</td>
                    <td className="py-2.5 pr-3 text-charcoal-500">
                      Bât. {apt.building} · {floorLabel(apt.floor)}
                    </td>
                    <td className="py-2.5 pr-3">
                      <label className="sr-only" htmlFor={`price-${apt.id}`}>
                        Prix du lot {apt.reference} en dirhams
                      </label>
                      <input
                        id={`price-${apt.id}`}
                        type="text"
                        inputMode="numeric"
                        className="w-32 border border-charcoal-700/15 bg-ivory-50 px-2.5 py-1.5 text-sm focus:border-forest-600 focus:outline-none"
                        value={priceDrafts[apt.id] ?? String(apt.price)}
                        onChange={(e) =>
                          setPriceDrafts((d) => ({ ...d, [apt.id]: e.target.value }))
                        }
                        onBlur={() => commitPrice(apt.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                        }}
                      />
                      <span className="ml-2 hidden text-xs text-charcoal-400 xl:inline">
                        {formatPrice(apt.price)}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3">
                      <label className="sr-only" htmlFor={`status-${apt.id}`}>
                        Statut du lot {apt.reference}
                      </label>
                      <select
                        id={`status-${apt.id}`}
                        className="border border-charcoal-700/15 bg-ivory-50 px-2.5 py-1.5 text-sm focus:border-forest-600 focus:outline-none"
                        value={apt.status}
                        onChange={(e) =>
                          applyOverride(apt.id, { status: e.target.value as ApartmentStatus })
                        }
                      >
                        <option value="Disponible">Disponible</option>
                        <option value="Réservé">Réservé</option>
                        <option value="Vendu">Vendu</option>
                      </select>
                    </td>
                    <td className="py-2.5">
                      <StatusBadge status={apt.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.14em] text-bronze-600">
          Mode démonstration — cet écran n'est pas un outil de production
        </p>
      </div>
    </div>
  );
};

export default AdminDemoPage;
