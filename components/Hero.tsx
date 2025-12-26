
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SOCIAL_LINKS, BRAND_COLORS } from '../constants';
import RotatingText from './RotatingText';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const bgX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const bgY = useTransform(mouseY, [-500, 500], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.centerY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden cursor-default bg-[#0A0A0B]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="absolute inset-0 z-0 scale-105"
        style={{ x: bgX, y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Real Estate Karachi"
          className="w-full h-full object-cover opacity-25 grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/20 border border-red-800/30 text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Premier Estate Consultant Karachi
          </motion.div>
          
          {/* Use a min-height for the header container to prevent jumps */}
          <h1 className="text-6xl md:text-8xl font-black font-brand leading-[1.05] mb-10 tracking-tight min-h-[3.2em] md:min-h-[3.2em]">
            Finding Your <br />
            <span className="inline-block" style={{ color: BRAND_COLORS.secondary }}>
              <RotatingText 
                texts={['Dream Space', 'Perfect Home', 'Best Investment', 'Secure Future']}
                staggerDuration={0.015}
                rotationInterval={2200}
                animatePresenceMode="wait"
                mainClassName="overflow-hidden"
              />
            </span> <br />
            in Scheme 33
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 mb-14 max-w-lg leading-relaxed font-light"
          >
            A legacy of trust in Karachi's real estate. Ayaz Associates delivers verified property files and strategic investment consultancy.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#9B1C1C' }}
              whileTap={{ scale: 0.95 }}
              href="#visit"
              className="text-white px-12 py-5 rounded-2xl font-black text-center transition-all shadow-[0_20px_60px_rgba(125,17,14,0.4)] flex items-center justify-center gap-3 text-lg"
              style={{ backgroundColor: BRAND_COLORS.primary }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Visit Our Office
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 text-lg"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Follow Us
            </motion.a>
          </div>
          
          <div className="flex items-center gap-10 md:gap-16 pt-10 border-t border-white/10">
            <motion.div 
              custom={0}
              variants={statItemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <span className="text-5xl font-black text-white" style={{ color: BRAND_COLORS.secondary }}>150+</span>
              <span className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2 block">Successful Closings</span>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '48px', opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-[2px] bg-gradient-to-b from-transparent via-red-900/60 to-transparent" 
            />

            <motion.div 
              custom={1}
              variants={statItemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <span className="text-5xl font-black text-white" style={{ color: BRAND_COLORS.secondary }}>12+</span>
              <span className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2 block">Years of Excellence</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
