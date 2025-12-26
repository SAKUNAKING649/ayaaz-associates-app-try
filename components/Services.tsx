
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_COLORS } from '../constants';

const SERVICE_LIST = [
  {
    title: 'Investment Advisory',
    desc: 'Expert guidance on high-yield real estate investments in Scheme 33 and growing sectors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    desc: 'Worry-free management for overseas and local landlords. Maintenance, leasing, and vetting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Buying & Selling',
    desc: 'Streamlined transaction process with verified documentation and legal support for all parties.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-brand text-slate-900 mb-4">Our Professional <span style={{ color: BRAND_COLORS.primary }}>Expertise</span></h2>
          <p className="text-slate-500">Tailored solutions for every real estate need. We don't just sell property; we build lifelong partnerships.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_LIST.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-all group-hover:scale-150" style={{ backgroundColor: `${BRAND_COLORS.primary}0D` }}></div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-12" style={{ backgroundColor: `${BRAND_COLORS.primary}1A`, color: BRAND_COLORS.primary }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="font-bold flex items-center gap-2 group-hover:gap-4 transition-all" style={{ color: BRAND_COLORS.primary }}>
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
