import { useEffect, useRef, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { projectConfig } from '../../config/project';
import { Logo } from './Logo';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Bouton hamburger : le focus y retourne à la fermeture du menu. */
  returnFocusRef: RefObject<HTMLButtonElement>;
}

/**
 * Menu de navigation mobile rendu dans document.body via un portail React.
 *
 * Indispensable sur iOS Safari : le <header> fixe utilise backdrop-filter,
 * qui crée un nouveau bloc englobant pour ses descendants en position fixe.
 * Rendu à l'intérieur du header, le tiroir se retrouvait limité à la hauteur
 * de la barre de navigation après défilement. Le portail garantit un
 * positionnement par rapport au viewport complet.
 */
export const MobileMenu = ({ open, onClose, returnFocusRef }: MobileMenuProps) => {
  const reducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  // Verrouillage du défilement d'arrière-plan sans perte de position
  // (body en position fixe : la seule technique fiable sur iOS Safari).
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.left = '0';
    style.right = '0';
    style.width = '100%';
    style.overflow = 'hidden';
    return () => {
      style.position = '';
      style.top = '';
      style.left = '';
      style.right = '';
      style.width = '';
      style.overflow = '';
      window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' });
    };
  }, [open]);

  // Fermeture au clavier (Échap).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Gestion du focus : bouton de fermeture à l'ouverture,
  // retour au bouton hamburger à la fermeture.
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);
      return () => window.clearTimeout(timer);
    }
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      returnFocusRef.current?.focus();
    }
  }, [open, returnFocusRef]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-[75] h-full w-full cursor-default bg-charcoal-900/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="full-dvh fixed right-0 top-0 z-[80] flex w-[86%] max-w-sm flex-col bg-ivory-50 pt-[env(safe-area-inset-top)] shadow-2xl lg:hidden"
            initial={reducedMotion ? { opacity: 0 } : { x: '100%' }}
            animate={reducedMotion ? { opacity: 1 } : { x: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-charcoal-700/10 px-6 py-5">
              <Logo dark onClick={onClose} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center text-charcoal-600"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav
              className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-6 py-6"
              aria-label="Navigation mobile"
            >
              {projectConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="border-b border-charcoal-700/5 py-4 font-display text-2xl text-charcoal-700 transition-colors hover:text-forest-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/comparateur"
                onClick={onClose}
                className="border-b border-charcoal-700/5 py-4 font-display text-2xl text-charcoal-700 transition-colors hover:text-forest-700"
              >
                Comparateur
              </Link>
            </nav>
            <div className="shrink-0 border-t border-charcoal-700/10 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6">
              <Link to="/#contact" onClick={onClose} className="btn-primary w-full">
                Réserver une visite
              </Link>
              <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.12em] text-charcoal-400">
                {projectConfig.location}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
