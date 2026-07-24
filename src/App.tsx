import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ComparatorProvider } from './hooks/useComparator';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { ScrollManager } from './components/layout/ScrollManager';
import { ComparatorBar } from './components/apartment/ComparatorBar';
import HomePage from './pages/HomePage';

const ApartmentPage = lazy(() => import('./pages/ApartmentPage'));
const ComparatorPage = lazy(() => import('./pages/ComparatorPage'));
const BrochurePage = lazy(() => import('./pages/BrochurePage'));
const AdminDemoPage = lazy(() => import('./pages/AdminDemoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
    <span className="eyebrow animate-pulse">Chargement…</span>
  </div>
);

const Shell = () => {
  const { pathname } = useLocation();
  const isBrochure = pathname === '/brochure';

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      {!isBrochure && <Navbar />}
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appartements/:id" element={<ApartmentPage />} />
            <Route path="/comparateur" element={<ComparatorPage />} />
            <Route path="/brochure" element={<BrochurePage />} />
            <Route path="/admin-demo" element={<AdminDemoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isBrochure && (
        <>
          <ComparatorBar />
          <WhatsAppFloat />
          <Footer />
        </>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ComparatorProvider>
      <Shell />
    </ComparatorProvider>
  </BrowserRouter>
);

export default App;
