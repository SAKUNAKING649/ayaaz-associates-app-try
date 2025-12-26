
import React from 'react';
// Corrected import to use INITIAL_PROPERTIES which is exported from constants.tsx
import { INITIAL_PROPERTIES } from '../constants';
import { Property } from '../types';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative h-64 overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-lg">
        {property.type}
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg">
        {property.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors">{property.title}</h3>
      <p className="text-slate-500 text-sm flex items-center gap-1 mb-4">
        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        {property.location}
      </p>
      <div className="flex items-center justify-between py-4 border-t border-slate-100">
        <div className="flex gap-4 text-xs font-medium text-slate-600">
          {property.beds > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              {property.beds} Beds
            </span>
          )}
          <span className="flex items-center gap-1">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" /></svg>
            {property.area}
          </span>
        </div>
        <div className="text-lg font-black text-red-700">{property.price}</div>
      </div>
      <button className="w-full mt-2 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
        View Details
      </button>
    </div>
  </div>
);

const FeaturedProperties: React.FC = () => {
  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black font-brand text-slate-900 mb-4">
              Featured <span className="text-red-700">Listings</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Explore our hand-picked selection of premium properties in Karachi. From luxury residential villas to high-yielding commercial spots.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 border-2 border-slate-200 rounded-full font-bold text-slate-600 hover:border-red-700 hover:text-red-700 transition-all">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Use INITIAL_PROPERTIES instead of MOCK_PROPERTIES */}
          {INITIAL_PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
