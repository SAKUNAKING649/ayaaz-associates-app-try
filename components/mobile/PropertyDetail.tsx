
import React from 'react';
import { motion } from 'framer-motion';
import { Property } from '../../types';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col"
    >
      <div className="relative h-2/5 shrink-0">
        <img src={property.image} className="w-full h-full object-cover" alt={property.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button 
          onClick={onClose}
          className="absolute top-12 left-6 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={3}/></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-t-[3rem] -mt-12 p-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{property.type}</span>
            <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{property.category}</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">{property.title}</h1>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {property.location}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
           <div className="text-center">
             <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Area</p>
             <p className="font-black text-slate-900">{property.area}</p>
           </div>
           <div className="text-center border-x border-slate-100">
             <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Beds</p>
             <p className="font-black text-slate-900">{property.beds}</p>
           </div>
           <div className="text-center">
             <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Baths</p>
             <p className="font-black text-slate-900">{property.baths}</p>
           </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Property Details</h3>
          <p className="text-slate-500 leading-relaxed text-sm">
            {property.description}
          </p>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-8 text-center text-white space-y-4">
           <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Asking Price</p>
           <p className="text-4xl font-black text-red-600">{property.price}</p>
           <div className="pt-4 grid grid-cols-2 gap-4">
              <button className="bg-red-700 py-4 rounded-2xl font-black shadow-lg">WhatsApp</button>
              <button className="bg-white text-slate-900 py-4 rounded-2xl font-black">Call Agent</button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetail;
