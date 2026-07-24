import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { useComparator } from '../../hooks/useComparator';

/** Bouton WhatsApp flottant, accessible et visible sur tout le parcours. */
export const WhatsAppFloat = () => {
  const { ids } = useComparator();
  const { pathname } = useLocation();

  // Remonte le bouton lorsque la barre du comparateur est affichée.
  const lifted = ids.length > 0 && pathname !== '/comparateur';

  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 md:right-7 ${
        lifted ? 'bottom-24 md:bottom-28' : 'bottom-5 md:bottom-7'
      }`}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};
