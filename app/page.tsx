// app/page.tsx
import Navbar from './_components/Navbar';
import HeroSection from './_components/HeroSection';
import ServicesSection from './_components/ServicesSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* The other sections would go here */}
    </main>
  );
}