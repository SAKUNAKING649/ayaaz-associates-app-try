
import React from 'react';
import { motion } from 'framer-motion';
import { LOGO } from '../../constants';

const SplashScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0A0A0B] flex flex-center items-center justify-center z-[999]"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="scale-150 mb-8 filter brightness-0 invert"
        >
          {LOGO}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-red-700 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-red-700 font-bold uppercase tracking-[0.4em] text-[10px] mt-6"
        >
          Karachi's Premier Agency
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
