import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';
import { useRef } from 'react';

export const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const secondaryImgY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const labelX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="sobre" ref={sectionRef} className="py-60 bg-[#060606] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#C89B5A] rounded-full blur-[250px] opacity-[0.03]"></div>
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#16110C] rounded-full blur-[200px] opacity-30"></div>
      
      {/* Fine Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C89B5A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Editorial Image Composition (Left side) */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[800px]">
            {/* Main Image Frame */}
            <motion.div
               style={{ y: imgY }}
               className="absolute top-0 left-0 w-[90%] h-[90%] overflow-hidden gold-glow group"
            >
              <SafeImage 
                src={ASSETS.interior} 
                alt="KURB Interior Atmosphere" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                fallbackText="ATMOFERA KURB"
              />
              <div className="absolute inset-0 bg-[#060606]/30 group-hover:bg-transparent transition-colors duration-1000"></div>
              
              {/* Internal Label */}
              <div className="absolute bottom-12 left-12 p-8 glass-panel z-10 border-l-4 border-[#C89B5A]">
                <p className="text-[#FAF6EE] font-serif text-2xl mb-2 italic">"Onde a luz baixa encontra o ritmo urbano."</p>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C89B5A]">Porto, flores 124</span>
              </div>
            </motion.div>

            {/* Floating Secondary Image (The "Detail") */}
            <motion.div
              style={{ y: secondaryImgY }}
              className="absolute top-1/4 -right-8 md:-right-20 z-20 w-[60%] max-w-[340px] aspect-[4/5] border-[12px] border-[#060606] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden gold-glow"
            >
              <SafeImage 
                src={ASSETS.cocktail} 
                alt="Cocktail Detail" 
                className="w-full h-full object-cover"
                fallbackText="ARTISAN"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </motion.div>

            {/* Decorative Brackets & Motion Lines */}
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 0.15, x: 0 }}
               className="absolute -top-12 -left-12 text-[20rem] font-serif text-[#C89B5A] select-none leading-none pointer-events-none"
            >
              “
            </motion.div>
          </div>

          {/* Editorial Content (Right side) */}
          <div className="lg:col-span-5 relative">
            <div className="section-number opacity-[0.08] -left-16 -top-24 scale-150">01</div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-[1px] bg-[#C89B5A]"></div>
                  <span className="text-[#C89B5A] text-[13px] uppercase tracking-[0.7em] font-bold">Herança & Vanguarda</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-serif text-[#FAF6EE] leading-[0.95] tracking-tight"
                >
                  Uma narrativa gastronómica <br/> <i className="font-light opacity-60 italic text-4xl md:text-6xl">escrita com o fogo.</i>
                </motion.h2>
              </div>

              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="space-y-8"
              >
                <p className="text-[#FAF6EE]/70 leading-loose text-lg font-light tracking-wide first-letter:text-6xl first-letter:font-serif first-letter:text-[#C89B5A] first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                  No KURB, acreditamos que comer é um ato de presença. No coração pulsante do Porto, erguemos um santuário onde a tradição portuguesa é reinterpretada sob uma lente cosmopolita. Cada prato é um diálogo entre o produtor local e a técnica audaz, servido num ambiente onde o tempo parece curvar-se perante o prazer dos sentidos.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-y border-white/[0.05] relative overflow-hidden">
                  {/* Subtle background label moving with scroll */}
                  <motion.span style={{ x: labelX }} className="absolute inset-0 flex items-center justify-center text-7xl font-serif text-white/[0.02] uppercase pointer-events-none tracking-[1em]">
                    Presence
                  </motion.span>
                  
                  <div className="space-y-3 group cursor-default relative z-10">
                    <span className="text-[11px] text-[#C89B5A] uppercase tracking-[0.5em] font-bold block transition-all group-hover:translate-x-2">Luz & Sombra</span>
                    <p className="text-sm opacity-50 font-light leading-relaxed">Ambiente desenhado para conforto absoluto e privacidade.</p>
                  </div>
                  <div className="space-y-3 group cursor-default relative z-10">
                    <span className="text-[11px] text-[#C89B5A] uppercase tracking-[0.5em] font-bold block transition-all group-hover:translate-x-2">Fine Dining</span>
                    <p className="text-sm opacity-50 font-light leading-relaxed">Apresentação artística com ingredientes de proveniência local.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="pt-4"
              >
                <button className="inline-flex items-center gap-8 group">
                  <span className="text-[#E3C98A] text-[12px] uppercase tracking-[0.5em] font-bold transition-all group-hover:tracking-[0.7em]">Descobrir o nosso ADN</span>
                  <div className="relative w-16 h-[1px] bg-[#C89B5A] overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-[#FAF6EE] blur-[1px]"
                    ></motion.div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
