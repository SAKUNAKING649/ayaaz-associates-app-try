
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, BRAND_COLORS } from '../constants';

const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center relative z-10 shadow-2xl border border-white/5"
        >
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-black font-brand mb-6 leading-tight">
              Why Visit <span style={{ color: BRAND_COLORS.secondary }}>Ayaz Associates</span> In Person?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Real estate in Karachi moves faster than websites. By visiting our office at Sania Corner, you get immediate access to:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "100% Verified Plot & Residential Files",
                "Direct meetings with sellers/investors",
                "Legal documentation vetting on-site",
                "Real-time market price evaluation"
              ].map((text, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-900/20 text-red-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-200 font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.googleMaps} 
                target="_blank"
                className="px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-lg"
              >
                Open Google Maps
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, borderColor: BRAND_COLORS.secondary, color: BRAND_COLORS.secondary }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.facebook} 
                target="_blank"
                className="px-8 py-4 border-2 border-white/10 text-white font-black rounded-2xl transition-all"
              >
                Official Facebook Page
              </motion.a>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-square bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="Ayaz Associates Consultation Area"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl text-slate-900 shadow-2xl transform transition-transform group-hover:scale-105">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: BRAND_COLORS.primary }}>Visit Us Today</p>
                  <p className="text-2xl font-black font-brand">Shop 10-11, Sania Corner</p>
                  <p className="text-slate-600 mt-2 text-sm">Gulzar-e-Hijri, Scheme 33, Karachi</p>
                </div>
              </div>
            </div>
            <motion.div 
              animate={{ rotate: [12, 15, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10 shadow-xl"
              style={{ backgroundColor: BRAND_COLORS.primary }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitSection;
