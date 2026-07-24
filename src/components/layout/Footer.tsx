import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { projectConfig } from '../../config/project';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const Footer = () => (
  <footer className="bg-charcoal-900 text-ivory-200" id="pied-de-page">
    <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
      <div>
        <p className="font-display text-2xl font-semibold text-ivory-50">Azure</p>
        <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-luxe text-bronze-400">
          Bouskoura
        </p>
        <p className="mt-5 text-sm leading-relaxed text-ivory-200/70">
          {projectConfig.tagline}. Une résidence sécurisée de {projectConfig.stats.apartments}{' '}
          appartements au cœur de la nature, aux portes de Casablanca.
        </p>
      </div>

      <nav aria-label="Navigation pied de page">
        <p className="eyebrow mb-5 !text-bronze-400">Navigation</p>
        <ul className="space-y-3 text-sm">
          {projectConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="text-ivory-200/80 transition-colors hover:text-ivory-50">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/comparateur" className="text-ivory-200/80 transition-colors hover:text-ivory-50">
              Comparateur
            </Link>
          </li>
          <li>
            <Link to="/brochure" className="text-ivory-200/80 transition-colors hover:text-ivory-50">
              Brochure
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <p className="eyebrow mb-5 !text-bronze-400">Contact</p>
        <ul className="space-y-3 text-sm text-ivory-200/80">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
            <span>{projectConfig.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
            <a href={`tel:${projectConfig.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-ivory-50">
              {projectConfig.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
            <a href={`mailto:${projectConfig.email}`} className="hover:text-ivory-50">
              {projectConfig.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory-50"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="eyebrow mb-5 !text-bronze-400">Informations</p>
        <ul className="space-y-3 text-sm text-ivory-200/80">
          <li>
            <span className="cursor-default" title="Page à venir dans la version finale">
              Mentions légales (à venir)
            </span>
          </li>
          <li>
            <span className="cursor-default" title="Page à venir dans la version finale">
              Politique de confidentialité (à venir)
            </span>
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {projectConfig.socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] uppercase tracking-[0.12em] text-ivory-200/60 transition-colors hover:text-bronze-400"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-ivory-50/10">
      <div className="container-luxe flex flex-col items-center gap-2 py-6 text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] text-bronze-400">
          Prototype de démonstration — programme fictif
        </p>
        <p className="text-xs text-ivory-200/50">
          © {new Date().getFullYear()} {projectConfig.name}. Les visuels, prix et informations sont
          présentés à titre illustratif uniquement.
        </p>
      </div>
    </div>
  </footer>
);
