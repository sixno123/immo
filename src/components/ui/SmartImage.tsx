import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Ratio d'aspect réservé pour éviter tout décalage de mise en page. */
  aspect?: string;
  eager?: boolean;
  sizes?: string;
  /** Applique un calque de tonalité chaude, pour homogénéiser les visuels d'architecture. */
  tone?: boolean;
}

/**
 * Image avec chargement paresseux, ratio réservé (aucun layout shift),
 * traitement de tonalité optionnel et repli élégant si le visuel distant
 * est indisponible.
 */
export const SmartImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  eager = false,
  sizes,
  tone = false,
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-forest-100 ${aspect} ${className} ${
        tone && !failed ? 'img-tone' : ''
      }`}
    >
      {failed ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(120%_120%_at_30%_0%,theme(colors.forest.100),theme(colors.ivory.200)_55%,theme(colors.bronze.100))]"
          role="img"
          aria-label={alt}
        >
          <svg viewBox="0 0 64 64" className="h-11 w-11 text-forest-400/80" aria-hidden="true">
            <path d="M20 46V26l12-9 12 9v20h-8V32h-8v14z" fill="currentColor" />
          </svg>
          <span className="mx-auto h-px w-8 bg-bronze-400/60" aria-hidden="true" />
          <span className="px-6 text-center text-[0.6rem] uppercase tracking-luxe text-forest-500">
            Résidence Azure Bouskoura
          </span>
        </div>
      ) : (
        <>
          {/* Placeholder d'ambiance affiché pendant le chargement (évite un aplat gris) */}
          <div
            className={`absolute inset-0 bg-[linear-gradient(120deg,theme(colors.forest.100),theme(colors.ivory.200))] transition-opacity duration-700 ${
              loaded ? 'opacity-0' : 'opacity-100'
            }`}
            aria-hidden="true"
          />
          <img
            src={src}
            alt={alt}
            sizes={sizes}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } ${imgClassName}`}
          />
        </>
      )}
    </div>
  );
};
