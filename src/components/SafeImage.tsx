import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const SafeImage = ({ src, alt, className = "", fallbackText }: SafeImageProps) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-[#0B0B0B] border border-[#C89B5A]/10 relative overflow-hidden group ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#16110C] via-transparent to-[#060606]"></div>
        <div className="z-10 text-center px-4 relative">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C89B5A] font-serif text-lg md:text-xl block mb-3 uppercase tracking-[0.3em]"
          >
            {fallbackText || 'KURB Experience'}
          </motion.span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C89B5A]/60 to-transparent mx-auto"></div>
          <span className="text-[8px] uppercase tracking-[0.5em] text-[#C89B5A]/30 mt-4 block">Premium Gastronomy</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0B0B0B] z-10 flex items-center justify-center"
          >
             <div className="w-8 h-8 border-t-2 border-[#C89B5A] rounded-full animate-spin"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
