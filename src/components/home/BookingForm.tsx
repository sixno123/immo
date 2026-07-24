import { useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';
import { useApartments } from '../../hooks/useApartments';
import type { BookingRequest } from '../../types';
import { saveBooking } from '../../utils/storage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  budget: string;
  bedrooms: string;
  preferredApartment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

const emptyForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  budget: '',
  bedrooms: '',
  preferredApartment: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

const validate = (form: FormState): Errors => {
  const errors: Errors = {};
  if (form.fullName.trim().length < 3) errors.fullName = 'Veuillez indiquer votre nom complet.';
  if (!/^[+0-9 ().-]{9,}$/.test(form.phone.trim()))
    errors.phone = 'Veuillez indiquer un numéro de téléphone valide.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Veuillez indiquer une adresse e-mail valide.';
  if (!form.preferredDate) errors.preferredDate = 'Veuillez choisir une date de visite.';
  if (!form.preferredTime) errors.preferredTime = 'Veuillez choisir un créneau horaire.';
  if (!form.consent) errors.consent = 'Votre consentement est nécessaire pour être recontacté.';
  return errors;
};

export const BookingForm = () => {
  const apartments = useApartments();
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('lot') ?? '';

  const [form, setForm] = useState<FormState>({ ...emptyForm, preferredApartment: preselected });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const availableRefs = useMemo(
    () => apartments.filter((a) => a.status !== 'Vendu').map((a) => a.reference),
    [apartments]
  );

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // Persistance locale du prototype — à remplacer par un appel API (POST /bookings).
    const booking: BookingRequest = {
      id: `bk-${Date.now()}`,
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      budget: form.budget,
      bedrooms: form.bedrooms,
      preferredApartment: form.preferredApartment,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      message: form.message.trim(),
      createdAt: new Date().toISOString(),
    };
    saveBooking(booking);
    setSubmitted(true);
  };

  const fieldError = (key: keyof FormState) =>
    errors[key] ? (
      <p className="mt-1.5 text-xs text-red-700" role="alert">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="contact" className="scroll-mt-24 bg-forest-800 py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          light
          eyebrow="Réserver une visite"
          title={
            <>
              Venez découvrir <span className="italic text-bronze-300">votre futur chez-vous</span>
            </>
          }
          description="Notre équipe commerciale vous accueille au bureau de vente, sept jours sur sept. Choisissez le créneau qui vous convient."
        />

        <Reveal className="mx-auto max-w-3xl">
          {submitted ? (
            <div
              className="flex flex-col items-center gap-5 bg-ivory-50 px-6 py-16 text-center shadow-card"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="h-12 w-12 text-forest-600" aria-hidden="true" />
              <h3 className="font-display text-2xl font-semibold text-charcoal-800">
                Merci, votre demande a bien été enregistrée
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-charcoal-500">
                Un conseiller de la Résidence Azure Bouskoura vous contactera dans les plus brefs
                délais pour confirmer votre visite
                {form.preferredDate &&
                  ` du ${new Date(form.preferredDate).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                  })}`}
                . Au plaisir de vous accueillir.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({ ...emptyForm });
                  setSubmitted(false);
                }}
                className="btn-outline mt-2"
              >
                Faire une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="bg-ivory-50 p-6 shadow-card md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="bk-name" className="field-label">
                    Nom complet <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-name"
                    type="text"
                    autoComplete="name"
                    required
                    className="field-input"
                    placeholder="Prénom et nom"
                    value={form.fullName}
                    onChange={(e) => set('fullName', e.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {fieldError('fullName')}
                </div>
                <div>
                  <label htmlFor="bk-phone" className="field-label">
                    Téléphone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="field-input"
                    placeholder="+212 6 ..."
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {fieldError('phone')}
                </div>
                <div>
                  <label htmlFor="bk-email" className="field-label">
                    E-mail <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-email"
                    type="email"
                    autoComplete="email"
                    required
                    className="field-input"
                    placeholder="vous@exemple.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {fieldError('email')}
                </div>
                <div>
                  <label htmlFor="bk-budget" className="field-label">
                    Budget
                  </label>
                  <select
                    id="bk-budget"
                    className="field-input"
                    value={form.budget}
                    onChange={(e) => set('budget', e.target.value)}
                  >
                    <option value="">Sélectionnez…</option>
                    <option value="1,25 à 1,5 M DH">1,25 à 1,5 M DH</option>
                    <option value="1,5 à 2 M DH">1,5 à 2 M DH</option>
                    <option value="2 à 2,5 M DH">2 à 2,5 M DH</option>
                    <option value="2,5 à 3 M DH">2,5 à 3 M DH</option>
                    <option value="Plus de 3 M DH">Plus de 3 M DH</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bk-bedrooms" className="field-label">
                    Chambres souhaitées
                  </label>
                  <select
                    id="bk-bedrooms"
                    className="field-input"
                    value={form.bedrooms}
                    onChange={(e) => set('bedrooms', e.target.value)}
                  >
                    <option value="">Sélectionnez…</option>
                    <option value="2 chambres">2 chambres</option>
                    <option value="3 chambres">3 chambres</option>
                    <option value="4 chambres">4 chambres et plus</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bk-lot" className="field-label">
                    Appartement souhaité
                  </label>
                  <select
                    id="bk-lot"
                    className="field-input"
                    value={form.preferredApartment}
                    onChange={(e) => set('preferredApartment', e.target.value)}
                  >
                    <option value="">Pas de préférence</option>
                    {availableRefs.map((ref) => (
                      <option key={ref} value={ref}>
                        Lot {ref}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bk-date" className="field-label">
                    Date souhaitée <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-date"
                    type="date"
                    required
                    min={today}
                    className="field-input"
                    value={form.preferredDate}
                    onChange={(e) => set('preferredDate', e.target.value)}
                    aria-invalid={Boolean(errors.preferredDate)}
                  />
                  {fieldError('preferredDate')}
                </div>
                <div>
                  <label htmlFor="bk-time" className="field-label">
                    Créneau souhaité <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="bk-time"
                    required
                    className="field-input"
                    value={form.preferredTime}
                    onChange={(e) => set('preferredTime', e.target.value)}
                    aria-invalid={Boolean(errors.preferredTime)}
                  >
                    <option value="">Sélectionnez…</option>
                    <option value="Matin (10h – 12h)">Matin (10h – 12h)</option>
                    <option value="Après-midi (14h – 17h)">Après-midi (14h – 17h)</option>
                    <option value="Fin de journée (17h – 19h)">Fin de journée (17h – 19h)</option>
                  </select>
                  {fieldError('preferredTime')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bk-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="bk-message"
                    rows={4}
                    className="field-input resize-y"
                    placeholder="Précisez votre projet, vos questions…"
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-charcoal-500">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => set('consent', e.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-forest-700"
                      aria-invalid={Boolean(errors.consent)}
                    />
                    <span>
                      J'accepte d'être recontacté(e) par l'équipe commerciale de la Résidence Azure
                      Bouskoura au sujet de ma demande. <span aria-hidden="true">*</span>
                    </span>
                  </label>
                  {fieldError('consent')}
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Confirmer ma demande de visite
              </button>
              <p className="mt-4 text-xs text-charcoal-400">
                * Champs obligatoires. Prototype de démonstration : votre demande est enregistrée
                localement sur cet appareil et n'est transmise à aucun serveur.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
