import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CalendarCheck, Menu, X } from 'lucide-react';
import { projectConfig } from '../../config/project';

const Logo = ({ dark }: { dark: boolean }) => (
  <Link to="/" className="group flex flex-col leading-none" aria-label="Retour à l'accueil">
    <span
      className={`font-display text-[1.35rem] font-semibold tracking-wide transition-colors ${
        dark ? 'text-charcoal-800' : 'text-ivory-50'
      }`}
    >
      Azure
    </span>
    <span
      className={`text-[0.58rem] font-medium uppercase tracking-luxe transition-colors ${
        dark ? 'text-bronze-600' : 'text-bronze-300'
      }`}
    >
      Bouskoura
    </span>
  </Link>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  // Fond transparent uniquement sur le hero de la page d'accueil.
  const overHero = pathname === '/' && !scrolled;
  const dark = !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fermeture au clavier (Échap) + gestion du focus pour l'accessibilité.
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKey);
      // Déplace le focus dans le panneau ouvert.
      const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);
      return () => {
        window.removeEventListener('keydown', onKey);
        window.clearTimeout(focusTimer);
      };
    }
    // À la fermeture, rend le focus au bouton d'ouverture.
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      toggleRef.current?.focus();
    }
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-[60] bg-charcoal-900/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-[86%] max-w-sm flex-col bg-ivory-50 shadow-2xl lg:hidden"
            initial={reducedMotion ? { opacity: 0 } : { x: '100%' }}
            animate={reducedMotion ? { opacity: 1 } : { x: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-charcoal-700/10 px-6 py-5">
              <Logo dark />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center text-charcoal-600"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6" aria-label="Navigation mobile">
              {projectConfig.navigation.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-charcoal-700/5 py-4 font-display text-2xl text-charcoal-700 transition-colors hover:text-forest-700"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/comparateur"
                onClick={() => setOpen(false)}
                className="border-b border-charcoal-700/5 py-4 font-display text-2xl text-charcoal-700 transition-colors hover:text-forest-700"
              >
                Comparateur
              </Link>
            </nav>
            <div className="border-t border-charcoal-700/10 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
              <Link to="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Réserver une visite
              </Link>
              <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.12em] text-charcoal-400">
                {projectConfig.location}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
            <Link
              to="/#contact"
              className={dark ? 'btn-primary !min-h-[44px] !px-5 !py-2.5' : 'btn-bronze !min-h-[44px] !px-5 !py-2.5'}
            >
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
              ref={toggleRef}
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
      </header>

      {typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </>
  );
};
