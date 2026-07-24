import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu } from 'lucide-react';
import { projectConfig } from '../../config/project';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Fond transparent uniquement sur le hero de la page d'accueil.
  const overHero = pathname === '/' && !scrolled;
  const dark = !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermeture systématique au changement de route ou d'ancre.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark ? 'border-b border-charcoal-700/10 bg-ivory-50/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-luxe flex h-[68px] items-center justify-between md:h-20">
        <Logo dark={dark} />

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {projectConfig.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                dark
                  ? 'text-charcoal-600 hover:text-forest-700'
                  : 'text-ivory-100/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className={dark ? 'btn-primary !min-h-[44px] !px-5 !py-2.5' : 'btn-bronze !min-h-[44px] !px-5 !py-2.5'}>
            Réserver une visite
          </Link>
        </nav>

        {/* Actions mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/#contact"
            className={`inline-flex h-11 items-center gap-1.5 px-3.5 text-[0.68rem] font-medium uppercase tracking-[0.1em] ${
              dark ? 'bg-forest-700 text-ivory-50' : 'bg-bronze-500 text-white'
            }`}
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Visite
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-haspopup="dialog"
            className={`flex h-11 w-11 items-center justify-center ${
              dark ? 'text-charcoal-700' : 'text-ivory-50'
            }`}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Tiroir mobile : rendu dans document.body via un portail (voir MobileMenu). */}
      <MobileMenu open={open} onClose={() => setOpen(false)} returnFocusRef={menuButtonRef} />
    </header>
  );
};
