import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedMenu = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / (clientWidth * 0.85)); // 0.85 is the w-[85vw] approx
        setActiveIndex(index);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll);
      return () => scrollEl.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contactos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dishes = [
    {
      title: "Risotto de Cogumelos e Trufa Branca",
      desc: "Uma base cremosa de arroz carnaroli, fundida com a intensidade dos cogumelos silvestres e o perfume inconfundível da trufa branca de Alba.",
      tag: "Exclusivo",
      img: ASSETS.risotto,
      fallback: "Risotto & Trufa",
      price: "32€"
    },
    {
      title: "Garoupa da Costa ao Sal de Citrinos",
      desc: "Capturada nas águas profundas, servida com uma emulsão leve de citrinos e ervas aromáticas da nossa horta urbana.",
      tag: "Destaque",
      img: ASSETS.gourmet,
      fallback: "Prato KURB",
      price: "38€"
    },
    {
      title: "Magret de Pato com Redução de Vinho do Porto",
      desc: "Pele estaladiça, interior rosado e suculento, acompanhado por uma redução artesanal de Tawny e puré de raiz de aipo.",
      tag: "Clássico",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
      fallback: "Pato Gourmet",
      price: "34€"
    },
    {
      title: "Filete de Wagyu com Chimichurri de Autor",
      desc: "Corte premium de marmoreio excepcional, selado a alta temperatura para preservar a suculência, finalizado com ervas frescas.",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000",
      fallback: "Wagyu Beef",
      price: "52€"
    },
    {
      title: "Lulinhas da Ria com Espuma de Mar",
      desc: "Textura delicada e explosão marinha, servidas sobre uma cama de salicórnia e finalizadas com uma espuma leve de plâncton.",
      tag: "Sazonal",
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?auto=format&fit=crop&q=80&w=1000",
      fallback: "Lulinhas",
      price: "29€"
    },
    {
      title: "Texturas de Chocolate & Avelã",
      desc: "Uma sinfonia de diferentes densidades de chocolate negro 70%, crumble de avelã tostada e gelado de fava tonka.",
      tag: "Sobremesa",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1000",
      fallback: "Sobremesa",
      price: "14€"
    }
  ];

  return (
    <section id="menu" className="py-60 bg-[#060606] relative overflow-hidden">
      {/* Background Section Number */}
      <div className="section-number opacity-[0.06] text-[30rem] left-1/2 -translate-x-1/2 -top-40 pointer-events-none">02</div>
      
      {/* Subtle Background Halos */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C89B5A]/5 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#16110C] rounded-full blur-[150px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C89B5A] to-transparent mx-auto"
          ></motion.div>
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
            transition={{ duration: 1.5 }}
            className="text-[#E3C98A] text-[13px] uppercase block font-bold"
          >
            A Gastronomia
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-serif text-[#FAF6EE] tracking-tight"
          >
            Menu de Assinatura
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#FAF6EE]/40 text-lg font-light italic"
          >
            "Uma composição sensorial onde o solo, o mar e a alma cosmopolita se fundem em harmonia."
          </motion.p>
        </div>

        <div className="relative group/menu">
          {/* Mobile Carousel / Desktop Grid */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible gap-8 md:gap-12 lg:gap-x-12 lg:gap-y-24 pb-12 lg:pb-0"
          >
            {dishes.map((dish, i) => (
              <motion.div
                key={dish.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-auto group flex flex-col h-full bg-[#0B0B0B] border border-white/5 transition-all duration-[1s] overflow-hidden hover:bg-[#16110C] gold-glow relative"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C89B5A]/20 transition-all duration-700 group-hover:border-[#C89B5A]/60"></div>
                
                <div className="aspect-[4/5] relative overflow-hidden flex-shrink-0">
                  <SafeImage 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out object-cover"
                    fallbackText={dish.fallback}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent z-10"></div>
                  <div className="absolute top-8 right-8 z-20">
                     <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="bg-[#C89B5A] text-[#060606] text-[10px] uppercase tracking-[0.3em] font-black px-6 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                     >
                       {dish.tag}
                     </motion.div>
                  </div>
                </div>
  
                <div className="p-8 lg:p-12 flex flex-col flex-1 space-y-6 lg:space-y-8 relative z-20 -mt-16 lg:-mt-20 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B] to-transparent">
                  <div className="flex flex-col gap-2">
                     <h3 className="text-2xl lg:text-3xl font-serif text-[#FAF6EE] group-hover:text-[#E3C98A] transition-all duration-700 leading-[1] tracking-tight">
                       {dish.title}
                     </h3>
                     <span className="text-[#C89B5A] font-serif text-xl lg:text-2xl">{dish.price}</span>
                  </div>
                  
                  <p className="text-[#F3E9D2]/40 font-light text-sm lg:text-base leading-relaxed italic border-l-2 border-[#C89B5A]/10 pl-6 transition-all duration-700 group-hover:border-[#C89B5A] group-hover:text-[#F3E9D2]/70">
                    {dish.desc}
                  </p>
  
                  <div className="mt-auto pt-8 lg:pt-10 border-t border-white/5 flex justify-between items-center">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] tracking-[0.4em] text-[#FAF6EE]/30 uppercase font-black">Alta Gastronomia</span>
                        <span className="text-[9px] text-[#C89B5A]/50 italic">Chef Selection</span>
                     </div>
                     <motion.button 
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 text-[10px] tracking-[0.3em] text-[#FAF6EE]/40 hover:text-[#FAF6EE] uppercase transition-all font-bold"
                     >
                      Ver Detalhe
                      <div className="w-8 h-[1px] bg-[#C89B5A]/30"></div>
                     </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls for Mobile */}
          <div className="flex justify-between items-center mt-12 lg:hidden px-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C89B5A] active:scale-95 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {dishes.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    if (scrollRef.current) {
                      const clientWidth = scrollRef.current.clientWidth;
                      scrollRef.current.scrollTo({ 
                        left: i * (clientWidth * 0.85), 
                        behavior: 'smooth' 
                      });
                    }
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === i ? 'bg-[#C89B5A] w-4' : 'bg-[#C89B5A]/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C89B5A] active:scale-95 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-32 text-center"
        >
           <button 
             onClick={scrollToContact}
             className="btn-premium group"
           >
             <span className="relative z-10">Explorar Menu Completo</span>
             <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              className="absolute inset-0 bg-[#FAF6EE]/10 transition-transform duration-700"
             ></motion.div>
           </button>
           <p className="mt-8 text-[10px] uppercase tracking-[0.6em] text-[#FAF6EE]/20 font-bold">Reserva recomendada com antecedência</p>
        </motion.div>
      </div>
    </section>
  );
};
