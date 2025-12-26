
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import VisitSection from './VisitSection';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import AIAssistant from './AIAssistant';
import { Property } from '../types';
import { LOGO, SOCIAL_LINKS, BRAND_COLORS } from '../constants';

interface CustomerPortalProps {
  properties: Property[];
  onPropertySelect: (id: string) => void;
}

const CustomerPortal: React.FC<CustomerPortalProps> = ({ properties, onPropertySelect }) => {
  return (
    <div className="relative animate-fade-in">
      <Navbar />
      <main>
        <Hero />
        
        {/* Real-time Listing Section */}
        <section id="properties" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-brand text-slate-900 mb-4">
                Available <span style={{ color: BRAND_COLORS.primary }}>Listings</span>
              </h2>
              <p className="text-slate-500 max-w-2xl">
                Explore verified properties directly managed by Ayaz Associates. Real-time updates on plots, houses, and commercial spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((prop) => (
                <div 
                  key={prop.id}
                  onClick={() => onPropertySelect(prop.id)}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={prop.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={prop.title}
                    />
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-xl">
                      {prop.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-red-700 font-black text-xl mb-1">{prop.price}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors">{prop.title}</h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                       <span className="flex items-center gap-1">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth={2}/></svg>
                         {prop.area}
                       </span>
                       <span className="flex items-center gap-1">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth={2}/></svg>
                         {prop.beds} Beds
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VisitSection />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div>{LOGO}</div>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#visit" className="hover:text-white transition-colors">Physical Visit</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href={SOCIAL_LINKS.facebook} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href={SOCIAL_LINKS.googleMaps} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </a>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} Ayaz Associates. All Rights Reserved. Built with Premium Standards.
      </div>
    </div>
  </footer>
);

export default CustomerPortal;
