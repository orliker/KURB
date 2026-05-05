import { ASSETS } from '../constants';
import { SafeImage } from './SafeImage';

export const Footer = () => {
  return (
    <footer className="bg-[#060606] py-16 luxury-border border-t relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B5A]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-[#FAF6EE]/60">
          <div className="flex flex-col items-center md:items-start gap-4">
             <span className="text-2xl font-serif tracking-[0.4em] text-[#FAF6EE] opacity-100">KURB</span>
             <p className="opacity-40 italic">Porto • Portugal</p>
          </div>

          <div className="flex gap-10">
            {['Instagram', 'Facebook', 'TripAdvisor'].map(social => (
              <a key={social} href="#" className="hover:text-[#C89B5A] transition-colors border-b border-transparent hover:border-[#C89B5A]/20 pb-1">{social}</a>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-right">
             <div className="flex items-center gap-2">
               <span className="opacity-40">Design by AstroNexo Studio</span>
               <div className="w-1 h-1 bg-[#C89B5A] rounded-full"></div>
               <span className="opacity-100 text-[#C89B5A]">KURB {new Date().getFullYear()}</span>
             </div>
             <p className="text-[8px] opacity-20">Terms • Privacy • Cookie Policy</p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/[0.03] text-center">
            <p className="text-[10px] tracking-[1em] text-[#FAF6EE]/10 uppercase">Fine Dining Collection</p>
        </div>
      </div>
    </footer>
  );
};
