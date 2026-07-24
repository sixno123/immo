import { projectConfig } from '../config/project';

/** Construit un lien WhatsApp avec message pré-rempli en français. */
export const buildWhatsAppLink = (apartmentReference?: string): string => {
  const base = `Bonjour, je souhaite obtenir plus d'informations sur la ${projectConfig.name}.`;
  const message = apartmentReference
    ? `${base} Je suis particulièrement intéressé(e) par le lot ${apartmentReference}.`
    : base;
  return `https://wa.me/${projectConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
