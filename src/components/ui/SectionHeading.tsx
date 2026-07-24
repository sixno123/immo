import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) => (
  <Reveal
    className={`mb-12 max-w-2xl md:mb-16 ${
      align === 'center' ? 'mx-auto text-center' : 'text-left'
    }`}
  >
    <p className={`eyebrow mb-4 ${light ? 'text-bronze-300' : ''}`}>{eyebrow}</p>
    <h2
      className={`heading-display text-3xl sm:text-4xl md:text-[2.75rem] ${
        light ? 'text-ivory-50' : ''
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 text-[0.98rem] leading-relaxed ${
          light ? 'text-ivory-200/80' : 'text-charcoal-500'
        }`}
      >
        {description}
      </p>
    )}
  </Reveal>
);
