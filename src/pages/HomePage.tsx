import { Hero } from '../components/home/Hero';
import { ProjectPresentation } from '../components/home/ProjectPresentation';
import { Stats } from '../components/home/Stats';
import { Amenities } from '../components/home/Amenities';
import { Gallery } from '../components/home/Gallery';
import { BuildingSelector } from '../components/home/BuildingSelector';
import { Availability } from '../components/home/Availability';
import { FinancingSimulator } from '../components/home/FinancingSimulator';
import { LocationSection } from '../components/home/LocationSection';
import { BrochureCTA } from '../components/home/BrochureCTA';
import { BookingForm } from '../components/home/BookingForm';

const HomePage = () => (
  <>
    <Hero />
    <ProjectPresentation />
    <Stats />
    <Amenities />
    <Gallery />
    <BuildingSelector />
    <Availability />
    <FinancingSimulator />
    <LocationSection />
    <BrochureCTA />
    <BookingForm />
  </>
);

export default HomePage;
