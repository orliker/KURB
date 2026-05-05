import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Refined Parallax and Motion
  const yParallax = useTransform(scrollY, [0, 1000], [0, 400]);
  const scaleHero = useTransform(scrollY, [0, 1000], [1.1, 1.3]);
  const opacityFade = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[110vh] flex items-center justify-start overflow-hidden bg-[#060606]">
      {/* Background with Slow Zoom & Parallax */}
      <motion.div 
        style={{ y: yParallax, scale: scaleHero, opacity: opacityFade }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0 origin-center"
      >
        <SafeImage 
          src={ASSETS.hero} 
          alt="KURB Cinematic" 
          className="w-full h-full object-cover"
          fallbackText="KURB PORTUGAL"
        />
        {/* Atmosphere Glow */}
        <div className="absolute inset-0 bg-[#C89B5A]/5 mix-blend-overlay"></div>
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/30 to-transparent z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606]/20 to-[#060606] z-[1]"></div>
      <div className="absolute inset-0 vignette pointer-events-none z-[1]"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 md:px-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="flex items-center gap-6 mb-16"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-[1px] bg-[#C89B5A]"
            ></motion.div>
            <span className="text-[#C89B5A] text-[12px] md:text-[14px] uppercase tracking-[0.8em] font-bold">Porto • Portugal</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-[180px] font-serif text-[#FAF6EE] mb-8 md:mb-12 leading-[0.8] tracking-tighter relative">
              <motion.span 
                initial={{ filter: "blur(20px)", y: 100, opacity: 0 }}
                animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                KURB
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.8 }}
                transition={{ delay: 0.6, duration: 2.5 }}
                className="block text-2xl sm:text-3xl md:text-8xl font-light italic mt-4 md:mt-8 text-[#E3C98A] tracking-normal"
              >
                Cozinha de Herança
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2, duration: 1.5 }}
             className="relative pl-0 md:pl-4"
          >
            <p className="max-w-xl text-base md:text-2xl text-[#F3E9D2]/70 leading-relaxed mb-12 md:mb-20 font-light tracking-wide italic">
              "Onde o pulso da cidade encontra a alma do terroir. Uma experiência desenhada para transcender o prato."
            </p>
            {/* Fine decorative vertical line moved for better weight */}
            <div className="absolute -left-12 top-0 bottom-24 w-[1px] bg-gradient-to-b from-[#C89B5A] to-transparent opacity-40 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-10"
          >
            <button className="btn-premium w-full sm:w-auto px-16 py-6 text-sm">
              Descubrir o Menu
            </button>
            <button className="btn-outline-premium w-full sm:w-auto px-16 py-6 text-sm overflow-hidden group">
              <span className="relative z-10">A Nossa Essência</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C89B5A]/20 to-transparent hidden lg:block origin-top"
      >
        <motion.div 
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-32 bg-[#C89B5A] -ml-[1.5px] rounded-full blur-[2px] opacity-60"
        ></motion.div>
      </motion.div>

      {/* Floating Section Labels */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute right-12 bottom-24 hidden xl:flex flex-col items-end gap-2 text-[10px] uppercase tracking-[0.6em] text-[#C89B5A]/40 font-bold"
      >
        <span>Excellence</span>
        <span>Atmosphere</span>
        <div className="w-12 h-[1px] bg-[#C89B5A]/20 mt-2"></div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <motion.span 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[9px] uppercase tracking-[0.6em] text-[#C89B5A] font-bold"
        >
          Explore
        </motion.span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#C89B5A] to-transparent relative">
          <motion.div 
            animate={{ y: [0, 80, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-8 bg-[#FAF6EE] blur-[1px]"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};
