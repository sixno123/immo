import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => (
  <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-24 text-center">
    <p className="eyebrow">Erreur 404</p>
    <h1 className="heading-display text-4xl">Cette page n'existe pas</h1>
    <p className="max-w-md text-sm leading-relaxed text-charcoal-500">
      La page que vous recherchez a peut-être été déplacée. Retournez à l'accueil pour découvrir
      la Résidence Azure Bouskoura.
    </p>
    <Link to="/" className="btn-primary">
      <Home className="h-4 w-4" aria-hidden="true" />
      Retour à l'accueil
    </Link>
  </div>
);

export default NotFoundPage;
