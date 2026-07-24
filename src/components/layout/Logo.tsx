import { Link } from 'react-router-dom';

export const Logo = ({ dark, onClick }: { dark: boolean; onClick?: () => void }) => (
  <Link
    to="/"
    onClick={onClick}
    className="group flex flex-col leading-none"
    aria-label="Retour à l'accueil"
  >
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
