// app/_components/ServicesSection.tsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  { num: '01', title: 'UI/UX Design', desc: 'Create user-friendly interfaces that are easy to use.' },
  { num: '02', title: 'Web Development', desc: 'Build fast and responsive websites with modern tech.' },
  { num: '03', title: 'App Development', desc: 'Design and develop mobile apps for iOS and Android.' },
];

const ServiceCard = ({ num, title, desc }: { num: string; title: string; desc: string; }) => (
  <div className="border-b border-gray-200 py-8 flex justify-between items-start gap-4">
    <div className="flex items-start gap-4 md:gap-8">
      <p className="text-xl font-bold text-gray-400">{num}</p>
      <div>
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
    <button className="text-brand-dark">
      <FiArrowRight size={24} />
    </button>
  </div>
);

const ServicesSection = () => {
  return (
    // This section has the light background
    <section className="bg-brand-light pt-20 pb-20 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <p className="text-brand-accent font-semibold tracking-widest text-center">MY SERVICES</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-brand-dark text-center">
          What I do
        </h2>

        {/* Services List */}
        <div className="mt-12">
          {services.map((service) => (
            <ServiceCard key={service.num} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;