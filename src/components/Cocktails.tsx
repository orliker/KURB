import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';
import { useRef } from 'react';

export const Cocktails = () => {
  const scrollRef = useRef(null);
  const cocktailHighlights = [
    { name: "Kurb Negroni", desc: "Gin de autor, vermute premium e infusão de carvalho queimado.", highlight: "Deep & Woody" },
    { name: "Citrus Highball", desc: "Notas frescas de Yuzu e pimenta rosa selecionada na costa.", highlight: "Zesty & Crisp" },
    { name: "Golden Smoke", desc: "Bourbon envelhecido, mel trufado e fumo de canela viva.", highlight: "Warm & Bold" }
  ];

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const floatY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={scrollRef} className="py-60 bg-[#060606] relative overflow-hidden">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#C89B5A] rounded-full blur-[300px] opacity-[0.08]"></div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C89B5A]/10 to-transparent hidden xl:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32 xl:gap-48">
          
          <div className="flex-1 space-y-16 order-2 lg:order-1">
             <div className="section-number opacity-[0.1] -translate-x-12">03</div>
             
             <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <span className="text-[#E3C98A] text-[13px] uppercase tracking-[0.8em] font-bold">Mixologia de Autor</span>
                  <div className="h-[1px] w-20 bg-gradient-to-r from-[#C89B5A] to-transparent"></div>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-5xl md:text-8xl font-serif text-[#FAF6EE] leading-[0.9] tracking-tight"
                >
                  Alquimia que <br/> <i className="font-light opacity-50 italic">desperta a noite.</i>
                </motion.h2>
             </div>
             
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="text-[#FAF6EE]/60 text-xl font-light leading-loose italic max-w-xl"
             >
                Bebidas autorais, luz baixa e detalhes sensoriais pensados para acompanhar cada momento. A nossa carta de mixologia foi desenhada para harmonizar com a intensidade cosmopolita do KURB.
             </motion.p>

             <div className="space-y-12 pt-8">
                {cocktailHighlights.map((cocktail, i) => (
                  <motion.div 
                    key={cocktail.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-default transition-all hover:translate-x-4"
                  >
                    <span className="text-3xl font-serif text-[#C89B5A] opacity-20 group-hover:opacity-100 transition-all duration-700">0{i+1}</span>
                    <div className="flex-1 space-y-2">
                       <div className="flex items-center gap-4">
                          <h4 className="text-[#FAF6EE] font-serif text-3xl group-hover:text-[#E3C98A] transition-colors">{cocktail.name}</h4>
                          <span className="text-[10px] text-[#C89B5A] border border-[#C89B5A]/30 px-3 py-1 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{cocktail.highlight}</span>
                       </div>
                       <p className="text-sm text-[#FAF6EE]/40 font-light tracking-wide">{cocktail.desc}</p>
                    </div>
                  </motion.div>
                ))}
             </div>

             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="pt-10"
             >
                <button className="btn-outline-premium group relative">
                   <span className="relative z-10">Descobrir a Carta de Cocktails</span>
                   <motion.div 
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-[#C89B5A] transition-all duration-700"
                   ></motion.div>
                </button>
             </motion.div>
          </div>

          <div className="flex-1 order-1 lg:order-2 w-full">
             <div className="relative aspect-[3/4] max-w-xl mx-auto">
                {/* Main Protagonist Image with Parallax Scale */}
                <motion.div
                  style={{ scale: imgScale }}
                  className="relative h-full w-full overflow-hidden gold-glow shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
                >
                  <SafeImage 
                    src={ASSETS.cocktail} 
                    alt="KURB Mixology Craft" 
                    className="w-full h-full object-cover"
                    fallbackText="CINEMATIC MIXOLOGY"
                  />
                  {/* Subtle Light Reflection Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#060606] to-transparent opacity-80 z-10"></div>
                </motion.div>
                
                {/* Floating Info Card */}
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  style={{ y: floatY }}
                  className="absolute -right-8 md:-right-16 top-1/3 z-20 glass-panel p-10 md:p-14 max-w-[280px] border-t-4 border-[#C89B5A]"
                >
                  <h5 className="text-[#FAF6EE] font-serif text-2xl mb-4 italic">"O segredo está no fumo."</h5>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#C89B5A] font-bold">Mixologia de Fumo • 2024</p>
                </motion.div>

                {/* Decorative Frame Elements */}
                <div className="absolute inset-0 border border-[#C89B5A]/20 -z-10 translate-x-8 translate-y-8 pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
