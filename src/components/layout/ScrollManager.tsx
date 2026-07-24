import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Gère le défilement lors des changements de route :
 * - ancre présente (#disponibilites…) → défilement vers la section ;
 * - sinon → retour en haut de page.
 */
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Laisse le temps à la page (chargée paresseusement) de se monter.
      const id = hash.slice(1);
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};
