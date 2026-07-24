import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '../../data/images';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { SmartImage } from '../ui/SmartImage';

export const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + galleryImages.length - 1) % galleryImages.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <section className="bg-ivory-100 py-20 md:py-28" aria-label="Galerie du programme">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Galerie"
          title={
            <>
              L'esprit <span className="italic text-forest-700">Azure Bouskoura</span>
            </>
          }
          description="Visuels d'ambiance non contractuels, illustrant l'atmosphère recherchée pour la résidence."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.label} delay={(i % 4) * 0.05} className={i % 5 === 0 ? 'col-span-2' : ''}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full text-left"
                aria-label={`Agrandir : ${img.label}`}
              >
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  aspect={i % 5 === 0 ? 'aspect-[16/9]' : 'aspect-square'}
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 bg-charcoal-900/60 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ivory-50 backdrop-blur-sm">
                  {img.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Visionneuse plein écran */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Visuel : ${galleryImages[openIndex].label}`}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-900/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fermer la visionneuse"
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center text-ivory-50/80 hover:text-ivory-50"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Visuel précédent"
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory-50/80 hover:text-ivory-50 md:left-6"
            >
              <ChevronLeft className="h-8 w-8" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Visuel suivant"
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory-50/80 hover:text-ivory-50 md:right-6"
            >
              <ChevronRight className="h-8 w-8" aria-hidden="true" />
            </button>

            <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <SmartImage
                src={galleryImages[openIndex].src}
                alt={galleryImages[openIndex].alt}
                aspect="aspect-[4/3] md:aspect-[16/10]"
                eager
              />
              <p className="mt-4 text-center text-[0.72rem] uppercase tracking-luxe text-ivory-100/70">
                {galleryImages[openIndex].label} — {openIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
