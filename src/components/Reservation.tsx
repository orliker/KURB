import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contactos" className="py-60 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C89B5A] rounded-full blur-[200px] opacity-[0.03]"></div>
      <div className="section-number opacity-[0.04] text-[30rem] -left-20 -top-40 pointer-events-none">05</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#C89B5A] text-[11px] uppercase tracking-[0.6em] font-bold">Reserva</span>
              <div className="w-12 h-[1px] bg-[#C89B5A]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#FAF6EE] max-w-4xl leading-[1.1]">
              Sinta o pulso da cidade <br/> <i className="font-light opacity-60 italic">à sua mesa.</i>
            </h2>
          </motion.div>

          <div className="lg:col-span-5 space-y-12">
            <p className="text-[#FAF6EE]/60 text-lg font-light leading-relaxed max-w-md italic border-l border-[#C89B5A]/20 pl-6">
              Escolha o momento e prepare-se para uma experiência onde o sabor urbano encontra o detalhe absoluto.
            </p>
            
            <div className="space-y-10 pt-10">
               <div className="group cursor-default">
                  <h4 className="text-[#C89B5A] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold opacity-60 group-hover:opacity-100 transition-opacity">Localização</h4>
                  <p className="text-[#FAF6EE] font-serif text-2xl group-hover:text-[#C89B5A] transition-colors tracking-wide">Rua das Flores, 124<br/>Porto, Portugal</p>
               </div>
               <div className="group cursor-default">
                  <h4 className="text-[#C89B5A] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold opacity-60 group-hover:opacity-100 transition-opacity">Contactos</h4>
                  <p className="text-[#FAF6EE] font-serif text-2xl group-hover:text-[#C89B5A] transition-colors tracking-wide">+351 220 000 000</p>
                  <p className="text-[#FAF6EE] font-serif text-lg opacity-40 mt-2">hello@kurb.pt</p>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#16110C] p-10 md:p-16 border border-white/[0.03] gold-glow relative"
          >
            {/* Corner Accent */}
            <div className="absolute -top-1 -right-1 w-12 h-12 border-t border-r border-[#C89B5A]"></div>
            
            <div className="flex justify-between items-center mb-16 pb-6 border-b border-white/5">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FAF6EE]/40">Intenção de Reserva</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C89B5A] animate-pulse"></div>
                <span className="text-[#C89B5A] text-[10px] font-bold tracking-widest">DISPONIBILIDADE: HOJE</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C89B5A] flex items-center justify-center mx-auto mb-8">
                     <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ delay: 0.2, type: "spring" }}
                       className="w-8 h-8 bg-[#C89B5A] rounded-full"
                     ></motion.div>
                  </div>
                  <h3 className="text-[#FAF6EE] font-serif text-3xl italic">Pre-reserva recebida</h3>
                  <p className="text-[#FAF6EE]/40 text-sm tracking-widest uppercase">Entraremos em contacto em breve.</p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.5em] text-[#C89B5A] font-bold mb-4 block">O Vosso Nome</label>
                      <input required type="text" placeholder="JOÃO SILVA" className="w-full bg-transparent border-b border-white/10 py-3 text-[#FAF6EE] text-[13px] outline-none group-focus-within:border-[#C89B5A] transition-all placeholder:opacity-20" />
                    </div>
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.5em] text-[#C89B5A] font-bold mb-4 block">Nº de Lugares</label>
                      <select className="w-full bg-transparent border-b border-white/10 py-3 text-[#FAF6EE] text-[13px] outline-none group-focus-within:border-[#C89B5A] transition-all cursor-pointer appearance-none">
                         {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-[#060606]">{n} {n===1?'LUGAR':'LUGARES'}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="pt-12 flex flex-col sm:flex-row gap-6">
                     <button type="submit" className="flex-1 btn-premium">
                       Confirmar Mesa
                     </button>
                     <button type="button" className="flex-1 btn-outline-premium !px-4">
                       WhatsApp
                     </button>
                  </div>
                  <p className="text-center text-[9px] uppercase tracking-[0.3em] text-[#FAF6EE]/20 mt-8">As reservas são confirmadas via contacto direto.</p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
