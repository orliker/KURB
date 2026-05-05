import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';
import { useRef } from 'react';

export const Ambience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const slowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const fastY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const verySlowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="galeria" ref={containerRef} className="py-60 bg-[#060606] overflow-hidden relative">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#C89B5A] rounded-full blur-[300px] opacity-[0.03]"></div>
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-number opacity-[0.08] text-[25rem] right-0 -top-40 pointer-events-none">04</div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-40 gap-16">
           <div className="max-w-3xl space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-[1px] bg-[#C89B5A]"></div>
                <span className="text-[#E3C98A] text-[13px] uppercase tracking-[0.8em] font-bold">A Atmosfera</span>
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-serif text-[#FAF6EE] leading-[0.9] tracking-tight">
                Um palco onde a <br/> <i className="font-light opacity-50 italic">alma se revela.</i>
              </h2>
           </div>
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="max-w-xs space-y-8 pt-10"
           >
              <p className="text-[#FAF6EE]/40 text-lg font-light leading-relaxed italic border-l border-[#C89B5A]/20 pl-8">
                Tons de âmbar, betão cru e veludos que absorvem o som. No KURB, a arquitetura é o ingrediente invisível.
              </p>
              <div className="flex gap-4">
                 <div className="w-2 h-2 rounded-full bg-[#C89B5A]/40"></div>
                 <div className="w-2 h-2 rounded-full bg-[#C89B5A]/20"></div>
                 <div className="w-2 h-2 rounded-full bg-[#C89B5A]/10"></div>
              </div>
           </motion.div>
        </div>

        {/* Cinematic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Main Cinematic Frame */}
          <div className="md:col-span-8 relative">
            <motion.div 
              style={{ y: verySlowY }}
              className="aspect-[16/10] relative overflow-hidden group gold-glow shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            >
               <SafeImage 
                 src={ASSETS.hero} 
                 alt="KURB Ambience Hall" 
                 className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                 fallbackText="VISTA GERAL"
               />
               <div className="absolute inset-0 bg-[#060606]/40 group-hover:bg-transparent transition-all duration-[1s]"></div>
               
               {/* Overlay Info */}
               <div className="absolute top-12 left-12 z-20 overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 1 }}
                    className="block text-[10px] uppercase tracking-[0.5em] text-[#E3C98A] font-bold"
                  >
                    Main Salon • 20:30
                  </motion.span>
               </div>
            </motion.div>
            
            {/* Superimposed Card */}
            <motion.div
              style={{ y: fastY }}
              className="absolute -bottom-20 -right-12 z-20 glass-panel p-12 md:p-16 max-w-sm hidden lg:block gold-glow border-t-8 border-[#C89B5A]"
            >
               <h4 className="text-[#FAF6EE] font-serif text-3xl mb-4 leading-tight italic">"Sinta o pulso urbano no conforto do luxo."</h4>
               <p className="text-[10px] uppercase tracking-[0.4em] text-[#C89B5A] font-black opacity-60">Direção Criativa 2024</p>
            </motion.div>
          </div>

          {/* Details Vertical Column */}
          <div className="md:col-span-4 space-y-24 pt-0 lg:pt-32">
             <motion.div 
               style={{ y: slowY }}
               className="aspect-[4/5] relative overflow-hidden gold-glow shadow-2xl"
             >
                <SafeImage 
                  src={ASSETS.interior} 
                  alt="KURB Architectural Detail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  fallbackText="CONCEITO"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent opacity-60"></div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="space-y-6 border-l luxury-border pl-12"
             >
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C89B5A] font-bold">Presença</span>
                <p className="text-[#FAF6EE]/50 font-light leading-relaxed text-sm">
                  Cada cadeira, cada reflexo no metal e cada textura na pedra foi escolhida para reforçar a nossa identidade imersiva.
                </p>
             </motion.div>
          </div>

          {/* Bottom Large Feature */}
          <div className="md:col-span-5 relative mt-0 lg:-mt-24">
             <motion.div 
               style={{ y: fastY }}
               className="aspect-[square] relative overflow-hidden group gold-glow"
             >
                <SafeImage 
                  src={ASSETS.risotto} 
                  alt="Gastronomy presentation" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  fallbackText="ARTE"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
             </motion.div>
          </div>

          <div className="md:col-span-7 mt-0 lg:mt-24">
             <motion.div 
               style={{ y: verySlowY }}
               className="aspect-[16/8] relative overflow-hidden gold-glow"
             >
                <SafeImage 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600" 
                  alt="Atmosphere Hall" 
                  className="w-full h-full object-cover"
                  fallbackText="KURB VIBE"
                />
                <div className="absolute inset-0 vignette pointer-events-none"></div>
                <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end">
                   <div className="w-12 h-[1px] bg-[#C89B5A] mb-4"></div>
                   <span className="text-[10px] tracking-[0.6em] text-[#FAF6EE] uppercase font-bold">Exclusividade Urbana</span>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Quotes in background */}
      <motion.div 
        style={{ y: slowY }}
        className="absolute left-10 top-1/2 -rotate-90 hidden 2xl:block"
      >
        <span className="text-9xl font-serif text-white/[0.02] uppercase tracking-[0.5em] whitespace-nowrap">AUTHENTIC PORTUGAL</span>
      </motion.div>
    </section>
  );
};
