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
}

/**
 * Image avec chargement paresseux, ratio réservé (aucun layout shift)
 * et repli élégant si le visuel distant est indisponible.
 */
export const SmartImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  eager = false,
  sizes,
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-forest-100 ${aspect} ${className}`}>
      {failed ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest-100 via-ivory-200 to-bronze-100"
          role="img"
          aria-label={alt}
        >
          <svg viewBox="0 0 64 64" className="h-12 w-12 text-forest-400" aria-hidden="true">
            <path d="M20 46V26l12-9 12 9v20h-8V32h-8v14z" fill="currentColor" />
          </svg>
          <span className="px-6 text-center text-[0.65rem] uppercase tracking-luxe text-forest-500">
            Résidence Azure Bouskoura
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
};
